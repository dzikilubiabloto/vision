import React from "react";

import "./book.styles.scss";

function Book({ book }) {
  const { image, title, author, types, description, link } = book;
  return (
    <div className="book-container">
      <div className="book-image">
        <a href={link} rel="noreferrer noopener" target="_blank">
          <img src={image} alt={title + " book cover"} />
        </a>
      </div>
      <div className="book-data-container">
        <div className="book-data">
          <div className="title">{title}</div>
          <div className="author">{author}</div>
          <div className="types">{types}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Book;
