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
let bgColor = '';

function onColorSwitch() {
  if (!startBtnRef.disabled) {
    switcherIntervalId = setInterval(() => {
      checkRandomColor(0, colors.length - 1);
      bodyRef.style.backgroundColor = bgColor;
    }, 1000);
    startBtnRef.disabled = true;
    stopBtnRef.disabled = false;
  }
}

function checkRandomColor(min, max) {
  const color = colors[randomIntegerFromInterval(min, max)];
  if (color === bgColor) {
    checkRandomColor(min, max);
  } else {
    bgColor = color;
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
