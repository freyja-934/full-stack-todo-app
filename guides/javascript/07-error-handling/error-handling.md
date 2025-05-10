# Error Handling

## Why It's Important

Error handling is crucial for creating robust applications that:
- Gracefully handle unexpected situations
- Provide meaningful feedback to users
- Prevent application crashes
- Make debugging easier

**Real-World Example:**
In a todo application, you need to handle errors when:
- Network requests fail
- User input is invalid
- Database operations fail
- File operations fail

## Key Concepts

### try/catch/finally

```javascript
// Basic error handling
try {
  // Code that might throw an error
  const result = someFunction();
} catch (error) {
  // Handle the error
  console.error('An error occurred:', error.message);
} finally {
  // Code that runs regardless of success or failure
  cleanup();
}
```

### Error Types

```javascript
// Built-in error types
try {
  throw new Error('Generic error');
} catch (error) {
  console.error(error instanceof Error); // true
}

try {
  throw new TypeError('Type error');
} catch (error) {
  console.error(error instanceof TypeError); // true
}

try {
  throw new ReferenceError('Reference error');
} catch (error) {
  console.error(error instanceof ReferenceError); // true
}
```

### Custom Errors

```javascript
// Creating custom error classes
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Using custom errors
function validateTodo(todo) {
  if (!todo.title) {
    throw new ValidationError('Todo title is required');
  }
  if (todo.title.length < 3) {
    throw new ValidationError('Todo title must be at least 3 characters');
  }
}
```

### Error Propagation

```javascript
// Errors propagate up the call stack
function processTodo(todo) {
  try {
    validateTodo(todo);
    saveTodo(todo);
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation errors
      console.error('Validation failed:', error.message);
    } else {
      // Re-throw other errors
      throw error;
    }
  }
}
```

## Code Examples

### Basic Error Handling

```javascript
// Handling potential errors
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  } catch (error) {
    console.error('Error in division:', error.message);
    return null;
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // null
```

### Async Error Handling

```javascript
// Handling errors in async functions
async function fetchTodo(id) {
  try {
    const response = await fetch(`/api/todos/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error('Failed to fetch todo:', error.message);
    throw error; // Re-throw to let caller handle it
  }
}

// Using async error handling
async function displayTodo(id) {
  try {
    const todo = await fetchTodo(id);
    console.log('Todo:', todo);
  } catch (error) {
    console.error('Could not display todo:', error.message);
  }
}
```

### Error Boundaries

```javascript
// Creating an error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### Todo App Examples

```javascript
// Error handling in todo operations
class TodoService {
  async addTodo(todo) {
    try {
      // Validate todo
      if (!todo.title) {
        throw new ValidationError('Title is required');
      }

      // Save todo
      const response = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(todo)
      });

      if (!response.ok) {
        throw new Error(`Failed to save todo: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ValidationError) {
        // Handle validation errors
        console.error('Validation failed:', error.message);
        throw error;
      } else if (error instanceof TypeError) {
        // Handle network errors
        console.error('Network error:', error.message);
        throw new Error('Failed to connect to server');
      } else {
        // Handle other errors
        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred');
      }
    }
  }

  async updateTodo(id, updates) {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updates)
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Todo not found');
        }
        throw new Error(`Failed to update todo: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating todo:', error.message);
      throw error;
    }
  }

  // Additional todo app examples
  async deleteTodo(id) {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Todo not found');
        }
        throw new Error(`Failed to delete todo: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting todo:', error.message);
      throw error;
    }
  }

  async getTodos(filter = {}) {
    try {
      const queryParams = new URLSearchParams(filter);
      const response = await fetch(`/api/todos?${queryParams}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch todos: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching todos:', error.message);
      throw error;
    }
  }

  async toggleTodoStatus(id) {
    try {
      const todo = await this.getTodo(id);
      if (!todo) {
        throw new Error('Todo not found');
      }

      return await this.updateTodo(id, {
        completed: !todo.completed
      });
    } catch (error) {
      console.error('Error toggling todo status:', error.message);
      throw error;
    }
  }
}

// Example usage with error handling
async function handleTodoOperations() {
  const todoService = new TodoService();

  try {
    // Add a new todo
    const newTodo = await todoService.addTodo({
      title: "Learn Error Handling",
      completed: false
    });
    console.log('Todo added:', newTodo);

    // Update the todo
    const updatedTodo = await todoService.updateTodo(newTodo.id, {
      completed: true
    });
    console.log('Todo updated:', updatedTodo);

    // Toggle todo status
    const toggledTodo = await todoService.toggleTodoStatus(newTodo.id);
    console.log('Todo status toggled:', toggledTodo);

    // Get all completed todos
    const completedTodos = await todoService.getTodos({ completed: true });
    console.log('Completed todos:', completedTodos);

  } catch (error) {
    if (error instanceof ValidationError) {
      console.error('Validation failed:', error.message);
    } else if (error instanceof TypeError) {
      console.error('Network error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}
```

### Web Development Examples

```javascript
// Form validation with error handling
function validateForm(formData) {
  const errors = [];

  try {
    // Validate required fields
    if (!formData.username) {
      errors.push('Username is required');
    }

    // Validate email format
    if (!formData.email.includes('@')) {
      errors.push('Invalid email format');
    }

    // Validate password strength
    if (formData.password.length < 8) {
      errors.push('Password must be at least 8 characters');
    }

    if (errors.length > 0) {
      throw new ValidationError('Form validation failed', errors);
    }

    return true;
  } catch (error) {
    if (error instanceof ValidationError) {
      return {
        valid: false,
        errors: error.errors
      };
    }
    throw error;
  }
}

// API error handling
async function handleApiError(error) {
  if (error instanceof TypeError) {
    // Network error
    return {
      message: 'Network error. Please check your connection.',
      type: 'network'
    };
  }

  if (error.response) {
    // Server error
    return {
      message: error.response.data.message || 'Server error occurred',
      type: 'server',
      status: error.response.status
    };
  }

  // Unknown error
  return {
    message: 'An unexpected error occurred',
    type: 'unknown'
  };
}
```

## Practice Exercises

1. Create a function that handles division by zero
2. Implement form validation with custom errors
3. Create an error boundary component
4. Handle API errors in async functions
5. Implement retry logic for failed operations

## Related Practice

Check out the [Error Handling practice exercises](./error-handling-practice.md) to test your knowledge.

## Next Steps

After understanding error handling, move on to [Promises & Async/Await](../08-promises-async-await/promises-async-await.md) to learn how to work with asynchronous operations. 