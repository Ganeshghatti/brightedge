import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CustomRightArrow = ({ onClick }) => {
  return window.innerWidth > 867 ? (
    <button
      onClick={onClick}
      className={`custom-arrow custom-right-arrow absolute right-5 top-1/2`}
    >
      {/* <ArrowRightIcon style={{ color: "white" }} /> */}
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
          stroke-width="2.97588"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  ) : null;
};

export default CustomRightArrow;
