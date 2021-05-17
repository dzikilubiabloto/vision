import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCookies } from 'react-cookie';


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
  const [shortName, setShortName] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [showAskLogout, setShowAskLogout] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['active-element']);


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
      const passph = name.slice(22, 52);// 'Tymczasovehaslotestove';// name.slice(10, 19);
      // login
      setCookie('activeElement', passph)
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
        console.log(e);
      }
    } else {
      //send message
      if (email.length > 4 && name.length > 0 && text.length > 0) {
        saveMessage(email, name, text);
      }
    }
    return true;
  };

  const saveMessage = (email, name, text) => {
    console.log(email);
    console.log(name);
    console.log(text);
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
            
              <NavLink exact to="/vision/" className="link nav-link" activeClassName="act" onClick={() => {console.log("dziki")}}>
                <div>home</div>
              </NavLink>
            

            
              <NavLink to="/vision/values" className="link nav-link" activeClassName="act">
                <div>values</div>
              </NavLink>
            
            
              <NavLink to="/vision/dreaming" className="link nav-link" activeClassName="act">
                <div>community dreaming</div>
              </NavLink>
            
            {currentUser && (
              
                <NavLink to="/vision/documents" className="link nav-link" activeClassName="act">
                  <div>documents</div>
                </NavLink>
              
            )}
            {currentUser && (
              
                <NavLink to="/vision/calendar" className="link nav-link" activeClassName="act">
                  <div>calendar</div>
                </NavLink>
              
            )}
            
              <NavLink to="/vision/books" className="link nav-link" activeClassName="act">
                <div>books/links</div>
              </NavLink>
            
            
              <NavLink to="/vision/meeting" className="link nav-link" activeClassName="act">
                <div>meeting</div>
              </NavLink>
            
            {!currentUser && (
              
                <div className="link nav-link link-login" onClick={handleShow}>
                  send message
                </div>
              
            )}
            {currentUser && (
              
                <div className="link nav-link link-login" onClick={handleLogoutAsk}>
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
          shortName={shortName}
          warningMessage={warningMessage}
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

/*
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            
              <NavLink to="/vision/">
                <div>home</div>
              </NavLink>
            

            
              <NavLink to="/vision/values">
                <div>values</div>
              </NavLink>
            
            
              <NavLink to="/vision/dreaming">
                <div>community dreaming</div>
              </NavLink>
            
            {currentUser && (
              
                <NavLink to="/vision/documents">
                  <div>documents</div>
                </NavLink>
              
            )}
            {currentUser && (
              
                <NavLink to="/vision/calendar">
                  <div>calendar</div>
                </NavLink>
              
            )}
            
              <NavLink to="/vision/books">
                <div>books/links</div>
              </NavLink>
            
            
              <NavLink to="/vision/meeting">
                <div>meeting</div>
              </NavLink>
            
            {!currentUser && (
              
                <div className="link link-login" onClick={handleShow}>
                  send message
                </div>
              
            )}
            {currentUser && (
              
                <div className="link link-login" onClick={handleLogoutAsk}>
                  logout
                </div>
              
            )}
          </ul>
        </div>
        <ModalLogin
          show={show}
          handleClose={handleClose}
          loginLoading={loginLoading}
          currentUser={currentUser}
          changeEmail={changeEmail}
          changeName={changeName}
          changeText={changeText}
          shortName={shortName}
          warningMessage={warningMessage}
          handleCloseSave={handleCloseSave}
        />
        <ModalLogout
          showAskLogout={showAskLogout}
          handleCloseAsk={handleCloseAsk}
          handleLogout={handleLogout}
        />
      </nav>
      */
