import React from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

import "./menu.styles.scss";

function Menu() {
  const { currentUser } = useAuth();
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
      {currentUser && (
        <Link to="/vision/documents">
          <div className="link">documents</div>
        </Link>
      )}
      <Link to="/vision/books">
        <div className="link">books/links</div>
      </Link>
      <Link to="/vision/meeting">
        <div className="link">meeting</div>
      </Link>
      <div className="link link-login">send message</div>
    </div>
  );
}

export default Menu;
