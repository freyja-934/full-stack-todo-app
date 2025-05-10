# React Context API

## Introduction
The Context API is a powerful feature in React that allows you to share state across components without prop drilling. This guide will help you understand how to use Context effectively in your React applications.

## What is Context?
Context provides a way to pass data through the component tree without having to pass props manually at every level. It's particularly useful for sharing global state or theme data.

## Creating and Using Context

### Basic Context Setup
Here's how to create and use a basic context:

```jsx
import React, { createContext, useContext, useState } from 'react';

// Create a context
const TodoContext = createContext();

// Create a provider component
function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// Create a custom hook for using the context
function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}

// Using the context in components
function TodoList() {
  const { todos, toggleTodo } = useTodo();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

function TodoForm() {
  const { addTodo } = useTodo();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({
        id: Date.now(),
        title,
        completed: false
      });
      setTitle('');
    }
  };

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

// Wrap your app with the provider
function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
```

### Multiple Contexts
You can use multiple contexts in your application:

```jsx
// Theme context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Using multiple contexts
function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div>
          <h1>Todo App</h1>
          <TodoForm />
          <TodoList />
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}
```

## Advanced Context Usage

### Context with useReducer
Combine Context with useReducer for complex state management:

```jsx
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
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

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
```

### Context with Custom Hooks
Create custom hooks for specific context functionality:

```jsx
function useTodoList() {
  const { state, dispatch } = useTodo();

  const addTodo = useCallback((title) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Date.now(),
        title,
        completed: false
      }
    });
  }, [dispatch]);

  const toggleTodo = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id
    });
  }, [dispatch]);

  return {
    todos: state,
    addTodo,
    toggleTodo
  };
}
```

## Best Practices

### 1. Context Structure
- Keep contexts focused and small
- Split large contexts into smaller ones
- Use multiple contexts for different concerns

### 2. Performance Optimization
- Use useMemo for context values
- Split context providers
- Use context selectors when needed

```jsx
function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const value = useMemo(() => ({
    todos,
    filter,
    setTodos,
    setFilter
  }), [todos, filter]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}
```

### 3. Error Handling
- Add error boundaries
- Validate context usage
- Provide fallback values

```jsx
function TodoProvider({ children }) {
  const [error, setError] = useState(null);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <TodoContext.Provider value={{ error, setError }}>
      {children}
    </TodoContext.Provider>
  );
}
```

## Common Issues and Solutions

### 1. Context Re-renders
If you're seeing too many re-renders:
- Split your context into smaller pieces
- Use useMemo for context values
- Implement context selectors

### 2. Context Nesting
If your context nesting is too deep:
- Combine related contexts
- Use composition instead of nesting
- Consider using a state management library

### 3. Context Testing
If you're having trouble testing components with context:
- Create test providers
- Mock context values
- Use context testing utilities

## Next Steps
Now that you understand Context API, you can:
1. Implement global state management
2. Create theme systems
3. Share data between components
4. Move on to learning about [Performance Optimization](../06-performance/performance.md)

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Create a theme context
2. Build a todo app with context
3. Implement multiple contexts
4. Add context to existing components

Check out the [practice file](./context-api-practice.js) for more exercises and examples. 