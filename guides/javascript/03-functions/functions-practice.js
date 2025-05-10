// JavaScript Functions Practice
// Run this file with: node functions-practice.js

// ===== Exercise 1: Basic Functions =====
// TODO: Implement these basic functions

function calculateRectangleArea(width, height) {
  // Your code here
  // Should calculate and return the area of a rectangle
}

function celsiusToFahrenheit(celsius) {
  // Your code here
  // Should convert Celsius to Fahrenheit
}

function isEven(number) {
  // Your code here
  // Should return true if number is even, false if odd
}

function getRandomNumber(min, max) {
  // Your code here
  // Should return a random number between min and max (inclusive)
}

// ===== Exercise 2: Arrow Functions =====
// TODO: Convert these to arrow functions

const doubleNumber = (number) => {
  // Your code here
  // Should double the input number
}

const isEmptyString = (str) => {
  // Your code here
  // Should return true if string is empty
}

const calculateAverage = (numbers) => {
  // Your code here
  // Should calculate average of array of numbers
}

const formatName = (first, last) => {
  // Your code here
  // Should return formatted name
}

// ===== Exercise 3: Function Scope =====
// TODO: Implement these scope demonstration functions

function demonstrateScope() {
  // Your code here
  // Should demonstrate:
  // 1. Global variables
  // 2. Function-scoped variables
  // 3. Block-scoped variables
  // 4. Variable shadowing
  // Return an object with results
}

// ===== Exercise 4: Callback Functions =====
// TODO: Implement these callback functions

function filterNumbers(numbers, callback) {
  // Your code here
  // Should filter array using callback
}

function mapStrings(strings, callback) {
  // Your code here
  // Should map array using callback
}

function reduceArray(array, callback, initialValue) {
  // Your code here
  // Should reduce array using callback
}

function sortObjects(objects, callback) {
  // Your code here
  // Should sort array using callback
}

// ===== Exercise 5: Higher-Order Functions =====
// TODO: Implement these higher-order functions

function createFunctionModifier(originalFunction) {
  // Your code here
  // Should return a new function that modifies the original
}

// ===== Challenge Exercise: Todo List Manager =====
// TODO: Implement these todo list functions

class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    // Your code here
    // Should add a new todo
  }

  markComplete(id) {
    // Your code here
    // Should mark a todo as complete
  }

  filterByStatus(completed) {
    // Your code here
    // Should filter todos by completion status
  }

  sortByDate() {
    // Your code here
    // Should sort todos by creation date
  }

  getCompletionStats() {
    // Your code here
    // Should return completion statistics
  }
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Basic Functions ===');
console.log('Rectangle Area:', calculateRectangleArea(5, 3));
console.log('Celsius to Fahrenheit:', celsiusToFahrenheit(25));
console.log('Is Even:', isEven(4));
console.log('Random Number:', getRandomNumber(1, 10));

// Test Exercise 2
console.log('\n=== Testing Arrow Functions ===');
console.log('Double Number:', doubleNumber(5));
console.log('Is Empty String:', isEmptyString(''));
console.log('Average:', calculateAverage([1, 2, 3, 4, 5]));
console.log('Formatted Name:', formatName('John', 'Doe'));

// Test Exercise 3
console.log('\n=== Testing Function Scope ===');
const scopeResults = demonstrateScope();
console.log('Scope Results:', scopeResults);

// Test Exercise 4
console.log('\n=== Testing Callback Functions ===');
const numbers = [1, 2, 3, 4, 5];
console.log('Filtered Numbers:', filterNumbers(numbers, n => n > 3));
console.log('Mapped Strings:', mapStrings(['a', 'b', 'c'], s => s.toUpperCase()));
console.log('Reduced Array:', reduceArray(numbers, (a, b) => a + b, 0));
console.log('Sorted Objects:', sortObjects(
  [{id: 2}, {id: 1}, {id: 3}],
  (a, b) => a.id - b.id
));

// Test Exercise 5
console.log('\n=== Testing Higher-Order Functions ===');
const modifiedFunction = createFunctionModifier(x => x * 2);
console.log('Modified Function:', modifiedFunction(5));

// Test Challenge Exercise
console.log('\n=== Testing Todo List Manager ===');
const todoList = new TodoList();
todoList.addTodo({
  id: 1,
  title: 'Learn JavaScript',
  completed: false,
  createdAt: new Date(),
  priority: 'high'
});
console.log('Todo List:', todoList.todos);
console.log('Completion Stats:', todoList.getCompletionStats());

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node functions-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each function as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 