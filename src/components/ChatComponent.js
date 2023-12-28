import React from "react";
import HeaderComponent from "./HeaderComponent";
import SenderDetailsComponent from "./SenderDetailsComponent";
import { messages } from "../constants";
import MessageContentComponent from "./MessageContentComponent";

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
            <MessageContentComponent message={message} />
          </>
        );
      })}
    </div>
  );
}

export default ChatComponent;
