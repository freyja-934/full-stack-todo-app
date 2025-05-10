# React Error Handling

## Introduction
Error handling is crucial for creating robust React applications. This guide covers various techniques and best practices for handling errors in React applications.

## Error Boundaries

### Basic Error Boundary
Create a class component that catches JavaScript errors in its child component tree:

```jsx
import React from 'react';

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
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>
            <summary>Error Details</summary>
            <pre>{this.state.error?.toString()}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Using the error boundary
function App() {
  return (
    <ErrorBoundary>
      <TodoApp />
    </ErrorBoundary>
  );
}
```

### Multiple Error Boundaries
Use multiple error boundaries to isolate errors:

```jsx
function TodoApp() {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <TodoList />
      </ErrorBoundary>
      <ErrorBoundary>
        <TodoForm />
      </ErrorBoundary>
    </div>
  );
}
```

## Try-Catch in Components

### Event Handlers
Use try-catch in event handlers:

```jsx
function TodoForm({ onSubmit }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      await onSubmit(formData.get('title'));
    } catch (error) {
      console.error('Error submitting todo:', error);
      // Handle the error (e.g., show a notification)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Add new todo" />
      <button type="submit">Add</button>
    </form>
  );
}
```

### Async Operations
Handle errors in async operations:

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch('/api/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchTodos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
```

## Error Handling Best Practices

### 1. Error Boundaries
- Place error boundaries strategically
- Keep error boundaries simple
- Log errors for debugging

```jsx
// Good
<ErrorBoundary>
  <Component />
</ErrorBoundary>

// Bad
<ErrorBoundary>
  <div>
    <Component1 />
    <Component2 />
    <Component3 />
  </div>
</ErrorBoundary>
```

### 2. Error Messages
- Show user-friendly messages
- Include error details for debugging
- Provide recovery options

```jsx
function ErrorDisplay({ error, onRetry }) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>Please try again or contact support.</p>
      <button onClick={onRetry}>Retry</button>
      <details>
        <summary>Technical Details</summary>
        <pre>{error.toString()}</pre>
      </details>
    </div>
  );
}
```

### 3. Error Logging
- Log errors to a service
- Include relevant context
- Track error frequency

```jsx
function logError(error, context) {
  console.error('Error:', error);
  // Send to error tracking service
  errorTrackingService.log({
    error,
    context,
    timestamp: new Date(),
    user: getCurrentUser()
  });
}
```

## Common Issues and Solutions

### 1. Uncaught Errors
If you're seeing uncaught errors:
- Add error boundaries
- Use try-catch blocks
- Handle promise rejections

### 2. Silent Failures
If errors are being swallowed:
- Add error logging
- Show error messages
- Implement retry logic

### 3. Error Recovery
If users can't recover from errors:
- Add retry buttons
- Provide fallback UI
- Include error details

## Next Steps
Now that you understand error handling, you can:
1. Implement error boundaries
2. Add error logging
3. Create recovery mechanisms
4. Move on to learning about [Testing](../08-testing/testing.md)

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Create an error boundary
2. Handle async errors
3. Implement error recovery
4. Build a robust todo app

Check out the [practice file](./error-handling-practice.js) for more exercises and examples. 