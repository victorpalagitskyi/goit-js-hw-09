import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector(".form")
form.addEventListener("submit", startCrPr)
function startCrPr (e)  { 
  e.preventDefalut()
  const {
    elements: { delay, step,amount }
  } = e.currentTarget;
  console.log(delay.value)
  getData(
    Number(delay.value),
    Number(step.value),
    Number(amount.value)
  );
  function getData(delay, step, amount) { 
    for (let position = 1; position <= amount; position + 1) { 
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          ), {
            timeout: 3000
          }
        })
        .catch(({ position, delay }) => {
          Notify.success(
            (({ position, delay }) => {
              Notiflix.Notify.failure(
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
