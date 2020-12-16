import React from "react";
import "./HaftTop.css";

const HaftTop = () => {
  return (
    <div className="haft-top">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          width="5rem"
          height="5rem"
          style={{ height: "5rem", width: "5rem" }}
        >
          <defs>
            <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="95.703%">
              <stop offset="0%" stopColor="#1026F6"></stop>
              <stop offset="100%" stopColor="#000B76"></stop>
            </linearGradient>
            <linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="165.217%">
              <stop offset="0%" stopColor="#09F"></stop>
              <stop offset="100%" stopColor="#0019FF"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <circle cx="40" cy="40" r="37" fill="#000B76"></circle>
            <path
              fill="url(#a)"
              d="M1 22a4.729 4.729 0 01-.305-.336A32.342 32.342 0 01.208 11.33C2.194 5.609 7.108 0 14 0c8 0 16.333 4.667 25 14l-1.714 32.565A32.22 32.22 0 0132 47C17.99 47 6.081 37.996 1.748 25.458 2.033 23.937 1.784 22.784 1 22z"
              transform="translate(8 25)"
            ></path>
            <path
              fill="url(#b)"
              d="M.038 13.421C2.631 19.807 7.618 23 15 23 31 23 36 1 51 1c4.97 0 8.87 1.647 11.7 4.941A32.009 32.009 0 0164 15c0 17.673-14.327 32-32 32C14.327 47 0 32.673 0 15c0-.53.013-1.056.038-1.579z"
              transform="translate(8 25)"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default HaftTop;
