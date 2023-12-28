import React from "react";
import TagComponent from "./TagComponent";

function ResourceChangeComponent({
  changePlatform,
  platformLogo,
  changeType,
  changeBy,
  changeUserAvatar,
  changeTime,
  changeTimeAvatar,
}) {
  return (
    <div className="m-2 ml-7">
      <span>
        <TagComponent
          tagContent={changePlatform}
          tagImage={platformLogo}
          cssClasses={
            "bg-gray-100 rounded-lg ml-2 font-medium inline-block content-center text-center  p-[2px] mr-2"
          }
        />
        {changeType}
        <TagComponent
          tagContent={changeBy}
          tagImage={changeUserAvatar}
          cssClasses={
            "ml-2 mr-2 bg-gray-100 rounded-lg font-medium inline-block content-center text-center p-[2px] w-[130px]"
          }
        />{" "}
        <TagComponent
          tagContent={changeTime}
          tagImage={changeTimeAvatar}
          cssClasses={
            "bg-gray-100 rounded-lg font-normal inline-block content-center text-center p-[2px] w-[90px]"
          }
        />
      </span>
    </div>
  );
}

export default ResourceChangeComponent;
