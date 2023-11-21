function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
let intervalId;
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
function startColorChange() {
  startButton.disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function stopColorChange() {
  startButton.disabled = false;
  clearInterval(intervalId);
}
startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);
