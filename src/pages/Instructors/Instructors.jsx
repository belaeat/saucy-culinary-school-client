import useInstructors from "../../hooks/useInstructors/useInstructors";
import InstructorCard from "./InstructorCard";
import instructorBanner from '../../assets/banner/instructor-banner.jpg'

const Instructors = () => {
    const [instructors] = useInstructors()

    return (
        <div>
            {/* Instructor Banner */}
            <div className="hero min-h-screen mb-12" style={{ backgroundImage: `url(${instructorBanner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our Instructors</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                {
                    instructors.map(item => <InstructorCard
                        key={item._id}
                        item={item}
                    ></InstructorCard>)
                }
            </div>
        </div>

    );
};

export default Instructors;