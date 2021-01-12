import React from "react";
//props to be added later to vary in size lg, md, sm based on input.
const Avatar = () => {
  return (
    <div className="inline-block">
      <img
        src="../../../../imgs/avatar.png"
        className="rounded-full h-14 w-14 mb-1"
      />
    </div>
  );
};

export default Avatar;
