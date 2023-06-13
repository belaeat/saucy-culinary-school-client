import useClasses from "../../hooks/useClasses/useClasses";
import ClassCard from "./ClassCard";
import classesBanner from '../../assets/banner/classes-banner.jpg'

const Classes = () => {
    const [classes] = useClasses()

    return (
        <div>
            {/* Classes Banner */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${classesBanner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our Classes</h1>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
                {
                    classes.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;