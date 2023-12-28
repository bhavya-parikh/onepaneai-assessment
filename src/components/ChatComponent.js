import React from "react";
import HeaderComponent from "./HeaderComponent";
import SenderDetailsComponent from "./SenderDetailsComponent";
import { messages } from "../constants";

function ChatComponent() {
  return (
    <div>
      <HeaderComponent />
      {messages.map((message) => {
        return (
          <>
            <SenderDetailsComponent
              timestamp={message.timestamp}
              userAvatar={message.userAvatar}
              username={message.username}
            />
            <br />
            <br />
          </>
        );
      })}
    </div>
  );
}

export default ChatComponent;
