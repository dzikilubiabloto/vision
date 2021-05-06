import React, { useState } from "react";

import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";

import Login from "../login/login.component";
import { useAuth } from "../../context/auth.context";
import { addVision, getVisions } from "../../firebase/visions.utils";

import "./menu.styles.scss";

function Menu() {
  const { signin, currentUser, logout } = useAuth();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [shortName, setShortName] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [reload, setReload] = useState(1);
  const [names, setNames] = useState([]);
  const [showAskLogout, setShowAskLogout] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const handleClose = async () => setShow(false);
  const handleCloseSave = async () => {
    if (await addVisionTrigger()) {
      setShow(false);
    }
  };
  const addVisionTrigger = async () => {
    console.log("vision trigger");
    //check  email
    if (email[9] === "@" && email[14] === "d" && email[18] === ".") {
      console.log(name);
      const pass = name.slice(0, 10);

      const passph = name.slice(10, 19);
      // login
      try {
        setLoginLoading(true);
        await signin(email, pass);
        console.log("curr");
        console.log(currentUser);
        // set passph
        // TODO CHECK PASSPH
        localStorage.setItem("activeElement", passph);
        setLoginLoading(false);
        setShow(false);
      } catch (e) {
        // error
        console.log(e);
      }
      console.log("done!");
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
      {currentUser && (
        <Link to="/vision/calendar">
          <div className="link">calendar</div>
        </Link>
      )}
      <Link to="/vision/books">
        <div className="link">books/links</div>
      </Link>
      <Link to="/vision/meeting">
        <div className="link">meeting</div>
      </Link>
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

      {/*<Login login={signin} logout={logout} currentUser={currentUser} />*/}
      <Modal animation={false} show={show} onHide={handleClose}>
        {!loginLoading && !currentUser &&
          <React.Fragment>
            <Modal.Header>
              <Modal.Title>Send us a message! :)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Email, so we can reply you.</p>
              <InputGroup className="mb-3">
                <InputGroup.Prepend></InputGroup.Prepend>
                <FormControl
                  type="email"
                  placeholder="email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  onChange={changeEmail}
                />
              </InputGroup>
              <p>Name</p>
              <InputGroup className="mb-3">
                <InputGroup.Prepend></InputGroup.Prepend>
                <FormControl
                  type="text"
                  placeholder="name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  onChange={changeName}
                />
              </InputGroup>
              <p>Message:</p>
              <InputGroup className="mb-3">
                <InputGroup.Prepend></InputGroup.Prepend>
                <FormControl
                  as="textarea"
                  type="text"
                  placeholder="name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  onChange={changeText}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend></InputGroup.Prepend>
              </InputGroup>
              {shortName && <Alert variant="warning">{warningMessage}</Alert>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Back
              </Button>
              <Button variant="secondary" onClick={handleCloseSave}>
                Send message!
              </Button>
            </Modal.Footer>
          </React.Fragment> }
          {loginLoading && <img src="https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif"/>}
          {currentUser && "Logged In!"}
        }
      </Modal>

      <Modal animation={false} show={showAskLogout} onHide={handleCloseAsk}>
        <Modal.Header>
          <Modal.Title>Do you really want to log out?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAsk}>
            Back
          </Button>
          <Button variant="secondary" onClick={handleLogout}>
            Logout!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Menu;
