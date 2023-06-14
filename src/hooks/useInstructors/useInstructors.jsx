import { useEffect, useState } from "react";


const useInstructors = () => {
    const [instructors, setInstructors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://saucy-culinary-school-server-production.up.railway.app/instructors")
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                setLoading(false)
                // console.log(data);
            })
    }, [])
    return [instructors, loading]
};

export default useInstructors;