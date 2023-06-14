import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    const { name, instructor, instructorEmail, availableSeats, price } = data;

                    const newClass = { name, instructor, instructorEmail, availableSeats: parseInt(availableSeats), price: parseFloat(price), image: imgURL }
                    console.log(newClass);

                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            console.log("after posting new class", data.data);
                            if(data.data.insertedId){
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: "New Class Added!",
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };

    return (
        <div className="w-full">
            <h2 className="font-bold text-3xl text-center">Add a Class</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="ps-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Type here"
                        {...register("name", { required: true, maxLength: 80 })}
                        className="input input-bordered" />
                </div>
                <div className="flex space-x-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="Type here"
                            {...register("instructor", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="text" placeholder="Type here"
                            {...register("instructorEmail", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="flex space-x-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats</span>
                        </label>
                        <input type="number" placeholder="Type here"
                            {...register("availableSeats", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" placeholder="Type here"
                            {...register("price", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Upload Class Image</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered file-input-warning w-full" />
                </div>
                <input className="btn btn-block my-4 bg-[#7cc051] text-white" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;