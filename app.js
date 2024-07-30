const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (event.target.classList.contains('number')) {
      currentInput += value;
      display.innerText = currentInput;
    } else if (event.target.classList.contains('operator')) {
      if (value === 'C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.innerText = '';
      } else if (value === '=') {
        if (operator && previousInput !== '' && currentInput !== '') {
          currentInput = String(eval(`${previousInput} ${operator} ${currentInput}`));
          display.innerText = currentInput;
          operator = '';
          previousInput = '';
        }
      } else {
        if (currentInput !== '') {
          operator = value;
          previousInput = currentInput;
          currentInput = '';
        }
      }
    }
  });
});
