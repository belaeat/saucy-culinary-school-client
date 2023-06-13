import useClasses from "../../../hooks/useClasses/useClasses";
import PopularClassCard from "../PopularClassCard/PopularClassCard";


const PopularClasses = () => {
    const [classes] = useClasses()
    const popularClass = classes.slice(0, 6)

    return (
        <div>
            <div className="text-center my-20">
                <h3 className="text-3xl font-bold">Our Popular Classes</h3>
                <p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                {
                    popularClass.map(item => <PopularClassCard
                        key={item._id}
                        item={item}
                    ></PopularClassCard>)
                }
            </div>

        </div>
    );
};

export default PopularClasses;