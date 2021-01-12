import React from "react";
//props to be added later to vary in size lg, md, sm based on input.
const Avatar = () => {
  return (
    <div className="inline-block">
      <img src="/avatar.png" className="rounded-full h-10 w-10  mt-1" />
    </div>
  );
};

export default Avatar;
