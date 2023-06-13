import useCart from "../../../hooks/useCart";


const MyCart = () => {
    const [cart] = useCart()

    const total = cart.reduce((sum, item) => item.price + sum, 0)

    return (
        <div className="text-center">
            <div>
                <h2 className="font-bold text-3xl mb-12">My Selected Class</h2>
            </div>
            <div className="uppercase font-semibold flex justify-evenly h-10 items-center">
                <h3 className="text-3xl">Total Class: {cart.length}</h3>
                <div className="divider divider-horizontal"></div>
                <h3 className="text-2xl">Total Price: <span className="text-[#fd8250] font-bold">${total}</span></h3>
                <div className="divider divider-horizontal"></div>
                <button className="btn font-semibold bg-[#fd8250] text-white">Pay Now</button>
            </div>
            {/* Table */}
            <div className="overflow-x-aut my-8">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-[#7cc051] text-white">
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.instructor}
                                    <br />
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <button className="btn bg-[#fd8250] btn-xs text-white">Delete</button>
                                </td>
                                <td>
                                    <button className="btn bg-[#7cc051] btn-xs text-white">Pay</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyCart;