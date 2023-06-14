import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isInstructor, isInstructorLoading] = useInstructor()

    // redirecting user to destination
    const location = useLocation()

    if(loading || isInstructorLoading){
        return <progress className="progress bg-[#7cc051] w-56"></progress>
    }

    if(user && isInstructor){
        return children;
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default InstructorRoute;