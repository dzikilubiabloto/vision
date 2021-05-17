import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useCookies } from "react-cookie";

import { useAuth } from "../../context/auth.context";

import "./menu.styles.scss";
import ModalLogout from "../modal-logout/modal-logout.component";
import ModalLogin from "../modal-login/modal-login.component";

function Menu() {
  const { signin, currentUser, logout } = useAuth();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [showAskLogout, setShowAskLogout] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [, setCookie] = useCookies(["active-element"]);

  const handleClose = async () => setShow(false);
  const handleCloseSave = async () => {
    if (await addVisionTrigger()) {
      setShow(false);
    }
  };
  const addVisionTrigger = async () => {
    //check  email
    if (email[9] === "@" && email[14] === "d" && email[18] === ".") {
      const pass = name.slice(0, 22);
      const passph = name.slice(22, 52); // 'Tymczasovehaslotestove';// name.slice(10, 19);
      // login
      setCookie("activeElement", passph);
      try {
        setLoginLoading(true);
        await signin(email, pass);
        // set passph
        // TODO CHECK PASSPH
        localStorage.setItem("activeElement", "some passphrase");
        setLoginLoading(false);
        setShow(false);
      } catch (e) {
        // error
        // TODO
        return false;
      }
    } else {
      //send message
      // TODO saving message
      return false
    }
    return true;
  };

  const handleShow = () => setShow(true);

  const handleLogoutConfirm = () => {
    logout();
    localStorage.clear();
  };

  const handleLogoutAsk = () => {
    setShowAskLogout(true);
  };

  const handleCloseAsk = () => {
    setShowAskLogout(false);
  };

  const handleLogout = () => {
    handleLogoutConfirm();
    setShowAskLogout(false);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeText = (event) => {
    setText(event.target.value);
  };

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" fixed="top" className="menu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              exact
              to="/vision/"
              className="link nav-link"
              activeClassName="act"
            >
              <div>home</div>
            </NavLink>

            <NavLink
              to="/vision/values"
              className="link nav-link"
              activeClassName="act"
            >
              <div>values</div>
            </NavLink>

            <NavLink
              to="/vision/dreaming"
              className="link nav-link"
              activeClassName="act"
            >
              <div>community dreaming</div>
            </NavLink>

            {currentUser && (
              <NavLink
                to="/vision/documents"
                className="link nav-link"
                activeClassName="act"
              >
                <div>documents</div>
              </NavLink>
            )}
            {currentUser && (
              <NavLink
                to="/vision/calendar"
                className="link nav-link"
                activeClassName="act"
              >
                <div>calendar</div>
              </NavLink>
            )}

            <NavLink
              to="/vision/books"
              className="link nav-link"
              activeClassName="act"
            >
              <div>books/links</div>
            </NavLink>

            <NavLink
              to="/vision/meeting"
              className="link nav-link"
              activeClassName="act"
            >
              <div>meeting</div>
            </NavLink>

            {!currentUser && (
              <div className="link nav-link link-login" onClick={handleShow}>
                send message
              </div>
            )}
            {currentUser && (
              <div
                className="link nav-link link-login"
                onClick={handleLogoutAsk}
              >
                logout
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
        <ModalLogin
          show={show}
          handleClose={handleClose}
          loginLoading={loginLoading}
          currentUser={currentUser}
          changeEmail={changeEmail}
          changeName={changeName}
          changeText={changeText}
          handleCloseSave={handleCloseSave}
        />
        <ModalLogout
          showAskLogout={showAskLogout}
          handleCloseAsk={handleCloseAsk}
          handleLogout={handleLogout}
        />
      </Navbar>
    </React.Fragment>
  );
}

export default Menu;
