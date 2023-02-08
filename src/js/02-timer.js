import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const input = document.getElementById("datetime-picker")
const button = document.querySelector("[data-start]")
const days = document.querySelector("[data-days]")
const hours = document.querySelector("[data-hours]")
const minutes = document.querySelector("[data-minutes]")
const seconds = document.querySelector("[data-seconds]")
const diffTime = 0
// const selectedDatesUser 
button.disabled = true
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0])
    //   const selectedDatesUser = selectedDates[0].getTime()
      let date = new Date();
      if (date.getTime() > selectedDates[0].getTime()) {
          window.alert("Please choose a date in the future")
      } else { 
          button.disabled = false
      }
      button.addEventListener("click", onDiffTime)
      function onDiffTime() {
          console.log(selectedDates[0].getTime())
          console.log(date.getTime() )
        // diffTime =  selectedDates[0].getTime() - date.getTime() 
       }
    }
};
flatpickr(input, options)
console.log(diffTime)

