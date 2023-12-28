import React from "react";

function MessageContentComponent({ message }) {
  let messageStyles =
    message.username === "Copilot"
      ? "bg-[#f5f4ff] rounded-tl-none float-left"
      : "bg-[#e9e8ec] rounded-tr-none float-right mr-6";
  let borderStyles =
    message.username === "Copilot"
      ? "bg-gradient-to-r from-[#efa27e] via-[#c38e99] to-[#997cb4] w-[563px] h-[50px] rounded-lg rounded-tl-none ml-9 mt-1 p-px"
      : "";
  return (
    <div className={`${borderStyles} mb-3 `}>
      <div
        className={`${messageStyles} rounded-lg w-[560px] h-12  items-center justify-center`}
      >
        <span className={`flex ml-[12px] h-full w-full items-center `}>
          {message.text}
        </span>
      </div>
    </div>
  );
}

export default MessageContentComponent;
