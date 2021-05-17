import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useCookies } from "react-cookie";

import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";
import { getMinutes, saveMinutes } from "../../../firebase/meetings.utils";

export default function MeetingMinutes() {
  const [minutesModal, setMinutesModal] = React.useState();
  const [currentMinutes, setCurrentMinutes] = React.useState(1);
  const [cookies, setCookie, removeCookie] = useCookies(["active-element"]);

  const [previousMinutes, setPreviousMinutes] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const pass = cookies["activeElement"];

      try {
        // get meeting minutes array
        const minutesD = await getMinutes(pass);
        console.log(minutesD);
        console.log(typeof minutesD);
        console.log("KKKKKKKKK8888KKKKKKKKKKKKKKKKk");
        for (const m of minutesD) {
          console.log("pp");
          console.log(m);
          console.log(m.number);
          console.log(Number(m.number));
        }
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKKk");

        // sort from neest to oldest
        console.log(
          minutesD.sort((a, b) => Number(a.number) - Number(b.number))
        );
        console.log(
          minutesD.sort((a, b) => Number(b.number) - Number(a.number))
        );

        console.log(Number(4));
        console.log(Number("4"));
        console.log(Number(4) === Number("4"));
        await setPreviousMinutes(minutesD);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  const openMinutes = (number) => {
    setMinutesModal(true);
    setCurrentMinutes(number);
  };

  const handleCloseMinutesModal = () => {
    setMinutesModal(false);
  };

  const prevMinutes = () => {
    setCurrentMinutes((prev) => {
        // check prev minutes
        console.log("OOOOOO")
        console.log(previousMinutes)
        const minutesNumbers = previousMinutes.map((m) => m.number)
        console.log(minutesNumbers)
        for(let i = prev-1; i > 0; i--){
            console.log(i)
            console.log(minutesNumbers.includes(i))
            if(minutesNumbers.includes(i)){
                return i;
            } 
        }
        return prev;
    })
  }

  const nextMinutes = () => {
    setCurrentMinutes((prev) => {
        // check prev minutes
        const minutesNumbers = previousMinutes.map((m) => m.number)
        for(let i = prev+1; i <= Math.max(minutesNumbers); i++){
            if(minutesNumbers.includes(i)){
                return i;
            }
            return 
        }
        return prev;
    })
}

  return (
    <div>
      {previousMinutes.map(({ number, facilitator, date, short }) => (
        <Row className="minutes-block" onClick={() => openMinutes(number)}>
        <Col lg={1}></Col>
        <Col lg={10}>
          <div className="title-row">
            <div>{"Comunity building meeting " + number}</div>
          </div>
          <div>{"facilitator: " + facilitator}</div>
          <div>{"Date: " + date}</div>
          <div>{short}</div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      ))}

      <Modal
        dialogClassName="minutes-modal-window"
        animation={false}
        show={minutesModal}
        onHide={handleCloseMinutesModal}
      >
        <Modal.Body>
          <Container className="minutes-modal">
            <Row>
              <Col lg={2}>
                <div className="arrow-button" onClick={prevMinutes}>prev</div>
              </Col>
              <Col lg={8}>
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
              </Col>
              <Col lg={2}>
                <div className="arrow-button" onClick={nextMinutes}>next</div>
              </Col>
            </Row>
            <Row>
            <Button variant="secondary" onClick={handleCloseMinutesModal}>
            Back
            </Button>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
