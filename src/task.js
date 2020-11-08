const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onColorSwitch);
let switcherIntervalId = null;

function onColorSwitch() {
  if (!startBtnRef.disabled) {
    switcherIntervalId = setInterval(() => {
      bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    startBtnRef.disabled = true;
    stopBtnRef.disabled = false;
  }
}

stopBtnRef.addEventListener('click', onStopColorSwitch);

function onStopColorSwitch() {
  if (!stopBtnRef.disabled) {
    clearInterval(switcherIntervalId);
    startBtnRef.disabled = false;
    stopBtnRef.disabled = true;
  }
}
