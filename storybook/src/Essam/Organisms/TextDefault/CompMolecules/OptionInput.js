import React from "react";
import "./OptionInput.css";

const OptionInput = ({
  id,
  optionLetter,
  removeOption,
  index,
  optionsLength,
  changed,
  value,
}) => {
  return (
    <div className="flex items-center mb-xs ">
      <svg
        className="mr-s"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 9H4V11H20V9ZM4 15H20V13H4V15Z" fill="#8D9A9E" />
      </svg>
      <div className="relative w-full">
        <input
          className="option-input"
          type="text"
          placeholder={`Option ${index + 1}`}
          id={id}
          value={value}
          onChange={changed}
        />
        <div className="option-letter-box">
          <h3 className="option-letter ">{optionLetter}</h3>
        </div>
      </div>
      {optionsLength > 2 && (
        <svg
          className="ml-s cursor-pointer"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={removeOption}
        >
          <path
            d="M4.66675 7.3335H11.3334V8.66683H4.66675V7.3335Z"
            fill="#FE544A"
          />
          <path
            d="M7.99992 1.3335C4.32392 1.3335 1.33325 4.32416 1.33325 8.00016C1.33325 11.6762 4.32392 14.6668 7.99992 14.6668C11.6759 14.6668 14.6666 11.6762 14.6666 8.00016C14.6666 4.32416 11.6759 1.3335 7.99992 1.3335ZM7.99992 13.3335C5.05925 13.3335 2.66659 10.9408 2.66659 8.00016C2.66659 5.0595 5.05925 2.66683 7.99992 2.66683C10.9406 2.66683 13.3333 5.0595 13.3333 8.00016C13.3333 10.9408 10.9406 13.3335 7.99992 13.3335Z"
            fill="#FE544A"
          />
        </svg>
      )}
    </div>
  );
};

export default OptionInput;
