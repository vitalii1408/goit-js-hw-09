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
document
  .getElementById('promiseForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstDelay = parseInt(formData.get('delay'));
    const delayStep = parseInt(formData.get('step'));
    const amount = parseInt(formData.get('amount'));
    const submitButton = document.querySelector('[type="submit"]');
    const delayInput = document.querySelector('[name="delay"]');
    const stepInput = document.querySelector('[name="step"]');
    const amountInput = document.querySelector('[name="amount"]');
    submitButton.disabled = true;
    (async function () {
      for (let i = 1; i <= amount; i++) {
        const currentDelay = firstDelay + (i - 1) * delayStep;

        try {
          const result = await createPromise(i, currentDelay);
          console.log(
            `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
          );
        } catch (error) {
          console.log(
            `❌ Rejected promise ${error.position} in ${error.delay}ms`
          );
        }
      }
      submitButton.disabled = false;
      delayInput.value = '';
      stepInput.value = '';
      amountInput.value = '';
    })();
  });
