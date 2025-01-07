import React from "react";

export default function ListofDates(props) {
  let {
    currYear,
    currMonth,
    selectedDate,
    date,
    setSelectedDate,
    id,
    defaultSelectedDate,
  } = props;

  const handleOnClick = (date) => {
    setSelectedDate(
      new Date(currYear, currMonth, date).toLocaleString("zh-TW", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short",
      })
    );
  };

  return (
    <>
      <div
        className={
          defaultSelectedDate === id || selectedDate === id
            ? "date active"
            : "date"
        }
        onClick={() => handleOnClick(date)}
      >
        <div className="dateText">{props.date}</div>
      </div>
    </>
  );
}
