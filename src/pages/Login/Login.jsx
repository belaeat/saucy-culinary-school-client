import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginImage from '../../assets/login.jpg'
import { FaGoogle } from "react-icons/fa";



const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className="hero my-20">
            <div className="flex flex-col lg:flex-row items-center justify-around">
                <img className="w-1/3" src={loginImage} alt="" />
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Your email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} placeholder="Password" className="input input-bordered" />
                                {errors.password && <span className="text-red-500">This field is required</span>}

                                <label className="label">
                                    <p className="label-text-alt">New here? Please <Link className="text-[#7cc051]" to='/register'>Register.</Link></p>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#7cc051] text-white mb-3">Login</button>
                                <button className="btn bg-[#fd8250] text-white"><FaGoogle />Login With Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;