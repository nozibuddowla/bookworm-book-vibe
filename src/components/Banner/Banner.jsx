import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto mt-7 lg:mt-14 mb-14 lg:mb-28 px-4">
      <div className="bg-[#1313130d] rounded-3xl ">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12 py-8 lg:py-12 px-4 lg:px-12">
          <img
            src={bookImg}
            alt="books"
            className="w-full lg:w-80 max-w-md shadow-2xl object-cover"
          />
          <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 lg:mb-12  text-[#131313]  ">
              Books to freshen up your bookshelf!
            </h1>
            <button className="btn bg-[#23BE0A] text-white w-fit mx-auto lg:mx-0 px-6 hover:bg-l[#1da008] ">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
