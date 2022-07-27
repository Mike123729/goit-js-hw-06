function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorOfEl = document.querySelector('.color');

const changeColor = () => {
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorOfEl.textContent = randomColor;
};

buttonEl.addEventListener('click', changeColor);
