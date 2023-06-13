import { useEffect, useState } from "react";


const useInstructors = () => {
    const [instructors, setInstructors] = useState([])
    const [loading, setLoading] = useState(true)

    // loading menu data from local json file and filtering data within same file
    useEffect(() => {
        fetch("http://localhost:5000/instructors")
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