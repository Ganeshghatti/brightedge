import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-arrow custom-right-arrow absolute right-5 top-1/2`}
    >
      <ArrowRightIcon style={{color:"white"}}/>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
      >
        <g clip-path="url(#clip0_390_875)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.5 42.1875C27.7214 42.1875 32.729 40.1133 36.4212 36.4212C40.1133 32.729 42.1875 27.7214 42.1875 22.5C42.1875 17.2786 40.1133 12.271 36.4212 8.57883C32.729 4.88672 27.7214 2.8125 22.5 2.8125C17.2786 2.8125 12.271 4.88672 8.57883 8.57883C4.88671 12.271 2.8125 17.2786 2.8125 22.5C2.8125 27.7214 4.88671 32.729 8.57883 36.4212C12.271 40.1133 17.2786 42.1875 22.5 42.1875ZM22.5 2.6831e-07C28.4674 3.3947e-07 34.1903 2.37053 38.4099 6.5901C42.6295 10.8097 45 16.5326 45 22.5C45 28.4674 42.6295 34.1903 38.4099 38.4099C34.1903 42.6295 28.4674 45 22.5 45C16.5326 45 10.8097 42.6295 6.5901 38.4099C2.37053 34.1903 1.9715e-07 28.4674 2.6831e-07 22.5C3.3947e-07 16.5326 2.37053 10.8097 6.5901 6.5901C10.8097 2.37053 16.5326 1.9715e-07 22.5 2.6831e-07ZM12.6563 21.0938C12.2833 21.0938 11.9256 21.2419 11.6619 21.5056C11.3982 21.7694 11.25 22.127 11.25 22.5C11.25 22.873 11.3982 23.2306 11.6619 23.4944C11.9256 23.7581 12.2833 23.9063 12.6563 23.9063L28.9491 23.9063L22.9106 29.9419C22.6466 30.2059 22.4982 30.5641 22.4982 30.9375C22.4982 31.3109 22.6466 31.6691 22.9106 31.9331C23.1747 32.1972 23.5328 32.3455 23.9063 32.3455C24.2797 32.3455 24.6378 32.1972 24.9019 31.9331L33.3394 23.4956C33.4703 23.365 33.5742 23.2098 33.6451 23.039C33.716 22.8681 33.7525 22.685 33.7525 22.5C33.7525 22.315 33.716 22.1319 33.6451 21.961C33.5742 21.7902 33.4703 21.635 33.3394 21.5044L24.9019 13.0669C24.6378 12.8028 24.2797 12.6545 23.9063 12.6545C23.5328 12.6545 23.1747 12.8028 22.9106 13.0669C22.6466 13.3309 22.4982 13.6891 22.4982 14.0625C22.4982 14.4359 22.6466 14.7941 22.9106 15.0581L28.9491 21.0938L12.6563 21.0938Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_390_875">
            <rect
              width="45"
              height="45"
              fill="white"
              transform="translate(0 45) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg> */}
    </button>
  );
};

export default CustomRightArrow;
