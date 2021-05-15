import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./modal-logout.styles.scss";

export default function ModalLogout({
  showAskLogout,
  handleCloseAsk,
  handleLogout,
}) {
  return (
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
  );
}
