import React from "react";

function TagComponent({ tagContent, tagImage, cssClasses }) {
  return (
    <>
      <span className={`${cssClasses}`}>
        {tagImage ? (
          <img
            src={tagImage}
            alt=""
            className="h-[14px] w-[14px] rounded-full inline mr-1"
          />
        ) : (
          ""
        )}
        {tagContent}
      </span>
    </>
  );
}

export default TagComponent;
