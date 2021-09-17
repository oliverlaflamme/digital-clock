/*
setTimeout(() => {
    console.log('time!');
}, 1000);

let i = 0;

function increment() {
    i++;
    console.log(i);
}

let timer = setTimeout(function myTimer() {
    increment();
    timer = setTimeout(myTimer, 1000);

}, 1000);

var today = new Date();
console.log(today);


// console.dir(document);

console.log(document.body);

// get element by id 

// console.log(document.getElementById("time-display"));

var displayTime = document.getElementById("time-display");
console.log(displayTime);
displayTime.textContent = (1); {


*/

function simpleClock() {
    const date = new Date();
    const months = ["January", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();

    // even by selecting  get days VALUE FROM MY VARIABLE LET DAY its still showing up as saturday"
    console.log("today is " + weekDays[day]);
    console.log(new Date); // this display the right day 

    // IS MY MONTH ALSO RIGHT OR AM I JUST SEPTEMBER RANDOMLY LUCKY ?

    document.getElementById("time-display").textContent = months[date.getMonth()] + ' ' + date.getFullYear() + " " + weekDays[date.getDay()] + " " + [date.getDay()] + ("th");





    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10) {
        seconds = "0" + seconds;
    }

    if (hours < 10) {
        seconds = "0" + seconds;
    }


    if (hours <= 12) {
        seconds = seconds + "AM";
    } else {
        seconds = seconds + "Pm";
    }

    if (hours === 0) {
        hours = 12;
    }



    document.getElementById("date-display").textContent = ` ${hours} : ${minutes} : ${seconds}`;


}

setInterval(simpleClock, 1000);




















