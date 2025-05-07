# Getting Started Practice Exercises

Welcome to your first JavaScript practice exercises! These exercises are designed to help you get comfortable with writing and running JavaScript code.

## Exercise 1: Console Output

### What You'll Learn:
- How to use different console methods
- How to format output
- How to work with variables

### Task:
Create a program that demonstrates different ways to output information to the console.

```javascript
// 1. Basic console output
console.log("Hello, World!");

// 2. Using variables
const name = "Your Name";
console.log("Hello,", name);

// 3. Using template literals
const age = 25;
console.log(`I am ${age} years old`);

// 4. Using different console methods
console.info("This is an info message");
console.warn("This is a warning message");
console.error("This is an error message");

// 5. Logging objects
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log("Person:", person);
console.table(person);
```

### Try These Variations:
1. Add more properties to the person object
2. Try different ways to format the output
3. Create an array of people and use console.table

## Exercise 2: Basic Calculator

### What You'll Learn:
- How to work with numbers
- How to perform calculations
- How to format output

### Task:
Create a simple calculator that performs basic arithmetic operations.

```javascript
// 1. Create variables for two numbers
const num1 = 10;
const num2 = 5;

// 2. Perform calculations
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

// 3. Display results
console.log("Calculator Results:");
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} * ${num2} = ${product}`);
console.log(`${num1} / ${num2} = ${quotient}`);
```

### Try These Variations:
1. Add more operations (modulus, power)
2. Round the results to 2 decimal places
3. Add input validation

## Exercise 3: User Profile

### What You'll Learn:
- How to work with different data types
- How to use template literals
- How to structure data

### Task:
Create a program that displays a user profile with various information.

```javascript
// 1. Create user profile object
const userProfile = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

// 2. Display profile information
console.log("User Profile:");
console.log(`Name: ${userProfile.name}`);
console.log(`Age: ${userProfile.age}`);
console.log(`Email: ${userProfile.email}`);
console.log("Hobbies:", userProfile.hobbies.join(", "));
console.log("Address:", `${userProfile.address.street}, ${userProfile.address.city}, ${userProfile.address.country}`);

// 3. Display as a table
console.table(userProfile);
```

### Try These Variations:
1. Add more user information
2. Create multiple user profiles
3. Add methods to the profile object

## Exercise 4: Temperature Converter

### What You'll Learn:
- How to work with formulas
- How to handle user input
- How to format numbers

### Task:
Create a program that converts temperatures between Celsius and Fahrenheit.

```javascript
// 1. Create conversion functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// 2. Test the conversions
const celsius = 25;
const fahrenheit = 98.6;

console.log("Temperature Conversions:");
console.log(`${celsius}°C = ${celsiusToFahrenheit(celsius).toFixed(1)}°F`);
console.log(`${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit).toFixed(1)}°C`);
```

### Try These Variations:
1. Add Kelvin conversion
2. Create a temperature range converter
3. Add input validation

## Exercise 5: Simple Game

### What You'll Learn:
- How to use random numbers
- How to work with conditions
- How to create interactive output

### Task:
Create a simple number guessing game.

```javascript
// 1. Generate a random number
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// 2. Create a function to check the guess
function checkGuess(guess) {
  attempts++;
  
  if (guess === secretNumber) {
    console.log(`Congratulations! You found the number in ${attempts} attempts!`);
    return true;
  } else if (guess < secretNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }
  return false;
}

// 3. Test the game
console.log("Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100.");

// Simulate some guesses
checkGuess(50);
checkGuess(75);
checkGuess(60);
checkGuess(65);
```

### Try These Variations:
1. Add a maximum number of attempts
2. Keep track of high scores
3. Add different difficulty levels

## Next Steps
After completing these exercises, you should:
1. Be comfortable with basic JavaScript syntax
2. Understand how to use the console
3. Know how to work with different data types
4. Be ready to move on to more complex concepts

[Return to Getting Started Guide](./getting-started.md) 