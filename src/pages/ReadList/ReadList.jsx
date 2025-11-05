import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import ReadBooks from "../ReadBooks/ReadBooks";
import { ChevronDown, ChevronUp } from "lucide-react";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const storedBookId = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      storedBookId.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = (sortType) => {
    setSort(sortType);

    let sortedList = [...readList];

    if (sortType === "Pages") {
      sortedList.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortType === "Ratings") {
      sortedList.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "Book Name") {
      sortedList.sort((a, b) => a.bookName.localeCompare(b.bookName));
    } else if (sortType === "Category") {
      sortedList.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortType === "Year of Publishing") {
      sortedList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    setReadList(sortedList);
  };

  const handleReset = () => {
    setSort("");
    const storedBookData = getStoredBook();
    const storedBookId = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      storedBookId.includes(book.bookId)
    );
    setReadList(myReadList);
  };

  return (
    <div>
      <div className="bg-[#1313130d] flex justify-center items-center py-4 lg:py-8 my-9 rounded-2xl">
        <h1 className="text-[#131313] text-3xl font-bold leading-8 ">Books</h1>
      </div>

      <div className="flex justify-center items-center mt-4 lg:mt-8 mb-7 lg:mb-14">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-white py-3.5 px-5 rounded-lg bg-[#23be0a] "
          >
            Sort By {sort ? sort : ""} <ChevronDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={handleReset}>All Books</a>
            </li>
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Book Name")}>Book Name</a>
            </li>
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
            <li>
              <a onClick={() => handleSort("Category")}>Category</a>
            </li>
            <li>
              <a onClick={() => handleSort("Year of Publishing")}>
                Year of Publishing
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList aria-activedescendant="#131313">
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readList.map((book) => (
              <ReadBooks key={book.bookId} book={book}></ReadBooks>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>

      <div className="flex justify-center items-center mt-4 lg:mt-8 mb-7 lg:mb-14">
        <div className="dropdown dropdown-top dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-white py-3.5 px-5 rounded-lg bg-[#23be0a] "
          >
            Sort By {sort ? sort : ""} <ChevronUp />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={handleReset}>All Books</a>
            </li>
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Book Name")}>Book Name</a>
            </li>
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
            <li>
              <a onClick={() => handleSort("Category")}>Category</a>
            </li>
            <li>
              <a onClick={() => handleSort("Year of Publishing")}>
                Year of Publishing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
