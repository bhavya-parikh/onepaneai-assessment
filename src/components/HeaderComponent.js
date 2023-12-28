import React from "react";
import onepaneaiLogo from "../assets/img/onepaneai-logo.png";
import crossSign from "../assets/img/cross.svg";

function HeaderComponent() {
  return (
    <div className="border-2 shadow-md">
      <img
        src={onepaneaiLogo}
        alt="onepane ai logo"
        className="h-[50px] m-2 mr-0 inline"
      />
      <span>Copilot</span>
      <img
        src={crossSign}
        alt="close button"
        className="inline h-[15px] float-right mt-[25px] mr-[20px]"
      />
    </div>
  );
}

export default HeaderComponent;
