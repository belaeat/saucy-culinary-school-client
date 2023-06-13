import { useState } from "react";
import PopularInstructorCard from "../PopularInstructorCard/PopularInstructorCard";
import { useEffect } from "react";


const PopularInstructors = () => {

    const [popularInstructors, setPopularClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/popularInstructors')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])

    return (
        <div className="mx-auto">
            <div className="text-center my-20">
                <h3 className="text-3xl font-bold">Our Popular Instructors</h3>
                <p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                {
                    popularInstructors.map(item => <PopularInstructorCard
                        key={item._id}
                        item={item}
                    ></PopularInstructorCard>)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;