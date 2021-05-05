import React from "react";

import ReactMarkdown from "react-markdown";
import StringCrypto from "string-crypto";

import gfm from "remark-gfm";

import { useAuth } from "../../../context/auth.context";
import { saveDocument } from "../../../firebase/documents.utils";

import "./documents-data.styles.scss";

function DocumentsData({ document, changeDocumentField }) {
  const { text, id } = document || { text: "", id: "" };
  const password = "./documents-data.styles.scss/llllkhhhnbn/";
  const [editing, setEditing] = React.useState(false);

  const onTextChange3 = async (event) => {
    await changeDocumentField(event.target.value);
  };
  const { encryptString } = new StringCrypto();

  const { currentUser } = useAuth();

  const save = () => {
    let encryptedString = encryptString(text, password);

    saveDocument(id, encryptedString, true);
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
    <div className="document-container-wrapper">
      <div>
        {currentUser && !editing && (
          <div
            className="document-edit-button"
            onClick={() => toggleEditing(true)}
          >
            edit
          </div>
        )}
        {currentUser && editing && (
          <div
            className="document-edit-button"
            onClick={() => toggleEditing(false)}
          >
            stop editing and save
          </div>
        )}
      </div>
      <div className="document-container">
        {currentUser && editing && <button onClick={save}>SAVE</button>}
        {currentUser && editing && (
          <div className={"document-edit"}>
            <textarea value={text} onChange={onTextChange3}></textarea>
          </div>
        )}
        <div
          className={"document-markdown" + (!editing ? " editing-markdon" : "")}
        >
          <ReactMarkdown remarkPlugins={[gfm]} children={text}></ReactMarkdown>
        </div>
      </div>
      {currentUser && editing && (
        <div>
          <a href="https://demo.hedgedoc.org/features?both">
            {" "}
            Help and instructions
          </a>
        </div>
      )}
    </div>
  );
}

export default DocumentsData;
