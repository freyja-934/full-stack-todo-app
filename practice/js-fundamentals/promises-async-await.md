# Promises and Async/Await Practice Exercises

## Exercise 1: Basic Promise Creation
Create a function called `delay` that returns a Promise which resolves after a specified number of milliseconds. The function should take a single parameter `ms` (milliseconds) and return a Promise that resolves with the message "Delayed for X milliseconds" after the specified delay.

```javascript
// Your code here
```

## Exercise 2: Promise Rejection
Create a function called `fetchTodoWithError` that simulates fetching a todo from an API but intentionally rejects the Promise with an error message if the todo ID is less than 1. The function should take a todo ID as a parameter and return a Promise that either resolves with a todo object or rejects with an error.

```javascript
// Your code here
```

## Exercise 3: Promise Chaining
Create a function called `processTodo` that:
1. Fetches a todo by ID using the `fetchTodoWithError` function from Exercise 2
2. Updates the todo's completed status to the opposite of its current value
3. Logs the updated todo to the console
4. Returns the updated todo

Use Promise chaining with `.then()` and `.catch()` methods.

```javascript
// Your code here
```

## Exercise 4: Promise.all
Create a function called `fetchMultipleTodos` that takes an array of todo IDs and uses `Promise.all` to fetch all todos in parallel. The function should return a Promise that resolves with an array of todos or rejects if any of the individual fetch operations fail.

```javascript
// Your code here
```

## Exercise 5: Promise.race
Create a function called `fetchTodoWithTimeout` that takes a todo ID and a timeout duration in milliseconds. The function should use `Promise.race` to either fetch the todo or reject with a timeout error if the fetch takes longer than the specified timeout.

```javascript
// Your code here
```

## Exercise 6: Converting to Async/Await
Convert the `processTodo` function from Exercise 3 to use async/await syntax instead of Promise chaining.

```javascript
// Your code here
```

## Exercise 7: Error Handling with Async/Await
Create an async function called `safeFetchTodo` that uses try/catch to handle errors when fetching a todo. The function should take a todo ID as a parameter and return the todo if found, or null if an error occurs.

```javascript
// Your code here
```

## Exercise 8: Sequential Processing
Create an async function called `processTodosSequentially` that takes an array of todo IDs and processes each todo one after another using a for...of loop and await. The function should return an array of processed todos.

```javascript
// Your code here
```

## Exercise 9: Parallel Processing
Create an async function called `processTodosInParallel` that takes an array of todo IDs and processes all todos in parallel using Promise.all and async/await. The function should return an array of processed todos.

```javascript
// Your code here
```

## Exercise 10: Retry Logic
Create an async function called `fetchWithRetry` that attempts to fetch a todo up to a specified number of times if the fetch fails. The function should take a todo ID and a maximum number of retries as parameters.

```javascript
// Your code here
```

## Exercise 11: Challenge: Todo API Client
Create a complete Todo API client class that implements the following methods using Promises and/or Async/Await:
- `getAllTodos()`: Fetches all todos
- `getTodoById(id)`: Fetches a todo by ID
- `createTodo(todo)`: Creates a new todo
- `updateTodo(id, updates)`: Updates an existing todo
- `deleteTodo(id)`: Deletes a todo

Include proper error handling and simulate API calls with delays.

```javascript
// Your code here
```

## Exercise 12: Challenge: Concurrent Operations with Rate Limiting
Create a function that processes an array of todo IDs with rate limiting. The function should:
1. Process todos in batches of a specified size
2. Wait for all todos in a batch to complete before starting the next batch
3. Implement proper error handling
4. Return an array of successfully processed todos

```javascript
// Your code here
```

## Exercise 13: Challenge: Advanced Promise Patterns
Implement the following advanced Promise patterns:
1. A function that uses `Promise.allSettled` to fetch multiple todos and handle both successful and failed fetches
2. A function that implements a timeout with `Promise.race` and a custom abort mechanism
3. A function that uses `Promise.any` to fetch a todo from multiple API endpoints and use the first successful response

```javascript
// Your code here
```

## Solutions

<details>
<summary>Click to see solutions</summary>

### Exercise 1: Basic Promise Creation
```javascript
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Delayed for ${ms} milliseconds`);
    }, ms);
  });
}

// Test the function
delay(2000)
  .then(message => {
    console.log(message); // "Delayed for 2000 milliseconds"
  });
