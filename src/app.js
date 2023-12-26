const applyStyles = () => {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    daysElement.style.fontSize = "5rem";
    daysElement.style.color = "hsl(345, 95%, 68%)";

    hoursElement.style.fontSize = "5rem";
    hoursElement.style.color = "hsl(345, 95%, 68%)";

    minutesElement.style.fontSize = "5rem";
    minutesElement.style.color = "hsl(345, 95%, 68%)";

    secondsElement.style.fontSize = "5rem";
    secondsElement.style.color = "hsl(345, 95%, 68%)";
};

const countdown = () => {
    const endDate = new Date('October 15, 2024 00:00:00').getTime();
    const now = new Date().getTime();

    const difference = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    timeDays = timeDays < 10 ? `${timeDays}` : timeDays;
    timeHours = timeHours < 10 ? `${timeHours}` : timeHours;
    timeMinutes = timeMinutes < 10 ? `${timeMinutes}` : timeMinutes;
    timeSeconds = timeSeconds < 10 ? `${timeSeconds}` : timeSeconds;

    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("seconds").innerHTML = timeSeconds;

    applyStyles();
};

setInterval(countdown, 1000);
