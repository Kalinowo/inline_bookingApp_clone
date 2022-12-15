import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomerForm from "../components/CustomerInfo/CustomerForm";

export default function CustomerInfo() {
  const [selectedName, setSelectedName] = React.useState("");
  const [selectedGender, setSelectedGender] = React.useState();
  const [selectedCellphone, setSelectedCellphone] = React.useState("");
  const [selectedEmail, setSelectedEmail] = React.useState();
  const [selectedPurpose, setSelectedPurpose] = React.useState([]);
  const [selectedNote, setSelectedNote] = React.useState("");

  const [nameValidation, setNameValidation] = React.useState(false);
  const [phoneValidation, setphoneValidation] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toSuccessPage = () => {
    if (!selectedName || !selectedCellphone || selectedCellphone.length < 10) {
      if (!selectedName) setNameValidation(true);
      if (!selectedCellphone) setphoneValidation(true);
      return;
    }

    navigate("/backend", {
      state: {
        people: location.state.people,
        selectedDate: location.state.selectedDate,
        period: location.state.period,
        selectedName: selectedName,
        selectedGender: selectedGender,
        selectedCellphone: selectedCellphone,
        selectedEmail: selectedEmail,
        selectedPurpose: selectedPurpose,
        selectedNote: selectedNote,
      },
    });
  };

  return (
    <>
      <div className="customerInfoOuter">
        <div className="bookingDataContainer">
          <div>
            <svg viewBox="0 0 20 20">
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h20v20H0z"></path>
                <circle
                  cx="10"
                  cy="6"
                  r="4"
                  style={{ stroke: "black" }}
                ></circle>
                <path
                  d="M4 17c0-4.667 2-7 6-7s6 2.333 6 7H4z"
                  style={{ stroke: "black" }}
                ></path>
              </g>
            </svg>
            {location.state.people}
          </div>
          <div>
            <svg viewBox="0 0 20 20">
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h20v20H0z"></path>
                <rect
                  width="14"
                  height="13"
                  x="3"
                  y="4"
                  rx="2"
                  style={{ stroke: "black" }}
                ></rect>
                <path
                  d="M12 13h1v1h-1zm-3 0h1v1H9zm0-3h1v1H9zm-3 3h1v1H6zm0-3h1v1H6zM5 4h10a2 2 0 012 2v1H3V6a2 2 0 012-2zm1 2V2m8 4V2"
                  style={{ stroke: "black" }}
                ></path>
              </g>
            </svg>

            {location.state.selectedDate.split(" ")[0]}
          </div>
          <div>
            <svg viewBox="0 0 20 20">
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h20v20H0z"></path>
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  style={{ stroke: "black" }}
                ></circle>
                <path d="M10 4v6l3 3" style={{ stroke: "black" }}></path>
              </g>
            </svg>
            {location.state.period}
          </div>
        </div>
        <div className="customerFormContainer">
          <CustomerForm
            selectedName={selectedName}
            setSelectedName={setSelectedName}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedCellphone={selectedCellphone}
            setSelectedCellphone={setSelectedCellphone}
            selectedEmail={selectedEmail}
            setSelectedEmail={setSelectedEmail}
            selectedPurpose={selectedPurpose}
            setSelectedPurpose={setSelectedPurpose}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            nameValidation={nameValidation}
            setNameValidation={setNameValidation}
            phoneValidation={phoneValidation}
            setphoneValidation={setphoneValidation}
          />
          <div className="formLastSection">
            <div>
              按下確認訂位代表我已閱讀並同意
              <span style={{ marginLeft: "5px" }}>
                <u>inline隱私權條款</u>
              </span>
            </div>
            <div className="formConfirmBtn" onClick={() => toSuccessPage()}>
              <button>確認訂位</button>
            </div>
            <div className="formReturnBtn">
              <button>回上一步</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
