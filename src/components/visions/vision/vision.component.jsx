import React from "react";

import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

import "./vision.styles.scss";

function Vision({ vision, changeVisionField }) {
  const { name, text } = vision || { name: "", text: "" };

  const onTextChange3 = (event) => {
    console.log("kkkkkkkkkkkkk")
    console.log(event.target.value)
    changeVisionField(name, event.target.value);
  };

  return (
    <div className="vision-container">
      <div className="vision-edit">
        <textarea value={text} onChange={onTextChange3}></textarea>
      </div>
      <div className="vision-markdown">
        <ReactMarkdown remarkPlugins={[gfm]} children={text}></ReactMarkdown>
      </div>
    </div>
  );
}

export default Vision;
