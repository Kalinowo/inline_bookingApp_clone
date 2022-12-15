import React from "react";

import ListofDates from "./ListofDates";
import SelectDate from "./SelectDate";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septemeber",
  "October",
  "November",
  "December",
];

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function RenderCalender(props) {
  const [isToday, setIsToday] = React.useState(false);

  let { currYear, currMonth } = props;
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();

  let dates = Array.from({ length: lastDateofMonth }, (value, i) => i + 1);
  let placeHolder = Array.from(
    { length: firstDayofMonth },
    (value, i) => i + 1
  );

  //13 改成 1月(January)
  if (currMonth > 11) {
    currMonth = currMonth - months.length;
  }

  //generate date id
  const generateid = (date) => {
    let id = new Date(currYear, currMonth, date).toLocaleString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
    });
    return id;
  };

  React.useEffect(() => {
    let id = new Date().toLocaleString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
    });

    if (props.selectedDate) {
      setIsToday(null);
    } else {
      setIsToday(id);
    }
  }, [props.selectedDate]);

  return (
    <>
      <div className="yearMonthContainer">
        {`${months[currMonth]} ${currYear}`}
      </div>
      <div className="weekContainer">
        {weeks.map((day, index) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="dateContainer">
        {placeHolder.map((date, index) => (
          <div key={index} className="placeholder"></div>
        ))}
        {dates.map((date, index) => (
          <ListofDates
            key={index}
            id={generateid(date)}
            defaultSelectedDate={isToday}
            setIsToday={setIsToday}
            date={date}
            {...props}
          />
        ))}
      </div>
    </>
  );
}
