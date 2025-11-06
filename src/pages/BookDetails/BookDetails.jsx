import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB, addToWishList } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  const handleMarkToRead = (id) => {
    addToStoredDB(id);
  };

  const handleAddToWishList = (id) => {
    addToWishList(id);
  };

  return (
    <div>
      <div className="card grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 my-12 ">
        <figure className="bg-[#f3f3f3] rounded-2xl p-10 lg:p-20 flex justify-center items-center ">
          <img
            src={image}
            alt={bookName}
            className=" h-[282px] md:h-[564px] w-auto object-contain"
          />
        </figure>
        <div className="card-body space-y-6">
          <h2 className="card-title text-[#131313] text-2xl lg:text-4xl font-bold leading-14">
            {bookName}
          </h2>
          <p className="text-[#131313cc] text-xl font-medium leading-6 pb-6 border-b border-solid border-[#13131326] ">
            By: {author}
          </p>
          <p className="text-[#131313cc] text-xl font-medium leading-6 pb-6 border-b border-solid border-[#13131326] ">
            {category}
          </p>
          <p className="leading-6">
            <span className="font-bold">Review: </span>
            <span className="text-[#131313b3] ">{review}</span>
          </p>
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-solid border-[#13131326]">
            <span className="text-[#131313] font-bold leading-6 ">Tag </span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-[#23be0a0d] text-[#23be0a] rounded-4xl font-medium py-2 px-4 "
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-[#131313b3] w-40 md:w-48 ">
                Number Of Pages:{" "}
              </span>
              <span className="font-medium">{totalPages}</span>{" "}
            </div>
            <div className="flex items-center">
              <span className="text-[#131313b3] w-40 md:w-48 ">
                Publisher:{" "}
              </span>
              <span className="font-medium">{publisher}</span>{" "}
            </div>
            <div className="flex items-center">
              <span className="text-[#131313b3] w-40 md:w-48 ">
                Year of Publishing:{" "}
              </span>
              <span className="font-medium">{yearOfPublishing}</span>{" "}
            </div>
            <div className="flex items-center">
              <span className="text-[#131313b3] w-40 md:w-48 ">Rating: </span>
              <span className="font-medium">{rating}</span>{" "}
            </div>
          </div>

          <div className="card-actions flex items-center gap-4">
            <button
              onClick={() => handleMarkToRead(bookId)}
              className="btn px-7 py-5 bg-white border-2 border-[#1313134D] rounded-lg text-[#131313] font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Read
            </button>
            <button
              onClick={() => handleAddToWishList(bookId)}
              className="btn px-7 py-5 bg-[#50B1C9] border-none rounded-lg text-white font-semibold text-lg hover:bg-[#3d9ab0] transition-colors"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
