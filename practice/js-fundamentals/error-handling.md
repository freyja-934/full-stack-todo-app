# Error Handling Practice Exercises

## Exercise 1: Safe JSON Parsing
Create a function called `safeParseJSON` that takes a JSON string and returns the parsed object. If parsing fails, it should return a default value (which you can specify) and log the error.

```javascript
// Your code here
```

## Exercise 2: Custom Error Classes
Create a set of custom error classes for a todo application:
1. A base `TodoError` class
2. A `TodoValidationError` class for validation issues
3. A `TodoNotFoundError` class for when a todo doesn't exist
4. A `TodoDuplicateError` class for when trying to create a duplicate todo

Then create a function that demonstrates using these error classes.

```javascript
// Your code here
```

## Exercise 3: Error Propagation
Create a set of nested functions that demonstrate error propagation. The innermost function should throw an error, and the outermost function should catch and handle it appropriately.

```javascript
// Your code here
```

## Exercise 4: Async Error Handling
Create an async function called `fetchTodoById` that simulates fetching a todo from an API. The function should:
1. Take a todo ID as a parameter
2. Simulate a network delay
3. Return the todo if found
4. Throw an appropriate error if the todo is not found
5. Handle network errors appropriately

```javascript
// Your code here
```

## Exercise 5: Promise Error Handling
Create a function called `saveTodo` that simulates saving a todo to an API using Promises. The function should:
1. Take a todo object as a parameter
2. Validate the todo data
3. Simulate a network request
4. Handle various error cases appropriately

```javascript
// Your code here
```

## Exercise 6: Global Error Handlers
Implement global error handlers for:
1. Unhandled promise rejections
2. Uncaught exceptions

Then create some code that triggers these handlers to demonstrate they work.

```javascript
// Your code here
```

## Exercise 7: Finally Block
Create a function that uses a try-catch-finally block to:
1. Process a todo item
2. Clean up resources regardless of whether the processing succeeds or fails

```javascript
// Your code here
```

## Exercise 8: Error Logging
Create a custom error logging function that:
1. Takes an error object as a parameter
2. Formats the error information in a consistent way
3. Logs the error to the console with appropriate styling
4. Optionally sends the error to a remote logging service

```javascript
// Your code here
```

## Exercise 9: Error Recovery
Create a function that attempts to recover from errors by:
1. Trying an operation
2. If it fails, attempting a fallback operation
3. If that fails too, returning a default value
4. Logging all attempts and their outcomes

```javascript
// Your code here
```

## Exercise 10: Challenge: Todo API with Error Handling
Create a complete Todo API client that:
1. Implements CRUD operations (Create, Read, Update, Delete)
2. Uses proper error handling for all operations
3. Provides meaningful error messages
4. Implements retry logic for failed operations
5. Handles network errors gracefully

```javascript
// Your code here
```

## Solutions

<details>
<summary>Click to see solutions</summary>

### Exercise 1: Safe JSON Parsing
```javascript
function safeParseJSON(jsonString, defaultValue = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON:", error.message);
    return defaultValue;
  }
}

// Test with valid JSON
const validJSON = '{"name": "John", "age": 30}';
console.log(safeParseJSON(validJSON)); // {name: "John", age: 30}

// Test with invalid JSON
const invalidJSON = '{name: "John", age: 30}';
console.log(safeParseJSON(invalidJSON)); // null

// Test with custom default value
console.log(safeParseJSON(invalidJSON, { name: "Default", age: 0 })); // {name: "Default", age: 0}
```

