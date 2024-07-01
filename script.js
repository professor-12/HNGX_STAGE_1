const date = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



const dateNode = document.querySelector("#currentDay")
      
      
      
      dateNode.textContent = daysOfWeek[date.getDay()]


const time = document.querySelector("#currentTime")

time.textContent = date.toUTCString()


setInterval(() => {
      dateNode.setAttribute("data-testid",daysOfWeek[date.getDay()]
)
      let date = new Date();
      time.textContent = date.toUTCString()
      time.setAttribute("data-testid",date.toUTCString())
},10)