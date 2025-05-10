# React State and Hooks

## Introduction
State and Hooks are fundamental concepts in React that allow components to manage data and side effects. This guide will help you understand how to use state and hooks effectively in your React applications.

## What is State?
State is a way to store and manage data within a component. When state changes, React re-renders the component to reflect the new data.

## Basic State Management with useState

### Using useState Hook
The `useState` hook lets you add state to functional components:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Multiple State Variables
You can use multiple `useState` hooks in a component:

```jsx
function TodoForm() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  return (
    <form>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </form>
  );
}
```

## Side Effects with useEffect

### Basic useEffect
The `useEffect` hook lets you perform side effects in functional components:

```jsx
import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch todos when component mounts
    fetchTodos()
      .then(data => {
        setTodos(data);
        setLoading(false);
      });
  }, []); // Empty dependency array means run once on mount

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

### Dependencies in useEffect
The dependency array controls when the effect runs:

```jsx
function TodoFilter({ filter }) {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    // Re-run when filter changes
    filterTodos(filter).then(setFilteredTodos);
  }, [filter]); // Effect runs when filter changes

  return (
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## Todo App Example
Here's a complete example using state and hooks:

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Add new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        title: newTodo,
        completed: false
      }]);
      setNewTodo('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Best Practices

### 1. State Updates
- Use functional updates when new state depends on previous state
- Batch related state updates together
- Keep state as simple as possible

```jsx
// Good
setCount(prevCount => prevCount + 1);

// Bad
setCount(count + 1);
```

### 2. Effect Dependencies
- Include all values from the component scope that the effect uses
- Use the ESLint exhaustive-deps rule to catch missing dependencies
- Split effects by purpose

```jsx
// Good
useEffect(() => {
  document.title = `${count} todos`;
}, [count]);

// Bad
useEffect(() => {
  document.title = `${count} todos`;
}); // Missing dependency
```

### 3. State Structure
- Keep state normalized
- Avoid redundant state
- Use derived state when possible

```jsx
// Good
const [todos, setTodos] = useState([]);
const completedCount = todos.filter(t => t.completed).length;

// Bad
const [todos, setTodos] = useState([]);
const [completedCount, setCompletedCount] = useState(0);
```

## Common Issues and Solutions

### 1. Infinite Loops
If you see infinite loops in your effects:
- Check the dependency array
- Make sure you're not updating state that triggers the effect
- Use cleanup functions when necessary

### 2. Stale Closures
If you're getting stale values:
- Use functional updates for state
- Include all dependencies in the effect
- Use useCallback for functions

### 3. Performance Issues
If your component is re-rendering too often:
- Use useMemo for expensive calculations
- Use useCallback for function props
- Consider using React.memo for components

## Next Steps
Now that you understand state and hooks, you can:
1. Implement more complex state management
2. Add side effects to your components
3. Optimize performance with useMemo and useCallback
4. Move on to learning about [Advanced Hooks](../04-advanced-hooks/advanced-hooks.md)

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Create a counter with state
2. Build a todo list with state management
3. Add side effects to fetch data
4. Implement form handling with state

Check out the [practice file](./state-hooks-practice.js) for more exercises and examples. 