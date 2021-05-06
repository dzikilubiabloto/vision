import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

import { getMinutes, saveMinutes } from "../../firebase/meetings.utils";

import "./meeting.styles.scss";

function Meeting() {
  const [agenda, setAgenda] = React.useState("");
  const [previousMinutes, setPreviousMinutes] = React.useState([]);
  const [number, setNumber] = React.useState();
  const [facilitator, setFacilitator] = React.useState("Talita");
  const [date, setDate] = React.useState("14/04/1999");
  const [short, setShort] = React.useState(
    "Some decription ith 50 chars, it as fun aand cool and nice. e had fun nnnn"
  );
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [, setNewMinutesNotReady] = React.useState(true);

  const [minutesModal, setMinutesModal] = React.useState();
  const [currentMinutes, setCurrentMinutes] = React.useState(1);
  const handleCloseAdd = () => {
    setShowAddModal(false);
  };

  const handleCloseMinutesModal = () => {
    setMinutesModal(false);
  };

  const handleShowAdd = () => {
    const re = /<!--((.|[\n|\r|\r\n])*?)-->[\n|\r|\r\n]?(\s+)?/g;

    const resultForData = agenda.slice(0, 1000);
    console.log(resultForData);
    // find number
    const meetingPre = "Meeting #";
    let i = resultForData.indexOf(meetingPre) + meetingPre.length;
    console.log("ppp", Number(resultForData.slice(i, i + 1)));
    setNumber(Number(resultForData.slice(i, i + 1)));
    // find facilitator
    const facilitatorPre = "- **Facilitator**: ";
    i = resultForData.indexOf(facilitatorPre) + facilitatorPre.length;
    const facilitatorPost = "- **Notary**:";
    let j = resultForData.indexOf(facilitatorPost);
    let facilitatorTemp = resultForData.slice(i, j);
    facilitatorTemp = facilitatorTemp.replace(re, "");
    setFacilitator(facilitatorTemp);
    // find date
    const datePre = "- **Date**: ";
    i = resultForData.indexOf(datePre) + datePre.length;
    const datePost = "- **Facilitator**:";
    j = resultForData.indexOf(datePost);
    let dateTemp = resultForData.slice(i, j - 1);
    dateTemp = dateTemp.replace(re, "");
    console.log("DATE", dateTemp);
    const ooo = "))))--" + dateTemp + "--((((";
    console.log(ooo);
    setDate(dateTemp); // dateTemp);
    setShowAddModal(true);
  };

  const handleSaveMinutes = async () => {
    if (!number || !facilitator || !date || !short || short.length < 50) {
      // sho arning
      console.log("cos nie tak robisz");
      return;
    }
    const n = previousMinutes.map((m) => m.number);
    console.log("NNNN");
    console.log(n);
    if (n.includes(number)) {
      console.log("cos znó nie tak dzikuuu");
      return;
    }
    await saveMinutes(number, facilitator, date, short, agenda);
    setShowAddModal(false);
    setNewMinutesNotReady(true);
  };

  React.useEffect(() => {
    const getData = async () => {
      try {
        let result = await fetch(
          "https://codi.kanthaus.online/communities-meeting/download"
        );
        result = await result.text();
        console.log("r", result);
        // remove comments
        const re = /<!--((.|[\n|\r|\r\n])*?)-->[\n|\r|\r\n]?(\s+)?/g;
        result = await result.replace(re, "");

        const minutesD = await getMinutes();
        await setAgenda(result);
        minutesD.sort((a, b) => b.number - a.number);
        await setPreviousMinutes(minutesD);
        // find meeting number
        const meetingPre = "Meeting #";
        let i = (await agenda.indexOf(meetingPre)) + meetingPre.length;
        const num = Number(await agenda.slice(i, i + 1));
        await setNumber(await Number(agenda.slice(i, i + 1)));
        const n = await minutesD.map((m) => Number(m.number));
        await setNewMinutesNotReady(await n.includes(num));
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const openMinutes = (number) => {
    console.log("NUMBER");
    console.log(number);
    setMinutesModal(true);
    setCurrentMinutes(number);
  };

  const changeNumber = (event) => {
    setNumber(event.target.value);
  };
  const changeFacilitator = (event) => {
    setFacilitator(event.target.value);
  };
  const changeDate = (event) => {
    setDate(event.target.value);
  };
  const changeShort = (event) => {
    setShort(event.target.value);
  };

  return (
    <div className="values-container">
      <div className="values meeting">
        {true && (
          <img
            src="https://i.ibb.co/SwGYkD5/m-131-web-v-1024x295.jpg"
            alt="table with chairs next to big window with nature outside"
          />
        )}
        <div className="meeting-tabs">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" tabClassName="meeting-tab" title="general">
              <div className="grey meeting-tab-content">
                <p>The meetings could serve as:</p>
                <ul>
                  <li>
                    <span>
                      a <strong>connecting</strong> space where we share our
                      stories and what is our dream;
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      <strong>learning</strong> space, where we learn more about
                      community building;
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>creativity</strong> space where we develop new
                      ideas of what we can build together.
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      place where we <strong>build</strong> something together
                      (e.g. create vision, choose decision making process,
                      decide how we are dealing with conflicts)
                    </span>
                  </li>
                </ul>
              </div>
            </Tab>
            <Tab
              eventKey="profile"
              tabClassName="meeting-tab"
              title="next meeting agenda"
            >
              <div className="meeting-tab-content">
                {previousMinutes
                  .filter((m) => Number(m.number))
                  .includes(Number(number)) && "TE MINUTY JUZ BYLY"}
                {!previousMinutes
                  .filter((m) => Number(m.number))
                  .includes(Number(number)) && (
                  <ReactMarkdown
                    remarkPlugins={[gfm]}
                    children={agenda}
                  ></ReactMarkdown>
                )}
                <div>
                  <Button onClick={handleShowAdd}>Add minutes</Button>
                </div>
              </div>
              <Modal
                animation={false}
                show={showAddModal}
                onHide={handleCloseAdd}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header>
                  <Modal.Title>Add minutes details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Number:</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend></InputGroup.Prepend>
                    <FormControl
                      type="number"
                      value={number}
                      placeholder={number}
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      onChange={changeNumber}
                    />
                  </InputGroup>
                  <p>Facilitator:</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend></InputGroup.Prepend>
                    <FormControl
                      type="text"
                      value={facilitator}
                      placeholder={facilitator}
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      onChange={changeFacilitator}
                    />
                  </InputGroup>
                  <p>Date:</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend></InputGroup.Prepend>
                    <FormControl
                      type="date"
                      value={date}
                      placeholder={date}
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      onChange={changeDate}
                    />
                  </InputGroup>
                  <p>Short description:</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend></InputGroup.Prepend>
                    <FormControl
                      as="textarea"
                      value={short}
                      type="text"
                      placeholder={short}
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      onChange={changeShort}
                    />
                  </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAdd}>
                    Back
                  </Button>
                  <Button variant="secondary" onClick={handleSaveMinutes}>
                    Logout!
                  </Button>
                </Modal.Footer>
              </Modal>
            </Tab>
            <Tab
              eventKey="contact"
              tabClassName="meeting-tab"
              title="meeting minutes"
            >
              {previousMinutes.map(({ number, facilitator, date }) => (
                <div
                  className="minutes-block"
                  onClick={() => openMinutes(number)}
                >
                  <div className="title-row">
                    <div>{"Comunity building meeting " + number}</div>
                  </div>
                  <div>{"facilitator: " + facilitator}</div>
                  <div>{"Date: " + date}</div>
                  <div>{short}</div>
                </div>
              ))}
              <Modal
                animation={false}
                show={minutesModal}
                onHide={handleCloseMinutesModal}
              >
                <Modal.Header>
                  <Modal.Title>Add minutes details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ReactMarkdown
                    remarkPlugins={[gfm]}
                    children={
                      previousMinutes.filter(
                        (m) => m.number === currentMinutes
                      )[0] &&
                      previousMinutes.filter(
                        (m) => m.number === currentMinutes
                      )[0].text
                    }
                  ></ReactMarkdown>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseMinutesModal}>
                    Back
                  </Button>
                </Modal.Footer>
              </Modal>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
