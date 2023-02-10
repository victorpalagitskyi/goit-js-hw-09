import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";
const input = document.getElementById("datetime-picker")
const button = document.querySelector("[data-start]")
const daysTimer = document.querySelector("[data-days]")
const hoursTimer = document.querySelector("[data-hours]")
const minutesTimer = document.querySelector("[data-minutes]")
const secondsTimer = document.querySelector("[data-seconds]")
let diffTime = 0
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
          Notify.failure("Please choose a date in the future")
      } else { 
          button.disabled = false
      }
      button.addEventListener("click", onDiffTime)
      function onDiffTime() {
          diffTime = selectedDates[0].getTime() - date.getTime() 
          console.log(date)
          const {days, hours, minutes, seconds } = convertMs(diffTime)   
          daysTimer.textContent = days
          hoursTimer.textContent = hours
          minutesTimer.textContent = minutes
          secondsTimer.textContent = seconds
      }
    //   setInterval(onDiffTime, 100)
    }
};
flatpickr(input, options)


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };   
}

// 
