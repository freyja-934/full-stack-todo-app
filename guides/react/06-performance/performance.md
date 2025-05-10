# React Performance Optimization

## Introduction
Performance optimization is crucial for creating fast and responsive React applications. This guide covers various techniques and best practices for optimizing React applications.

## Memoization Techniques

### React.memo
Use `React.memo` to prevent unnecessary re-renders of functional components:

```jsx
import React, { memo } from 'react';

const TodoItem = memo(function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.title}
    </li>
  );
});

// Using the memoized component
function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
```

### useMemo
Use `useMemo` to memoize expensive calculations:

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

### useCallback
Use `useCallback` to memoize functions:

```jsx
import React, { useCallback } from 'react';

function TodoForm({ onSubmit }) {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(formData.get('title'));
  }, [onSubmit]);

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Add new todo" />
      <button type="submit">Add</button>
    </form>
  );
}
```

## Code Splitting

### React.lazy and Suspense
Use code splitting to reduce the initial bundle size:

```jsx
import React, { lazy, Suspense } from 'react';

const TodoList = lazy(() => import('./TodoList'));
const TodoForm = lazy(() => import('./TodoForm'));

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TodoForm />
        <TodoList />
      </Suspense>
    </div>
  );
}
```

### Route-based Code Splitting
Split code based on routes:

```jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Todo = lazy(() => import('./pages/Todo'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
```

## Virtualization

### React-window
Use `react-window` for efficient list rendering:

```jsx
import React from 'react';
import { FixedSizeList } from 'react-window';

function TodoList({ todos }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {todos[index].title}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={todos.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}
```

## Performance Best Practices

### 1. State Management
- Keep state as local as possible
- Use context for global state
- Avoid unnecessary state updates

```jsx
// Good
function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.title}
    </li>
  );
}

// Bad
function TodoItem({ todo, onToggle }) {
  const [isChecked, setIsChecked] = useState(todo.completed);
  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          onToggle(todo.id);
        }}
      />
      {todo.title}
    </li>
  );
}
```

### 2. Event Handlers
- Debounce or throttle expensive operations
- Use event delegation when possible
- Clean up event listeners

```jsx
function SearchInput({ onSearch }) {
  const debouncedSearch = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 300),
    [onSearch]
  );

  return (
    <input
      type="text"
      onChange={(e) => debouncedSearch(e.target.value)}
      placeholder="Search todos"
    />
  );
}
```

### 3. Rendering Optimization
- Use key prop correctly
- Avoid inline styles and objects
- Use CSS-in-JS solutions carefully

```jsx
// Good
const styles = {
  container: {
    padding: '1rem',
    margin: '1rem'
  }
};

function TodoList({ todos }) {
  return (
    <div style={styles.container}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

// Bad
function TodoList({ todos }) {
  return (
    <div style={{ padding: '1rem', margin: '1rem' }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
```

## Common Issues and Solutions

### 1. Unnecessary Re-renders
If you're seeing too many re-renders:
- Use React.memo for components
- Implement shouldComponentUpdate
- Check prop changes

### 2. Slow Initial Load
If your app loads slowly:
- Implement code splitting
- Use lazy loading
- Optimize bundle size

### 3. Memory Leaks
If you're experiencing memory leaks:
- Clean up effects properly
- Remove event listeners
- Clear intervals and timeouts

## Next Steps
Now that you understand performance optimization, you can:
1. Implement code splitting
2. Add memoization
3. Optimize rendering
4. Move on to learning about [Error Handling](../07-error-handling/error-handling.md)

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Optimize a todo list component
2. Implement code splitting
3. Add memoization to components
4. Build a performant todo app

Check out the [practice file](./performance-practice.js) for more exercises and examples. 