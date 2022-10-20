import React from "react";
import { useState } from "react";
import "./Room.css";

export default function Room() {
  const [stateMode, setStateMode] = useState(false);
  const lit = " The  room is light";
  const dark = " The room is dark";
  const eventClick = () => {
    setStateMode(!stateMode);
  };
  return (
    <>
      <div className={stateMode ? "lit" : "dark"}>
        <button onClick={eventClick}>Switch</button>
        {stateMode ? dark : lit}
      </div>
    </>
  );
}
