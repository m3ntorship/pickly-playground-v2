import React, { useState } from "react";
import AddOption from "./CompMolecules/AddOption";
import OptionGroupBox from "./CompMolecules/OptionGroupBox";

const OptionGroup = () => {
  const [optionGroups, setOptionGroups] = useState([{ id: 1 }]);
  const addOptionGroupHandler = () => {
    const randId = Math.random();
    setOptionGroups([...optionGroups, { id: randId }]);
  };
  const removeOptionGroupHandler = (GroupId) => {
    setOptionGroups(
      optionGroups.filter((optionGroup) => optionGroup.id !== GroupId)
    );
  };
  return (
    <div className="flex flex-col w-39xl">
      {optionGroups.map((optionGroup, index) => (
        <OptionGroupBox
          key={optionGroup.id}
          removeGroup={() => removeOptionGroupHandler(optionGroup.id)}
          index={index}
        />
      ))}
      <AddOption click={addOptionGroupHandler} />
    </div>
  );
};

export default OptionGroup;
