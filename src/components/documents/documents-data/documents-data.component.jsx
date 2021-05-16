import React from "react";

import ReactMarkdown from "react-markdown";
import StringCrypto from "string-crypto";
import Toast from "react-bootstrap/Toast";

import gfm from "remark-gfm";

import { useAuth } from "../../../context/auth.context";
import { saveDocument } from "../../../firebase/documents.utils";

import "./documents-data.styles.scss";
import { Container, Col, Row, Button, Alert } from "react-bootstrap";
const re = /<!--((.|[\n|\r|\r\n])*?)-->[\n|\r|\r\n]?(\s+)?/g;

function DocumentsData({ document, changeDocumentField }) {
  const { text, id } = document || { text: "", id: "" };
  const password = "./documents-data.styles.scss/llllkhhhnbn/";
  const [editing, setEditing] = React.useState(false);
  const [showToastSaved, setShowToastSaved] = React.useState(false);

  const onTextChange3 = async (event) => {
    await changeDocumentField(event.target.value);
  };
  const { encryptString } = new StringCrypto();

  const { currentUser } = useAuth();

  const save = async () => {
    let encryptedString = encryptString(text, password);

    await saveDocument(id, encryptedString, true);
    await setShowToastSaved(true);
  };

  React.useEffect(() => {
    setEditing(false);
  }, []);

  const toggleEditing = (value) => {
    setEditing(value);
    if (!value) {
      save();
    }
  };

  return (
    <Container className="document-container-wrapper">
      {currentUser && (
        <Row className="document-buttons">
          <Col lg={9} md={6} xs={11}>
            <Toast
              onClose={() => setShowToastSaved(false)}
              show={showToastSaved}
              delay={1000}
              autohide
            >
              <Toast.Body>Changes saved!</Toast.Body>
            </Toast>
          </Col>
          <Col lg={3} md={6} xs={12} className="document-edit-button">
            <Button
              variant="outline-secondary"
              onClick={() => toggleEditing(!editing)}
            >
              {!editing ? "edit" : "stop editing and save"}
            </Button>
          </Col>
        </Row>
      )}
      <Row>
        <Col xs></Col>
      </Row>
      <Row className="document-container">
        {currentUser && editing && (
          <Col lg={6} md={12} xs={12}>
            {currentUser && editing && (
              <div className={"document-edit"}>
                <textarea value={text} onChange={onTextChange3}></textarea>
              </div>
            )}
          </Col>
        )}
        <Col lg={1}></Col>
        <Col lg={currentUser && editing ? 5 : 12} md={12} xs={12}>
          <div
            className={"vision-markdown" + (!editing ? " editing-markdon" : "")}
          >
            <ReactMarkdown
              remarkPlugins={[gfm]}
              children={text.replace(re, "")}
            ></ReactMarkdown>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DocumentsData;
