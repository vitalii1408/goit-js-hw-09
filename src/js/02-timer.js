import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate > new Date()) {
      startButton.disabled = false;
    } else {
      alert('Please choose a date in the future');
      startButton.disabled = true;
    }
  },
};
const datetimePicker = flatpickr('#datetime-picker', options);
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
let intervalId;
let startTime;
startButton.addEventListener('click', () => {
  const selectedDate = datetimePicker.selectedDates[0];
  if (intervalId) {
    stopTimer();
  }
  startTimer(selectedDate);
});
function startTimer(endDate) {
  startTime = new Date();
  intervalId = setInterval(() => {
    const currentTime = new Date();
    const timeDifference = endDate - currentTime;
    if (timeDifference <= 0) {
      stopTimer();
      Notiflix.Notify.Success('Time is up!');
    } else {
      updateTimer(timeDifference);
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(intervalId);
  startButton.disabled = true;
}
function updateTimer(timeDifference) {
  const { days, hours, minutes, seconds } = convertMs(timeDifference);
  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}
function convertMs(ms) {
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
