import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import ReadBooks from "../ReadBooks/ReadBooks";

const ReadList = () => {
  const data = useLoaderData();
  console.log(data);
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedBookData = getStoredBook();
    console.log(storedBookData);
    const storedBookId = storedBookData.map((id) => parseInt(id));
    console.log(storedBookId);
    const myReadList = data.filter((book) =>
      storedBookId.includes(book.bookId)
    );
    console.log(myReadList);
    setReadList(myReadList);
  }, []);

  return (
    <div>
      <div className="bg-[#1313130d] flex justify-center items-center py-4 lg:py-8 my-9 rounded-2xl">
        <h1 className="text-[#131313] text-3xl font-bold leading-8 ">Books</h1>
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
    </div>
  );
};

export default ReadList;
