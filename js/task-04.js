let counterValue = 0;
const newValue = document.querySelector('#value');

const decrEL = document.querySelector('button[data-action="decrement"]');
const clickDecr = () => {
  counterValue -= 1;
  newValue.textContent = counterValue;
};
decrEL.addEventListener('click', clickDecr);

const incrEL = document.querySelector('button[data-action="increment"]');
const clickIncr = () => {
  counterValue += 1;
  newValue.textContent = counterValue;
};
incrEL.addEventListener('click', clickIncr);
