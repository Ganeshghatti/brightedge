import React from "react";

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-arrow custom-right-arrow absolute right-5 top-1/2`}
    >
      {/* <ArrowRightIcon style={{ color: "white" }} /> */}
      {window.innerWidth > 867 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
        >
          <circle cx="25.5561" cy="25.5562" r="25.4438" fill="#1682FB" />
          <path
            d="M23.5415 34.7568L32.4692 25.8038L23.5415 16.8509"
            stroke="white"
            strokeWidth="2.97588"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <circle cx="12.5" cy="12.5" r="12.5" fill="#1682FB" />
          <path
            d="M11.5103 17.0201L15.8962 12.6216L11.5103 8.22325"
            stroke="white"
            stroke-width="2.97588"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default CustomRightArrow;
