// import { FaCommentsDollar } from "react-icons/fa";

const PopularClassCard = ({ item }) => {
    const { name, image, details, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p>{details}</p>
                <p className="font-semibold">Price: ${price}</p>
                {/* <div className="card-actions">
                    <button className="btn bg-[#7cc051] text-white">Select</button>
                </div> */}
            </div>
        </div>
    );
};

export default PopularClassCard;