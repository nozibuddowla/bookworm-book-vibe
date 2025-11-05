import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router";

const Book = ({ bookPromise, bookItem }) => {
  // const booksData = use(bookPromise);
  // console.log(booksData);
  // console.log(bookItem);

  const { bookId, image, bookName, author, tags, category, rating } = bookItem;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 p-6 shadow-sm hover:shadow-2xl transition-shadow duration-300 ">
        <figure className="bg-[#f3f3f3] py-8 px-12 rounded-2xl mb-6 flex justify-center items-center">
          <img
            src={image}
            alt={bookName}
            className="h-44 w-auto object-contain"
          />
        </figure>
        <div className="card-body space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-[#23be0a0d] text-[#23be0a] rounded-4xl font-medium py-2 px-4 "
              >
                {tag}
              </div>
            ))}
          </div>

          <h2 className="card-title font-bold leading-8">{bookName}</h2>
          <p className="font-medium text-[#131313cc] border-b border-dashed border-[#13131326] pb-5 leading-5">
            By: {author}
          </p>

          <div className="card-actions flex items-center justify-between pt-2">
            <span className="text-[#131313cc] font-medium leading-5">
              {category}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#131313cc] leading-5">
                {rating.toFixed(2)}
              </span>
              <Rating
                style={{ maxWidth: 120, width: "100%" }}
                value={rating}
                items={5}
                readOnly
                itemStyles={{
                  itemShapes: ThinStar,
                  activeFillColor: "#FFAD33",
                  inactiveFillColor: "#D1D5DB",
                }}
              ></Rating>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
