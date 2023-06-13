import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ClassCard = ({ item }) => {
    const { name, image, instructor, availableSeats, price, _id } = item;

    // user redirect after login to select class
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    // refetching cart to update the cart added number
    const [, refetch] = useCart() 


    const handleAddToCart = item => {
        console.log(item);

        if (user && user.email) {
            const cartItem = { classId: _id, name, image, price, instructor, email: user.email}

            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added Successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                icon: 'warning',
                title: 'Warning!!!',
                text: 'Please Login to Select Class!',
                footer: navigate('/login', { state: { from: location } })
            })
        }
    }


    return (
        <div className="card w-96 shadow-xl">
            <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
            <div className="card-body items-center">
                <h2 className="card-title font-bold text-2xl mb-4">{name}</h2>
                <p className="text-xl font-semibold"> Instructor: {instructor}</p>
                <p>Available Seats: {availableSeats}</p>
                <p className="font-bold text-[#fd8250]">Price: ${price}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-wide bg-[#7cc051] text-white">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;