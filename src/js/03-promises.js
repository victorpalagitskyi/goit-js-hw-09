// import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector(".form")
const delay = document.querySelector('[name="delay"]')
const step = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')
const button = document.querySelector("button")
button.addEventListener("click", startCrPr)
function startCrPr (e)  { 
  e.preventDefalut()
  getData(
    Number(delay.value),
    Number(step.value),
    Number(amount.value)
  );
  function getData(delay, step, amount) { 
    for (let position = 1; position <= amount.value; position + 1) { 
      createPromise(position, delay.value)
        .then(({ position, delay }) => {
          // Notify.success(
          console.log(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          ), {
            timeout: 3000
          }
        })
        .catch(({ position, delay }) => {
          Notify.success(
            (({ position, delay }) => {
              // Notify.failure(
              console.log(
                `❌ Rejected promise ${position} in ${delay}ms`
              ), {
                timeout: 3000
              }
            }))
        })

    }
    delay +=step
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      }
      else {
        reject("Error")
      }
    }, 2000)
  })
}
  
  
  