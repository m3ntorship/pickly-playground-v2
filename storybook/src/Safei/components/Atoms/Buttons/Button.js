import React from "react";

// const Button = ({ size, type, isActive, hasIcon, iconLocation }) => {
//   //size = ['lg', 'md', 'sm]
//   //type = ['primary', 'secondary', 'text']
//   //isActive = ['true','false'] >>> Boolean
//   //hasIcon = ['true', false] >>> Boolean
//   //iconLocation = ['left', 'right', 'center']
//    //dsiabled?
//   return <div>Not a Button Yet </div>;
// };

// export default Button;
const Button = ({ disabled }) => {
  let opacity = "";
  if (disabled) {
    opacity = "opacity-25";
  }
  return (
    <button
      className={`h-8 py-1.5 px-4 text-xs bg-primary text-white rounded-full hover-state focus:outline-none focus-state flex items-center justify-center content-center ${opacity}`}
      disabled={disabled}
    >
      <span className="inline-block font-medium	">Post</span>
    </button>
  );
};

export default Button;
