import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/login.jpg";
import { FaGoogle, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

import loginBanner from "../../assets/banner/login-banner.png";

const auth = getAuth(app);

const Login = () => {
  const [show, setShow] = useState(false);

  // auth context
  const { signIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  // redirecting user
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  // google sign in method

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("https://saucy-culinary-school-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Login successful!!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* Login Banner */}
      <div>
        <img src={loginBanner} alt="" />
      </div>
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
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="input-group">
                    <input
                      type={show ? "text" : "password"}
                      {...register("password", { required: true })}
                      placeholder="Password"
                      className="input input-bordered"
                    />
                    <p
                      onClick={() => setShow(!show)}
                      className="text-[#7cc051] bg-base-200 p-4"
                    >
                      <FaEye />
                    </p>
                  </div>
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <label className="label">
                    <p className="label-text-alt">
                      New here? Please{" "}
                      <Link
                        className="text-[#7cc051] font-bold text-sm"
                        to="/register"
                      >
                        Register.
                      </Link>
                    </p>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#7cc051] text-white mb-2"
                    type="submit"
                    value="Login"
                  />

                  <button
                    onClick={handleGoogleSignIn}
                    className="btn bg-[#fd8250] text-white"
                  >
                    <FaGoogle />
                    Login With Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
