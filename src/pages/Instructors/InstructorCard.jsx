

const InstructorCard = ({item}) => {
    const {name, image, email} = item; 

    return (
        <div className="card w-96 shadow-xl">
            <img src={image} alt="Shoes" className="rounded-xl" />
            <div className="card-body items-center">
                <h2 className="card-title font-bold text-2xl mb-4">{name}</h2>
                <p className="font-bold text-[#fd8250]">Email: {email}</p>
                <div className="card-actions">
                    <button className="btn btn-wide bg-[#7cc051] text-white">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;