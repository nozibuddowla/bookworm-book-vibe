import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getStoredWishList } from "../../Utility/addToDB";
import ReadBooks from "../ReadBooks/ReadBooks";
import { ChevronDown } from "lucide-react";
import WishListBooks from "../WishListBooks/WishListBooks";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const data = useLoaderData();
  const location = useLocation();

  // Set default tab based on route
  useEffect(() => {
    if (location.pathname === "/wishList") {
      setTabIndex(1);
    } else {
      setTabIndex(0);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Load Read List
    const storedBookData = getStoredBook();
    const storedBookId = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      storedBookId.includes(book.bookId)
    );
    setReadList(myReadList);

    // Load Wishlist
    const storedWishListData = getStoredWishList();
    const storedWishListId = storedWishListData.map((id) => parseInt(id));
    const myWishlist = data.filter((book) =>
      storedWishListId.includes(book.bookId)
    );
    setWishList(myWishlist);
  }, [data]);

  const handleSort = (sortType) => {
    setSort(sortType);

    let sortedReadList = [...readList];
    let sortedWishList = [...wishList];

    if (sortType === "Pages") {
      sortedReadList.sort((a, b) => b.totalPages - a.totalPages);
      sortedWishList.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortType === "Ratings") {
      sortedReadList.sort((a, b) => b.rating - a.rating);
      sortedWishList.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "Book Name") {
      sortedReadList.sort((a, b) => a.bookName.localeCompare(b.bookName));
      sortedWishList.sort((a, b) => a.bookName.localeCompare(b.bookName));
    } else if (sortType === "Category") {
      sortedReadList.sort((a, b) => a.category.localeCompare(b.category));
      sortedWishList.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortType === "Year of Publishing") {
      sortedReadList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      sortedWishList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    setReadList(sortedReadList);
    setWishList(sortedWishList);
  };

  const handleReset = () => {
    setSort("");

    // Reset Read List
    const storedBookData = getStoredBook();
    const storedBookId = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      storedBookId.includes(book.bookId)
    );
    setReadList(myReadList);

    // Reset Wishlist
    const storedWishListData = getStoredWishList();
    const storedWishListId = storedWishListData.map((id) => parseInt(id));
    const myWishlist = data.filter((book) =>
      storedWishListId.includes(book.bookId)
    );
    setWishList(myWishlist);
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
            {sort ? `Sort By ${sort}` : "Sort By "} <ChevronDown />
          </div>
          <ul
            tabIndex={0}
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

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="my-8">
            {readList.length > 0 ? (
              readList.map((book) => (
                <ReadBooks key={book.bookId} book={book}></ReadBooks>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No books in your read list yet!
              </p>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-8">
            {wishList.length > 0 ? (
              wishList.map((book) => (
                <WishListBooks key={book.bookId} book={book} />
              ))
            ) : (
              <p className="text-center text-gray-500">
                No books in your wishlist yet!
              </p>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
