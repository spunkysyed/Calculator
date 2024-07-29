# Calculator
This is a simple calculator app built using React. It supports basic arithmetic operations like addition, subtraction, multiplication, and division.

## Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
- Simple and intuitive user interface.
- Responsive design.

## Installation

Make sure you have Node.js and npm installed on your machine.
- Node.js
- NPM(Comes with Node.js)

### Installation Steps:
1. Clone the Repository
  ```
  git clone https://github.com/spunkysyed/Calculator
  ```

2. Install the dependencies
  ```bash
  npm install
  ```

3. Start the development server
  ```bash
  npm start
  ```

## Usage
Open your browser and navigate to http://localhost:3000 to see the calculator in action. You can use the buttons to perform basic arithmetic operations.

## Folder Structure
```
calculator/
├── public/
│   └── index.html             # The main HTML file for the React app
├── src/
│   ├── components/            # Directory containing all the React components
│   │   ├── styles/            # Directory containing CSS files and font
│   │   │   ├── buttons.css    # CSS styling for buttons
│   │   │   ├── calculator.css # CSS styling for the calculator layout
│   │   │   ├── Display.css    # CSS styling for the display
│   │   │   └── rimouski-sb.otf # Custom font used in the app
│   │   ├── Buttons.js         # React component for calculator buttons
│   │   ├── Calculator.js      # React component that represents the calculator
│   │   ├── Display.js         # React component for the display screen
│   ├── App.js                 # Main App component that combines all other components
│   └── index.js               # Entry point for the React app
├── package-lock.json          # Auto-generated file with the exact version of dependencies
├── package.json               # File that includes project details and dependencies
└── Readme.md                  # Documentation of the web application
```