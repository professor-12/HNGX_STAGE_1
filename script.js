const date = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



const dateNode = document.querySelector("#currentDay")

dateNode.textContent = daysOfWeek[date.getDay()]


const time = document.querySelector("#currentTime")

time.setAttribute("data-testid", date.toUTCString())
dateNode.setAttribute("data-testid",daysOfWeek[date.getDay()])

time.textContent = date.toUTCString()


setInterval(() => {
      let date = new Date();
      let daysofTheWeek = daysOfWeek[date.getDay()]
      dateNode.setAttribute("data-testid",daysofTheWeek)
      time.setAttribute("data-testid",date.toUTCString())
      time.textContent = date.toUTCString()
      dateNode.textContent = daysofTheWeek
},10)