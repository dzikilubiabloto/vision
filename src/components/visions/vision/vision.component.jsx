import React from "react";
import Col from "react-bootstrap/Col";

import ReactMarkdown from "react-markdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import gfm from "remark-gfm";
import Alert from "react-bootstrap/Alert";
import { useCookies } from 'react-cookie';

import { useAuth } from "../../../context/auth.context";
import { saveVision } from "../../../firebase/visions.utils";

import "./vision.styles.scss";

function Vision({ vision, changeVisionField, editing, setEditing, setShowToastSaved }) {
  const { name, text, id } = vision || { name: "", text: "" };
  const [textV, setTextV] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['active-element']);


  React.useEffect(() => {
    if (!editing) {
      setTextV(vision && vision.text);
    }
  });

  const changeVisionFieldLocal = (name, value) => {
    /* let oldDict = { ...visionsDictState };
    oldDict[name].text = value;
    setVisionsDictState(oldDict); */
    setTextV(value);
  };

  const onTextChange3 = (event) => {
    changeVisionFieldLocal(name, event.target.value);
  };

  const { currentUser } = useAuth();

  const save = async () => {
    const passPh = localStorage.getItem("activeElement");
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log(passPh);
    await changeVisionField(name, textV);
    const pass = cookies['activeElement'];

    try{
      await saveVision(id, textV, pass);
    } catch(e){
      console.log(e)
    }
    await setShowToastSaved(true)
  };

  React.useEffect(() => {
    setEditing(false);
  }, []);

  const toggleEditing = async (value, save) => {
    if (!value && save) {
      console.log("sejv");
      console.log(name);
      console.log(textV);
      await changeVisionField(name, textV);
    const pass = cookies['activeElement'];

      await saveVision(id, textV, pass);
      await setEditing(value);
    await setShowToastSaved(true)

    } else {
      await setTextV(vision && vision.text);
      await setEditing(value);
    }
  };

  return (
    <Container className="vision-container-wrapper">
      <Row>
        <Col lg={12}>
          <p> </p>
        </Col>
      </Row>
      {editing && (
        <Row>
          <Col lg={12}>
            <Alert show={show} variant="success">
              <Alert.Heading>How to edit this page</Alert.Heading>
              <p className="alert-text">
                Edit text in the black area and you will immediatelly see a
                preview in the white area. Use markdown to format text. You can
                change text size - headers, add images, lines. To see
                insturctions on how to use markdown check this page:
                <a href="https://codi.kanthaus.online/features?both">
                  {" "}
                  instruction
                </a>
                . Be aware that not all of the functions will work here!{" "}
              </p>
              <p>Press save button to keep changes!</p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setShow(false)}
                  variant="outline-success"
                >
                  Close me!
                </Button>
              </div>
            </Alert>
          </Col>
        </Row>
      )}
      <Row>
        <Col lg={7}> </Col>
        <Col lg={1}>
          {editing && (
            <Button
              variant="outline-success"
              className="vision-edit-button"
              onClick={() => toggleEditing(editing ? false : true, false)}
            >
              {"close"}
            </Button>
          )}
        </Col>
        <Col lg={1}></Col>
        <Col lg={1}>
          {editing && (
            <Button
              variant="outline-success"
              className="vision-edit-button"
              onClick={() => save()}
            >
              {"save"}
            </Button>
          )}
        </Col>
        <Col lg={1}></Col>
        <Col lg={1}>
          {currentUser && (
            <React.Fragment>
              <Button
                variant="outline-success"
                className="vision-edit-button"
                onClick={() => toggleEditing(editing ? false : true, true)}
              >
                {editing ? "close & save" : "edit"}
              </Button>
            </React.Fragment>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
      <Row className="vision-container">
        {currentUser && editing && (
          <Col lg={6} md={12} xs={12}>
            <div className={"vision-edit"}>
              <textarea value={textV} onChange={onTextChange3}></textarea>
            </div>
          </Col>
        )}
        <Col lg={1}></Col>
        <Col lg={currentUser && editing ? 5 : 12} md={12} xs={12}>
          <div
            className={"vision-markdown" + (!editing ? " editing-markdon" : "")}
          >
            <ReactMarkdown
              remarkPlugins={[gfm]}
              children={textV}
            ></ReactMarkdown>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Vision;
