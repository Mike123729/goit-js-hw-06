const inputEl = document.querySelector('input[data-length="6"]');

const handleInputClass = (remove, add) => {
  inputEl.classList.remove(remove);
  inputEl.classList.add(add);
};

const testingInputEL = () => {
  if (inputEl.value.length === Number(inputEl.getAttribute('data-length'))) {
    handleInputClass('invalid', 'valid');
  } else {
    handleInputClass('valid', 'invalid');
  }
};
inputEl.addEventListener('blur', testingInputEL);
