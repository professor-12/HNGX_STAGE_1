const date = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector("#currentDay").textContent = daysOfWeek[date.getDay()]
document.querySelector("#currentTime").textContent = date.toUTCString()