// React Performance Optimization Practice
// This file contains exercises to practice performance optimization techniques in React

// Exercise 1: Memoization with React.memo
// TODO: Create a memoized TodoItem component that only re-renders when its props change
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  // TODO: Implement the component
  // Should render a todo item with a checkbox and title
  // Should only re-render when todo or onToggle changes
});

// Exercise 2: useMemo for Expensive Calculations
// TODO: Create a TodoStats component that uses useMemo to calculate statistics
function TodoStats({ todos }) {
  // TODO: Use useMemo to calculate:
  // - Total number of todos
  // - Number of completed todos
  // - Number of pending todos
  // Should only recalculate when todos array changes
}

// Exercise 3: useCallback for Event Handlers
// TODO: Create a TodoForm component that uses useCallback for its submit handler
function TodoForm({ onSubmit }) {
  // TODO: Use useCallback to memoize the submit handler
  // Should only recreate when onSubmit changes
}

// Exercise 4: Code Splitting
// TODO: Create a lazy-loaded TodoList component
const TodoList = React.lazy(() => {
  // TODO: Implement lazy loading
  // Should return a promise that resolves to the TodoList component
});

// Exercise 5: Virtualization
// TODO: Create a virtualized list component using react-window
function VirtualizedTodoList({ todos }) {
  // TODO: Implement a virtualized list
  // Should only render visible items
  // Should handle scrolling efficiently
}

// Exercise 6: Performance Optimization
// TODO: Create an optimized TodoApp component
function TodoApp() {
  // TODO: Implement the app with:
  // - Memoized components
  // - Optimized state updates
  // - Efficient event handlers
  // - Proper cleanup
}

// Test Your Code
// Uncomment and run the tests to check your implementation

/*
// Test Exercise 1
const testTodo = { id: 1, title: 'Test Todo', completed: false };
const testToggle = () => {};
console.log('TodoItem:', TodoItem({ todo: testTodo, onToggle: testToggle }));

// Test Exercise 2
const testTodos = [
  { id: 1, title: 'Todo 1', completed: true },
  { id: 2, title: 'Todo 2', completed: false }
];
console.log('TodoStats:', TodoStats({ todos: testTodos }));

// Test Exercise 3
const testSubmit = (title) => console.log('Submitted:', title);
console.log('TodoForm:', TodoForm({ onSubmit: testSubmit }));

// Test Exercise 4
console.log('TodoList:', TodoList);

// Test Exercise 5
console.log('VirtualizedTodoList:', VirtualizedTodoList({ todos: testTodos }));

// Test Exercise 6
console.log('TodoApp:', TodoApp());
*/

// How to Use This File
// 1. Implement each TODO section
// 2. Uncomment the tests
// 3. Run the file with Node.js
// 4. Check the console output

// Tips for Testing
// - Start with Exercise 1 and work your way up
// - Test each component as you implement it
// - Use React DevTools to check for unnecessary re-renders
// - Monitor performance using the React Profiler 