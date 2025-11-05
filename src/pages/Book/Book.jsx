import React, { use } from "react";

const Book = ({ bookPromise, bookItem }) => {
  // const booksData = use(bookPromise);
  // console.log(booksData);
  // console.log(bookItem);
  const { image, bookName, author, tags, category } = bookItem;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="bg-[#f3f3f3] rounded-2xl m-6">
          <img src={image} alt={bookName} className=" py-8 px-24" />
        </figure>
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-2.5">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-[#23be0a0d] text-[#23be0a] rounded-4xl font-medium py-2 px-4 "
              >
                {tag}
              </div>
            ))}
          </div>

          <h2 className="card-title font-bold text-2xl leading-8">{bookName}</h2>
          <p className="font-medium leading-5">By: {author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
