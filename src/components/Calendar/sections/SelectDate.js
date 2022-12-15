import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import RenderCalendar from "./RenderCalendar";

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

export default function SelectDate(props) {
  const [firstCalendarYear, setFirstCalendarYear] = React.useState(currYear);
  const [firstCalendarMonth, setFirstCalendarMonth] = React.useState(currMonth);
  const [secondCalendarYear, setSecondCalendarYear] = React.useState(() =>
    firstCalendarMonth === 11 ? firstCalendarYear + 1 : firstCalendarYear
  );
  const [secondCalendarMonth, setSecondCalendarMonth] = React.useState(() =>
    firstCalendarMonth === 11 ? 0 : firstCalendarMonth + 1
  );
  const [page, setPage] = React.useState(0);

  const handleNextMonthBtn = () => {
    currMonth += 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    }

    setFirstCalendarYear(currYear);
    setFirstCalendarMonth(currMonth);

    setSecondCalendarYear(() =>
      secondCalendarMonth === 11 ? secondCalendarYear + 1 : secondCalendarYear
    );
    setSecondCalendarMonth(() =>
      secondCalendarMonth === 11 ? 0 : secondCalendarMonth + 1
    );

    setPage((prev) => prev + 1);
  };

  const handlePrevMonthBtn = () => {
    currMonth -= 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    }

    setFirstCalendarYear(currYear);
    setFirstCalendarMonth(currMonth);

    setSecondCalendarYear(() =>
      secondCalendarMonth === 0 ? secondCalendarYear - 1 : secondCalendarYear
    );
    setSecondCalendarMonth(() =>
      secondCalendarMonth === 0 ? 11 : secondCalendarMonth - 1
    );

    setPage((prev) => prev - 1);
  };

  return (
    <>
      <div className="calendarOuter">
        {page > 0 && (
          <FaChevronLeft className="leftIcon" onClick={handlePrevMonthBtn} />
        )}
        {page < 2 && (
          <FaChevronRight className="rightIcon" onClick={handleNextMonthBtn} />
        )}
        <div className="calendarContainer">
          <RenderCalendar
            currYear={currYear}
            currMonth={currMonth}
            {...props}
          />
        </div>
        <div className="calendarContainer second">
          <RenderCalendar
            currYear={secondCalendarYear}
            currMonth={secondCalendarMonth}
            {...props}
          />
        </div>
      </div>
    </>
  );
}
