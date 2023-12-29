import React from "react";
import sendIcon from "../assets/img/send-icon.svg";
import sparkles from "../assets/img/sparkles.png";
import TagComponent from "./TagComponent";
import AutoCompleteInputComponent from "./AutoCompleteInputComponent";
import { suggestions } from "../constants";

function MessageInputboxComponent() {
  return (
    <>
      <div className=" bg-gradient-to-r from-[#997cb4]  via-[#efa27e] to-[#997cb4] m-2 ml-10 w-[1450px] p-[2px] rounded mt-[40px]">
        <div className="w-full h-[90px]  rounded bg-white">
          <AutoCompleteInputComponent suggestions={suggestions} />
          <img
            src={sendIcon}
            alt="send message button"
            className="inline py-1 ml-[18px] "
          />
          <br />
          <img
            src={sparkles}
            alt="sparkles icon"
            className=" w-[44px]  inline"
          />
          <TagComponent
            tagContent={"Show me more related incidents"}
            cssClasses={
              "bg-gray-200 rounded-lg px-[10px] pb-2 pt-1 items-center h-[25px] inline-block leading-[14px] "
            }
          />
          <TagComponent
            tagContent={"Show me related logs from nexus-front-end"}
            cssClasses={
              "bg-gray-200 rounded-lg px-[10px] pb-2 pt-1 items-center h-[25px] inline-block leading-[14px] ml-[8px] "
            }
          />
        </div>
      </div>
    </>
  );
}

export default MessageInputboxComponent;
