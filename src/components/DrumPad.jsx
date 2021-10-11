import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const DrumPad = ({ keyCode, keyTrigger, id, url }) => {
  const [padClass, setPadClass] = useState("drum-pad");
  const { setDisplay, volume } = useGlobalContext();

  const handleMouseDown = (event) => {
    if (event.button !== 1 && event.button !== 2) {
      setPadClass("drum-pad pad-active");
      setDisplay(id);
      playSound();
    }
  };

  const handleMouseUp = () => {
    setPadClass("drum-pad");
  };

  const playSound = () => {
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.volume = volume / 100;
    sound.play();
  };

  const handleClick = () => {
    setPadClass("drum-pad pad-active");
    setTimeout(() => setPadClass("drum-pad"), 200);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === keyCode) {
      document.getElementById(id);
      handleClick();
      setDisplay(id);
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div
      id={id}
      className={padClass}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      <audio className="clip" id={keyTrigger} src={url} />
      {keyTrigger}
    </div>
  );
};

export default DrumPad;
