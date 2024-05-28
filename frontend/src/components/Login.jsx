import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-slate-50">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").closest()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-black">Login</h3>
            <div>
              <div className="flex flex-col m-2">
                <span className="m-1 text-black">Email</span>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="p-1  rounded text-base-300 bg-white"
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    This field ie required
                  </span>
                )}
              </div>
              <div className="flex flex-col m-2">
                <span className="m-1 text-black">password</span>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter your password"
                  className="p-1  rounded text-base-300 bg-white"
                />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around  mt-3 ">
                <button className=" px-3 py-1 rounded-md bg-pink-700 text-base-200 font-semibold hover:bg-pink-500">
                  Login
                </button>

                <p>
                  Not registered?
                  <Link
                    to="/signup"
                    className=" text-blue-600 underline cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
