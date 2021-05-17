import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useCookies } from "react-cookie";
import Toast from "react-bootstrap/Toast";
import "bootstrap/dist/css/bootstrap.min.css";

import { addVision, getVisions } from "../../firebase/visions.utils";

import "./visions.styles.scss";

import Vision from "./vision/vision.component";
import { Container, Row, Col } from "react-bootstrap";

function Visions() {
  const [currentVision, setCurrentVision] = useState("");
  const [visionsDictState, setVisionsDictState] = useState({});
  const [names, setNames] = useState([]);
  const [show, setShow] = useState(false);
  const [shortName, setShortName] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [loadingVisions, setLoadingVisions] = useState(false);
  const [lastVisitedName, setLastVisitedName] = useState("");
  const [lastVisitedText, setLastVisitedText] = useState("");
  const [cookies, ,] = useCookies(["active-element"]);
  const [showToastSaved, setShowToastSaved] = useState(false);

  const handleClose = async () => {
    await setShow(false);
    await setShortName(false);
  };
  const handleCloseSave = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    if (await addVisionTrigger(name)) {
      setShow(false);
      await setCurrentVision(name);
      await setEditing(true);
      await setShortName(false);
    }
  };
  const handleShow = () => setShow(true);
  const [editing, setEditing] = useState(false);
  const [saveModal, setSaveModal] = useState(false);

  useEffect(() => {
    // probably they could come from parent component but novv I vvill keep them here
    async function getData() {
      setLoadingVisions(true);
      const pass = cookies["activeElement"];
      const visions3 = await getVisions(pass);

      let visionsDict = {};

      let namesTemp = [];

      for (let vision of visions3) {
        namesTemp.push(vision.name);
        visionsDict[vision.name] = {
          text: vision.text,
          name: vision.name,
          id: vision.id,
        };
      }

      setNames(namesTemp);
      setVisionsDictState(visionsDict);
      const randomNumber = Math.floor(Math.random() * visions3.length);

      setCurrentVision((prev) => {
        if (prev === "") {
          return visions3[randomNumber] && visions3[randomNumber].name;
        } else {
          return prev;
        }
      });
      setLoadingVisions(false);
    }
    getData();
  }, []);

  const changeVisionField = (name, value) => {
    setVisionsDictState((oldDict) => {
      oldDict[name].text = value;
      return oldDict;
    });
  };

  const addVisionTrigger = async (name) => {
    const namesLower = names.map((name) => name.toLowerCase());
    if (name.length < 2 || name.length > 10) {
      setShortName(true);
      setWarningMessage("Profile name should be 2-10 characters long.");
      return false;
    } else if (!name.match("^[A-Za-z0-9]+$")) {
      setWarningMessage("Just letters and numbers.");
    } else if (namesLower.includes(name.toLowerCase())) {
      setShortName(true);
      setWarningMessage("This name already exists.");
    } else {
      // add to db
      try {
        const pass = cookies["activeElement"];
        await addVision(name, "", pass);
        // await setReload((prev) => prev + 1);
      } catch {}

      setShortName(false);
      setWarningMessage("");

      setLoadingVisions(true);
      const pass = cookies["activeElement"];
      const visions3 = await getVisions(pass);

      let visionsDict = {};

      let namesTemp = [];

      for (let vision of visions3) {
        namesTemp.push(vision.name);
        visionsDict[vision.name] = {
          text: vision.text,
          name: vision.name,
          id: vision.id,
        };
      }

      setNames(namesTemp);
      setVisionsDictState(visionsDict);

      await setCurrentVision(name);

      await setEditing(true);
      setLoadingVisions(false);

      return true;
    }
  };

  return (
    <Container className="visions-container">
      {/* <div className="buttons-row">
        {names.map((name) => (
          <div
            className={"button-vision " + (name === currentVision && " chosen")}
            value={name}
            onClick={() => chooseVision(name)}
          >
            {name}
          </div>
        ))}
        <div
          className={"button-vision button-vision-add"}
          value={"+"}
          onClick={handleShow}
        >
          {"+"}
        </div>
        </div>*/}
      <Row className="visions-tabs">
        <Tabs
          activeKey={currentVision}
          onSelect={(key) => {
            setCurrentVision(key);
            setEditing(false);
          }}
        >
          {names.map((name) => (
            <Tab eventKey={name} title={name} className="visions-tab">
              <Toast
                onClose={() => setShowToastSaved(false)}
                show={showToastSaved}
                delay={1000}
                autohide
              >
                <Toast.Body>Profile saved!</Toast.Body>
              </Toast>
              <Vision
                vision={visionsDictState[name]}
                changeVisionField={changeVisionField}
                setEditing={setEditing}
                editing={editing}
                setLastVisitedName={setLastVisitedName}
                setLastVisitedText={setLastVisitedText}
                setShowToastSaved={setShowToastSaved}
              />
            </Tab>
          ))}
          <Tab title={<div onClick={handleShow}>add your profile</div>}></Tab>
        </Tabs>
      </Row>
      <Row>
        <Col>
          {loadingVisions && (
            <Modal show={loadingVisions} centered className="modal-loading">
              <div className="image-cropper">
                <img
                  src="https://i.ibb.co/9sRmYkq/krolik.gif"
                  alt="jumping-little-tottoro"
                  className="profile-pic"
                />
              </div>
            </Modal>
          )}
        </Col>
      </Row>
      <Modal animation={false} show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new profile</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleCloseSave}>
          <Modal.Body>
            <p>Please put name of your profile here*.</p>
            <input
              placeholder="profile name"
              aria-label="Profile name"
              aria-describedby="basic-addon1"
            />
            {shortName && <Alert variant="warning">{warningMessage}</Alert>}
            <p>
              * Be careful with that.{" "}
              <b>
                Changing name and deleting the profile through the website is
                not possible.
              </b>{" "}
              You can ask Talita for doing it or hack the backend.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="submit">
              Create profile
            </Button>
          </Modal.Footer>
        </Form>
        <Button variant="secondary" onClick={handleClose}>
          Back
        </Button>
      </Modal>
      <Modal animation={false} show={saveModal} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>Do you want to save your data?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setEditing(false);
              setSaveModal(false);
            }}
          >
            No
          </Button>
          <Button
            variant="secondary"
            onClick={async () => {
              setSaveModal(false);
              await changeVisionField(lastVisitedName, lastVisitedText);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Visions;
