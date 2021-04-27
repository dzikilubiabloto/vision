import React, { useState, useEffect } from "react";

import "./visions.styles.scss";

import Vision from "./vision/vision.component";

function Visions({ visions }) {
  const randomNumber = Math.floor(Math.random() * visions.length);
  const [currentVision, setCurrentVision] = useState("");
  const [visionsDictState, setVisionsDictState] = useState({});
  const [names, setNames] = useState([]);








  /* for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
  } */


  useEffect(() => {
  let visionsDict = {};

  let namesTemp = [];

    for (let vision of visions) {
        namesTemp.push(vision.name);
        visionsDict[vision.name] = { text: vision.text, name: vision.name };
      }
    
      namesTemp.push("+");
      visionsDict["+"] = { text: "add your vision", name: "+" };

  
    setNames(namesTemp);
    setVisionsDictState(visionsDict);
    setCurrentVision(visions[randomNumber].name);


  }, []);

  const chooseVision = async (name) => {
    await setCurrentVision(name);
    return;
  };

  const changeVisionField = (name, value) => {
      let oldDict = { ...visionsDictState };
      oldDict[name].text = value;
      setVisionsDictState(oldDict);
  }

  return (
    <div className="visions-container">
      <div className="buttons-row">
        {names.map((name) => (
          <div
            className={"button-vision " + ((name === currentVision) && " chosen")}
            value={name}
            onClick={() => chooseVision(name)}
          >
            {name}
          </div>
        ))}
      </div>
      <Vision vision={visionsDictState[currentVision]} changeVisionField={changeVisionField}/>
    </div>
  );
}

export default Visions;
