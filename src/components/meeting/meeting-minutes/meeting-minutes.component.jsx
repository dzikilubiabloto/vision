import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

export default function MeetingMinutes({ previousMinutes }) {
  const [minutesModal, setMinutesModal] = React.useState();
  const [currentMinutes, setCurrentMinutes] = React.useState(1);
  const openMinutes = (number) => {
    setMinutesModal(true);
    setCurrentMinutes(number);
  };

  const handleCloseMinutesModal = () => {
    setMinutesModal(false);
  };
  return (
    <div>
      {previousMinutes.map(({ number, facilitator, date, short }) => (
        <div className="minutes-block" onClick={() => openMinutes(number)}>
          <div className="title-row">
            <div>{"Comunity building meeting " + number}</div>
          </div>
          <div>{"facilitator: " + facilitator}</div>
          <div>{"Date: " + date}</div>
          <div>{short}</div>
        </div>
      ))}
      <Modal
        animation={false}
        show={minutesModal}
        onHide={handleCloseMinutesModal}
      >
        <Modal.Header>
          <Modal.Title>Add minutes details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactMarkdown
            remarkPlugins={[gfm]}
            children={
              previousMinutes.filter((m) => m.number === currentMinutes)[0] &&
              previousMinutes.filter((m) => m.number === currentMinutes)[0].text
            }
          ></ReactMarkdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseMinutesModal}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
