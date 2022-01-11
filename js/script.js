"use strict";

//Dom Elements

const time = document.getElementById("time");
const name = document.getElementById("name");
const greeting = document.getElementById("greeting");
const focus = document.getElementById("focus");

//Options
const showAmPm = true;

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
  )} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

//Add the padding for zero
function addZero(num) {
  return (parseInt(num, 10) < 10 ? "0" : "") + num;
}

//Background changer / Greeting

function backGee() {
  let today = new Date(2019, 2, 13, 9),
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

//Get Name

function getNames() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//Set Names
function setName(e) {
  if (e.type === "keypress") {
    //Enter is press
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
//get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
//Set Names
function setFocus(e) {
  if (e.type === "keypress") {
    //Enter is press
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//Run the time
showTime();
backGee();
getNames();
getFocus();
