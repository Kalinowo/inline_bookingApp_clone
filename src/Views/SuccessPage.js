import React from "react";
import { useLocation } from "react-router-dom";

export default function SuccessPage() {
  const location = useLocation();

  return (
    <>
      <div className="successPageOuter">
        <div className="successPageInner">
          <div className="successAlert">
            <div className="alertContent">
              <div className="checkSvg">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L5 9"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M1 5L5 9"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>您已訂位成功！</div>
            </div>
            <div>
              {location.state.selectedEmail
                ? "訂位詳細資訊已寄送至您的電子信箱"
                : ""}
            </div>
          </div>
          <div className="storeInfoContainer">
            <div className="">ＯＯＯ ＯＯＯＯ ＯＯ店</div>
            <div className="">02-xxxx-xxxx</div>
            <div className="">台北市...</div>
          </div>
          <div className="appointmentContainer">
            <div>
              {location.state.selectedName}
              {location.state.selectedGender !== "其他"
                ? location.state.selectedGender
                : ""}
              您好
            </div>
            <div>以下是您的訂位資訊</div>
            <div className="appointmentData">
              <div>{location.state.selectedDate}</div>
              <div>{location.state.period}</div>
              <div>{location.state.people}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
