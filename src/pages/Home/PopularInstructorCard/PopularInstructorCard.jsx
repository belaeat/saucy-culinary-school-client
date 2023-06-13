

const PopularInstructorCard = ({ item }) => {
    const {image, name, students} = item;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p className="font-bold text-[#fd8250]">Enrolled Students: {students}</p>
            </div>
        </div>
    );
};

export default PopularInstructorCard;