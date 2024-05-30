import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:5001/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Successfully Signed up!");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error:" + err.response.data.massage);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-md sm:w-1/2 w-full shadow-lg p-2">
          <div className=" model-box   ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg text-white">Sign up</h3>
              <div>
                <div className="flex flex-col  m-2">
                  <span className="m-1 text-white">Full Name</span>
                  <input
                    {...register("fullname", { required: true })}
                    type="text"
                    placeholder="Enter your name"
                    className="p-1 outline rounded text-base-300 bg-white"
                  />
                </div>
                <div className="flex flex-col m-2">
                  <span className="m-1 text-white">Email</span>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter your email"
                    className="p-1 outline  text-base-300 rounded bg-white"
                  />
                </div>
                <div className="flex flex-col m-2">
                  <span className="m-1 text-white">password</span>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Enter your password"
                    className="p-1 outline text-base-300 rounded bg-white"
                  />
                </div>
                <div className="flex justify-around  m-3 ">
                  <button className="  px-3 py-1 rounded-md bg-pink-700 text-base-200 font-semibold hover:bg-pink-500">
                    Signup
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
