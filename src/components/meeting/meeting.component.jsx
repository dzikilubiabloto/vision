import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useCookies } from "react-cookie";

import { getMinutes, saveMinutes } from "../../firebase/meetings.utils";

import "./meeting.styles.scss";

import MeetingGeneral from "./meeting-general/meeting-general.component";
import MeetingAgenda from "./meeting-agenda/meeting-agenda.component";
import MeetingMinutes from "./meeting-minutes/meeting-minutes.component";

function Meeting() {
  const [previousMinutes, setPreviousMinutes] = React.useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["active-element"]);

  React.useEffect(() => {
    const getData = async () => {
      const pass = cookies["activeElement"];

      try {
        // get meeting minutes array
        const minutesD = await getMinutes(pass);
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
    <Container className="meetings-container">
      <Row className="picture-row">
        <img
          src="https://i.ibb.co/SwGYkD5/m-131-web-v-1024x295.jpg"
          alt="table with chairs next to big window with nature outside"
        />
      </Row>
      
      <Row>
      <Col className="meeting-tabs">
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
            <MeetingMinutes />
          </Tab>
        </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default Meeting;
