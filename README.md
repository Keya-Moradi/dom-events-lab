# Keya's Evil Calculator

This project is a simple web-based calculator with a unique twist: evil emojis rain down every time you press the equals button! The calculator performs basic arithmetic operations and has a modern, sea-foam and light blue color scheme. The emojis stop raining after 4 seconds.

## Features

- Addition, subtraction, multiplication, and division operations
- Clear (C) button to reset the calculator
- Dynamically adjusts the font size of the result to fit within the display box
- Evil emojis rain down behind the title and calculator when the equals button is pressed

## User Stories

As a user, I want to:

- Select numbers to perform operations with them.
- Add two numbers together.
- Subtract one number from another.
- Multiply two numbers together.
- Divide one number by another.
- See the output of the mathematical operation.
- Clear all operations and start from 0.
- Enjoy a unique visual effect when calculating results.

## File Structure

```plaintext
dom-events-lab/
├── index.html
├── app.js
├── style.css
└── README.md
```

## Instructions

### Setup

1. Clone the Repository

Copy code

```sh
git clone https://github.com/Keya-Moradi/DOM-EVENTS.git

cd DOM-EVENTS
```

1. Open the Project:
Open the index.html file in your preferred web browser. You can do this by double-clicking the file or by right-clicking and selecting "Open with" followed by your browser choice.

### Usage

Using the Calculator:

- Click on the number buttons (0-9) to enter numbers.
- Click on the operator buttons (+, -, *, /) to choose an operation.
- Click on the equals button (=) to compute the result.
- Click on the clear button (C) to reset the calculator.

### Experience the Emoji Rain

- Press the equals button (=) to see evil emojis rain down.
- The emojis will stop raining after 3 seconds.
- Customization
- You can customize the calculator by modifying the CSS for different color schemes and animations. - You can also add more functionalities or visual effects as desired.

### Technologies Used

- HTML
- CSS
- JavaScript
- Code Explanation
- HTML
- The HTML file sets up the structure of the calculator and includes references to the JavaScript and CSS files.

### CSS

The CSS file styles the calculator, sets the background color, and ensures the text fits within the display box. It also handles the animation of the evil emojis.

### JavaScript

The JavaScript file contains the logic for the calculator's functionality and the emoji rain effect. Key parts of the code include:

### Selecting elements

Elements like buttons and the display are selected using document.querySelector.

### Event listeners

Event listeners are added to the buttons to handle clicks.

### Emoji rain

The createEmojis function generates and animates the evil emojis, while stopEmojis stops the rain after 4 seconds.

### Adjust font size

The adjustFontSize function dynamically changes the font size of the result based on its length.
