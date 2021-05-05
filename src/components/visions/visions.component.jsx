import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";

import { addVision, getVisions } from "../../firebase/visions.utils";

import "./visions.styles.scss";

import Vision from "./vision/vision.component";

function Visions({ loggedIn }) {
  const [currentVision, setCurrentVision] = useState("");
  const [visionsDictState, setVisionsDictState] = useState({});
  const [names, setNames] = useState([]);
  const [show, setShow] = useState(false);
  const [shortName, setShortName] = useState(false)
  const [name, setName] = useState(false)
  const [reload, setReload] = useState(1)
  const [warningMessage, setWarningMessage] = useState('')

  const handleClose = async () => setShow(false);
  const handleCloseSave = async () => {
    if((await addVisionTrigger())){
    setShow(false)
    }
  };
  const handleShow = () => setShow(true);
  const [editing, setEditing] = useState(false);

  /* for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
  } */

  useEffect(() => {
    console.log("RELOAD")
    // probably they could come from parent component but novv I vvill keep them here
    async function getData() {
      const visions3 = await getVisions();


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
      setCurrentVision(visions3[randomNumber].name);
    }
    getData();
  }, [reload]);



  const chooseVision = async (name) => {
    await setCurrentVision(name);
    setEditing(false);
    return;
  };

  const changeVisionField = (name, value) => {
    let oldDict = { ...visionsDictState };
    oldDict[name].text = value;
    setVisionsDictState(oldDict);
  };

  const addVisionTrigger = async () => {
    await setName(name ? name.replace(/\s/g, "") : '');
    console.log(name)
    const namesLower = names.map(name => name.toLowerCase());
    if(name.length < 2 || name.length > 10){
      console.log("too short")
      setShortName(true)
      setWarningMessage("Profile name should be at least two characters long.");
      return false;
    }
    else if(namesLower.includes(name.toLowerCase())){
      setShortName(true)
      setWarningMessage("Name already exist.");

    
    } else {
      setShortName(false)
      setWarningMessage('');

      console.log("!!!!!!!!!!!!!!")

      // add to db 
      try{
        await addVision(name,'')
        setName('');
        setReload((prev) => prev + 1)
      } catch{

      }

      return true;
    }

  };

  const changeName = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="visions-container">
      <div className="buttons-row">
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
      </div>
      <Vision
        vision={visionsDictState[currentVision]}
        changeVisionField={changeVisionField}
        loggedIn={loggedIn}
        setEditing={setEditing}
        editing={editing}
      />

      <Modal animation={false} show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please put name of your profile here*.</p>
          <InputGroup className="mb-3">
            <InputGroup.Prepend></InputGroup.Prepend>
            <FormControl
              placeholder="profile name"
              aria-label="Profile name"
              aria-describedby="basic-addon1"
              onChange={changeName}
            />
          </InputGroup>
          {shortName && <Alert  variant="warning">
            
            {warningMessage}
          </Alert>}
          <p>
            * Be careful with that.{" "}
            <b>
              Changing name and deleting the profile through the website is not
              possible.
            </b>{" "}
            You can ask Talita for doing it or hack the backend.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="secondary" onClick={handleCloseSave}>
            Create profile
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Visions;
