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
          createEmojis(); // Call the function to create emojis
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

function createEmojis() {
  for (let i = 0; i < 10; i++) { // Adjust the number of emojis created
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = '😈'; // Evil emoji
    emoji.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    emoji.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration
    document.body.appendChild(emoji);

    emoji.addEventListener('animationend', () => {
      emoji.remove(); // Remove emoji after animation ends
    });
  }
}
