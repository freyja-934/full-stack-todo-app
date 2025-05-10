// JavaScript Getting Started Practice
// Run this file with: node getting-started-practice.js

// ===== Exercise 1: Console Output =====
// TODO: Implement these console output examples

function demonstrateConsoleOutput() {
  // Your code here
  // 1. Basic console output
  // 2. Using variables
  // 3. Using template literals
  // 4. Using different console methods
  // 5. Logging objects
}

// ===== Exercise 2: Basic Calculator =====
// TODO: Implement these calculator functions

function add(a, b) {
  // Your code here
  // Should add two numbers
}

function subtract(a, b) {
  // Your code here
  // Should subtract b from a
}

function multiply(a, b) {
  // Your code here
  // Should multiply two numbers
}

function divide(a, b) {
  // Your code here
  // Should divide a by b
  // Should handle division by zero
}

// ===== Exercise 3: User Profile =====
// TODO: Implement these user profile functions

function createUserProfile(name, age, email, hobbies, address) {
  // Your code here
  // Should create and return a user profile object
}

function displayUserProfile(profile) {
  // Your code here
  // Should display profile information
  // Should use template literals
  // Should format the output nicely
}

// ===== Exercise 4: Temperature Converter =====
// TODO: Implement these temperature conversion functions

function celsiusToFahrenheit(celsius) {
  // Your code here
  // Should convert Celsius to Fahrenheit
  // Should round to 1 decimal place
}

function fahrenheitToCelsius(fahrenheit) {
  // Your code here
  // Should convert Fahrenheit to Celsius
  // Should round to 1 decimal place
}

// ===== Exercise 5: Simple Game =====
// TODO: Implement these game functions

function generateSecretNumber() {
  // Your code here
  // Should generate a random number between 1 and 100
}

function checkGuess(guess, secretNumber) {
  // Your code here
  // Should check if the guess is correct
  // Should return true if correct, false if not
  // Should provide feedback (too high/too low)
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Console Output ===');
demonstrateConsoleOutput();

// Test Exercise 2
console.log('\n=== Testing Calculator ===');
console.log('Addition:', add(10, 5));
console.log('Subtraction:', subtract(10, 5));
console.log('Multiplication:', multiply(10, 5));
console.log('Division:', divide(10, 5));

// Test Exercise 3
console.log('\n=== Testing User Profile ===');
const userProfile = createUserProfile(
  'John Doe',
  30,
  'john@example.com',
  ['reading', 'gaming', 'coding'],
  {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
);
displayUserProfile(userProfile);

// Test Exercise 4
console.log('\n=== Testing Temperature Converter ===');
console.log('25°C =', celsiusToFahrenheit(25), '°F');
console.log('98.6°F =', fahrenheitToCelsius(98.6), '°C');

// Test Exercise 5
console.log('\n=== Testing Number Guessing Game ===');
const secretNumber = generateSecretNumber();
console.log('Secret number:', secretNumber);
console.log('Guess 50:', checkGuess(50, secretNumber));
console.log('Guess 75:', checkGuess(75, secretNumber));
console.log('Guess 60:', checkGuess(60, secretNumber));
console.log('Guess 65:', checkGuess(65, secretNumber));

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node getting-started-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each function as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 