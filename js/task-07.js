const sizeEL = document.querySelector('#font-size-control');
const textEL = document.querySelector('#text');

const changeSize = (event) => {
  const newSizeEL = event.currentTarget.value;
  textEL.style.fontSize = `${newSizeEL}px`;
};
sizeEL.addEventListener('input', changeSize);
