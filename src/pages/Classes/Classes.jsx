import useClasses from "../../hooks/useClasses/useClasses";
import ClassCard from "./ClassCard";


const Classes = () => {
    const [classes] = useClasses()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
            {
                classes.map(item => <ClassCard
                    key={item._id}
                    item={item}
                ></ClassCard>)
            }
        </div>
    );
};

export default Classes;