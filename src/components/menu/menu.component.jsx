import React from "react";

import { Link } from "react-router-dom";

import "./menu.styles.scss";

function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <div className="link">picture</div>
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
      <Link to="/terms">
        <div className="link">terms</div>
      </Link>
    </div>
  );
}

export default Menu;
