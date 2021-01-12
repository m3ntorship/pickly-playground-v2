import React from "react";
import Toggle from "../../Atoms/Toggles/Toggle";

const PostOptions = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="mt-0 pb-2">
        <Toggle size="sm" />
      </div>
      <div
        className="text-xs ml-2 leading-4 mb-0 pr-6  border-r border-grey-shd6"
        style={{ paddingTop: "2px" }}
      >
        Hide My Identity
      </div>
      <div
        style={{ paddingTop: "2px" }}
        className="text-xs ml-2 leading-4 mb-0 pr-6 cursor-pointer"
      >
        <label>Privacy:</label>
        <select name="privacy" id="privacy" className="cursor-pointer">
          <option value="Public">Public</option>
          <option value="Custom">Custom</option>
          <option value="Private">Private</option>
        </select>
      </div>
    </div>
  );
};

export default PostOptions;
