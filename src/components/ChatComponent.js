import React from "react";

import MessageContentComponent from "./MessageContentComponent";
import HeaderComponent from "./HeaderComponent";
import SenderDetailsComponent from "./SenderDetailsComponent";
import IncidentComponent from "./IncidentComponent";
import ResourceChangeComponent from "./ResourceChangeComponent";
import MessageInputboxComponent from "./MessageInputboxComponent";

import { messages } from "../constants";

function MainComponent() {
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
            {message.resourceChanges
              ? message.resourceChanges.map((resourceChange) => {
                  return (
                    <>
                      <ResourceChangeComponent
                        key={resourceChange.id}
                        changePlatform={resourceChange.changePlatform}
                        platformLogo={resourceChange.platformLogo}
                        changeType={resourceChange.changeType}
                        changeBy={resourceChange.changeBy}
                        changeUserAvatar={resourceChange.changeUserAvatar}
                        changeTime={resourceChange.changeTime}
                        changeTimeAvatar={resourceChange.changeTimeAvatar}
                      />
                    </>
                  );
                })
              : ""}
          </>
        );
      })}

      <MessageInputboxComponent />
    </div>
  );
}

export default MainComponent;
