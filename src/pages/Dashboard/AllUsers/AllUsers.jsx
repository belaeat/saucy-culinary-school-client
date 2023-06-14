import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    // using axios hook
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    // making admin
    const handleMakeAdmin = user => {
        fetch(`https://saucy-culinary-school-server-production.up.railway.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // making instructor
    const handleMakeInstructor = user => {
        axios.patch(`https://saucy-culinary-school-server-production.up.railway.app/users/instructor/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an instructor!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    
    return (
        <div>
            <h3 className='text-3xl font-semibold my-8'>Total Users: {users.length}</h3>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-[#7cc051] text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'instructor' ? <button disabled={true} onClick={() => handleMakeInstructor(user)} className="btn bg-[#fd8250] btn-xs text-white">Make Instructor</button> : <button onClick={() => handleMakeInstructor(user)} className="btn bg-[#fd8250] btn-xs text-white">Make Instructor</button>
                                    }
                                </td>
                                <td>
                                    {
                                        user.role === 'admin' ? <button disabled={true} onClick={() => handleMakeAdmin(user)} className="btn bg-[#fd8250] btn-xs text-white">Make Admin</button> : <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#fd8250] btn-xs text-white">Make Admin</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;