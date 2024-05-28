import React from "react";
import main from "../../public/main.jpg";

const Hero = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto  mt-10 md:px-20 px-4  flex flex-col md:flex-row gap-3">
        <div className="  md:order-1 order-2 w-full md:w-1/2 mt-4 md:mt-20">
          <h1 className=" text-white text-4xl font-bold">
            Hello, Welcome to learn something.
            <br />
            <span className=" text-pink-500"> New Day, New Things...</span>
          </h1>
          <p className=" md:mt-10 text-xl font-semibold">
            You’re in the right place. Tell us what titles or genres you’ve
            enjoyed in the past, and we’ll give you surprisingly insightful
            recommendations.
          </p>
          <div className="mt-4 md:mt-10 ">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn mt-3 md:mt-5 btn-secondary bg-pink-500">
              Send
            </button>
          </div>
        </div>
        <div className=" order-1 w-full md:w-1/2 mt-2 md:mt-10">
          <img className="  md:ml-10 md:w-[530px]" src={main} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
