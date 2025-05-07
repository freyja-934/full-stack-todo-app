# Functions

## Why It's Important

Functions are the building blocks of JavaScript applications. They allow you to:
- Reuse code without repeating it
- Break down complex tasks into smaller, manageable pieces
- Create more maintainable and organized code
- Encapsulate logic for better readability

**Real-World Example:**
In a todo application, you might have functions for adding tasks, marking them as complete, and filtering them by status.

## Key Concepts

### Function Declaration

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const greet = function(name) {
  return `Hello, ${name}!`;
};

// Arrow function
const greet = (name) => `Hello, ${name}!`;
```

### Parameters and Arguments

```javascript
// Parameters are the variables in the function definition
function add(a, b) {
  return a + b;
}

// Arguments are the values passed when calling the function
console.log(add(5, 3)); // 8
```

### Return Values

```javascript
// Functions can return values
function multiply(x, y) {
  return x * y;
}

// Or they can perform actions without returning
function logMessage(message) {
  console.log(message);
  // No return statement means it returns undefined
}
```

### Function Scope

```javascript
// Variables declared inside a function are only accessible within that function
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
counter.increment();
console.log(counter.getCount()); // 1
// console.log(count); // Error: count is not defined
```

## Code Examples

### Basic Functions

```javascript
// Simple function that returns a greeting
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Sofia")); // Hello, Sofia!

// Function that performs a calculation
function calculateTotal(price, quantity, discount = 0) {
  const subtotal = price * quantity;
  const savings = subtotal * (discount / 100);
  return subtotal - savings;
}

console.log(calculateTotal(10, 3)); // 30
console.log(calculateTotal(10, 3, 20)); // 24 (20% discount)
```

### Arrow Functions

```javascript
// Arrow function with a single parameter
const square = x => x * x;
console.log(square(5)); // 25

// Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

// Arrow function with a block body
const greet = (name) => {
  const greeting = `Hello, ${name}!`;
  return greeting;
};
console.log(greet("Luna")); // Hello, Luna!
```

### Functions as First-Class Citizens

```javascript
// Functions can be assigned to variables
const logMessage = function(message) {
  console.log(message);
};

// Functions can be passed as arguments
function executeFunction(fn, value) {
  fn(value);
}

executeFunction(logMessage, "Hello from a function!");

// Functions can be returned from other functions
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHi = createGreeter("Hi");
const sayHello = createGreeter("Hello");

console.log(sayHi("Sofia")); // Hi, Sofia!
console.log(sayHello("Luna")); // Hello, Luna!
```

### Callback Functions

```javascript
// Callbacks are functions passed as arguments to other functions
function fetchData(callback) {
  // Simulating an API call
  setTimeout(() => {
    const data = { name: "Sofia", age: 7 };
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log("Data received:", data);
});

// Using arrow functions for callbacks
fetchData(data => console.log("Data received:", data));
```

### Immediately Invoked Function Expression (IIFE)

```javascript
// Function that runs immediately when defined
(function() {
  console.log("This function runs immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log(`Hello, ${name}!`);
})("Sofia");

// IIFE for creating private variables
const counter = (function() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
})();

console.log(counter.getCount()); // 0
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
```

### Todo App Examples

```javascript
// Function to add a new todo
function addTodo(todoList, title) {
  const newTodo = {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date()
  };
  todoList.push(newTodo);
  return newTodo;
}

// Function to toggle todo completion
function toggleTodo(todo) {
  todo.completed = !todo.completed;
  return todo;
}

// Function to filter todos by status
function filterTodos(todos, status) {
  return todos.filter(todo => todo.completed === status);
}

// Function to delete a todo
function deleteTodo(todoList, id) {
  const index = todoList.findIndex(todo => todo.id === id);
  if (index !== -1) {
    return todoList.splice(index, 1)[0];
  }
  return null;
}

// Example usage
const todos = [];
addTodo(todos, "Learn JavaScript");
addTodo(todos, "Build a todo app");
console.log(todos);

const firstTodo = todos[0];
toggleTodo(firstTodo);
console.log("Completed todos:", filterTodos(todos, true));
```

## Practice Exercises

1. Write a function that returns the square of a number
2. Write an arrow function that takes two numbers and returns their sum
3. Write a function that takes a name and returns "Good morning, {name}!"
4. Create a function that calculates the area of a rectangle
5. Write a function that checks if a number is even or odd

## Related Practice

Check out the [Functions practice exercises](./functions-practice.md) to test your knowledge.

## Next Steps

After understanding functions, move on to [Conditionals](../04-conditionals/conditionals.md) to learn how to make decisions in your code. 