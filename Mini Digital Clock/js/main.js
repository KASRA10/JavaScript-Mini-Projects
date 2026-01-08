document.addEventListener("DOMContentLoaded", function () {
    // Clock Items
    const hourItem = document.getElementsByClassName("hours");
    const minutesItem = document.querySelector(".minutes");
    const secondsItem = document.getElementsByClassName("seconds");
    const periodItem = document.querySelector(".period");

    // Calender Items
    const monthItem = document.getElementsByClassName("month");
    const dayItem = document.querySelector(".day");
    const dayNumberItem = document.getElementsByClassName("day-number");
    const yearItem = document.querySelector(".year");

    // Easy Access To Days and Month
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const month = [
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
        const hours = currentDate.hours();
        const minutes = currentDate.minutes();
        const seconds = currentDate.seconds();

        // Add to HTML DOM
        hourItem.innerHTML = addZero(hours);
        minutesItem.innerHTML = addZero(minutes);
        secondsItem.innerHTML = addZero(seconds);
        periodItem.innerHTML = setTimePeriod(hours);
    }
    clock();

});