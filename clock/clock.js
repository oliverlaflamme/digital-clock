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
    let day = date.getHours();



    document.getElementById("time-display").textContent = ` ${months}, ${weekDays}, ${year}`;





    document.getElementById("date-display").textContent = ` ${hours} : ${minutes} : ${seconds}`;

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


}

setInterval(simpleClock, 1000);




















