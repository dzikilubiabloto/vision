import React from "react";

import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

import { useAuth } from "../../../context/auth.context";
import { saveVision } from "../../../firebase/visions.utils";

import "./vision.styles.scss";

function Vision({ vision, changeVisionField, editing, setEditing }) {
  const { name, text, id } = vision || { name: "", text: "" };

  const onTextChange3 = (event) => {
    changeVisionField(name, event.target.value);
  };

  const { currentUser } = useAuth();

  const save = () => {
    saveVision(id, text, true);
  };

  React.useEffect(() => {
    setEditing(false);
  }, []);

  const toggleEditing = (value) => {
    setEditing(value);
    if (!value) {
      saveVision(id, text, true);
    }
  };

  return (
    <div className="vision-container-wrapper">
      <div>
        {currentUser && !editing && (
          <div
            className="vision-edit-button"
            onClick={() => toggleEditing(true)}
          >
            edit
          </div>
        )}
        {currentUser && editing && (
          <div
            className="vision-edit-button"
            onClick={() => toggleEditing(false)}
          >
            stop editing and save
          </div>
        )}
      </div>
      <div className="vision-container">
        {currentUser && editing && <button onClick={save}>SAVE</button>}
        {currentUser && editing && (
          <div className={"vision-edit"}>
            <textarea value={text} onChange={onTextChange3}></textarea>
          </div>
        )}
        <div
          className={"vision-markdown" + (!editing ? " editing-markdon" : "")}
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

export default Vision;
