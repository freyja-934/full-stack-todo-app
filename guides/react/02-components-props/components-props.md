# React Components and Props

## Introduction
Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces. Props (properties) are how we pass data between components.

## Component Types

### 1. Function Components
The simplest way to define a component is to write a JavaScript function:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 2. Class Components
You can also use ES6 classes to define components:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Props

### Basic Props
Props are read-only and are passed from parent to child components:

```jsx
function TodoItem(props) {
  return (
    <div className="todo-item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <span>Priority: {props.priority}</span>
    </div>
  );
}

// Using the component
<TodoItem 
  title="Learn React"
  description="Study React components and props"
  priority="high"
/>
```

### Destructuring Props
You can use object destructuring to make your code cleaner:

```jsx
function TodoItem({ title, description, priority }) {
  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>Priority: {priority}</span>
    </div>
  );
}
```

### Default Props
You can define default values for props:

```jsx
function TodoItem({ title, description, priority = 'medium' }) {
  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>Priority: {priority}</span>
    </div>
  );
}
```

## Component Composition

### Children Props
You can pass components as children to other components:

```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Using the component
<Card title="Todo List">
  <TodoItem title="Learn React" />
  <TodoItem title="Build a todo app" />
</Card>
```

### Component Composition Example
Here's how to compose components for a todo app:

```jsx
function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          description={todo.description}
          priority={todo.priority}
        />
      ))}
    </div>
  );
}

function TodoApp() {
  const todos = [
    {
      id: 1,
      title: 'Learn React',
      description: 'Study React components and props',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Build a todo app',
      description: 'Create a simple todo application',
      priority: 'medium'
    }
  ];

  return (
    <div className="app">
      <h1>My Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}
```

## Prop Types
You can use PropTypes to validate the props passed to your components:

```jsx
import PropTypes from 'prop-types';

function TodoItem({ title, description, priority }) {
  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>Priority: {priority}</span>
    </div>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.oneOf(['low', 'medium', 'high'])
};
```

## Best Practices

### 1. Keep Components Small
Break down complex components into smaller, reusable pieces:

```jsx
// Instead of one large component
function TodoApp() {
  return (
    <div>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}
```

### 2. Use Meaningful Names
Choose clear, descriptive names for your components and props:

```jsx
// Good
function UserProfile({ name, email, avatar }) {
  // ...
}

// Bad
function Profile({ n, e, a }) {
  // ...
}
```

### 3. Keep Props Simple
Avoid passing too many props to a component:

```jsx
// Good
function TodoItem({ todo }) {
  const { title, description, priority } = todo;
  // ...
}

// Bad
function TodoItem({ title, description, priority, createdAt, updatedAt, userId, status, tags }) {
  // ...
}
```

## Common Issues and Solutions

### 1. Props Not Updating
If props aren't updating as expected:
- Check if the parent component is re-rendering
- Verify that the prop values are changing
- Make sure you're not mutating props directly

### 2. Prop Type Errors
If you see prop type errors:
- Check that you're passing the correct types
- Verify that required props are being passed
- Make sure prop types are properly defined

### 3. Component Not Rendering
If a component isn't rendering:
- Check that the component is being exported correctly
- Verify that all required props are being passed
- Look for any console errors

## Next Steps
Now that you understand components and props, you can:
1. Create more complex component hierarchies
2. Add prop type validation
3. Implement component composition
4. Move on to learning about [State and Hooks](../03-state-hooks/state-hooks.md)

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Create reusable components
2. Pass and validate props
3. Compose components together
4. Build a todo app component hierarchy

Check out the [practice file](./components-props-practice.js) for more exercises and examples. 