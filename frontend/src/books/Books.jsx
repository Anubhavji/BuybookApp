import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Book from "../components/Book";

const Books = () => {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Book />
      </div>
      <Footer />
    </>
  );
};

export default Books;
