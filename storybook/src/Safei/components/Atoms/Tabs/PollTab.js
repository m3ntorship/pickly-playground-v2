import React from "react";
import "./PollTab.css";

const PollTab = () => {
  return (
    <button
      className="group text-sm relative flex items-center justify-around px-3.5 py-1.5 h-8 border border-grey border-opacity-0 bg-grey-shd7  hover:bg-white hover:border-opacity-100  rounded-full focus:outline-none transition duration-500 ease-in-out"
      style={{ paddingRight: "12px", marginRight: "18px" }}
    >
      <label className="cursor-pointer relative flex items-center justify-items-center content-center">
        <input type="radio" name="radio" className="bg-primary" />
        <span className="checkmark h-4 w-4 rounded-full border border-primary  bg-white text-transparent absolute left-0 top-1 mr-2 hover:bg-grey-shd4 transition duration-500 ease-in-out">
          {" "}
        </span>
        <svg
          className="w-6 h-6 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        <span className="ml-2">Image Poll</span>
      </label>
    </button>
  );
};

export default PollTab;
