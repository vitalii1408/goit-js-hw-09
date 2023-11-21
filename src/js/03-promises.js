import Notiflix from 'notiflix';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstDelay = parseInt(form.elements.delay.value);
    const step = parseInt(form.elements.step.value);
    const amount = parseInt(form.elements.amount.value);

    for (let i = 0; i < amount; i++) {
      const position = i + 1;
      const delay = firstDelay + i * step;

      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.Success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.Failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }
  });

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
});
