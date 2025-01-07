import React from "react";

export default function TimeTemplate(props) {
  let { arr, data, selectedTime, setSelectedTime } = props;
  return (
    <>
      <div className="periodContainer" data-name={data}>
        {arr.map((time, index) => (
          <React.Fragment key={time}>
            <span
              className={selectedTime === `${data + time}` ? "active" : null}
              onClick={() => setSelectedTime(data + time)}
            >
              {time}
            </span>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
