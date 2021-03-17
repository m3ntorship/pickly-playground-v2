import React from "react";
import { Avatar } from "../../Atoms/Avatar/Avatar";
import { TextInput } from "../../Atoms/Forms/TextInputs/TextInput";
import { Toggle } from "../../Atoms/Forms/Toggles/Toggle";
import { Tab } from "../../Atoms/Tabs/Tab";
import { Button } from "../../Atoms/Button/Button";
import "./ImagePoll.css";

export const ImagePoll = ({ avaSize, avaType, avaUrl }) => {
  return (
    <>
      <div className="img-poll">
        <div className="flex items-center">
          <Avatar avaSize={avaSize} avaType={avaType} avaUrl={avaUrl} />
          <div className="voting-tab-group flex-grow">
            <Tab id="tab1" label="Image Poll" name="poll-type" />
            <Tab id="tab2" label="Text Poll" name="poll-type" />
            <Tab id="tab3" label="Mini Survey" name="poll-type" />
          </div>
        </div>
        <TextInput placeholder="What do you want to ask about?" />
        <div>
          <input type="file" name="upload-img" id="up-img" className="hidden" />
          <label
            htmlFor="up-img"
            className="img-upload-box "
            accept="image/x-png,image/gif,image/jpeg"
          >
            <div className="img-upload-box-msg">
              <span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.16683 3.33333H11.8335V8H13.1668V3.33333C13.1668 2.598 12.5688 2 11.8335 2H3.16683C2.4315 2 1.8335 2.598 1.8335 3.33333V11.3333C1.8335 12.0687 2.4315 12.6667 3.16683 12.6667H8.50016V11.3333H3.16683V3.33333Z"
                    fill="#00A8E8"
                  ></path>
                  <path
                    d="M5.8335 7.33333L3.8335 10H11.1668L8.50016 6L6.50016 8.66667L5.8335 7.33333Z"
                    fill="#00A8E8"
                  ></path>
                  <path
                    d="M13.1668 9.33333H11.8335V11.3333H9.8335V12.6667H11.8335V14.6667H13.1668V12.6667H15.1668V11.3333H13.1668V9.33333Z"
                    fill="#00A8E8"
                  ></path>
                </svg>
              </span>
              <p>Upload one or multiple images</p>
            </div>
          </label>
        </div>
      </div>
      <div className="img-poll-footer">
        <div className="flex items-center privacy-box">
          <Toggle toggleSize="small" id="status" name="identity-status" />
          <p className="ml-xs">Hide my identity</p>
          <p className="ml-ml mr-xs">Privacy:</p>
          <Button
            btnType="text"
            btnSize="small"
            withIcon={true}
            iconType="icon-right"
          >
            Public
          </Button>
        </div>
        <Button btnType="primary" btnSize="small" disabled>
          Post
        </Button>
      </div>
    </>
  );
};
