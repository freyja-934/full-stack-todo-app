// JavaScript Variables Practice
// Run this file with: node variables-practice.js

// ===== Exercise 1: Variable Declaration =====
// TODO: Implement these variable declarations

function declarePersonalInfo() {
  // Your code here
  // Should declare variables for:
  // - name (string)
  // - age (number)
  // - favoriteColor (string)
  // - likesProgramming (boolean)
  // - favoriteNumbers (array)
  // - address (object)
  // Return an object with all these variables
}

// ===== Exercise 2: Type Conversion =====
// TODO: Implement these type conversion functions

function convertAndAdd(stringNumber) {
  // Your code here
  // Should:
  // 1. Convert string to number
  // 2. Add 10
  // 3. Convert back to string
  // 4. Return the result
}

// ===== Exercise 3: Variable Scope =====
// TODO: Implement these scope demonstration functions

function demonstrateScope() {
  // Your code here
  // Should demonstrate:
  // 1. Global scope
  // 2. Function scope
  // 3. Block scope
  // 4. Variable shadowing
  // Return an object with results
}

// ===== Exercise 4: Constants and Mutability =====
// TODO: Implement these constant demonstration functions

function demonstrateConstants() {
  // Your code here
  // Should demonstrate:
  // 1. Modifying a constant object
  // 2. Modifying a constant array
  // 3. Attempting to modify a constant primitive
  // Return an object with results
}

// ===== Exercise 5: Variable Hoisting =====
// TODO: Implement these hoisting demonstration functions

function demonstrateHoisting() {
  // Your code here
  // Should demonstrate:
  // 1. var hoisting
  // 2. let hoisting
  // 3. temporal dead zone
  // Return an object with results
}

// ===== Challenge Exercise: Todo Item =====
// TODO: Implement this todo item creation function

function createTodoItem() {
  // Your code here
  // Should create a todo item with:
  // - id (number)
  // - title (string)
  // - completed (boolean)
  // - dueDate (Date)
  // - tags (string[])
  // - priority (object)
  // Return the todo item object
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Variable Declaration ===');
const personalInfo = declarePersonalInfo();
console.log('Personal Info:', personalInfo);

// Test Exercise 2
console.log('\n=== Testing Type Conversion ===');
console.log('Converting "42":', convertAndAdd('42'));

// Test Exercise 3
console.log('\n=== Testing Variable Scope ===');
const scopeResults = demonstrateScope();
console.log('Scope Results:', scopeResults);

// Test Exercise 4
console.log('\n=== Testing Constants ===');
const constantResults = demonstrateConstants();
console.log('Constant Results:', constantResults);

// Test Exercise 5
console.log('\n=== Testing Hoisting ===');
const hoistingResults = demonstrateHoisting();
console.log('Hoisting Results:', hoistingResults);

// Test Challenge Exercise
console.log('\n=== Testing Todo Item ===');
const todoItem = createTodoItem();
console.log('Todo Item:', todoItem);

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node variables-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each function as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 