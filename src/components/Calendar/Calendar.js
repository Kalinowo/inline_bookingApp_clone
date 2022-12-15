import React from "react";
import SelectNumberofPeople from "./sections/SelectNumberofPeople";
import SelectDate from "./sections/SelectDate";

export default function Calendar(props) {
  let { people, setPeople, selectedDate, setSelectedDate } = props;
  const [openCalendar, setOpenCalendar] = React.useState(false);

  return (
    <div className="firstColumn">
      <SelectNumberofPeople
        {...props}
        openCalendar={openCalendar}
        setOpenCalendar={setOpenCalendar}
      />
      {openCalendar && <SelectDate {...props} />}
    </div>
  );
}
