import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Price from "../components/ui/Price";
import Ratings from "../components/ui/Ratings";


const Books = ({ book }) => {
  const [img, setImg] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const image = new Image();
    image.src = book.url;

    image.onload = () => {
      if (mountedRef.current) {
        setImg(image);
      }
    };

    return () => {
      mountedRef.current = false;
    };
  }, [book.url]);

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={img.src}
                alt={book.title}
                className="book__img"
              />
            </figure>
          </Link>

          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>

          <Ratings rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Books;