import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

export default function MeetingAgenda({ previousMinutes, saveMinutes, getMinutes }) {
  const [agenda, setAgenda] = React.useState("");
  const [number, setNumber] = React.useState();
  const [facilitator, setFacilitator] = React.useState("Talita");
  const [date, setDate] = React.useState("14/04/1999");
  const [short, setShort] = React.useState("");
  const [showAddModal, setShowAddModal] = React.useState(false);

  const handleCloseAdd = () => {
    setShowAddModal(false);
  };

  const handleShowAdd = () => {
    const re = /<!--((.|[\n|\r|\r\n])*?)-->[\n|\r|\r\n]?(\s+)?/g;

    const resultForData = agenda.slice(0, 1000);
    // find number
    const meetingPre = "Meeting #";
    let i = resultForData.indexOf(meetingPre) + meetingPre.length;
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
    const ooo = "))))--" + dateTemp + "--((((";
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
    if (n.includes(number)) {
      console.log("cos znó nie tak dzikuuu");
      return;
    }
    await saveMinutes(number, facilitator, date, short, agenda);
    setShowAddModal(false);
  };

  const meetingMinutesLink =
    "https://codi.kanthaus.online/communities-meeting/download";
  const re = /<!--((.|[\n|\r|\r\n])*?)-->[\n|\r|\r\n]?(\s+)?/g;

  React.useEffect(() => {
    const getData = async () => {
      try {
        let result = await fetch(meetingMinutesLink);
        result = await result.text();
        // remove comments
        result = await result.replace(re, "");
        await setAgenda(result);

        // get meeting minutes array
        const minutesD = await getMinutes();
        // sort from neest to oldest
        minutesD.sort((a, b) => b.number - a.number);

        // find meeting number
        const meetingPre = "Meeting #";
        let i = (await agenda.indexOf(meetingPre)) + meetingPre.length;
        const num = Number(await agenda.slice(i, i + 1));
        await setNumber(num);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

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
    <div>
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
    </div>
  );
}
