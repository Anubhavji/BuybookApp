import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
const Book = () => {
  const [book, setBooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5001/book");
        // console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center ">
          <h1 className="text-white text-2xl font-semibold md:text-4xl   leading-7">
            We're delighted to have you Here...
          </h1>
          <p className=" m-4 leading-7 ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            voluptatum blanditiis, totam minus laudantium, accusantium eius
            cumque dicta eligendi doloremque amet! Quos quo cumque maxime
            necessitatibus voluptas debitis totam est, eveniet sequi vel, eaque
            laudantium ab, excepturi sed laborum numquam! Similique asperiores
            incidunt fuga soluta quisquam dolorem repudiandae, placeat ex quae
            tempora inventore exercitationem necessitatibus voluptate quis
            recusandae praesentium.
          </p>
          <Link to="/">
            <button className="btn mt-3 md:mt-5 btn-secondary bg-pink-500 text-2xl font-bold">
              Back
            </button>
          </Link>
        </div>
        <div className=" mt-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Book;
