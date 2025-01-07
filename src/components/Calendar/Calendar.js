import React from "react";
import SelectNumberofPeople from "./sections/SelectNumberofPeople";
import SelectDate from "./sections/SelectDate";

function Calendar(props, ref) {
  let { people, setPeople, selectedDate, setSelectedDate } = props;
  const [openCalendar, setOpenCalendar] = React.useState(false);

  return (
    <div className="firstColumn">
      <SelectNumberofPeople
        {...props}
        ref={ref}
        openCalendar={openCalendar}
        setOpenCalendar={setOpenCalendar}
      />
      {openCalendar && <SelectDate {...props} />}
    </div>
  );
}

export default React.forwardRef(Calendar);
