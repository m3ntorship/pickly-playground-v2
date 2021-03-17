import React, { useState } from "react";
import AddOption from "./CompMolecules/AddOption";
import OptionInput from "./CompMolecules/OptionInput";
import "./TextDefault.css";

const TextDefault = () => {
  const [options, setOptions] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);
  const [newOptionValue, setNewOptionValue] = useState("");
  const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const addOptionHandler = (newOptionValue) => {
    const randId = Math.random();
    setOptions([...options, { id: randId, value: newOptionValue }]);
  };
  const removeOptionHandler = (optionId) => {
    setOptions([...options].filter((item) => item.id !== optionId));
  };
  const changeInputValueHandler = (e) => {
    setOptions(
      [...options].map((option) => {
        if (e.target.id == option.id) {
          option.value = e.target.value;
        }
        return option;
      })
    );
  };
  return (
    <div className="options-box">
      {options.map((item, index) => {
        return (
          <OptionInput
            key={item.id}
            id={item.id}
            optionLetter={capLetters[index]}
            removeOption={() => removeOptionHandler(item.id)}
            index={index}
            optionsLength={options.length}
            changed={changeInputValueHandler}
            value={options[index].value}
          />
        );
      })}
      {options.length < capLetters.length && (
        <AddOption
          addOption={() => addOptionHandler(newOptionValue)}
          onChange={setNewOptionValue}
        />
      )}
    </div>
  );
};

export default TextDefault;
