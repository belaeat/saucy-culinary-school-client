import { useForm } from 'react-hook-form';


const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

    };
    console.log(errors);

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