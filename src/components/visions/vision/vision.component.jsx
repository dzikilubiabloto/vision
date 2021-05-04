import React from "react";

import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

import { saveVision } from "../../../firebase/visions.utils";

import { useAuth } from "../../../context/auth.context";

import "./vision.styles.scss";

function Vision({ vision, changeVisionField }) {
  const { name, text, id } = vision || { name: "", text: "" };

  const onTextChange3 = (event) => {
    console.log("kkkkkkkkkkkkk");
    console.log(event.target.value);
    changeVisionField(name, event.target.value);
  };

  console.log("VISION DATA");
  console.log(vision);
  const { currentUser } = useAuth();

  const save = () => {
    saveVision(id, text, true);
  };

  return (
    <div className="vision-container">
      <button onClick={save}>SAVE</button>
      {currentUser && (
        <div className="vision-edit">
          <textarea value={text} onChange={onTextChange3}></textarea>
        </div>
      )}
      <div className="vision-markdown">
        <ReactMarkdown remarkPlugins={[gfm]} children={text}></ReactMarkdown>
      </div>
      <button onClick={save}>SAVE</button>
    </div>
  );
}

export default Vision;
