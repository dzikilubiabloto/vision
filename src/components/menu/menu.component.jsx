import React from "react";

import { Link } from "react-router-dom";

import "./menu.styles.scss";

function Menu() {
  return (
    <div className="menu">
      <Link to="/vision/">
        <div className="link">home</div>
      </Link>
      <Link to="/vision/values">
        <div className="link">values</div>
      </Link>
      <Link to="/vision/dreaming">
        <div className="link">community dreaming</div>
      </Link>
      <Link to="/vision/books">
        <div className="link">books/links</div>
      </Link>
      <Link to="/vision/meeting">
        <div className="link">meeting</div>
      </Link>
    </div>
  );
}

export default Menu;
