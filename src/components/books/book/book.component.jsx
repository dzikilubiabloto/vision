import React from "react";

import "./book.styles.scss";

function Book({book}) {

  const {image, title, author, types, description} = book;
  return (
    <div className="book-container">
        <div className="book-image">
            <img src={image} alt={title + " book cover"} />
        </div>
        <div className="book-data-container">
            <div className="book-data">
                <div>{title}</div>
                <div>{author}</div>
                <div>{types}</div>
                <div>{description}</div>
            </div>
        </div>
    </div>
  );
}

export default Book;