### Exercise 2: Custom Error Classes
```javascript
// Base error class for todo-related errors
class TodoError extends Error {
  constructor(message) {
    super(message);
    this.name = "TodoError";
  }
}

// Error for validation issues
class TodoValidationError extends TodoError {
  constructor(message, field) {
    super(message);
    this.name = "TodoValidationError";
    this.field = field;
  }
}

// Error for when a todo doesn't exist
class TodoNotFoundError extends TodoError {
  constructor(id) {
    super(`Todo with ID ${id} not found`);
    this.name = "TodoNotFoundError";
    this.id = id;
  }
}

// Error for duplicate todos
class TodoDuplicateError extends TodoError {
  constructor(title) {
    super(`Todo with title "${title}" already exists`);
    this.name = "TodoDuplicateError";
    this.title = title;
  }
}

// Function to demonstrate using these error classes
function createTodo(todoData, existingTodos = []) {
  // Validate todo data
  if (!todoData.title) {
    throw new TodoValidationError("Title is required", "title");
  }
  
  if (todoData.title.length > 100) {
    throw new TodoValidationError("Title must be less than 100 characters", "title");
  }
  
  // Check for duplicates
  if (existingTodos.some(todo => todo.title === todoData.title)) {
    throw new TodoDuplicateError(todoData.title);
  }
  
  // Create the todo
  const newTodo = {
    id: Math.floor(Math.random() * 1000) + 1,
    ...todoData,
    createdAt: new Date().toISOString()
  };
  
  return newTodo;
}

// Test the function
try {
  // Test with valid data
  const todo = createTodo({ title: "Learn JavaScript" }, []);
  console.log("Created todo:", todo);
  
  // Test with missing title
  createTodo({}, []);
} catch (error) {
  if (error instanceof TodoValidationError) {
    console.error(`Validation error in field "${error.field}": ${error.message}`);
  } else if (error instanceof TodoDuplicateError) {
    console.error(`Duplicate error: ${error.message}`);
  } else {
    console.error("Unexpected error:", error);
  }
}

// Test with duplicate title
try {
  const existingTodos = [{ id: 1, title: "Learn JavaScript" }];
  createTodo({ title: "Learn JavaScript" }, existingTodos);
} catch (error) {
  if (error instanceof TodoDuplicateError) {
    console.error(`Duplicate error: ${error.message}`);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

### Exercise 3: Error Propagation
```javascript
// Innermost function that throws an error
function fetchTodoFromDatabase(id) {
  // Simulate database
  const todos = [
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Build a todo app", completed: true }
  ];
  
  const todo = todos.find(t => t.id === id);
  
  if (!todo) {
    throw new Error(`Todo with ID ${id} not found in database`);
  }
  
  return todo;
}

// Middle function that calls the innermost function
function getTodoWithDetails(id) {
  try {
    const todo = fetchTodoFromDatabase(id);
    // Add some additional details
    return {
      ...todo,
      fetchedAt: new Date().toISOString(),
      source: "database"
    };
  } catch (error) {
    console.error("Error in getTodoWithDetails:", error.message);
    // Re-throw the error to propagate it
    throw error;
  }
}

// Outermost function that handles the error
function displayTodo(id) {
  try {
    const todo = getTodoWithDetails(id);
    console.log("Todo details:", todo);
    return todo;
  } catch (error) {
    console.error("Failed to display todo:", error.message);
    // Return a default todo instead of propagating the error
    return {
      id,
      title: "Todo not available",
      completed: false,
      error: error.message
    };
  }
}

// Test with a valid ID
console.log(displayTodo(1));

// Test with an invalid ID
console.log(displayTodo(999));
```

### Exercise 4: Async Error Handling
```javascript
async function fetchTodoById(id) {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate database
    const todos = [
      { id: 1, title: "Learn JavaScript", completed: false },
      { id: 2, title: "Build a todo app", completed: true },
      { id: 3, title: "Deploy the app", completed: false }
    ];
    
    const todo = todos.find(t => t.id === id);
    
    if (!todo) {
      throw new Error(`Todo with ID ${id} not found`);
    }
    
    return todo;
  } catch (error) {
    // Check if it's a network error (simulated)
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      console.error("Network error:", error.message);
      throw new Error("Failed to connect to the server. Please check your internet connection.");
    }
    
    // For other errors, just re-throw
    console.error("Error fetching todo:", error.message);
    throw error;
  }
}

