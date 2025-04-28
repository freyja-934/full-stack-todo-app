# Error Handling in JavaScript

## Why Error Handling is Important

Error handling is a critical aspect of building robust JavaScript applications. It allows your code to gracefully handle unexpected situations, provide meaningful feedback to users, and maintain application stability even when things go wrong.

In a todo application, proper error handling ensures that:
- Users receive clear messages when operations fail
- The application continues to function even when network requests fail
- Data integrity is maintained even when errors occur
- Developers can easily debug issues when they arise

## Key Concepts

### Try-Catch Blocks

The fundamental mechanism for handling errors in JavaScript is the try-catch block:

```javascript
try {
  // Code that might throw an error
  const result = someRiskyOperation();
  console.log(result);
} catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error.message);
} finally {
  // Code that runs regardless of whether an error occurred
  cleanupResources();
}
```

### Error Types

JavaScript has several built-in error types:

1. **Error**: The base error class
2. **SyntaxError**: Occurs when there's a syntax problem in your code
3. **ReferenceError**: Occurs when you try to use a variable that doesn't exist
4. **TypeError**: Occurs when you try to use a value in a way that's not allowed for its type
5. **RangeError**: Occurs when a value is outside the allowed range
6. **URIError**: Occurs when there's a problem with URI encoding/decoding

### Throwing Errors

You can create and throw custom errors:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}
```

### Custom Error Classes

You can create custom error classes by extending the base Error class:

```javascript
class TodoError extends Error {
  constructor(message) {
    super(message);
    this.name = "TodoError";
  }
}

class TodoNotFoundError extends TodoError {
  constructor(id) {
    super(`Todo with ID ${id} not found`);
    this.name = "TodoNotFoundError";
    this.id = id;
  }
}
```

### Error Propagation

Errors can propagate up the call stack until they're caught:

```javascript
function level3() {
  throw new Error("Error in level 3");
}

function level2() {
  level3(); // Error propagates from here
}

function level1() {
  try {
    level2();
  } catch (error) {
    console.error("Caught in level 1:", error.message);
  }
}
```

### Async Error Handling

For asynchronous code, you can use try-catch with async/await:

```javascript
async function fetchTodo(id) {
  try {
    const response = await fetch(`/api/todos/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching todo:", error);
    throw error; // Re-throw to let caller handle it
  }
}
```

### Promise Error Handling

For Promise-based code, use .catch():

```javascript
fetchTodo(123)
  .then(todo => {
    console.log("Todo:", todo);
  })
  .catch(error => {
    console.error("Failed to fetch todo:", error);
  });
```

### Global Error Handlers

You can set up global error handlers for unhandled errors:

```javascript
// For unhandled promise rejections
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
  // Prevent the default handler
  event.preventDefault();
});

// For uncaught exceptions
window.addEventListener('error', event => {
  console.error('Uncaught error:', event.error);
  // Prevent the default handler
  event.preventDefault();
});
```

## Code Examples

### Basic Error Handling

```javascript
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON:", error.message);
    return null;
  }
}

// Usage
const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{name: "John", age: 30}';

console.log(parseJSON(validJSON)); // {name: "John", age: 30}
console.log(parseJSON(invalidJSON)); // null
```

### Custom Error Types

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateTodo(todo) {
  if (!todo.title) {
    throw new ValidationError("Title is required", "title");
  }
  if (todo.title.length > 100) {
    throw new ValidationError("Title must be less than 100 characters", "title");
  }
  if (todo.dueDate && isNaN(new Date(todo.dueDate).getTime())) {
    throw new ValidationError("Invalid due date", "dueDate");
  }
  return true;
}

// Usage
try {
  validateTodo({ title: "", dueDate: "invalid-date" });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation error in field "${error.field}": ${error.message}`);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

### Error Handling in Async Code

```javascript
async function saveTodo(todo) {
  try {
    // Validate the todo
    validateTodo(todo);
    
    // Simulate API call
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation error:", error.message);
      // Handle validation errors (e.g., show to user)
    } else if (error.name === "TypeError" && error.message.includes("fetch")) {
      console.error("Network error:", error.message);
      // Handle network errors (e.g., show offline message)
    } else {
      console.error("Unexpected error:", error);
      // Handle other errors
    }
    throw error; // Re-throw to let caller handle it
  }
}
```

### Finally Block

```javascript
async function processTodo(todoId) {
  let connection;
  try {
    // Open database connection
    connection = await openDatabaseConnection();
    
    // Process the todo
    const todo = await connection.getTodo(todoId);
    todo.completed = true;
    await connection.updateTodo(todo);
    
    return todo;
  } catch (error) {
    console.error("Error processing todo:", error);
    throw error;
  } finally {
    // Always close the connection, even if an error occurred
    if (connection) {
      await connection.close();
    }
  }
}
```

## Practice Exercises

1. Create a function that safely parses JSON and returns a default value if parsing fails
2. Implement a function that validates a todo object and throws appropriate errors
3. Create an async function that fetches data from an API and handles various error cases
4. Implement a global error handler for unhandled promise rejections
5. Create a function that uses a try-catch-finally block to ensure resources are cleaned up

## Next Steps

After mastering error handling, you'll be ready to move on to more advanced JavaScript concepts like Promises and Async/Await.

## Related Practice Exercises

For more practice with error handling, check out the exercises in [../practice/js-fundamentals/error-handling.md](../practice/js-fundamentals/error-handling.md). 