import { MapPin, StickyNote, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const WishListBooks = ({ book }) => {
  const {
    image,
    bookId,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div>
      <div className="card grid grid-cols-1 md:grid-cols-12 gap-6 my-8 bg-[#50B1C9] shadow-sm p-6">
        <figure className="md:col-span-3 bg-[#f3f3f3] rounded-2xl py-7 flex justify-center items-center">
          <img
            src={image}
            alt={bookName}
            className="h-[172px] w-auto object-contain"
          />
        </figure>
        <div className="card-body md:col-span-9 space-y-4">
          <h2 className="text-[#131313] text-2xl font-bold leading-8">
            {bookName}
          </h2>
          <p className="text-[#131313cc] font-medium leading-5">By: {author}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-[#131313] font-bold leading-6 ">Tag</p>
              <div className="flex items-center gap-3">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-[#23be0a] text-[#131313] rounded-4xl font-medium py-2 px-4 "
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={24} color="#424242" />
              <span className="text-[#131313cc] leading-5 ">
                Year of Publishing: {yearOfPublishing}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b border-[#13131326] pb-4 ">
            <div className="flex items-center gap-2">
              <Users size={24} color="#13131399" />
              <p className="text-[#13131399] leading-5">
                Publisher: {publisher}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <StickyNote size={24} color="#13131399" />
              <p className="text-[#13131399] leading-5">Page: {totalPages}</p>
            </div>
          </div>
          <div className="card-actions items-center ">
            <span className=" bg-[#328eff] text-[#131313] py-3 px-5 rounded-4xl leading-5">
              Category: {category}
            </span>
            <span className=" bg-[#ffac33] text-[#131313] py-3 px-5 rounded-4xl leading-5">
              Rating: {rating}
            </span>
            <Link
              to={`/bookDetails/${bookId}`}
              className="btn bg-[#23be0a] text-white border-none text-xl font-medium py-3 px-5 rounded-4xl leading-5"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListBooks;
