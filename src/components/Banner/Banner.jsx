import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto mt-7 lg:mt-14 mb-14 lg:mb-28">
      <div className="hero flex justify-center items-center min-h-screen rounded-3xl bg-[#1313130d] p-16 xl:p-32">
        <div>
          <h1 className="3xl lg:4xl xl:text-5xl font-bold mb-6 lg:mb-12  text-[#131313] 2xl:text-6xl ">
            Books to freshen up your bookshelf!
          </h1>
          <button className="btn bg-[#23BE0A]">View The List</button>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bookImg} className="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
