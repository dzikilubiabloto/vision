import React from "react";

import { Link } from "react-router-dom";

import "./menu.styles.scss";

function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <div className="link">home</div>
      </Link>
      <Link to="/values">
        <div className="link">values</div>
      </Link>
      <Link to="/dreaming">
        <div className="link">community dreaming</div>
      </Link>
      <Link to="/books">
        <div className="link">books/links</div>
      </Link>
      <Link to="/meeting">
        <div className="link">meeting</div>
      </Link>
    </div>
  );
}

export default Menu;
