import React from "react";
import TimeTemplate from "./TimeTemplate";

const lunchPeriod = ["11:30", "12:00", "12:30", "13:30", "13:40", "13:50"];
const dinnerPeriod = [
  "17:30",
  "18:00",
  "18:30",
  "18:50",
  "19:00",
  "19:30",
  "19:50",
  "20:10",
  "20:30",
];

function Period(props, ref) {
  const [selectedTime, setSelectedTime] = React.useState(null);

  const periodRef = React.useRef();

  React.useImperativeHandle(
    ref,
    () => {
      return {
        toPeriod: () =>
          periodRef.current?.scrollIntoView({ behavior: "smooth" }),
      };
    },
    []
  );

  React.useEffect(() => {
    if (selectedTime) {
      props.setPeriod(selectedTime.slice(2));
    }
  }, [selectedTime]);

  return (
    <>
      <div ref={ref} className="secondColumn">
        <div ref={periodRef}>時段</div>
        <div>
          <TimeTemplate
            arr={lunchPeriod}
            data="中午"
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
          <TimeTemplate
            arr={dinnerPeriod}
            data="晚上"
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </div>
        <div className="note">
          <div className="first">如有訂位以外的需求，請撥打電話與我們聯繫</div>
          <div className="second">00-00000000</div>
        </div>
      </div>
    </>
  );
}

export default React.forwardRef(Period);
