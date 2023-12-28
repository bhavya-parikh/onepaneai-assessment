import React, { useEffect, useState } from "react";
import { suggestions } from "../constants";

function AutoCompleteInputComponent() {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [currentPrefix, setCurrentPrefix] = useState("");
  const [currentMargin, setCurrentMargin] = useState(50);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    const tempArray = inputValue.split(" ");
    setCurrentPrefix(tempArray[tempArray.length - 1].toLowerCase());
  }, [inputValue]);

  useEffect(() => {
    const newSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(currentPrefix.toLowerCase())
    );
    setFilteredSuggestions(newSuggestions);
  }, [currentPrefix]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    //Avoiding suggestion box to go out of the screen
    e.nativeEvent.data
      ? currentMargin <= window.innerWidth - 150 &&
        setCurrentMargin(currentMargin + 5)
      : currentMargin >= 50 && setCurrentMargin(currentMargin - 5);
    setShowSuggestions(true);
  };
  const handleSuggestionClick = (suggestion) => {
    setShowSuggestions(false);
    setInputValue((prevValue) => {
      //Updating input box with suggestion value on click.
      const tempArray = prevValue.split(" ");
      tempArray[tempArray.length - 1] = suggestion;
      return tempArray.join(" ");
    });
    setCurrentMargin((prevMargin) => {
      const newMargin = prevMargin + suggestion.length * 5;
      return newMargin;
    });
  };

  return (
    <>
      <form className="inline">
        <input
          name="chat box"
          placeholder="Message Copilot..."
          list="suggestion"
          className="bg-gray-100 w-[1380px] ml-3 mt-2 rounded-md p-1 pl-[10px]"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </form>
      {filteredSuggestions.length > 0 && showSuggestions && (
        <div
          className={`absolute bg-gray-100 rounded font-semibold`}
          style={{ left: `${currentMargin}px` }}
          onClick={() => {
            handleSuggestionClick(filteredSuggestions[0]);
          }}
        >
          {filteredSuggestions[0]}
        </div>
      )}
    </>
  );
}

export default AutoCompleteInputComponent;
