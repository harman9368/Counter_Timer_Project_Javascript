const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("hi");
const counterTimer = document.querySelector(".counterTimer");

// converting days,hours,minutes,seconds in milliseconds

const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;


const timerFunction = () => {
    //console.log(second);
    //console.log(minute);
    //console.log(hour);
    //console.log(day);

    // Generating current Date in mm/dd/yyyy

    let now = new Date(),
        dd = String(now.getDate()).padStart(2, "0"),
        mm = String(now.getMonth() + 1).padStart(2, "0"),
        yyyy = now.getFullYear();
        now = `${mm}/${dd}/${yyyy}`;

    // Taking Target Date from User

    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

    

    // console.log(`${enteredMonth}/${enteredDay}/${yyyy}`);

    
// Checking if Target date is for next year
    if (now > targetDate) {
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
    }

    const intervalId = setInterval(() => {
        // Converting TargetDate in Milliseconds
        const timer = new Date(targetDate).getTime();
        // Taking CurrentDate in Milliseconds
        const today = new Date().getTime();

        // Finding difference between target date and today's date 
        const difference = timer - today;

        // Finding left days,hours,minutes,seconds
        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);

        // Showing Timer in DOM
        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHour;
        minutesElement.innerText = leftMinute;
        secondsElement.innerText = leftSecond;

        // Stop Set Interval after reaching the target time
        if (difference < 0) {
            counterTimer.style.display = "none";
            heading.innerText = "Time's Up";
            clearInterval(intervalId);
        }

        //  console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);


        //console.log(timer);
        //console.log(today);
        //console.log(timer - today);
        //console.log(difference);
        //console.log(Math.floor(difference / day));
        //console.log(Math.floor(difference % day) / hour);
        //console.log(Math.floor(difference % hour) / minute);
        //console.log(Math.floor(difference % minute) / second);
    }, 0);

}

timerFunction();