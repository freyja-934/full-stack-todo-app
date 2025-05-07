# Getting Started with JavaScript

Welcome to JavaScript! This guide will help you set up your development environment and write your first JavaScript program.

## Setting Up Your Environment

### 1. Install a Code Editor
We recommend using Visual Studio Code (VS Code):
1. Download VS Code from [code.visualstudio.com](https://code.visualstudio.com)
2. Install the following extensions:
   - JavaScript (ES6) code snippets
   - ESLint
   - Prettier
   - Live Server

### 2. Install Node.js
Node.js includes npm (Node Package Manager):
1. Download from [nodejs.org](https://nodejs.org)
2. Choose the LTS (Long Term Support) version
3. Verify installation:
```bash
node --version
npm --version
```

### 3. Create Your First Project
```bash
# Create a new directory
mkdir my-first-js-project
cd my-first-js-project

# Initialize a new project
npm init -y

# Create your first JavaScript file
touch index.js
```

## Writing Your First Program

### 1. Basic Syntax
```javascript
// This is a comment - it helps explain your code
console.log("Hello, World!"); // This prints to the console
```

### 2. Using the Console
The console is your best friend for learning JavaScript:
```javascript
// Basic console methods
console.log("This is a log message");
console.info("This is an info message");
console.warn("This is a warning message");
console.error("This is an error message");

// Logging variables
const name = "John";
console.log("Hello,", name);

// Logging objects
const user = { name: "John", age: 30 };
console.log("User:", user);

// Table view for arrays and objects
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];
console.table(users);
```

### 3. Basic Program Structure
```javascript
// 1. Variables
let message = "Hello";
const PI = 3.14159;

// 2. Functions
function greet(name) {
  return `Hello, ${name}!`;
}

// 3. Control flow
if (message === "Hello") {
  console.log(greet("World"));
}

// 4. Loops
for (let i = 0; i < 3; i++) {
  console.log(`Count: ${i}`);
}
```

## Running Your Code

### 1. Using Node.js
```bash
# Run your JavaScript file
node index.js
```

### 2. Using the Browser
Create an HTML file (index.html):
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>JavaScript Practice</h1>
    <script src="index.js"></script>
</body>
</html>
```

Then use Live Server in VS Code to run it.

## Common Pitfalls to Avoid

1. **Missing Semicolons**
```javascript
// Good
console.log("Hello");

// Bad (can cause issues)
console.log("Hello")
```

2. **Case Sensitivity**
```javascript
// These are different variables
let name = "John";
let Name = "Jane";
```

3. **Variable Declaration**
```javascript
// Good
let count = 0;
const MAX_COUNT = 10;

// Bad
count = 0; // Missing declaration
```

## Best Practices

1. **Use Meaningful Names**
```javascript
// Good
const userAge = 25;
const isActive = true;

// Bad
const a = 25;
const b = true;
```

2. **Add Comments**
```javascript
// Calculate the total price including tax
function calculateTotal(price, taxRate) {
  return price * (1 + taxRate);
}
```

3. **Format Your Code**
```javascript
// Good formatting
function greet(name) {
  if (name) {
    return `Hello, ${name}!`;
  }
  return "Hello, World!";
}

// Bad formatting
function greet(name){if(name){return`Hello,${name}!`}return"Hello,World!"}
```

## Practice Exercises

1. **Hello World**
   - Create a program that prints "Hello, World!" to the console
   - Add your name to the message
   - Try different console methods (log, info, warn, error)

2. **Basic Calculator**
   - Create variables for two numbers
   - Print their sum, difference, product, and quotient
   - Format the output nicely

3. **User Information**
   - Create variables for a user's name, age, and favorite color
   - Print them in a formatted message
   - Try using template literals

## Next Steps

After completing this guide, you should:
1. Be comfortable with your development environment
2. Understand basic JavaScript syntax
3. Know how to run JavaScript code
4. Be ready to learn about [Variables & Data Types](../02-variables/variables.md)

Remember:
- Practice regularly
- Use the console to experiment
- Don't be afraid to make mistakes
- Read the error messages carefully

[Return to JavaScript Fundamentals](../README.md) 