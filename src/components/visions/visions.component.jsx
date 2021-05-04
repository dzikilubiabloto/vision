import React, { useState, useEffect } from "react";

import { addVision, getVisions } from "../../firebase/visions.utils";

import "./visions.styles.scss";

import Vision from "./vision/vision.component";

function Visions({ loggedIn }) {
  const [currentVision, setCurrentVision] = useState("");
  const [visionsDictState, setVisionsDictState] = useState({});
  const [names, setNames] = useState([]);

  /* for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
  } */

  useEffect(() => {
    // probably they could come from parent component but novv I vvill keep them here
    async function getData() {
      const visions3 = await getVisions();

      console.log(visions3);

      let visionsDict = {};

      let namesTemp = [];

      for (let vision of visions3) {
        namesTemp.push(vision.name);
        visionsDict[vision.name] = { text: vision.text, name: vision.name, id: vision.id };
      }

      console.log(visionsDict);
      console.log(namesTemp);

      namesTemp.push("+");
      visionsDict["+"] = { text: "add your vision", name: "+" };

      setNames(namesTemp);
      setVisionsDictState(visionsDict);
      const randomNumber = Math.floor(Math.random() * visions3.length);
      setCurrentVision(visions3[randomNumber].name);
    }
    getData();
  }, []);

  const chooseVision = async (name) => {
    await setCurrentVision(name);
    return;
  };

  const changeVisionField = (name, value) => {
    let oldDict = { ...visionsDictState };
    oldDict[name].text = value;
    setVisionsDictState(oldDict);
  };

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
      </div>
      <Vision
        vision={visionsDictState[currentVision]}
        changeVisionField={changeVisionField}
        loggedIn={loggedIn}
      />
    </div>
  );
}

export default Visions;
