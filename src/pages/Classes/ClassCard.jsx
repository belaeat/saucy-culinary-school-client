

const ClassCard = ({ item }) => {
    const { name, image, instructor, availableSeats, price } = item;

    return (
        <div className="card w-96 shadow-xl">
            <img src={image} alt="Shoes" className="rounded-xl" />
            <div className="card-body items-center">
                <h2 className="card-title font-bold text-2xl mb-4">{name}</h2>
                <p className="text-xl font-semibold"> Instructor: {instructor}</p>
                <p>Available Seats: {availableSeats}</p>
                <p className="font-bold text-[#fd8250]">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-block bg-[#7cc051] text-white">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;