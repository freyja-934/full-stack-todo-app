# Advanced React Hooks

## Introduction
Advanced hooks in React provide powerful tools for managing complex state, optimizing performance, and handling side effects. This guide covers the most commonly used advanced hooks and their applications.

## useReducer Hook

### Basic Usage
`useReducer` is useful for managing complex state logic:

```jsx
import React, { useReducer } from 'react';

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        title: action.payload,
        completed: false
      }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD_TODO', payload: 'New Todo' })}>
        Add Todo
      </button>
      {todos.map(todo => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          />
          {todo.title}
          <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
```

### Complex State Management
`useReducer` is particularly useful for managing complex state:

```jsx
function todoAppReducer(state, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_TODOS':
      return { ...state, todos: action.payload, loading: false };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoAppReducer, {
    todos: [],
    filter: 'all',
    loading: false,
    error: null
  });

  // ... rest of the component
}
```

## useCallback Hook

### Memoizing Functions
`useCallback` helps prevent unnecessary re-renders by memoizing functions:

```jsx
import React, { useCallback } from 'react';

function TodoList({ todos, onTodoClick }) {
  const handleClick = useCallback((id) => {
    onTodoClick(id);
  }, [onTodoClick]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => handleClick(todo.id)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
```

### Event Handlers
Use `useCallback` for event handlers that are passed as props:

```jsx
function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle('');
  }, [title, onSubmit]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
```

## useMemo Hook

### Memoizing Values
`useMemo` helps optimize performance by memoizing expensive calculations:

```jsx
import React, { useMemo } from 'react';

function TodoStats({ todos }) {
  const stats = useMemo(() => {
    return {
      total: todos.length,
      completed: todos.filter(t => t.completed).length,
      pending: todos.filter(t => !t.completed).length
    };
  }, [todos]);

  return (
    <div>
      <p>Total: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>Pending: {stats.pending}</p>
    </div>
  );
}
```

### Filtering and Sorting
Use `useMemo` for expensive operations like filtering and sorting:

```jsx
function TodoList({ todos, filter }) {
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === 'all') return true;
      if (filter === 'completed') return todo.completed;
      if (filter === 'pending') return !todo.completed;
      return true;
    });
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## useRef Hook

### DOM References
`useRef` is useful for accessing DOM elements directly:

```jsx
import React, { useRef } from 'react';

function TodoInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

### Storing Mutable Values
`useRef` can also store mutable values that don't trigger re-renders:

```jsx
function TodoTimer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

## Best Practices

### 1. When to Use useReducer
- Complex state logic
- Multiple state updates
- State that depends on previous state
- State that's shared between components

### 2. When to Use useCallback
- Functions passed as props
- Functions used in dependency arrays
- Event handlers in child components

### 3. When to Use useMemo
- Expensive calculations
- Filtering and sorting operations
- Object creation in render

### 4. When to Use useRef
- DOM element references
- Storing mutable values
- Previous value comparisons

## Common Issues and Solutions

### 1. useReducer Complexity
If your reducer becomes too complex:
- Split into smaller reducers
- Use combineReducers pattern
- Consider using a state management library

### 2. useCallback Dependencies
If you have dependency issues:
- Move function definitions outside component
- Use useCallback for all dependent functions
- Consider using useReducer instead

### 3. useMemo Overuse
If you're using useMemo too much:
- Only memoize expensive calculations
- Consider if the optimization is necessary
- Profile your application first

### 4. useRef Misuse
If you're using useRef incorrectly:
- Don't use it for values that should trigger re-renders
- Remember that changes don't cause re-renders
- Use it primarily for DOM references

## Next Steps
Now that you understand advanced hooks, you can:
1. Implement complex state management
2. Optimize component performance
3. Handle side effects efficiently
4. Move on to learning about [Context API](../05-context-api/context-api.md)

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Convert a component to use useReducer
2. Optimize performance with useCallback and useMemo
3. Implement DOM manipulation with useRef
4. Build a todo app with advanced hooks

Check out the [practice file](./advanced-hooks-practice.js) for more exercises and examples. 