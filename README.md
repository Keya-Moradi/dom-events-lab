<!-- # DOM Events Lab

This lab provides an opportunity to practice DOM manipulation by building a calculator in the browser.

## User Stories

- As a user, I want to be able to select numbers to perform operations with them.
- As a user, I want to be able to add two numbers together.
- As a user, I want to be able to subtract one number from another.
- As a user, I want to be able to multiply two numbers together.
- As a user, I want to be able to divide one number by another.
- As a user, I want to see the output of the mathematical operation.
- As a user, I want to be able to clear all operations and start from 0.

## Explanation of the Code

### JavaScript (app.js)

1. **Selecting Elements:**
   - `const buttons = document.querySelectorAll('.button');`: Selects all elements with the class `button`.
   - `const display = document.querySelector('.display');`: Selects the element with the class `display`.

2. **Variables:**
   - `let currentInput = '';`: Stores the current input value.
   - `let operator = '';`: Stores the selected operator.
   - `let previousInput = '';`: Stores the previous input value.

3. **Event Listeners:**
   - Adds a click event listener to each button.
   - Updates the display based on the button clicked.
   - Handles operators and calculations.

### CSS (style.css)

- **General Styles:**
  - `* { box-sizing: border-box; }`: Ensures that padding and border are included in the element's total width and height.
  - `body`: Centers the calculator on the page and sets the font.

- **Calculator Styles:**
  - `#calculator`: Styles the main calculator container.
  - `.display`: Styles the display area of the calculator.
  - `.row`: Styles each row of buttons.
  - `.button`: Styles each button.
  - `.button.operator`: Styles the operator buttons.
  - `.button.equals`: Styles the equals button.

### HTML (index.html)

- **Structure:**
  - The main container is a `div` with the id `calculator`.
  - Each row of buttons is a `div` with the class `row`.
  - Each button is a `div` with the class `button`, and additional classes like `number`, `operator`, or `equals`.

### Color Scheme

- **Background Color:**
  - Seafoam and light blue colors are used to create a calm and modern look.
- **Button Colors:**
  - Number buttons have a lighter background.
  - Operator buttons have a slightly darker background.
  - The equals button is distinct with an even darker background. -->
