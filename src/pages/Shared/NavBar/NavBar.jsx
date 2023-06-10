import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {
    // getting user from auth provider
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="text-3xl font-bold" to='/'>Saucy Culinary</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <Link className="btn border-none bg-[#7cc051] text-white me-2" to='/dashboard'>Dashboard</Link>
                            <button onClick={handleLogOut} className="btn border-none bg-[#7cc051] text-white">Logout</button>
                        </> : <>
                            <p className="btn border-none bg-[#7cc051] text-white"><Link to='/login'>Login</Link></p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;