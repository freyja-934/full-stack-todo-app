# React Testing

## Introduction
Testing is essential for ensuring the reliability and maintainability of React applications. This guide covers various testing techniques and best practices using Jest and React Testing Library.

## Setting Up Testing

### Installation
Install the necessary dependencies:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest
```

### Configuration
Create a `jest.config.js` file:

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
```

## Writing Tests

### Component Testing
Test a basic component:

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const todo = {
    id: 1,
    title: 'Test Todo',
    completed: false
  };

  test('renders todo item', () => {
    render(<TodoItem todo={todo} onToggle={() => {}} />);
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('toggles todo when clicked', async () => {
    const onToggle = jest.fn();
    render(<TodoItem todo={todo} onToggle={onToggle} />);
    
    await userEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith(1);
  });
});
```

### Form Testing
Test form submission:

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
  test('submits new todo', async () => {
    const onSubmit = jest.fn();
    render(<TodoForm onSubmit={onSubmit} />);

    const input = screen.getByPlaceholderText('Add new todo');
    await userEvent.type(input, 'New Todo');
    await userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(onSubmit).toHaveBeenCalledWith('New Todo');
  });
});
```

### Async Testing
Test async operations:

```jsx
import { render, screen, waitFor } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('loads and displays todos', async () => {
    render(<TodoList />);

    // Show loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for todos to load
    await waitFor(() => {
      expect(screen.getByText('Todo 1')).toBeInTheDocument();
    });
  });
});
```

## Testing Best Practices

### 1. Test Structure
- Use descriptive test names
- Follow the Arrange-Act-Assert pattern
- Keep tests focused and isolated

```jsx
describe('TodoItem', () => {
  test('should toggle completion status when clicked', async () => {
    // Arrange
    const todo = { id: 1, title: 'Test', completed: false };
    const onToggle = jest.fn();
    render(<TodoItem todo={todo} onToggle={onToggle} />);

    // Act
    await userEvent.click(screen.getByRole('checkbox'));

    // Assert
    expect(onToggle).toHaveBeenCalledWith(1);
  });
});
```

### 2. Testing User Interactions
- Use `userEvent` over `fireEvent`
- Test keyboard interactions
- Test accessibility

```jsx
test('can add todo with keyboard', async () => {
  render(<TodoForm onSubmit={onSubmit} />);
  
  const input = screen.getByPlaceholderText('Add new todo');
  await userEvent.type(input, 'New Todo{enter}');
  
  expect(onSubmit).toHaveBeenCalledWith('New Todo');
});
```

### 3. Mocking
- Mock external dependencies
- Use jest.mock for modules
- Mock API calls

```jsx
// Mock API module
jest.mock('./api', () => ({
  fetchTodos: () => Promise.resolve([
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' }
  ])
}));

test('loads todos from API', async () => {
  render(<TodoList />);
  
  await waitFor(() => {
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
  });
});
```

## Common Testing Patterns

### 1. Snapshot Testing
Use snapshot tests for UI components:

```jsx
test('matches snapshot', () => {
  const { container } = render(<TodoItem todo={todo} onToggle={() => {}} />);
  expect(container).toMatchSnapshot();
});
```

### 2. Integration Testing
Test component interactions:

```jsx
test('can add and complete todo', async () => {
  render(<TodoApp />);
  
  // Add todo
  await userEvent.type(screen.getByPlaceholderText('Add new todo'), 'New Todo');
  await userEvent.click(screen.getByRole('button', { name: 'Add' }));
  
  // Complete todo
  const todo = screen.getByText('New Todo');
  await userEvent.click(todo);
  
  expect(todo).toHaveStyle({ textDecoration: 'line-through' });
});
```

### 3. Error Testing
Test error handling:

```jsx
test('shows error message when API fails', async () => {
  jest.spyOn(api, 'fetchTodos').mockRejectedValue(new Error('API Error'));
  
  render(<TodoList />);
  
  await waitFor(() => {
    expect(screen.getByText('Failed to load todos')).toBeInTheDocument();
  });
});
```

## Common Issues and Solutions

### 1. Async Testing
If you're having issues with async tests:
- Use `waitFor` for async operations
- Mock timers when needed
- Handle loading states

### 2. Component Isolation
If tests are too coupled:
- Mock dependencies
- Use test-specific props
- Reset mocks between tests

### 3. Test Maintenance
If tests are hard to maintain:
- Keep tests focused
- Use helper functions
- Follow consistent patterns

## Next Steps
Now that you understand testing, you can:
1. Write more comprehensive tests
2. Set up continuous integration
3. Add test coverage reporting
4. Move on to learning about [Deployment](../09-deployment/deployment.md)

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Write tests for a todo component
2. Test form submission
3. Test async operations
4. Build a test suite for a todo app

Check out the [practice file](./testing-practice.js) for more exercises and examples. 