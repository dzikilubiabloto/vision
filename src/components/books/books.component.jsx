import React from "react";

import "./books.styles.scss";

import Book from "./book/book.component";

const books = [
  {
    image: "https://i.ibb.co/pXTtV7S/clt.jpg",
    title:
      "Creating a Life Together: Practical Tools to Grow Ecovillages and Intentional Communities",
    author: "Diana Leafe Christian",
    types: "I can share EBOOK and AUDIOBOOK",
    description: "Book provides practical information on ho3 to build a community. ritten by an editor of 'Community' magazine",
  },{
    image: "https://i.ibb.co/pXTtV7S/clt.jpg",
    title:
      "Creating a Life Together: Practical Tools to Grow Ecovillages and Intentional Communities",
    author: "Diana Leafe Christian",
    description: "Book provides practical information on ho to build a community. ritten by an editor of 'Community' magazine",
  },
];

function Books() {
  return (
    <div className="values-container">
      <div className="values">
        <img src="https://i.ibb.co/bNcZCLZ/pexels-julia-volk-527307nnn6.jpg" />
        https://ecovillage.org/
        https://www.ic.org/community-bookstore/product/the-cohouseholding-guide/
        <div className="books-list">
          {books.map((book) => (
            <Book book={book} />
          ))}
          https://library.uniteddiversity.coop/Effective_Organising/
        </div>
      </div>
    </div>
  );
}

export default Books;
