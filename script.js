//TODO Module 2 – Lesson 16.02: Date & Times - Challenge

//TODO 🧠 Challenge: "How many days until your next birthday?"

//* Your Task:
// 1. Create a variable called birthday using new Date('YYYY-MM-DD').
// 2. Create a variable called today using new Date().
// 3. If your birthday already passed this year, create a new date for next year's birthday.
// 4. Subtract the two dates to get the difference in milliseconds.
// 5. Convert that to days (hint: divide by 1000 * 60 * 60 * 24).
// 6. Round down the result (we want full days left).

const birthday = new Date('2025-04-16');
const today = new Date();

const msLeft = birthday - today;
const daysLeft = Math.floor(msLeft / (1000 * 60 * 60 * 24));

if (msLeft < 0) {
    const nextYear = today.getFullYear() + 1;
    const nextBirthday = new Date(`${nextYear}-04-16`);
    const msUntilNext = nextBirthday - today;
    const daysUntilNext = Math.floor(msUntilNext / (1000 * 60 * 60 * 24));
    console.log(`🎂 Your birthday already passed! It'll be back in ${daysUntilNext} days.`);
} else {
    console.log(`🎉 Your birthday is in ${daysLeft} days!`);
};


//TODO 🎯 Challenge: Format the Current Date and Time

//? Goal:
// Print a message like this:
// Today is Thursday, April 10, 2025 at 2:22 PM

//* ✅ Your Task:
//  1. Create a Date object for today
//  2. Use .toLocaleDateString() with options to format:
//  - weekday: 'long'
//  - month: 'long'
//  - day: 'numeric'
//  - year: 'numeric'
//  3. Use .toLocaleTimeString() with options:
//  - hour: '2-digit'
//  - minute: '2-digit'
//  - (Optional) Set hour12 to true for AM/PM format
//  4. Combine both strings into:
//  - `Today is [weekday, month day, year] at [hh:mm AM/PM]`

const now3 = new Date();

// Step 1: format date
const formattedDate = now3.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: 'true',
});

// Step 2: format time
const formattedTime = now3.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
});

// Step 3: final output
console.log(`Today is ${formattedDate} at ${formattedTime}.`);


//TODO 🎯 Countdown Timer Challenge

//* ✅ Your Task:
// Write a script that counts down to a future date and logs:
// ⏳ Time left: 3 days 12 hours 15 minutes 32 seconds

//* 🧠 Steps to Build It:
//  1. Define a future date (e.g., new Date('2025-05-01'))
//  2. Create a function called getCountdown()
//  - Get now = new Date()
//  - Subtract: msRemaining = future - now
//  - Convert milliseconds to:
//      - days
//      - hours
//      - minutes
//      - seconds
//  3. Log the countdown in a readable format
//? (Optional) Use setInterval() to update every second!

//* 📦 Time Conversions:

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//* 💬 Output Should Look Like:
//  ⏳ Time left: 12 days 04 hours 31 minutes 55 seconds

// 1. future date

const futureDate = new Date('2025-05-01');

// 2. Create a function

function getCountDown(now = new Date()) {
    const msRemaining = futureDate - now;
    const daysLeft = Math.floor(msRemaining / (1000 * 60 * 60 * 24));

    const remainingMsAfterDays = msRemaining % day;
    const hoursLeft = Math.floor(remainingMsAfterDays / hour);

    const remainingMsAfterHours = remainingMsAfterDays % hour;
    const minutesLeft = Math.floor(remainingMsAfterHours / minute);

    const remainingMsAfterMinutes = remainingMsAfterHours % minute;
    const secondsLeft = Math.floor(remainingMsAfterMinutes / second)
    
    console.log(`⏳ Time left: ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds.`);
};

getCountDown();
// setInterval(getCountDown, 1000);



































