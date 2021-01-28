import React, { useState } from "react";
import AddOption from "./components/AddOption";
import OptionInput from "./components/OptionInput";

const TextDefault = () => {
  const [addOption, setAddOption] = useState([]);
  const alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  const addOptionHandler = () => {
    let id = addOption.length + 1;
    if (addOption[addOption.length - 1] !== alpha[alpha.length - 1]) {
      setAddOption([...addOption, { id: id, alpha: alpha[id - 1] }]);
    }
  };
  const removeOptionHandler = (e) => {
    addOption.filter((item) => item.id !== e.target.id);
    console.log(addOption);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full">
        {addOption.map((item, index) => (
          <OptionInput
            key={index}
            id={item.id}
            alpha={item.alpha}
            click={removeOptionHandler}
          />
        ))}
      </div>
      <AddOption click={addOptionHandler} />
    </div>
  );
};

export default TextDefault;
