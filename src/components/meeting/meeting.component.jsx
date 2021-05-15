import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";


import { getMinutes, saveMinutes } from "../../firebase/meetings.utils";

import "./meeting.styles.scss";

import MeetingGeneral from "./meeting-general/meeting-general.component";
import MeetingAgenda from "./meeting-agenda/meeting-agenda.component";
import MeetingMinutes from "./meeting-minutes/meeting-minutes.component";

function Meeting() {
  const [previousMinutes, setPreviousMinutes] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        // get meeting minutes array
        const minutesD = await getMinutes();
        // sort from neest to oldest
        minutesD.sort((a, b) => b.number - a.number);
        await setPreviousMinutes(minutesD);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div className="values-container">
      <div className="values meeting">
        <img
          src="https://i.ibb.co/SwGYkD5/m-131-web-v-1024x295.jpg"
          alt="table with chairs next to big window with nature outside"
        />
        <div className="meeting-tabs">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" tabClassName="meeting-tab" title="general">
              <MeetingGeneral />
            </Tab>
            <Tab
              eventKey="profile"
              tabClassName="meeting-tab"
              title="next meeting agenda"
            >
              <MeetingAgenda
                previousMinutes={previousMinutes}
                saveMinutes={saveMinutes}
                getMinutes={getMinutes}
              />
            </Tab>
            <Tab
              eventKey="contact"
              tabClassName="meeting-tab"
              title="meeting minutes"
            >
              <MeetingMinutes previousMinutes={previousMinutes} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
