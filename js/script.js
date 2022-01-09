"use strict";

//Dom Elements

const time = document.getElementById("time");
const name = document.getElementById("name");
const greeting = document.getElementById("greeting");
const focus = document.getElementById("focus");

//Display the time function
function showTime() {
  //Display the current time
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set PM or AM

  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr Format
  hour = hour % 12 || 12;

  //Output the time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

//Add the padding for zero
function addZero(num) {
  return (parseInt(num, 10) < 10 ? "0" : "") + num;
}

//Background changer / Greeting

function backGee() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('../img/mor.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('../img/after.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    //Evening
    document.body.style.backgroundImage = "url('../img/nig.jpg')";
    greeting.textContent = "Good Night";
    document.body.style.color = "white";
  }
}

//Run the time
showTime();
backGee();
