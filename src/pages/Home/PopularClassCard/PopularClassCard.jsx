// import { FaCommentsDollar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const PopularClassCard = ({ item }) => {
    const { name, image, price, _id, students } = item;

    // user redirect after login to select class
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    // refetching cart to update the cart added number
    const [, refetch] = useCart()

    const handleAddToCart = item => {
        console.log(item);

        if (user && user.email) {
            const cartItem = { classId: _id, name, image, price, email: user.email }

            fetch('https://saucy-culinary-school-server-production.up.railway.app/carts', {
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
        <div className="card w-96 bg-base-100 shadow-xl">
            <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p className="font-bold text-[#fd8250]">Price: ${price}</p>
                <p className="font-bold text-[#fd8250]">Enrolled Students: {students}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn bg-[#7cc051] btn-wide text-white">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;