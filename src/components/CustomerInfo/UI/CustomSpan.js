export default function CustomSpan({ onClick, children, selectedPurpose }) {
  return (
    <div
      onClick={() => onClick(children)}
      style={
        selectedPurpose.includes(children)
          ? {
              background: "rgb(255, 133, 14)",
              border: "solid rgb(255, 133, 14) 1px",
              color: "white",
            }
          : {}
      }
    >
      <span>{children}</span>
      {selectedPurpose.includes(children) && (
        <span>
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
        </span>
      )}
    </div>
  );
}