```

### Exercise 2: Promise Rejection
```javascript
function fetchTodoWithError(id) {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Validate ID
      if (id < 1) {
        reject(new Error(`Invalid todo ID: ${id}`));
        return;
      }
      
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

// Test with valid ID
fetchTodoWithError(2)
  .then(todo => {
    console.log("Todo found:", todo);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

// Test with invalid ID
fetchTodoWithError(0)
  .then(todo => {
    console.log("Todo found:", todo);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
```

### Exercise 3: Promise Chaining
```javascript
function processTodo(id) {
  return fetchTodoWithError(id)
    .then(todo => {
      console.log("Todo fetched:", todo);
      // Update the completed status
      todo.completed = !todo.completed;
      return todo;
    })
    .then(updatedTodo => {
      console.log("Todo updated:", updatedTodo);
      return updatedTodo;
    })
    .catch(error => {
      console.error("Error processing todo:", error.message);
      throw error; // Re-throw to let caller handle it
    });
}

// Test the function
processTodo(2)
  .then(result => {
    console.log("Final result:", result);
  })
  .catch(error => {
    console.error("Failed to process todo:", error.message);
  });
```

### Exercise 4: Promise.all
```javascript
function fetchMultipleTodos(todoIds) {
  // Create an array of promises
  const promises = todoIds.map(id => fetchTodoWithError(id));
  
  // Execute all promises in parallel
  return Promise.all(promises)
    .then(todos => {
      console.log(`Fetched ${todos.length} todos`);
      return todos;
    })
    .catch(error => {
      console.error("Error fetching todos:", error.message);
      throw error;
    });
}

// Test with valid IDs
fetchMultipleTodos([1, 2, 3])
  .then(todos => {
    console.log("All todos:", todos);
  })
  .catch(error => {
    console.error("Failed to fetch todos:", error.message);
  });

// Test with some invalid IDs
fetchMultipleTodos([1, 0, 3])
  .then(todos => {
    console.log("All todos:", todos);
  })
  .catch(error => {
    console.error("Failed to fetch todos:", error.message);
  });
```

### Exercise 5: Promise.race
```javascript
function fetchTodoWithTimeout(id, timeoutMs = 2000) {
  // Create a promise that rejects after the timeout
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request timed out after ${timeoutMs}ms`));
    }, timeoutMs);
  });
  
  // Race between the fetch and the timeout
  return Promise.race([
    fetchTodoWithError(id),
    timeoutPromise
  ]);
}

// Test with a valid ID and sufficient time
fetchTodoWithTimeout(2, 3000)
  .then(todo => {
    console.log("Todo fetched before timeout:", todo);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

// Test with a timeout that's too short
fetchTodoWithTimeout(2, 500)
  .then(todo => {
    console.log("Todo fetched before timeout:", todo);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
```

### Exercise 6: Converting to Async/Await
```javascript
async function processTodoAsync(id) {
  try {
    // Fetch the todo
    const todo = await fetchTodoWithError(id);
    console.log("Todo fetched:", todo);
    
    // Update the completed status
    todo.completed = !todo.completed;
    console.log("Todo updated:", todo);
    
    return todo;
  } catch (error) {
    console.error("Error processing todo:", error.message);
    throw error; // Re-throw to let caller handle it
  }
}

// Test the function
processTodoAsync(2)
  .then(result => {
    console.log("Final result:", result);
  })
  .catch(error => {
    console.error("Failed to process todo:", error.message);
  });
```

### Exercise 7: Error Handling with Async/Await
```javascript
async function safeFetchTodo(id) {
  try {
    const todo = await fetchTodoWithError(id);
    return todo;
  } catch (error) {
    console.error(`Failed to fetch todo ${id}:`, error.message);
    return null;
  }
}

// Test with a valid ID
safeFetchTodo(2)
  .then(todo => {
    console.log("Result:", todo);
  });

// Test with an invalid ID
safeFetchTodo(0)
  .then(todo => {
    console.log("Result:", todo);
  });

// Test with a non-existent ID
safeFetchTodo(999)
  .then(todo => {
    console.log("Result:", todo);
  });
```

### Exercise 8: Sequential Processing
```javascript
async function processTodosSequentially(todoIds) {
  const results = [];
  
  for (const id of todoIds) {
    try {
      const todo = await fetchTodoWithError(id);
      console.log(`Processing todo ${id}:`, todo.title);
      
      // Simulate processing
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update the todo
      todo.processed = true;
      todo.processedAt = new Date().toISOString();
      
      results.push(todo);
    } catch (error) {
      console.error(`Error processing todo ${id}:`, error.message);
      // Continue with the next todo
    }
  }
  
  return results;
}

// Test the function
processTodosSequentially([1, 2, 3, 0, 4])
  .then(results => {
    console.log("Processed todos:", results);
  });
```

### Exercise 9: Parallel Processing
```javascript
async function processTodosInParallel(todoIds) {
  try {
    // Create an array of promises
    const promises = todoIds.map(async id => {
      try {
        const todo = await fetchTodoWithError(id);
        console.log(`Processing todo ${id}:`, todo.title);
        
        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Update the todo
        todo.processed = true;
        todo.processedAt = new Date().toISOString();
        
        return todo;
      } catch (error) {
        console.error(`Error processing todo ${id}:`, error.message);
        return null;
      }
    });
    
    // Execute all promises in parallel
    const results = await Promise.all(promises);
    
    // Filter out null results (failed todos)
    return results.filter(todo => todo !== null);
  } catch (error) {
    console.error("Error in parallel processing:", error.message);
    return [];
  }
}

// Test the function
processTodosInParallel([1, 2, 3, 0, 4])
  .then(results => {
    console.log("Processed todos:", results);
  });
```

### Exercise 10: Retry Logic
```javascript
async function fetchWithRetry(id, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt} of ${maxRetries} to fetch todo ${id}`);
      const todo = await fetchTodoWithError(id);
      return todo;
    } catch (error) {
      console.error(`Error on attempt ${attempt}:`, error.message);
      lastError = error;
      
      // Calculate exponential backoff delay (1s, 2s, 4s, etc.)
      const delay = Math.pow(2, attempt - 1) * 1000;
      
      if (attempt < maxRetries) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  // If we've exhausted all retries, throw the last error
  throw new Error(`Failed to fetch todo ${id} after ${maxRetries} attempts: ${lastError.message}`);
}

// Test with a valid ID
fetchWithRetry(2, 3)
  .then(todo => {
    console.log("Todo fetched:", todo);
  })
  .catch(error => {
    console.error("Final error:", error.message);
  });

// Test with an invalid ID
fetchWithRetry(0, 3)
  .then(todo => {
    console.log("Todo fetched:", todo);
  })
  .catch(error => {
    console.error("Final error:", error.message);
  });
```

### Exercise 11: Challenge: Todo API Client
```javascript
class TodoAPI {
  constructor(baseUrl = 'https://api.example.com') {
    this.baseUrl = baseUrl;
    this.todos = [
      { id: 1, title: "Learn JavaScript", completed: false, createdAt: "2023-01-01" },
      { id: 2, title: "Build a todo app", completed: true, createdAt: "2023-01-15" },
      { id: 3, title: "Deploy the app", completed: false, createdAt: "2023-02-01" }
    ];
  }
  
  // Helper method to simulate API delay
  async delay(ms = 500) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Get all todos
  async getAllTodos() {
    await this.delay();
    return [...this.todos];
  }
  
  // Get a todo by ID
  async getTodoById(id) {
    await this.delay();
    
    const todo = this.todos.find(t => t.id === id);
    
    if (!todo) {
      throw new Error(`Todo with ID ${id} not found`);
    }
    
    return { ...todo };
  }
  
  // Create a new todo
  async createTodo(todoData) {
    await this.delay();
    
    // Validate todo data
    if (!todoData.title) {
      throw new Error("Todo title is required");
    }
    
    // Generate a new ID
    const newId = Math.max(...this.todos.map(t => t.id), 0) + 1;
    
    // Create the new todo
    const newTodo = {
      id: newId,
      title: todoData.title,
      completed: todoData.completed || false,
      createdAt: new Date().toISOString()
    };
    
    // Add to database
    this.todos.push(newTodo);
    
    return { ...newTodo };
  }
  
  // Update a todo
  async updateTodo(id, updates) {
    await this.delay();
    
    const todoIndex = this.todos.findIndex(t => t.id === id);
    
    if (todoIndex === -1) {
      throw new Error(`Todo with ID ${id} not found`);
    }
    
    // Update the todo
    const updatedTodo = {
      ...this.todos[todoIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    this.todos[todoIndex] = updatedTodo;
    
    return { ...updatedTodo };
  }
  
  // Delete a todo
  async deleteTodo(id) {
    await this.delay();
    
    const todoIndex = this.todos.findIndex(t => t.id === id);
    
    if (todoIndex === -1) {
      throw new Error(`Todo with ID ${id} not found`);
    }
    
    const deletedTodo = this.todos.splice(todoIndex, 1)[0];
    
    return { ...deletedTodo };
  }
}

// Example usage
async function testTodoAPI() {
  const api = new TodoAPI();
  
  try {
    // Get all todos
    console.log("Getting all todos...");
    const allTodos = await api.getAllTodos();
    console.log("All todos:", allTodos);
    
    // Create a new todo
    console.log("\nCreating a new todo...");
    const newTodo = await api.createTodo({ title: "Learn Promises and Async/Await" });
    console.log("Created todo:", newTodo);
    
    // Get a todo by ID
    console.log("\nGetting todo by ID...");
    const todo = await api.getTodoById(newTodo.id);
    console.log("Retrieved todo:", todo);
    
    // Update a todo
    console.log("\nUpdating todo...");
    const updatedTodo = await api.updateTodo(newTodo.id, { completed: true });
    console.log("Updated todo:", updatedTodo);
    
    // Delete a todo
    console.log("\nDeleting todo...");
    const deletedTodo = await api.deleteTodo(newTodo.id);
    console.log("Deleted todo:", deletedTodo);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Run the tests
testTodoAPI();
```

### Exercise 12: Challenge: Concurrent Operations with Rate Limiting
```javascript
async function processTodosWithRateLimiting(todoIds, batchSize = 2) {
  const results = [];
  const batches = [];
  
  // Split todoIds into batches
  for (let i = 0; i < todoIds.length; i += batchSize) {
    batches.push(todoIds.slice(i, i + batchSize));
  }
  
  console.log(`Processing ${todoIds.length} todos in ${batches.length} batches of ${batchSize}`);
  
  // Process each batch sequentially
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`Processing batch ${i + 1}/${batches.length}...`);
    
    try {
      // Process all todos in the current batch in parallel
      const batchPromises = batch.map(async id => {
        try {
          const todo = await fetchTodoWithError(id);
          console.log(`Processing todo ${id}:`, todo.title);
          
          // Simulate processing
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Update the todo
          todo.processed = true;
          todo.processedAt = new Date().toISOString();
          
          return todo;
        } catch (error) {
          console.error(`Error processing todo ${id}:`, error.message);
          return null;
        }
      });
      
      // Wait for all todos in the batch to complete
      const batchResults = await Promise.all(batchPromises);
      
      // Add successful results to the final results array
      results.push(...batchResults.filter(todo => todo !== null));
      
      // Add a delay between batches to implement rate limiting
      if (i < batches.length - 1) {
        console.log("Waiting before processing next batch...");
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Error processing batch ${i + 1}:`, error.message);
    }
  }
  
  return results;
}

// Test the function
processTodosWithRateLimiting([1, 2, 3, 4, 5, 6, 0, 7], 3)
  .then(results => {
    console.log("Processed todos:", results);
  });
```

### Exercise 13: Challenge: Advanced Promise Patterns
```javascript
// 1. Using Promise.allSettled
async function fetchTodosWithAllSettled(todoIds) {
  // Create an array of promises
  const promises = todoIds.map(id => fetchTodoWithError(id));
  
  // Execute all promises and wait for all to settle
  const results = await Promise.allSettled(promises);
  
  // Process the results
  const successfulTodos = [];
  const failedTodos = [];
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      successfulTodos.push(result.value);
    } else {
      failedTodos.push({
        id: todoIds[index],
        error: result.reason.message
      });
    }
  });
  
  return {
    successful: successfulTodos,
    failed: failedTodos
  };
}

// 2. Timeout with Promise.race and abort mechanism
async function fetchTodoWithAbort(id, timeoutMs = 2000) {
  // Create an AbortController
  const controller = new AbortController();
  const { signal } = controller;
  
  // Create a promise that rejects after the timeout
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      controller.abort(); // Abort the fetch
      reject(new Error(`Request timed out after ${timeoutMs}ms`));
    }, timeoutMs);
  });
  
  // Create a promise for the fetch
  const fetchPromise = new Promise(async (resolve, reject) => {
    try {
      // Simulate fetch with delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if the request was aborted
      if (signal.aborted) {
        reject(new Error('Request was aborted'));
        return;
      }
      
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
    } catch (error) {
      reject(error);
    }
  });
  
  // Race between the fetch and the timeout
  return Promise.race([fetchPromise, timeoutPromise]);
}

// 3. Using Promise.any to fetch from multiple endpoints
async function fetchTodoFromMultipleEndpoints(id) {
  // Simulate multiple API endpoints
  const endpoints = [
    async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return { id, title: "From endpoint 1", completed: false };
    },
    async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { id, title: "From endpoint 2", completed: true };
    },
    async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      return { id, title: "From endpoint 3", completed: false };
    }
  ];
  
  try {
    // Use Promise.any to get the first successful result
    const result = await Promise.any(endpoints.map(endpoint => endpoint()));
    return result;
  } catch (error) {
    if (error.name === 'AggregateError') {
      throw new Error('All endpoints failed');
    }
    throw error;
  }
}

// Test the functions
async function testAdvancedPatterns() {
  console.log("Testing Promise.allSettled...");
  const allSettledResults = await fetchTodosWithAllSettled([1, 2, 0, 999]);
  console.log("All settled results:", allSettledResults);
  
  console.log("\nTesting fetchTodoWithAbort...");
  try {
    const todo = await fetchTodoWithAbort(2, 3000);
    console.log("Todo fetched:", todo);
  } catch (error) {
    console.error("Error:", error.message);
  }
  
  console.log("\nTesting fetchTodoFromMultipleEndpoints...");
  try {
    const todo = await fetchTodoFromMultipleEndpoints(1);
    console.log("Todo fetched from multiple endpoints:", todo);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Run the tests
testAdvancedPatterns();
```

</details> 