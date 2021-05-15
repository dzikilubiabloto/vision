import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";

import "./modal-login.styles.scss";

export default function ModalLogin({show, handleClose, loginLoading, currentUser, changeEmail, changeName, changeText, shortName, warningMessage, handleCloseSave}) {
  return (
    <Modal animation={false} show={show} onHide={handleClose}>
      {!loginLoading && !currentUser && (
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
        </React.Fragment>
      )}
      {loginLoading && (
        <img src="https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif" />
      )}
      {currentUser && "Logged In!"}}
    </Modal>
  );
}
