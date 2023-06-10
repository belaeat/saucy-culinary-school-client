import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    // redirecting user to destination
    const location = useLocation()

    if(loading){
        return <progress className="progress bg-[#7cc051] w-56"></progress>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;