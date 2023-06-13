import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome, FaBook } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>                
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                    <li><Link><FaShoppingCart /> My Selected Class</Link></li>
                    <li><Link><FaWallet /> My Enrolled Class</Link></li>
                    <div className="divider"></div>
                    <li><Link><FaHome /> Home</Link></li>
                    <li><Link><FaBook />See All Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;