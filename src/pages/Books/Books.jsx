import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  //   const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("/booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => setAllBooks(data));
  //   }, []);

  //   const bookPromise = fetch("/booksData.json").then((res) => res.json());

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-3xl lg:tex-4xl font-bold mb-6 lg:mb-12  text-[#131313]  lg:text-center text-left">
        Books
      </h1>

      {/* <Suspense fallback={<span>Loading...</span>}>
            <Book bookPromise={bookPromise}></Book>
      </Suspense> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 lg:mb-12">
        {data.map((bookItem) => (
          <Book key={bookItem.bookId} bookItem={bookItem}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
