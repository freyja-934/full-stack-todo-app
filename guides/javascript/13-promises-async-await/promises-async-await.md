# Promises and Async/Await in JavaScript

## Why Promises and Async/Await are Important

Asynchronous programming is essential in JavaScript, especially for web applications that need to perform operations like fetching data from servers, reading files, or handling user interactions without blocking the main thread. Promises and Async/Await provide powerful tools to manage these asynchronous operations in a clean, readable way.

In a todo application, these concepts are crucial for:
- Fetching todos from a server
- Saving new todos
- Updating todo status
- Handling multiple operations in sequence or parallel
- Managing error scenarios in asynchronous code

## Key Concepts

### Promises

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It has three states:
- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;
  
  if (success) {
    resolve("Operation successful!");
  } else {
    reject(new Error("Operation failed!"));
  }
});

// Using a Promise
myPromise
  .then(result => {
    console.log(result); // "Operation successful!"
  })
  .catch(error => {
    console.error(error.message); // "Operation failed!"
  });
```

### Promise Methods

Promises provide several methods for handling asynchronous operations:

1. **.then()**: Handles successful completion
2. **.catch()**: Handles errors
3. **.finally()**: Executes code regardless of success or failure
4. **Promise.all()**: Executes multiple promises in parallel and waits for all to complete
5. **Promise.race()**: Executes multiple promises and returns the result of the first to complete
6. **Promise.allSettled()**: Executes multiple promises and returns results of all, regardless of success or failure

```javascript
// Promise.all example
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve(1), 2000));
const promise3 = fetch('https://api.example.com/data');

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [3, 1, Response]
  })
  .catch(error => {
    console.error("One of the promises failed:", error);
  });

// Promise.race example
Promise.race([
  fetch('https://api.example.com/data'),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
])
  .then(response => {
    console.log("Data fetched before timeout");
  })
  .catch(error => {
    console.error("Timeout or fetch error:", error.message);
  });
```

### Async/Await

Async/Await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code.

```javascript
// Using Promises
function fetchTodo(id) {
  return fetch(`https://api.example.com/todos/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error("Error fetching todo:", error);
      throw error;
    });
}

// Using Async/Await
async function fetchTodo(id) {
  try {
    const response = await fetch(`https://api.example.com/todos/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todo:", error);
    throw error;
  }
}
```

### Error Handling in Async Code

Error handling in async code can be done using try/catch blocks:

```javascript
async function processTodo(id) {
  try {
    const todo = await fetchTodo(id);
    todo.completed = true;
    await saveTodo(todo);
    return todo;
  } catch (error) {
    console.error("Failed to process todo:", error);
    // Handle the error appropriately
    return null;
  }
}
```

### Sequential vs. Parallel Execution

Async/Await makes it easy to execute operations sequentially or in parallel:

```javascript
// Sequential execution
async function processTodosSequentially(todoIds) {
  const results = [];
  
  for (const id of todoIds) {
    const todo = await fetchTodo(id);
    results.push(todo);
  }
  
  return results;
}

// Parallel execution
async function processTodosInParallel(todoIds) {
  const promises = todoIds.map(id => fetchTodo(id));
  return Promise.all(promises);
}
```

## Code Examples

### Basic Promise Usage

```javascript
// Simulating an API call
function fetchTodoFromServer(id) {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate database
      const todos = [
        { id: 1, title: "Learn JavaScript", completed: false },
        { id: 2, title: "Build a todo app", completed: true },
        { id: 3, title: "Deploy the app", completed: false }
      ];
      
      const todo = todos.find(t => t.id === id);
      
      if (todo) {
        resolve(todo);
      } else {
        reject(new Error(`Todo with ID ${id} not found`));
      }
    }, 1000); // 1 second delay
  });
}

// Using the Promise
fetchTodoFromServer(2)
  .then(todo => {
    console.log("Todo found:", todo);
    return todo;
  })
  .then(todo => {
    console.log("Processing todo:", todo.title);
    todo.completed = !todo.completed;
    return todo;
  })
  .then(updatedTodo => {
    console.log("Todo updated:", updatedTodo);
  })
  .catch(error => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Operation completed");
  });
```

### Promise Chaining

```javascript
function getUserTodos(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(user => {
      console.log("User found:", user.name);
      return fetch(`https://api.example.com/users/${userId}/todos`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(todos => {
      console.log(`Found ${todos.length} todos for user`);
      return todos;
    })
    .catch(error => {
      console.error("Error fetching user todos:", error);
      throw error;
    });
}
```

### Async/Await for Fetching Data

```javascript
async function fetchTodoById(id) {
  try {
    const response = await fetch(`https://api.example.com/todos/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const todo = await response.json();
    console.log("Todo fetched:", todo);
    return todo;
  } catch (error) {
    console.error("Error fetching todo:", error);
    throw error;
  }
}

// Using the async function
async function displayTodo(id) {
  try {
    const todo = await fetchTodoById(id);
    console.log(`Todo: ${todo.title} (${todo.completed ? 'Completed' : 'Pending'})`);
    return todo;
  } catch (error) {
    console.error("Failed to display todo:", error.message);
    return null;
  }
}
```

### Error Handling with Async/Await

```javascript
async function saveTodo(todo) {
  try {
    // Validate the todo
    if (!todo.title) {
      throw new Error("Todo title is required");
    }
    
    // Simulate API call
    const response = await fetch('https://api.example.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const savedTodo = await response.json();
    console.log("Todo saved successfully:", savedTodo);
    return savedTodo;
  } catch (error) {
    console.error("Failed to save todo:", error);
    // You could re-throw the error or handle it here
    throw error;
  }
}
```

### Parallel Execution with Promise.all

```javascript
async function fetchMultipleTodos(todoIds) {
  try {
    // Create an array of promises
    const promises = todoIds.map(id => fetchTodoById(id));
    
    // Execute all promises in parallel
    const todos = await Promise.all(promises);
    
    console.log(`Fetched ${todos.length} todos`);
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

// Using the function
fetchMultipleTodos([1, 2, 3])
  .then(todos => {
    console.log("All todos:", todos);
  })
  .catch(error => {
    console.error("Failed to fetch todos:", error.message);
  });
```

## Practice Exercises

1. Create a function that returns a Promise which resolves after a specified delay
2. Implement a function that fetches todos from an API and handles errors appropriately
3. Create a function that processes an array of todos sequentially using async/await
4. Implement a function that runs multiple API calls in parallel using Promise.all
5. Create a function that implements retry logic for failed API calls

## Next Steps

After mastering Promises and Async/Await, you'll be ready to move on to more advanced JavaScript concepts like Error Handling.

## Related Practice Exercises

For more practice with Promises and Async/Await, check out the exercises in [../practice/js-fundamentals/promises-async-await.md](../practice/js-fundamentals/promises-async-await.md). 