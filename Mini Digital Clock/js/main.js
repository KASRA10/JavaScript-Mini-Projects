document.addEventListener("DOMContentLoaded", function () {
    // Clock Items
    const hourItem = document.querySelector(".hours");
    const minutesItem = document.querySelector(".minutes");
    const secondsItem = document.querySelector(".seconds");
    const periodItem = document.querySelector(".period");

    // Calender Items
    const monthItem = document.querySelector(".month");
    const dayItem = document.querySelector(".day");
    const dayNumberItem = document.querySelector(".day-number");
    const yearItem = document.querySelector(".year");

    // Days and Months arrays
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    //Add the 0 for the values lower than 10
    function addZero(time) {
        return time < 10 ? "0" + time : time;
    }

    // Specify AM or PM
    function setTimePeriod(time) {
        let period = "";
        if (time < 12) {
            period = "AM";
        } else {
            period = "PM";
        }
        return period;
    }

    // Js Current Time And Add To Elements
    function clock() {
        const currentDate = new Date();

        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();

        // Add to HTML DOM
        hourItem.innerHTML = addZero(hours);
        minutesItem.innerHTML = addZero(minutes);
        secondsItem.innerHTML = addZero(seconds);
        periodItem.innerHTML = setTimePeriod(hours);
    }


    // Calender Items
    function setCalenderValueItems() {
        const currentDate = new Date();

        monthItem.innerHTML = currentDate.getMonth(); // → returns 0–11 (number)
        dayItem.innerHTML = days[currentDate.getDay()];
        dayNumberItem.innerHTML = currentDate.getDate();
        yearItem.innerHTML = months[currentDate.getMonth()]; // → this is actually the month name!
    }


    clock();
    setCalenderValueItems();

    // Update Clock and Calender
    setInterval(clock, 1000);
    setInterval(setCalendarValueItems, 60000);
});