# Advanced React Topics

## Introduction
This guide covers advanced React concepts and patterns that will help you build more sophisticated applications. We'll explore custom hooks, performance optimization, and advanced patterns.

## Custom Hooks

### Basic Custom Hook
Create a custom hook for managing todos:

```jsx
import { useState, useCallback } from 'react';

function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((title) => {
    setTodos(prev => [...prev, { id: Date.now(), title, completed: false }]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  return { todos, addTodo, toggleTodo, deleteTodo };
}

// Using the custom hook
function TodoApp() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}
```

### Composing Custom Hooks
Combine multiple custom hooks:

```jsx
function useTodoWithFilter() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [filter, setFilter] = useState('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return {
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter
  };
}
```

## Advanced Patterns

### 1. Render Props
Use render props for component composition:

```jsx
class TodoData extends React.Component {
  state = {
    todos: [],
    loading: false,
    error: null
  };

  async fetchTodos() {
    this.setState({ loading: true });
    try {
      const response = await fetch('/api/todos');
      const todos = await response.json();
      this.setState({ todos, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    return this.props.children({
      ...this.state,
      fetchTodos: this.fetchTodos
    });
  }
}

// Using the render prop component
function TodoApp() {
  return (
    <TodoData>
      {({ todos, loading, error, fetchTodos }) => (
        <div>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          <TodoList todos={todos} />
          <button onClick={fetchTodos}>Refresh</button>
        </div>
      )}
    </TodoData>
  );
}
```

### 2. Higher-Order Components
Create a HOC for authentication:

```jsx
function withAuth(WrappedComponent) {
  return class extends React.Component {
    state = {
      isAuthenticated: false,
      user: null
    };

    async componentDidMount() {
      try {
        const user = await checkAuth();
        this.setState({ isAuthenticated: true, user });
      } catch (error) {
        this.setState({ isAuthenticated: false, user: null });
      }
    }

    render() {
      if (!this.state.isAuthenticated) {
        return <div>Please log in</div>;
      }

      return <WrappedComponent {...this.props} user={this.state.user} />;
    }
  };
}

// Using the HOC
const AuthenticatedTodoApp = withAuth(TodoApp);
```

### 3. Compound Components
Create compound components for flexible UI:

```jsx
const Todo = {
  List: function TodoList({ children }) {
    return <ul>{children}</ul>;
  },
  Item: function TodoItem({ todo, onToggle }) {
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
  },
  Form: function TodoForm({ onSubmit }) {
    return (
      <form onSubmit={onSubmit}>
        <input name="title" placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
    );
  }
};

// Using compound components
function TodoApp() {
  return (
    <div>
      <Todo.Form onSubmit={handleSubmit} />
      <Todo.List>
        {todos.map(todo => (
          <Todo.Item
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
          />
        ))}
      </Todo.List>
    </div>
  );
}
```

## Performance Optimization

### 1. Virtualization
Implement virtualized lists for large datasets:

```jsx
import { FixedSizeList } from 'react-window';

function VirtualizedTodoList({ todos }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <TodoItem todo={todos[index]} />
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

### 2. Memoization
Use memoization for expensive calculations:

```jsx
function TodoStats({ todos }) {
  const stats = useMemo(() => {
    return {
      total: todos.length,
      completed: todos.filter(t => t.completed).length,
      pending: todos.filter(t => !t.completed).length,
      completionRate: (todos.filter(t => t.completed).length / todos.length) * 100
    };
  }, [todos]);

  return (
    <div>
      <p>Total: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>Pending: {stats.pending}</p>
      <p>Completion Rate: {stats.completionRate}%</p>
    </div>
  );
}
```

### 3. Code Splitting
Implement code splitting for better performance:

```jsx
const TodoList = React.lazy(() => import('./TodoList'));
const TodoForm = React.lazy(() => import('./TodoForm'));
const Settings = React.lazy(() => import('./Settings'));

function TodoApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TodoForm />
      <TodoList />
      <Settings />
    </Suspense>
  );
}
```

## Common Issues and Solutions

### 1. State Management
If you're having issues with state:
- Use custom hooks
- Implement proper memoization
- Consider using a state management library

### 2. Performance
If your app is slow:
- Implement virtualization
- Use code splitting
- Optimize renders

### 3. Component Architecture
If your components are hard to maintain:
- Use compound components
- Implement render props
- Create HOCs

## Next Steps
Now that you understand advanced topics, you can:
1. Create custom hooks
2. Implement advanced patterns
3. Optimize performance
4. Build complex applications

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Create custom hooks
2. Implement render props
3. Build compound components
4. Optimize a todo app

Check out the [practice file](./advanced-practice.js) for more exercises and examples. 