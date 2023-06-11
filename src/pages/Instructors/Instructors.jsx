import useInstructors from "../../hooks/useInstructors/useInstructors";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
    const [instructors] = useInstructors()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
            {
                instructors.map(item => <InstructorCard
                    key={item._id}
                    item={item}
                ></InstructorCard>)
            }
        </div>
    );
};

export default Instructors;