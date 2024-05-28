import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />

      <div className="flex h-screen items-center justify-center">
        <div className="rounded-md sm:w-1/2 w-full shadow-lg p-2">
          <div className=" model-box   ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-lg text-white">Contact us</h3>
              <div>
                <div className="flex flex-col  m-2">
                  <span className="m-1 text-white">Name</span>
                  <input
                    {...register("name", { required: true })}
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
                  <span className="m-1 text-white">Massage</span>
                  <textarea className="p-1 outline text-base-300 rounded bg-white" />
                </div>
                <div className="flex justify-around  m-3 ">
                  <button className="  px-3 py-1 rounded-md bg-white text-base-200 font-semibold hover:bg-slate-400">
                    Submit
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

export default Contact;
