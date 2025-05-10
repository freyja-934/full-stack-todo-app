// JavaScript Error Handling Practice
// Run this file with: node error-handling-practice.js

// ===== Exercise 1: Basic Error Handling =====
// TODO: Implement these functions with proper error handling

function handleDivision(a, b) {
  // Your code here
  // Should handle division by zero
  // Should return null for invalid inputs
}

function validateUserInput(input) {
  // Your code here
  // Should validate that input is a string
  // Should validate that input is not empty
  // Should validate that input is not too long
}

function processArrayOperation(array, index) {
  // Your code here
  // Should handle out of bounds access
  // Should handle invalid array operations
}

function handleFileOperation(filename) {
  // Your code here
  // Should handle file not found
  // Should handle permission errors
  // Should handle read/write errors
}

// ===== Exercise 2: Custom Errors =====
// TODO: Create these custom error classes

class ValidationError extends Error {
  // Your code here
  // Should extend Error
  // Should set custom name
  // Should include validation details
}

class NetworkError extends Error {
  // Your code here
  // Should extend Error
  // Should set custom name
  // Should include network details
}

class AuthenticationError extends Error {
  // Your code here
  // Should extend Error
  // Should set custom name
  // Should include auth details
}

class BusinessLogicError extends Error {
  // Your code here
  // Should extend Error
  // Should set custom name
  // Should include business rule details
}

// ===== Exercise 3: Async Error Handling =====
// TODO: Implement these async functions with error handling

async function handleApiError() {
  // Your code here
  // Should handle network errors
  // Should handle timeout errors
  // Should handle server errors
}

async function implementRetryLogic(operation, maxRetries = 3) {
  // Your code here
  // Should retry failed operations
  // Should handle max retries
  // Should implement exponential backoff
}

async function processMultiplePromises(promises) {
  // Your code here
  // Should handle multiple async operations
  // Should handle partial failures
  // Should return successful results
}

async function handleTimeout(operation, timeout) {
  // Your code here
  // Should implement timeout
  // Should cancel long-running operations
  // Should handle timeout errors
}

// ===== Exercise 4: Error Boundaries =====
// TODO: Implement these error boundary components

class ErrorBoundary {
  // Your code here
  // Should catch rendering errors
  // Should display fallback UI
  // Should log error information
  // Should handle error recovery
}

// ===== Exercise 5: Error Propagation =====
// TODO: Implement these functions with proper error propagation

function propagateErrors(operation) {
  // Your code here
  // Should properly propagate errors
  // Should transform error types
  // Should add context to errors
  // Should handle error chains
}

// ===== Challenge Exercise: Todo App Error Handling =====
// TODO: Implement a robust error handling system for a todo app

class TodoService {
  constructor(maxRetries = 3) {
    this.maxRetries = maxRetries;
  }

  async addTodo(todo) {
    // Your code here
    // Should validate todo input
    // Should handle API errors
    // Should implement retry logic
    // Should provide user feedback
  }

  async updateTodo(id, updates) {
    // Your code here
    // Should check todo existence
    // Should validate updates
    // Should handle conflicts
    // Should manage concurrent updates
  }

  async deleteTodo(id) {
    // Your code here
    // Should handle not found errors
    // Should manage dependencies
    // Should implement soft delete
    // Should handle cascading deletes
  }
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Basic Error Handling ===');
try {
  console.log('Testing division by zero:');
  const result = handleDivision(10, 0);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}

// Test Exercise 2
console.log('\n=== Testing Custom Errors ===');
try {
  throw new ValidationError('Invalid input');
} catch (error) {
  console.log('Error type:', error.name);
  console.log('Error message:', error.message);
}

// Test Exercise 3
console.log('\n=== Testing Async Error Handling ===');
handleApiError()
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error.message));

// Test Exercise 4
console.log('\n=== Testing Error Boundaries ===');
const boundary = new ErrorBoundary();
// Add your error boundary tests here

// Test Exercise 5
console.log('\n=== Testing Error Propagation ===');
try {
  propagateErrors(() => {
    throw new Error('Test error');
  });
} catch (error) {
  console.log('Propagated error:', error.message);
}

// Test Challenge Exercise
console.log('\n=== Testing Todo Service ===');
const todoService = new TodoService();
todoService.addTodo({ title: 'Learn Error Handling' })
  .then(todo => console.log('Todo added:', todo))
  .catch(error => console.error('Error:', error.message));

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node error-handling-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each function as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 