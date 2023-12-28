import React from "react";

function SenderDetailsComponent({ timestamp, username, userAvatar }) {
  const isCopilot = username === "Copilot";
  const alignClass = isCopilot ? "float-left ml-8" : "float-right mr-8";

  return (
    <div className={`${alignClass} mt-5  `}>
      {isCopilot && (
        <>
          <img
            src={userAvatar}
            alt="userAvatar"
            className="rounded-full h-[23px] inline ml-[5px]"
          />
          <span className="font-semibold text-sm ml-[5px] mr-[8px]">
            {username}
          </span>
        </>
      )}

      {!isCopilot && (
        <>
          <span className="text-gray-400 text-xs">{timestamp}</span>
          <span className="font-semibold text-sm ml-[5px]">{username}</span>
        </>
      )}

      {isCopilot && (
        <>
          <span className="text-gray-400 text-xs">{timestamp}</span>
        </>
      )}

      {!isCopilot && (
        <>
          <img
            src={userAvatar}
            alt="userAvatar"
            className="rounded-full h-[23px] inline ml-[5px]"
          />
        </>
      )}
    </div>
  );
}

export default SenderDetailsComponent;
