import React from "react";
import CalendarData from "./calendar-data/calendar-data.component";
import { getCalendar } from "../../firebase/calendars.utils";
import StringCrypto from "string-crypto";

export default function Calendar() {
  const [calendar, setCalendar] = React.useState({ text: "", id: "" });

  const { decryptString } = new StringCrypto();
  const password = "./documents-data.styles.scss/llllkhhhnbn/";

  // TODO move this crypto to db utils
  const changeCalendarField = async (value) => {
    await setCalendar({
      text: value,
      id: calendar && calendar.id,
      test: calendar.test,
    });
  };

  React.useEffect(() => {
    // probably they could come from parent component but novv I vvill keep them here
    async function getData() {
      let calendarD = await getCalendar();
      // check pass
      const decSen = await decryptString(calendarD.test.test, password);
      const decSenArr = decSen.split(" ");
      let s = "";
      for (let word of decSenArr) {
        s = s.concat(word.length);
      }
      if (s === "45446246104296627493") {
        calendarD = {
          text:
            calendarD.text === ""
              ? ""
              : await decryptString(calendarD.text, password),
          test: calendarD.test,
          id: calendarD.id,
        };
        setCalendar(calendarD);
      } else {
        calendarD = { text: "" };
        console.log("musimy pokazac blad hasla");
      }
    }
    getData();
  }, []);

  return (
    <div>
      <CalendarData
      calendar={calendar}
        changeCalendarField={changeCalendarField}
      />
    </div>
  );
}
