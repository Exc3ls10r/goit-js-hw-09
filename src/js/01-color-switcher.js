const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtnEl.disabled = true;
let changeId;
const startChangeColor = () => {
  changeId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
};

const stopChangeColor = () => {
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
  clearInterval(changeId);
};

startBtnEl.addEventListener('click', startChangeColor);
stopBtnEl.addEventListener('click', stopChangeColor);
