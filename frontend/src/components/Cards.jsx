import React from "react";

const Cards = ({ item }) => {
  return (
    <div className=" my-2">
      <div className="card w-85 bg-base-100 shadow-xl m-2  hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt="book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-3">₹{item.price}</div>
            <div className="badge badge-outline cursor-pointer p-3 hover:text-pink-500">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
