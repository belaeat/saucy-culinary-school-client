// import { FaCommentsDollar } from "react-icons/fa";

const PopularClassCard = ({ item }) => {
    const { name, image, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p className="font-bold text-[#fd8250]">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn bg-[#7cc051] btn-wide text-white">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;