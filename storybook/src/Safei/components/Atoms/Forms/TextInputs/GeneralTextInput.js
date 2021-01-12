import React from "react";

const GeneralTextInput = () => {
  return (
    <div className="inline-block">
      <input
        placeholder="What do you want to ask about?"
        className="px-xl py-l rounded-md border  border-grey-shd5 placeholder-grey-shd1 h-8  w-96 hover:border-grey-shd1  outline-none focus:outline-none focus:border-dark"
      />
    </div>
  );
};

export default GeneralTextInput;
