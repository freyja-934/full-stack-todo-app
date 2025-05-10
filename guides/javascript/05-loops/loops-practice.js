// JavaScript Loops Practice
// Run this file with: node loops-practice.js

// ===== Exercise 1: For Loops =====
// TODO: Implement these for loop functions

function printNumbers(start, end) {
  // Your code here
  // Should print numbers from start to end
}

function calculateSum(start, end) {
  // Your code here
  // Should calculate sum of numbers from start to end
}

function printMultiplicationTable(number) {
  // Your code here
  // Should print multiplication table for number
}

function countLetterFrequency(str) {
  // Your code here
  // Should return object with letter frequencies
}

// ===== Exercise 2: While Loops =====
// TODO: Implement these while loop functions

function generateFibonacci(limit) {
  // Your code here
  // Should return array of Fibonacci numbers up to limit
}

function findGCD(a, b) {
  // Your code here
  // Should return greatest common divisor
}

function simulateCountdown(seconds) {
  // Your code here
  // Should simulate countdown from seconds to 0
}

function getValidInput(prompt, validator) {
  // Your code here
  // Should get valid input using validator function
}

// ===== Exercise 3: For...of Loops =====
// TODO: Implement these for...of loop functions

function sumArray(numbers) {
  // Your code here
  // Should return sum of all numbers in array
}

function findLongestString(strings) {
  // Your code here
  // Should return longest string in array
}

function countVowels(str) {
  // Your code here
  // Should return count of vowels in string
}

function createFrequencyMap(array) {
  // Your code here
  // Should return Map with element frequencies
}

// ===== Exercise 4: For...in Loops =====
// TODO: Implement these for...in loop functions

function printObjectProperties(obj) {
  // Your code here
  // Should print all properties of object
}

function sumNumericProperties(obj) {
  // Your code here
  // Should return sum of all numeric properties
}

function createModifiedCopy(obj, modifier) {
  // Your code here
  // Should return copy of object with modified values
}

function countNestedProperties(obj) {
  // Your code here
  // Should return count of properties in nested objects
}

// ===== Exercise 5: Array Methods =====
// TODO: Implement these array method functions

function filterNumbers(numbers, predicate) {
  // Your code here
  // Should filter array using predicate function
}

function mapStrings(strings, transformer) {
  // Your code here
  // Should map array using transformer function
}

function reduceArray(array, reducer, initialValue) {
  // Your code here
  // Should reduce array using reducer function
}

function sortObjects(objects, key) {
  // Your code here
  // Should sort array of objects by key
}

// ===== Challenge Exercise: Todo List Processor =====
// TODO: Implement these todo list processor functions

class TodoProcessor {
  constructor(todos) {
    this.todos = todos;
  }

  filterByStatus(completed) {
    // Your code here
    // Should return todos filtered by completion status
  }

  sortByDate() {
    // Your code here
    // Should return todos sorted by due date
  }

  groupByPriority() {
    // Your code here
    // Should return todos grouped by priority
  }

  getCompletionStats() {
    // Your code here
    // Should return completion statistics
  }

  updateTodoProperties(updater) {
    // Your code here
    // Should update todo properties using updater function
  }
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing For Loops ===');
printNumbers(1, 5);
console.log('Sum 1-10:', calculateSum(1, 10));
printMultiplicationTable(5);
console.log('Letter Frequency:', countLetterFrequency('hello'));

// Test Exercise 2
console.log('\n=== Testing While Loops ===');
console.log('Fibonacci:', generateFibonacci(10));
console.log('GCD:', findGCD(48, 18));
simulateCountdown(3);
console.log('Valid Input:', getValidInput('Enter a number:', n => !isNaN(n)));

// Test Exercise 3
console.log('\n=== Testing For...of Loops ===');
console.log('Array Sum:', sumArray([1, 2, 3, 4, 5]));
console.log('Longest String:', findLongestString(['a', 'bb', 'ccc']));
console.log('Vowel Count:', countVowels('hello'));
console.log('Frequency Map:', createFrequencyMap(['a', 'b', 'a', 'c']));

// Test Exercise 4
console.log('\n=== Testing For...in Loops ===');
printObjectProperties({ a: 1, b: 2, c: 3 });
console.log('Numeric Sum:', sumNumericProperties({ a: 1, b: '2', c: 3 }));
console.log('Modified Copy:', createModifiedCopy({ a: 1, b: 2 }, x => x * 2));
console.log('Nested Count:', countNestedProperties({ a: { b: 1 }, c: 2 }));

// Test Exercise 5
console.log('\n=== Testing Array Methods ===');
console.log('Filtered:', filterNumbers([1, 2, 3, 4, 5], n => n > 3));
console.log('Mapped:', mapStrings(['a', 'b', 'c'], s => s.toUpperCase()));
console.log('Reduced:', reduceArray([1, 2, 3, 4], (a, b) => a + b, 0));
console.log('Sorted:', sortObjects(
  [{ id: 2 }, { id: 1 }, { id: 3 }],
  'id'
));

// Test Challenge Exercise
console.log('\n=== Testing Todo Processor ===');
const todos = [
  {
    id: 1,
    title: 'Learn JavaScript',
    completed: false,
    dueDate: new Date('2024-03-20'),
    priority: 'high'
  },
  {
    id: 2,
    title: 'Build a todo app',
    completed: true,
    dueDate: new Date('2024-03-15'),
    priority: 'medium'
  }
];
const processor = new TodoProcessor(todos);
console.log('Filtered:', processor.filterByStatus(false));
console.log('Sorted:', processor.sortByDate());
console.log('Grouped:', processor.groupByPriority());
console.log('Stats:', processor.getCompletionStats());

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node loops-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each function as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 