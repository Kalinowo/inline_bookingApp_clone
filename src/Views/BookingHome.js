import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Calendar from "../components/Calendar/Calendar";
import Period from "../components/Period/Period";
import { FaChevronRight } from "react-icons/fa";
import CustomSpan from "../components/UI/CustomSpan";

let date = new Date();

let today = date.toLocaleString("zh-TW", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short",
});

let defaultValues = { people: "1位大人", selectedDate: today, period: "時段" };

export default function BookingHome() {
  const [people, setPeople] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState();
  const [period, setPeriod] = React.useState("");

  const navigate = useNavigate();

  const toCustomerInfoPage = () => {
    if (period.length !== 0) {
      navigate("/form", {
        state: {
          people: people ? people : defaultValues.people,
          selectedDate: selectedDate
            ? selectedDate
            : defaultValues.selectedDate,
          period: period ? period : defaultValues.period,
        },
      });
    }
  };

  return (
    <>
      {
        <React.Fragment>
          <div className="bookingHomeOuter">
            <Calendar
              people={people}
              setPeople={setPeople}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <Period period={period} setPeriod={setPeriod} />
            <div className="footer">
              <div className="confirmContainer">
                <div className="confirmList">
                  <div>您已選擇預訂：</div>
                  <CustomSpan
                    children={people ? people : defaultValues.people}
                  />
                  <FaChevronRight />
                  <CustomSpan
                    children={
                      selectedDate
                        ? selectedDate.split(" ")[0]
                        : defaultValues.selectedDate.split(" ")[0]
                    }
                  />
                  <FaChevronRight />
                  <CustomSpan
                    children={period ? period : defaultValues.period}
                  />
                </div>
              </div>
              <div className="btnContainer">
                <div
                  className="btn"
                  style={
                    period.length === 0
                      ? { background: "lightgray", color: "white" }
                      : {}
                  }
                  onClick={toCustomerInfoPage}
                >
                  {period.length === 0 ? "請選擇用餐時段" : "立即訂位"}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      }
    </>
  );
}
