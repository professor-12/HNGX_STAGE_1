const date = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



document.querySelector("#currentDay").textContent = daysOfWeek[date.getDay()]


const time = document.querySelector("#currentTime")

time.textContent = date.toUTCString()


setInterval(() => {
      let date = new Date();
      time.textContent = date.toUTCString()
},10)