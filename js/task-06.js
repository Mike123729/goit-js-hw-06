const textInput = document.querySelector('input');
console.log(textInput);

const activeBlur = (event) => {
  const newTextInput = event.currentTarget.value;
  const validLength = Number(textInput.getAttribute('data-length'));
  if (newTextInput.length === validLength) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
};
textInput.addEventListener('blur', activeBlur);
