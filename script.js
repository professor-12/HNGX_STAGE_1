const date = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



const dateNode = document.querySelector("#currentDay")
      
      
      
      dateNode.textContent = daysOfWeek[date.getDay()]


const time = document.querySelector("#currentTime")

time.textContent = date.toUTCString()


setInterval(() => {
      let date = new Date();
      time.textContent = date.toUTCString()
      
},10)