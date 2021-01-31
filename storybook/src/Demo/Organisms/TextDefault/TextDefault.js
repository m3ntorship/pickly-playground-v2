import React, { useState, useRef } from "react";
import AddOption from "./components/AddOption";
import OptionInput from "./components/OptionInput";

const TextDefault = () => {
  const [addOption, setAddOption] = useState([{ id: 1 }, { id: 2 }]);
  const [inputVal, setInputVal] = useState();
  const inputParent = useRef(null);
  // const alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  //  Alphabet letters
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  const addOptionHandler = () => {
    const numbers = "123456789";
    const randId = Math.floor(Math.random() * numbers);
    //alpha: alpha[id - 1]
    setAddOption([...addOption, { id: randId }]);
  };
  const removeOptionHandler = (e) => {
    setAddOption(
      addOption.filter((item) => item.id.toString() !== e.target.id)
    );
  };
  const inputValHandler = () => {
    let inputValues = [];
    inputParent.current.childNodes.forEach((input) => {
      let inputValue = input.childNodes[1].childNodes[0].value;
      if (inputValue !== "") {
        inputValues.push(inputValue);
      }
    });
    setInputVal(inputValues);
  };
  console.log(inputVal);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full" ref={inputParent}>
        {addOption.map((item, index) => {
          const letter = letters[index];
          return (
            <OptionInput
              key={item.id}
              id={item.id}
              alpha={letter}
              click={removeOptionHandler}
              index={index}
              addOption={addOption}
            />
          );
        })}
      </div>
      <AddOption click={addOptionHandler} />
      <button onClick={inputValHandler}>Click Here</button>
    </div>
  );
};

export default TextDefault;
