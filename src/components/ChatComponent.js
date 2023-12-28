import React from "react";
import HeaderComponent from "./HeaderComponent";
import SenderDetailsComponent from "./SenderDetailsComponent";
import { messages } from "../constants";
import MessageContentComponent from "./MessageContentComponent";
import IncidentComponent from "./IncidentComponent";

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
            {message.incidents
              ? message.incidents.map((incident) => {
                  return (
                    <>
                      <IncidentComponent
                        key={incident.id}
                        incidentType={incident.incidentType}
                        incidentMessage={incident.incidentMessage}
                        incidentPlatform={incident.incidentPlatform}
                        incidentTime={incident.incidentTime}
                      />
                    </>
                  );
                })
              : ""}
          </>
        );
      })}
    </div>
  );
}

export default ChatComponent;
