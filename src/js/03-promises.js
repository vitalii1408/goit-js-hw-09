function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      shouldResolve
        ? resolve({ position, delay })
        : reject({ position, delay });
    }, delay);
  });
}

document
  .getElementById('promiseForm')
  .addEventListener('submit', async function (event) {
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
    const promises = [];
    for (let i = 0; i < amount; i++) {
      const currentDelay = firstDelay + i * delayStep;
      const promise = createPromise(i, currentDelay);
      promise
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      promises.push(promise);
    }
    try {
      await Promise.allSettled(promises);
    } finally {
      submitButton.disabled = false;
      delayInput.value = '';
      stepInput.value = '';
      amountInput.value = '';
    }
  });
