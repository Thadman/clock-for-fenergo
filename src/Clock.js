import React, { useState } from "react";

const Clock = () => {
  const [hours, setHours] = React.useState("00");
  const [minutes, setMinutes] = React.useState("00");

  function handleHoursUpButtonClick() {
    //TODO: implement this
    const newHour = parseInt(hours) + 1;
    if (hours === "23") {
      setHours("00");
    } else {
      setHours(newHour > 9 ? `${newHour}` : `0${newHour}`);
    }
  }

  function handleHoursDownButtonClick() {
    //TODO: implement this
    const newHour = parseInt(hours) - 1;

    if (hours === "00") {
      setHours("23");
    } else {
      setHours(newHour > 9 ? `${newHour}` : `0${newHour}`);
    }
  }

  function handleMinutesUpButtonClick() {
    //TODO: implement this

    const newMinute = parseInt(minutes) + 1;
    if (minutes === "59") {
      setMinutes("00");
    } else {
      setMinutes(newMinute > 9 ? `${newMinute}` : `0${newMinute}`);
    }
  }

  function handleMinutesDownButtonClick() {
    //TODO: implement this
    const newMinute = parseInt(minutes) - 1;

    if (minutes === "00") {
      setMinutes("59");
    } else {
      setMinutes(newMinute > 9 ? `${newMinute}` : `0${newMinute}`);
    }
  }

  return (
    <div id="ClockUpdater" class="container">
      <div class="row">
        <button
          id="hours-up-button"
          onClick={handleHoursUpButtonClick}
          class="btn btn-outline-primary col"
        >
          &uarr;
        </button>

        <button
          id="minutes-up-button"
          class="btn btn-outline-primary col"
          onClick={handleMinutesUpButtonClick}
        >
          &uarr;
        </button>
      </div>

      <div class="row">
        <div id="clock" class="badge badge-primary col">
          {`${hours}:${minutes}`}
        </div>
      </div>

      <div class="row">
        <button
          id="hours-down-button"
          onClick={handleHoursDownButtonClick}
          class="btn btn-outline-primary col"
        >
          &darr;
        </button>

        <button
          id="minutes-down-button"
          class="btn btn-outline-primary col"
          onClick={handleMinutesDownButtonClick}
        >
          &darr;
        </button>
      </div>
    </div>
  );
};

export default Clock;
