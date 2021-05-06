import React from "react";

import ReactMarkdown from "react-markdown";
import StringCrypto from "string-crypto";

import gfm from "remark-gfm";

import { useAuth } from "../../../context/auth.context";
import { saveCalendar } from "../../../firebase/calendars.utils";

import "./calendar-data.styles.scss";
import Calendar from "../calendar.component";

function CalendarData({ calendar, changeCalendarField }) {
  const { text, id } = calendar || { text: "", id: "" };
  const password = "./documents-data.styles.scss/llllkhhhnbn/";
  const [editing, setEditing] = React.useState(false);

  const onTextChange3 = async (event) => {
    await changeCalendarField(event.target.value);
  };
  const { encryptString } = new StringCrypto();

  const { currentUser } = useAuth();

  const save = () => {
    let encryptedString = encryptString(text, password);

    saveCalendar(id, encryptedString, true);
  };

  React.useEffect(() => {
    setEditing(false);
  }, []);

  const toggleEditing = (value) => {
    setEditing(value);
    if (!value) {
      save();
    }
  };

  return (
    <div className="calendar-container-wrapper">
      <div>
        {currentUser && !editing && (
          <div
            className="calendar-edit-button"
            onClick={() => toggleEditing(true)}
          >
            edit
          </div>
        )}
        {currentUser && editing && (
          <div
            className="calendar-edit-button"
            onClick={() => toggleEditing(false)}
          >
            stop editing and save
          </div>
        )}
      </div>
      <div className="calendar-container">
        {currentUser && editing && <button onClick={save}>SAVE</button>}
        {currentUser && editing && (
          <div className={"calendar-edit"}>
            <textarea value={text} onChange={onTextChange3}></textarea>
          </div>
        )}
        <div
          className={"calendar-markdown" + (!editing ? " editing-markdon" : "")}
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

export default CalendarData;
