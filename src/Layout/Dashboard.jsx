import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome, FaBook, FaUserAlt } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
    const [cart] = useCart()

    // TODO: Load Data from the server to have dynamic isAdmin based on data
    const [isInstructor] = useInstructor()
    const [isAdmin] = useAdmin()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content my-20">
                <Outlet></Outlet>
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn text-white bg-[#7cc051] drawer-button lg:hidden my-4">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#7cc051]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    {/* Sidebar content here */}

                    {
                        isAdmin && <>
                            <li>
                                <NavLink to='/dashboard/manageClasses'><FaBook /> Manage Classes</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/allusers'><FaUserAlt /> Manage Users</NavLink></li>
                            {/* <div className="divider"></div>
                            <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/classes"><FaBook />See All Classes</NavLink></li> */}
                        </>
                    }
                    {
                        isInstructor && <>
                            <li>
                                <NavLink to='/dashboard/addClass'><FaBook /> Add a Class</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/myClasses'><FaUserAlt /> My Classes</NavLink></li>
                            {/* <div className="divider"></div>
                            <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/classes"><FaBook />See All Classes</NavLink></li> */}
                        </>
                    }
                    <li>
                        <NavLink to='/dashboard/mycart'><FaShoppingCart /> My Selected Class <span className="badge bg-[#fd8250] text-white">+{cart?.length || 0}</span></NavLink></li>
                    <li><NavLink to='/dashboard/enrolled'><FaWallet /> My Enrolled Class</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                    <li><NavLink to="/classes"><FaBook />See All Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;