// Test with a valid ID
async function testValidId() {
  try {
    const todo = await fetchTodoById(2);
    console.log("Todo found:", todo);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Test with an invalid ID
async function testInvalidId() {
  try {
    const todo = await fetchTodoById(999);
    console.log("Todo found:", todo);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Run the tests
testValidId();
testInvalidId();
```

### Exercise 5: Promise Error Handling
```javascript
function saveTodo(todo) {
  return new Promise((resolve, reject) => {
    // Validate todo data
    if (!todo || typeof todo !== 'object') {
      return reject(new Error("Todo must be an object"));
    }
    
    if (!todo.title) {
      return reject(new Error("Todo title is required"));
    }
    
    if (todo.title.length > 100) {
      return reject(new Error("Todo title must be less than 100 characters"));
    }
    
    // Simulate API call
    setTimeout(() => {
      // Simulate successful save
      const savedTodo = {
        id: Math.floor(Math.random() * 1000) + 1,
        ...todo,
        createdAt: new Date().toISOString()
      };
      
      console.log("Todo saved successfully:", savedTodo);
      resolve(savedTodo);
    }, 1000);
  });
}

// Test with valid todo
saveTodo({ title: "Learn Promises", completed: false })
  .then(todo => {
    console.log("Saved todo:", todo);
  })
  .catch(error => {
    console.error("Failed to save todo:", error.message);
  });

// Test with invalid todo
saveTodo({ title: "" })
  .then(todo => {
    console.log("Saved todo:", todo);
  })
  .catch(error => {
    console.error("Failed to save todo:", error.message);
  });
```

### Exercise 6: Global Error Handlers
```javascript
// Set up global error handlers
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
  // Prevent the default handler
  event.preventDefault();
});

window.addEventListener('error', event => {
  console.error('Uncaught error:', event.error);
  // Prevent the default handler
  event.preventDefault();
});

// Function that triggers an unhandled promise rejection
function triggerUnhandledRejection() {
  // This promise will be rejected but not caught
  new Promise((resolve, reject) => {
    reject(new Error("This is an unhandled promise rejection"));
  });
  
  // The error will be caught by the global handler
  console.log("Promise rejected, but error will be caught by global handler");
}

// Function that triggers an uncaught exception
function triggerUncaughtException() {
  // This will throw an error that's not caught
  nonExistentFunction();
  
  // This line won't execute
  console.log("This won't be printed");
}

// Test the handlers
console.log("Testing global error handlers...");

// Test unhandled promise rejection
triggerUnhandledRejection();

// Test uncaught exception
try {
  triggerUncaughtException();
} catch (error) {
  console.error("Caught exception:", error);
}
```

### Exercise 7: Finally Block
```javascript
async function processTodo(todoId) {
  let connection = null;
  
  try {
    console.log(`Opening connection to process todo ${todoId}...`);
    
    // Simulate opening a database connection
    connection = {
      isOpen: true,
      todoData: [
        { id: 1, title: "Learn JavaScript", completed: false },
        { id: 2, title: "Build a todo app", completed: true }
      ],
      close: function() {
        this.isOpen = false;
        console.log("Connection closed");
      }
    };
    
    // Simulate finding the todo
    const todo = connection.todoData.find(t => t.id === todoId);
    
    if (!todo) {
      throw new Error(`Todo with ID ${todoId} not found`);
    }
    
    // Process the todo
    console.log(`Processing todo: ${todo.title}`);
    todo.completed = true;
    todo.processedAt = new Date().toISOString();
    
    return todo;
  } catch (error) {
    console.error("Error processing todo:", error.message);
    throw error;
  } finally {
    // Always close the connection, even if an error occurred
    if (connection && connection.isOpen) {
      console.log("Cleaning up resources...");
      connection.close();
    }
  }
}

// Test with a valid ID
async function testValidId() {
  try {
    const result = await processTodo(1);
    console.log("Processing result:", result);
  } catch (error) {
    console.error("Failed to process todo:", error.message);
  }
}

// Test with an invalid ID
async function testInvalidId() {
  try {
    const result = await processTodo(999);
    console.log("Processing result:", result);
  } catch (error) {
    console.error("Failed to process todo:", error.message);
  }
}

// Run the tests
testValidId();
testInvalidId();
```

### Exercise 8: Error Logging
```javascript
function logError(error, options = {}) {
  const {
    includeStack = true,
    includeTimestamp = true,
    sendToRemote = false
  } = options;
  
  // Format the error message
  let errorMessage = `[ERROR] ${error.name}: ${error.message}`;
  
  if (includeTimestamp) {
    const timestamp = new Date().toISOString();
    errorMessage = `[${timestamp}] ${errorMessage}`;
  }
  
  if (includeStack && error.stack) {
    errorMessage += `\n${error.stack}`;
  }
  
  // Log to console with styling
  console.error(
    "%c" + errorMessage,
    "color: red; font-weight: bold;"
  );
  
  // Simulate sending to remote logging service
  if (sendToRemote) {
    console.log(`[REMOTE LOGGING] Sending error to remote service: ${error.name}`);
    // In a real application, this would send the error to a logging service
  }
  
  return errorMessage;
}

// Test with different error types
try {
  // Test with a standard error
  throw new Error("This is a standard error");
} catch (error) {
  logError(error);
}

try {
  // Test with a custom error
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  throw new CustomError("This is a custom error");
} catch (error) {
  logError(error, { includeStack: false });
}

try {
  // Test with remote logging
  throw new TypeError("This is a type error");
} catch (error) {
  logError(error, { sendToRemote: true });
}
```

### Exercise 9: Error Recovery
```javascript
async function fetchWithRetry(url, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt} of ${maxRetries} to fetch ${url}`);
      
      // Simulate fetch
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Simulate random failures (70% chance of success)
      if (Math.random() > 0.3) {
        console.log(`Success on attempt ${attempt}`);
        return { data: `Data from ${url}`, attempt };
      } else {
        throw new Error(`Random failure on attempt ${attempt}`);
      }
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
  
  // If we've exhausted all retries, try a fallback
  console.log("All retries failed, trying fallback...");
  
  try {
    // Simulate fallback operation
    await new Promise(resolve => setTimeout(resolve, 300));
    return { data: "Fallback data", source: "fallback" };
  } catch (fallbackError) {
    console.error("Fallback also failed:", fallbackError.message);
    // Return a default value as a last resort
    return { data: "Default data", source: "default" };
  }
}

// Test the function
async function testFetchWithRetry() {
  const result = await fetchWithRetry('https://api.example.com/data', 3);
  console.log("Final result:", result);
}

// Run the test
testFetchWithRetry();
```

### Exercise 10: Challenge: Todo API with Error Handling
```javascript
class TodoAPI {
  constructor(baseUrl = 'https://api.example.com') {
    this.baseUrl = baseUrl;
    this.todos = [
      { id: 1, title: "Learn JavaScript", completed: false, createdAt: "2023-01-01" },
      { id: 2, title: "Build a todo app", completed: true, createdAt: "2023-01-15" },
      { id: 3, title: "Deploy the app", completed: false, createdAt: "2023-02-01" }
    ];
    this.maxRetries = 3;
  }
  
  // Helper method to simulate API delay
  async delay(ms = 500) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Helper method to validate todo data
  validateTodo(todo) {
    if (!todo || typeof todo !== 'object') {
      throw new Error("Todo must be an object");
    }
    
    if (!todo.title) {
      throw new Error("Todo title is required");
    }
    
    if (todo.title.length > 100) {
      throw new Error("Todo title must be less than 100 characters");
    }
    
    return true;
  }
  
  // Helper method to handle errors with retry logic
  async withRetry(operation, maxRetries = this.maxRetries) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        console.error(`Error on attempt ${attempt}:`, error.message);
        lastError = error;
        
        // Don't retry if it's a validation error
        if (error.message.includes("required") || error.message.includes("must be")) {
          throw error;
        }
        
        // Calculate exponential backoff delay
        const delay = Math.pow(2, attempt - 1) * 1000;
        
        if (attempt < maxRetries) {
          console.log(`Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw new Error(`Operation failed after ${maxRetries} attempts: ${lastError.message}`);
  }
  
  // Get all todos
  async getAllTodos() {
    return this.withRetry(async () => {
      await this.delay();
      return [...this.todos];
    });
  }
  
  // Get a todo by ID
  async getTodoById(id) {
    return this.withRetry(async () => {
      await this.delay();
      
      const todo = this.todos.find(t => t.id === id);
      
      if (!todo) {
        throw new Error(`Todo with ID ${id} not found`);
      }
      
      return { ...todo };
    });
  }
  
  // Create a new todo
  async createTodo(todoData) {
    return this.withRetry(async () => {
      await this.delay();
      
      // Validate todo data
      this.validateTodo(todoData);
      
      // Check for duplicate title
      if (this.todos.some(t => t.title === todoData.title)) {
        throw new Error(`Todo with title "${todoData.title}" already exists`);
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
    });
  }
  
  // Update a todo
  async updateTodo(id, updates) {
    return this.withRetry(async () => {
      await this.delay();
      
      const todoIndex = this.todos.findIndex(t => t.id === id);
      
      if (todoIndex === -1) {
        throw new Error(`Todo with ID ${id} not found`);
      }
      
      // Validate updates if title is being updated
      if (updates.title !== undefined) {
        if (!updates.title) {
          throw new Error("Todo title cannot be empty");
        }
        
        if (updates.title.length > 100) {
          throw new Error("Todo title must be less than 100 characters");
        }
        
        // Check for duplicate title
        if (this.todos.some(t => t.id !== id && t.title === updates.title)) {
          throw new Error(`Todo with title "${updates.title}" already exists`);
        }
      }
      
      // Update the todo
      const updatedTodo = {
        ...this.todos[todoIndex],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      
      this.todos[todoIndex] = updatedTodo;
      
      return { ...updatedTodo };
    });
  }
  
  // Delete a todo
  async deleteTodo(id) {
    return this.withRetry(async () => {
      await this.delay();
      
      const todoIndex = this.todos.findIndex(t => t.id === id);
      
      if (todoIndex === -1) {
        throw new Error(`Todo with ID ${id} not found`);
      }
      
      const deletedTodo = this.todos.splice(todoIndex, 1)[0];
      
      return { ...deletedTodo };
    });
  }
  
  // Filter todos by completion status
  async getTodosByStatus(completed) {
    return this.withRetry(async () => {
      await this.delay();
      
      const filteredTodos = this.todos.filter(t => t.completed === completed);
      
      return [...filteredTodos];
    });
  }
  
  // Search todos by title
  async searchTodos(query) {
    return this.withRetry(async () => {
      await this.delay();
      
      const searchResults = this.todos.filter(t => 
        t.title.toLowerCase().includes(query.toLowerCase())
      );
      
      return [...searchResults];
    });
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
    const newTodo = await api.createTodo({ title: "Learn Error Handling" });
    console.log("Created todo:", newTodo);
    
    // Get a todo by ID
    console.log("\nGetting todo by ID...");
    const todo = await api.getTodoById(newTodo.id);
    console.log("Retrieved todo:", todo);
    
    // Update a todo
    console.log("\nUpdating todo...");
    const updatedTodo = await api.updateTodo(newTodo.id, { completed: true });
    console.log("Updated todo:", updatedTodo);
    
    // Try to create a duplicate todo
    console.log("\nTrying to create a duplicate todo...");
    try {
      await api.createTodo({ title: "Learn Error Handling" });
    } catch (error) {
      console.error("Expected error:", error.message);
    }
    
    // Try to update a non-existent todo
    console.log("\nTrying to update a non-existent todo...");
    try {
      await api.updateTodo(999, { title: "This doesn't exist" });
    } catch (error) {
      console.error("Expected error:", error.message);
    }
    
    // Filter todos by status
    console.log("\nGetting completed todos...");
    const completedTodos = await api.getTodosByStatus(true);
    console.log("Completed todos:", completedTodos);
    
    // Search todos
    console.log("\nSearching todos...");
    const searchResults = await api.searchTodos("Learn");
    console.log("Search results:", searchResults);
    
    // Delete a todo
    console.log("\nDeleting todo...");
    const deletedTodo = await api.deleteTodo(newTodo.id);
    console.log("Deleted todo:", deletedTodo);
  } catch (error) {
    console.error("Unexpected error:", error.message);
  }
}

// Run the tests
testTodoAPI();
```

</details> 