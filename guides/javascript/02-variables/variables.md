# Variables & Data Types

## Why It's Important

Variables hold data so your program can remember and work with information. Data types define what kind of data you're working with (text, numbers, lists, etc.).

**Real-World Example:**
Storing a user's name, their age, or a list of their favorite products in a todo application.

## Key Concepts

### Variable Declaration

JavaScript provides three ways to declare variables:

1. **`var`**: The original way to declare variables (function-scoped)
2. **`let`**: Modern way to declare variables that can be reassigned (block-scoped)
3. **`const`**: Modern way to declare variables that cannot be reassigned (block-scoped)

### Data Types

JavaScript has several data types:

1. **Primitive Types**:
   - `string`: Text data (e.g., "Hello", "Todo item")
   - `number`: Numeric data (e.g., 42, 3.14)
   - `boolean`: True/false values (e.g., true, false)
   - `null`: Represents the intentional absence of any object value
   - `undefined`: Represents a variable that has been declared but not assigned a value

2. **Reference Types**:
   - `array`: Ordered collections of values (e.g., [1, 2, 3])
   - `object`: Collections of key-value pairs (e.g., {name: "John", age: 30})

## Code Examples

### Variable Declaration

```javascript
// Using let (can be reassigned)
let name = "John";
name = "Jane"; // This is allowed

// Using const (cannot be reassigned)
const age = 30;
// age = 31; // This would cause an error

// Using var (function-scoped, older way)
var isActive = true;
```

### Different Data Types

```javascript
// String
const title = "My Todo List";

// Number
const count = 5;
const price = 9.99;

// Boolean
const isCompleted = false;

// Array
const todos = ["Learn JavaScript", "Build a todo app", "Deploy to production"];

// Object
const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

// Null (intentional absence of value)
const emptyTodo = null;

// Undefined (variable declared but not assigned)
let newTodo;
console.log(newTodo); // undefined
```

### Using Variables in a Todo App

```javascript
// Todo item variables
const todoTitle = "Buy groceries";
let isCompleted = false;
const dueDate = "2023-05-01";

// Todo list (array)
const todoList = [
  { title: "Learn JavaScript", completed: true },
  { title: "Build a todo app", completed: false },
  { title: "Deploy to production", completed: false }
];

// User object
const currentUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  preferences: {
    theme: "dark",
    notifications: true
  }
};
```

## Practice Exercises

Try these exercises to reinforce your understanding:

1. Create a variable for your favorite color and log it.
2. Make an array of your 3 favorite foods.
3. Create an object representing a car with properties: brand, model, year.
4. Create variables for a todo item with title, completed status, and due date.
5. Create an array of todo objects, each with title and completed properties.

## Related Practice

Check out the [Variables practice exercises](./variables-practice.md) to test your knowledge.

## Next Steps

After understanding variables and data types, move on to [Functions](../03-functions/functions.md) to learn how to organize and reuse your code. 