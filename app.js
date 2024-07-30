const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
let currentInput = '';
let operator = '';
let previousInput = '';

const evilEmojis = ['😈', '👹', '👺']; // Array of evil emojis
let emojiInterval; // Declare the interval variable globally

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
          adjustFontSize(currentInput);
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
  emojiInterval = setInterval(() => {
    for (let i = 0; i < 10; i++) { // Adjust the number of emojis created
      const emoji = document.createElement('div');
      emoji.classList.add('emoji');
      const randomEmoji = evilEmojis[Math.floor(Math.random() * evilEmojis.length)];
      emoji.innerText = randomEmoji; // Random evil emoji
      emoji.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      emoji.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration
      document.body.appendChild(emoji);

      emoji.addEventListener('animationend', () => {
        emoji.remove(); // Remove emoji after animation ends
      });
    }
  }, 500);

  setTimeout(stopEmojis, 4000); // Stop emojis after 4 seconds
}

function stopEmojis() {
  clearInterval(emojiInterval);
  // Also remove any remaining emojis after stopping the interval
  const remainingEmojis = document.querySelectorAll('.emoji');
  remainingEmojis.forEach(emoji => emoji.remove());
}

function adjustFontSize(result) {
  if (result.length > 10) {
    display.style.fontSize = '16px';
  } else if (result.length > 5) {
    display.style.fontSize = '20px';
  } else {
    display.style.fontSize = '24px';
  }
}
