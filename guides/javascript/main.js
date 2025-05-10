// JavaScript Learning Guide - Main Testing File
// Use this file to test your code from the practice exercises

// ===== Import Your Code Here =====
// Uncomment the section you're working on and import your code
// Example:
// const { handleDivision } = require('./07-error-handling/your-solution.js');

// ===== Test Your Code =====
// Add your test code here and use console.log to see the results

// Example for Error Handling:
/*
// Test division by zero
console.log('Testing division by zero:');
try {
  const result = handleDivision(10, 0);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}

// Test custom error
console.log('\nTesting custom error:');
try {
  throw new TodoValidationError('Invalid todo');
} catch (error) {
  console.log('Error type:', error.name);
  console.log('Error message:', error.message);
}

// Test async error handling
console.log('\nTesting async error handling:');
fetchTodoWithRetry(1)
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error.message));
*/

// ===== How to Use This File =====
/*
1. Create a new file for your solution (e.g., your-solution.js)
2. Write your code in that file
3. Export your functions/classes
4. Import them in this file
5. Add test code and console.log statements
6. Run the file with Node.js:
   node main.js

Example file structure:
guides/javascript/
  ├── 07-error-handling/
  │   ├── error-handling.md
  │   ├── error-handling-practice.md
  │   └── your-solution.js
  └── main.js

Example your-solution.js:
module.exports = {
  handleDivision,
  TodoValidationError,
  fetchTodoWithRetry
};
*/ 

const main = () => {
  console.log('Hello, world!');
}

main();