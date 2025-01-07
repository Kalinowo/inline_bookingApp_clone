import React from "react";
import CustomSpan from "./UI/CustomSpan";

const defaultPurpose = [
  "慶生",
  "約會",
  "週年慶",
  "家庭用餐",
  "朋友聚餐",
  "商務聚餐",
];

export default function CustomerForm(props) {
  let {
    selectedName,
    setSelectedName,
    selectedGender,
    setSelectedGender,
    selectedCellphone,
    setSelectedCellphone,
    selectedEmail,
    setSelectedEmail,
    selectedPurpose,
    setSelectedPurpose,
    selectedNote,
    setSelectedNote,
    nameValidation,
    setNameValidation,
    phoneValidation,
    setphoneValidation,
  } = props;

  const onHandleNameValidation = () => {
    if (selectedName.length === 0) {
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }
  };

  const onHandlePhoneValidation = () => {
    if (selectedCellphone.length === 0 || selectedCellphone.length !== 10) {
      setphoneValidation(true);
    } else {
      setphoneValidation(false);
    }
  };

  const onHandleChangeName = (e) => {
    setSelectedName(e.target.value);
    setNameValidation(false);
  };

  const onHandleChangePhone = (e) => {
    setSelectedCellphone(e.target.value);
    setphoneValidation(false);
  };

  const onHandlePurpose = (purpose) => {
    if (selectedPurpose.includes(purpose)) {
      let newArr = selectedPurpose.filter((item) => item !== purpose);
      setSelectedPurpose(newArr);
    } else {
      setSelectedPurpose((prev) => [...prev, purpose]);
    }
  };

  return (
    <>
      <div className="title">確認訂位與填寫聯絡資訊</div>
      <div className="innerFormContainer">
        <div className="nameGenderOuter">
          <label className="labelName" htmlFor="name">
            訂位人姓名
          </label>
          <div className="nameGenderContainer">
            <input
              id="name"
              className="nameInput"
              value={selectedName}
              onChange={onHandleChangeName}
              onBlur={onHandleNameValidation}
            />
            <div
              className="genderRadio"
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              <label>
                <input type="radio" name="gender" value="小姐" />
                <span>小姐</span>
              </label>
              <label>
                <input type="radio" name="gender" value="先生" />
                <span>先生</span>
              </label>
              <label>
                <input type="radio" name="gender" value="other" />
                <span>其他</span>
              </label>
            </div>
          </div>
          {nameValidation && (
            <div className="nameValidationContainer">
              <svg viewBox="0 0 20 20">
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h20v20H0z"></path>
                  <path
                    fill="#FF532D"
                    d="M19.279 15.581l.002-.003-7.933-13.685a1.462 1.462 0 0 0-2.695 0L.72 15.578l.002.003a1.444 1.444 0 0 0-.221.765c0 .807.655 1.462 1.462 1.462.033 0 .065-.008.099-.01l.006.01h15.867l.005-.01c.034.002.065.01.1.01.807 0 1.461-.655 1.461-1.462 0-.282-.083-.542-.221-.765z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M10.002 15.023c-.605 0-.967-.322-.967-.864 0-.551.361-.874.967-.874.6 0 .962.323.962.874 0 .542-.361.864-.962.864zM10.886 7.109l-.146 4.73H9.26l-.146-4.73z"
                  ></path>
                </g>
              </svg>
              訂位人姓名不可留白
            </div>
          )}
        </div>
        <div className="phoneNumberContainer">
          <label className="labelPhoneNumber">訂位人手機號碼</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            value={selectedCellphone}
            onChange={(e) => onHandleChangePhone(e)}
            onBlur={onHandlePhoneValidation}
          />
          {phoneValidation && (
            <div className="phoneValidationContainer">
              <svg viewBox="0 0 20 20">
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h20v20H0z"></path>
                  <path
                    fill="#FF532D"
                    d="M19.279 15.581l.002-.003-7.933-13.685a1.462 1.462 0 0 0-2.695 0L.72 15.578l.002.003a1.444 1.444 0 0 0-.221.765c0 .807.655 1.462 1.462 1.462.033 0 .065-.008.099-.01l.006.01h15.867l.005-.01c.034.002.065.01.1.01.807 0 1.461-.655 1.461-1.462 0-.282-.083-.542-.221-.765z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M10.002 15.023c-.605 0-.967-.322-.967-.864 0-.551.361-.874.967-.874.6 0 .962.323.962.874 0 .542-.361.864-.962.864zM10.886 7.109l-.146 4.73H9.26l-.146-4.73z"
                  ></path>
                </g>
              </svg>
              {selectedCellphone.length === 0
                ? "訂位人手機號碼不可留空"
                : "您填寫的手機號碼格式有誤"}
            </div>
          )}
        </div>
        <div className="emailContainer">
          <label>訂位人Email</label>
          <input
            type="email"
            value={selectedEmail}
            onChange={(e) => setSelectedEmail(e.target.value)}
          />
          <div className="checkboxContainer">
            <input id="saveInfo" type="checkbox" />
            <label htmlFor="saveInfo">將訂位人資訊儲存在此瀏覽器</label>
            <div className="note">
              (下次使用同一個瀏覽器訂位時即會自動帶入訂位人資訊，多人共用電腦請勿打勾。)
            </div>
          </div>
        </div>
        <div className="purposeContainer">
          <label>用餐目的</label>
          <input />
          <div className="purposeSelection">
            {defaultPurpose.map((purpose, index) => (
              <CustomSpan
                key={purpose}
                selectedPurpose={selectedPurpose}
                onClick={onHandlePurpose}
                children={purpose}
              />
            ))}
          </div>
        </div>
        <div className="otherContainer">
          <label>其他備註</label>
          <div className="textareaContainer">
            <textarea
              value={selectedNote}
              rows="3"
              maxLength="400"
              placeholder="有任何特殊需求嗎？可以先寫在這裡喔！（例如：行動不便、過敏）"
              onChange={(e) => setSelectedNote(e.target.value)}
            />
            <div className="countLength">{`(${selectedNote.length}/400)`}</div>
          </div>
        </div>
      </div>
    </>
  );
}
