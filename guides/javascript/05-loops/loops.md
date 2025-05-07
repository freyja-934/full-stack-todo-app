# Loops

## Why It's Important

Loops allow you to execute a block of code repeatedly, which is essential for:
- Processing collections of data
- Performing repetitive tasks
- Iterating through arrays and objects
- Creating dynamic content

**Real-World Example:**
In a todo application, you might use loops to display all tasks, filter completed tasks, or update multiple tasks at once.

## Key Concepts

### for Loop

```javascript
// Basic for loop
for (initialization; condition; increment/decrement) {
  // Code to execute on each iteration
}

// Example: Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### while Loop

```javascript
// Basic while loop
while (condition) {
  // Code to execute as long as condition is true
}

// Example: Count down from 5 to 1
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}
```

### do...while Loop

```javascript
// do...while loop
do {
  // Code to execute at least once
} while (condition);

// Example: Ask for input until valid
let userInput;
do {
  userInput = prompt("Enter a number greater than 0");
} while (userInput <= 0);
```

### for...of Loop

```javascript
// for...of loop (for iterating over iterable objects like arrays)
for (const element of iterable) {
  // Code to execute for each element
}

// Example: Iterate through an array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

### for...in Loop

```javascript
// for...in loop (for iterating over object properties)
for (const property in object) {
  // Code to execute for each property
}

// Example: Iterate through object properties
const person = { name: "Sofia", age: 7 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### Loop Control Statements

```javascript
// break - Exit the loop immediately
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // Exit the loop when i equals 6
  }
  console.log(i);
}

// continue - Skip the rest of the current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip the rest of the loop when i equals 3
  }
  console.log(i);
}
```

## Code Examples

### Basic for Loop

```javascript
// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Count down from 5 to 1
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Count by 2s from 2 to 10
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

### while Loop

```javascript
// Count down from 5 to 1
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}

// Generate random numbers until we get a 7
let randomNumber;
while (randomNumber !== 7) {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(`Generated: ${randomNumber}`);
}
console.log("Got a 7!");
```

### do...while Loop

```javascript
// Ask for input until valid
let userInput;
do {
  userInput = prompt("Enter a number greater than 0");
} while (userInput <= 0);
console.log(`You entered: ${userInput}`);

// Execute at least once
let i = 1;
do {
  console.log(`This runs at least once: ${i}`);
  i++;
} while (i <= 3);
```

### for...of Loop

```javascript
// Iterate through an array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Iterate through a string
const name = "Sofia";
for (const char of name) {
  console.log(char);
}

// Iterate through a Set
const numbers = new Set([1, 2, 3, 3, 4, 4, 5]); // Duplicates are ignored
for (const num of numbers) {
  console.log(num);
}
```

### for...in Loop

```javascript
// Iterate through object properties
const person = { name: "Sofia", age: 7 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Iterate through array indices (not recommended, use for...of instead)
const colors = ["red", "green", "blue"];
for (const index in colors) {
  console.log(`Index ${index}: ${colors[index]}`);
}
```

### Loop Control Statements

```javascript
// Using break to exit a loop
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // Exit the loop when i equals 6
  }
  console.log(i);
}
// Output: 1, 2, 3, 4, 5

// Using continue to skip an iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip the rest of the loop when i equals 3
  }
  console.log(i);
}
// Output: 1, 2, 4, 5
```

### Nested Loops

```javascript
// Create a multiplication table
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
  console.log("-------------------");
}

// Find pairs of numbers that sum to 10
const numbers = [2, 4, 6, 8, 3, 7, 5];
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] + numbers[j] === 10) {
      console.log(`${numbers[i]} + ${numbers[j]} = 10`);
    }
  }
}
```

### Loops with Arrays

```javascript
// Sum all numbers in an array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(`Sum: ${sum}`);

// Find the maximum value in an array
const values = [10, 5, 20, 15, 8];
let max = values[0];
for (const value of values) {
  if (value > max) {
    max = value;
  }
}
console.log(`Maximum value: ${max}`);

// Filter an array (create a new array with elements that meet a condition)
const todos = [
  { text: "Learn JavaScript", completed: true },
  { text: "Build a todo app", completed: false },
  { text: "Deploy the app", completed: false }
];

const completedTodos = [];
for (const todo of todos) {
  if (todo.completed) {
    completedTodos.push(todo);
  }
}
console.log(completedTodos);
```

### Todo App Examples

```javascript
// Display all todos
function displayTodos(todos) {
  for (const todo of todos) {
    console.log(`- ${todo.title} (${todo.completed ? '✓' : ' '})`);
  }
}

// Filter todos by status
function filterTodosByStatus(todos, status) {
  const filteredTodos = [];
  for (const todo of todos) {
    if (todo.completed === status) {
      filteredTodos.push(todo);
    }
  }
  return filteredTodos;
}

// Update multiple todos
function updateTodos(todos, updates) {
  for (const todo of todos) {
    for (const key in updates) {
      if (todo.hasOwnProperty(key)) {
        todo[key] = updates[key];
      }
    }
  }
  return todos;
}

// Example usage
const todos = [
  { title: "Learn JavaScript", completed: false },
  { title: "Build a todo app", completed: true },
  { title: "Deploy to production", completed: false }
];

displayTodos(todos);
const completedTodos = filterTodosByStatus(todos, true);
updateTodos(todos, { priority: 'high' });
```

### Web Development Examples

```javascript
// Create a list of elements
function createTodoList(todos) {
  const todoList = document.createElement('ul');
  
  for (const todo of todos) {
    const li = document.createElement('li');
    li.textContent = todo.title;
    li.className = todo.completed ? 'completed' : 'pending';
    todoList.appendChild(li);
  }
  
  return todoList;
}

// Process form data
function processFormData(form) {
  const formData = {};
  for (const element of form.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }
  return formData;
}

// Animate elements
function animateElements(elements) {
  let delay = 0;
  for (const element of elements) {
    setTimeout(() => {
      element.classList.add('fade-in');
    }, delay);
    delay += 100;
  }
}
```

## Practice Exercises

1. Use a for loop to print numbers 1 to 5
2. Use a while loop to count down from 5 to 1
3. Use a for...of loop to print each item in an array of fruits
4. Create a loop that finds the sum of all numbers in an array
5. Write a loop that checks if an array contains a specific value

## Related Practice

Check out the [Loops practice exercises](../../practice/js-fundamentals/loops.md) to test your knowledge.

## Next Steps

After understanding loops, move on to [Arrays & Objects](../06-arrays-objects/arrays-objects.md) to learn how to work with collections of data. 