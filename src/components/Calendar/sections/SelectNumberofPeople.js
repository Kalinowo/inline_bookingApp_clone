import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function SelectNumberofPeople(props) {
  let { people, setPeople, selectedDate, openCalendar, setOpenCalendar } =
    props;

  let today = new Date().toLocaleString("zh-TW", {
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  let compare;

  if (selectedDate) {
    compare = selectedDate.slice(5);
  }

  return (
    <>
      <div className="title">Booking App</div>
      <div className="optionContainer">
        <div className="numberOfPeople">
          <div>人數</div>
          <div>
            <select
              value={people}
              selected={"1位大人"}
              onChange={(e) => setPeople(e.target.value)}
            >
              <option value="1位大人">1位大人</option>
              <option value="2位大人">2位大人</option>
            </select>
          </div>
        </div>
        <div className="date">
          <div>日期</div>
          <div
            className="dateSelect"
            onClick={() => setOpenCalendar(!openCalendar)}
          >
            {selectedDate ? selectedDate.slice(5) : today + " (今日)"}
            {today === compare ? " (今日)" : null}
            {openCalendar ? (
              <FaAngleDown className="downIcon" />
            ) : (
              <FaAngleUp className="upIcon" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
