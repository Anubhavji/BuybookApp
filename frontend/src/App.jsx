import React from "react";
import Home from "./home/Home";
import Books from "./books/Books";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      {/* <Home />
      <Books /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
