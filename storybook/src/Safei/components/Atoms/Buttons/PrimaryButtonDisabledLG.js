/* eslint-disable react/react-in-jsx-scope */

const PrimaryButtonDisabledLG = (props) => {
  return (
    <button className="py-4 px-10 btn-primary-disabled text-lg" disabled>
      <span className="inline-block">{props.text}</span>
      <svg
        className="w-9 h-9 inline-block ml-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export default PrimaryButtonDisabledLG;
