import React, { useState } from "react";
import Tab from "./Tab";
import { tabGroupData } from "./data";

const TabGroup = () => {
  const [data, setData] = useState(tabGroupData());
  const toggleActiveHandler = (index) => {
    setData(
      data.map((item, i) => {
        if (i === index) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      })
    );
  };
  return (
    <div className="flex items-center">
      {data.map((item, index) => (
        <Tab
          click={() => toggleActiveHandler(index)}
          key={index}
          svg={item.icon}
          active={item.active}
        >
          {item.content}
        </Tab>
      ))}
    </div>
  );
};

export default TabGroup;
