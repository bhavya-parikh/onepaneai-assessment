import React from "react";
import TagComponent from "./TagComponent";
import relic from "../assets/img/relic.webp";
function IncidentComponent({
  incidentType,
  incidentMessage,
  incidentPlatform,
  incidentTime,
}) {
  return (
    <div className="mt-2 ml-9">
      <span className="font-semibold">
        &#128314; {incidentType + ": "}
        {incidentMessage}
        <TagComponent
          tagContent={incidentPlatform}
          cssClasses={
            "bg-gray-100 rounded-lg ml-2 font-semibold inline-block content-center text-center w-[135px] p-[2px]"
          }
        />
        <TagComponent
          tagContent={incidentTime}
          tagImage={relic}
          cssClasses={
            "bg-gray-100 rounded-lg ml-2 w-[100px]  inline-block content-center text-center font-normal "
          }
        />
      </span>
    </div>
  );
}

export default IncidentComponent;
