import React from "react";
import CalendarData from "./calendar-data/calendar-data.component";
import { getCalendar } from "../../firebase/calendars.utils";
import { useCookies } from "react-cookie";

export default function Calendar() {
  const [calendar, setCalendar] = React.useState({ text: "", id: "" });
  const [cookies, ,] = useCookies(["active-element"]);


  // TODO move this crypto to db utils
  const changeCalendarField = async (value) => {
    await setCalendar({
      text: value,
      id: calendar && calendar.id,
   });
  };

  React.useEffect(() => {
    // probably they could come from parent component but novv I vvill keep them here
    async function getData() {
      const pass = cookies["activeElement"];

      let calendarD = await getCalendar(pass);
      // check pass
      setCalendar(calendarD);
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
