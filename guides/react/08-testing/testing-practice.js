// React Testing Practice
// This file contains exercises to practice testing techniques in React

// Exercise 1: Component Testing
// TODO: Write tests for the TodoItem component
describe('TodoItem', () => {
  // TODO: Write tests that:
  // - Check if the component renders correctly
  // - Verify the todo title is displayed
  // - Test the toggle functionality
  // - Check the completed state styling
});

// Exercise 2: Form Testing
// TODO: Write tests for the TodoForm component
describe('TodoForm', () => {
  // TODO: Write tests that:
  // - Check if the form renders correctly
  // - Test form submission
  // - Verify input validation
  // - Test keyboard interactions
});

// Exercise 3: Async Testing
// TODO: Write tests for the TodoList component
describe('TodoList', () => {
  // TODO: Write tests that:
  // - Check loading state
  // - Verify todos are loaded
  // - Test error handling
  // - Verify todo interactions
});

// Exercise 4: Integration Testing
// TODO: Write tests for the TodoApp component
describe('TodoApp', () => {
  // TODO: Write tests that:
  // - Test adding a new todo
  // - Test completing a todo
  // - Test deleting a todo
  // - Verify state updates
});

// Exercise 5: Mocking
// TODO: Write tests with mocked dependencies
describe('TodoAPI', () => {
  // TODO: Write tests that:
  // - Mock API calls
  // - Test success scenarios
  // - Test error scenarios
  // - Verify data handling
});

// Exercise 6: Snapshot Testing
// TODO: Write snapshot tests for components
describe('Snapshots', () => {
  // TODO: Write tests that:
  // - Create snapshots of components
  // - Test component updates
  // - Verify UI consistency
  // - Handle dynamic content
});

// Test Your Code
// Uncomment and run the tests to check your implementation

/*
// Test Exercise 1
const todo = { id: 1, title: 'Test Todo', completed: false };
const onToggle = jest.fn();
render(<TodoItem todo={todo} onToggle={onToggle} />);
expect(screen.getByText('Test Todo')).toBeInTheDocument();

// Test Exercise 2
const onSubmit = jest.fn();
render(<TodoForm onSubmit={onSubmit} />);
const input = screen.getByPlaceholderText('Add new todo');
await userEvent.type(input, 'New Todo');
await userEvent.click(screen.getByRole('button', { name: 'Add' }));
expect(onSubmit).toHaveBeenCalledWith('New Todo');

// Test Exercise 3
render(<TodoList />);
expect(screen.getByText('Loading...')).toBeInTheDocument();
await waitFor(() => {
  expect(screen.getByText('Todo 1')).toBeInTheDocument();
});

// Test Exercise 4
render(<TodoApp />);
await userEvent.type(screen.getByPlaceholderText('Add new todo'), 'New Todo');
await userEvent.click(screen.getByRole('button', { name: 'Add' }));
expect(screen.getByText('New Todo')).toBeInTheDocument();

// Test Exercise 5
jest.mock('./api', () => ({
  fetchTodos: () => Promise.resolve([
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' }
  ])
}));
render(<TodoList />);
await waitFor(() => {
  expect(screen.getByText('Todo 1')).toBeInTheDocument();
  expect(screen.getByText('Todo 2')).toBeInTheDocument();
});

// Test Exercise 6
const { container } = render(<TodoItem todo={todo} onToggle={onToggle} />);
expect(container).toMatchSnapshot();
*/

// How to Use This File
// 1. Implement each TODO section
// 2. Uncomment the tests
// 3. Run the tests with Jest
// 4. Check the test results

// Tips for Testing
// - Start with Exercise 1 and work your way up
// - Write tests before implementing features
// - Use descriptive test names
// - Follow the Arrange-Act-Assert pattern
// - Keep tests focused and isolated
// - Mock external dependencies
// - Test edge cases and error scenarios 