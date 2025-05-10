// JavaScript Arrays & Objects Practice
// Run this file with: node arrays-objects-practice.js

// ===== Exercise 1: Array Operations =====
// TODO: Implement these array operation functions

function addRemoveElements(array, element, operation) {
  // Your code here
  // Should add or remove element based on operation
  // Operations: 'push', 'pop', 'shift', 'unshift'
}

function findElements(array, predicate) {
  // Your code here
  // Should find elements matching predicate
}

function sortArray(array, key) {
  // Your code here
  // Should sort array by key if objects, or by value
}

function combineArrays(...arrays) {
  // Your code here
  // Should combine multiple arrays into one
}

// ===== Exercise 2: Array Methods =====
// TODO: Implement these array method functions

function transformArray(array, transformer) {
  // Your code here
  // Should transform array elements using transformer function
}

function filterArray(array, predicate) {
  // Your code here
  // Should filter array elements using predicate function
}

function reduceArray(array, reducer, initialValue) {
  // Your code here
  // Should reduce array to single value using reducer function
}

function checkArrayConditions(array, predicate) {
  // Your code here
  // Should check if array elements meet conditions
}

// ===== Exercise 3: Object Operations =====
// TODO: Implement these object operation functions

function modifyObject(obj, key, value, operation) {
  // Your code here
  // Should add, remove, or update object properties
}

function accessNestedProperty(obj, path) {
  // Your code here
  // Should access nested property using path string
}

function createObjectCopy(obj, deep = false) {
  // Your code here
  // Should create copy of object (shallow or deep)
}

function mergeObjects(...objects) {
  // Your code here
  // Should merge multiple objects into one
}

// ===== Exercise 4: Object Methods =====
// TODO: Implement these object method functions

function checkProperty(obj, key) {
  // Your code here
  // Should check if property exists and is enumerable
}

function createPropertyDescriptor(obj, key, descriptor) {
  // Your code here
  // Should create property with specific descriptor
}

function freezeObject(obj, deep = false) {
  // Your code here
  // Should freeze object (shallow or deep)
}

function createPrototypeObject(proto) {
  // Your code here
  // Should create object with specified prototype
}

// ===== Exercise 5: Complex Data Structures =====
// TODO: Implement these complex data structure functions

function processArrayOfObjects(array, processor) {
  // Your code here
  // Should process array of objects using processor function
}

function traverseNestedStructure(obj, visitor) {
  // Your code here
  // Should traverse nested structure using visitor function
}

function transformComplexData(data, transformer) {
  // Your code here
  // Should transform complex data structure
}

function queryNestedData(data, query) {
  // Your code here
  // Should query nested data structure
}

// ===== Challenge Exercise: Todo List Data Structure =====
// TODO: Implement this todo list data structure

class TodoSystem {
  constructor() {
    this.categories = new Map();
    this.relationships = {
      blocks: new Set(),
      requires: new Set(),
      related: new Set()
    };
  }

  addCategory(category) {
    // Your code here
    // Should add new category
  }

  addTodo(categoryId, todo) {
    // Your code here
    // Should add todo to category
  }

  addRelationship(todoA, todoB, type) {
    // Your code here
    // Should add relationship between todos
  }

  getTodoHistory(todoId) {
    // Your code here
    // Should return todo history
  }

  checkDependencies(todoId) {
    // Your code here
    // Should check todo dependencies
  }
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Array Operations ===');
const array = [1, 2, 3];
console.log('Add/Remove:', addRemoveElements(array, 4, 'push'));
console.log('Find:', findElements(array, x => x > 2));
console.log('Sort:', sortArray([{ id: 2 }, { id: 1 }, { id: 3 }], 'id'));
console.log('Combine:', combineArrays([1, 2], [3, 4]));

// Test Exercise 2
console.log('\n=== Testing Array Methods ===');
console.log('Transform:', transformArray([1, 2, 3], x => x * 2));
console.log('Filter:', filterArray([1, 2, 3, 4], x => x > 2));
console.log('Reduce:', reduceArray([1, 2, 3, 4], (a, b) => a + b, 0));
console.log('Check:', checkArrayConditions([1, 2, 3], x => x > 0));

// Test Exercise 3
console.log('\n=== Testing Object Operations ===');
const obj = { a: 1, b: 2 };
console.log('Modify:', modifyObject(obj, 'c', 3, 'add'));
console.log('Nested:', accessNestedProperty({ a: { b: 1 } }, 'a.b'));
console.log('Copy:', createObjectCopy(obj));
console.log('Merge:', mergeObjects({ a: 1 }, { b: 2 }));

// Test Exercise 4
console.log('\n=== Testing Object Methods ===');
console.log('Check:', checkProperty(obj, 'a'));
console.log('Descriptor:', createPropertyDescriptor(obj, 'd', { value: 4 }));
console.log('Freeze:', freezeObject(obj));
console.log('Prototype:', createPrototypeObject({ a: 1 }));

// Test Exercise 5
console.log('\n=== Testing Complex Data Structures ===');
console.log('Process:', processArrayOfObjects(
  [{ id: 1 }, { id: 2 }],
  x => ({ ...x, processed: true })
));
console.log('Traverse:', traverseNestedStructure(
  { a: { b: 1 } },
  (value, path) => console.log(path, value)
));
console.log('Transform:', transformComplexData(
  { a: [1, 2, 3] },
  data => ({ ...data, sum: data.a.reduce((a, b) => a + b, 0) })
));
console.log('Query:', queryNestedData(
  { a: { b: 1 } },
  'a.b'
));

// Test Challenge Exercise
console.log('\n=== Testing Todo System ===');
const todoSystem = new TodoSystem();
todoSystem.addCategory({ id: 'work', name: 'Work' });
todoSystem.addTodo('work', {
  id: 1,
  title: 'Learn JavaScript',
  completed: false,
  priority: 'high'
});
console.log('Categories:', todoSystem.categories);
console.log('Relationships:', todoSystem.relationships);

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node arrays-objects-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each function as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 