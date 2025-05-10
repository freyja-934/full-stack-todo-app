// React Error Handling Practice
// This file contains exercises to practice error handling techniques in React

// Exercise 1: Basic Error Boundary
// TODO: Create an error boundary component that catches and displays errors
class ErrorBoundary extends React.Component {
  // TODO: Implement the error boundary
  // Should catch errors in child components
  // Should display a user-friendly error message
  // Should include error details for debugging
}

// Exercise 2: Error Handling in Event Handlers
// TODO: Create a TodoForm component with error handling
function TodoForm({ onSubmit }) {
  // TODO: Implement error handling in the submit handler
  // Should catch and handle errors during form submission
  // Should display error messages to the user
  // Should provide a way to retry
}

// Exercise 3: Async Error Handling
// TODO: Create a TodoList component that handles async errors
function TodoList() {
  // TODO: Implement error handling for async operations
  // Should handle fetch errors
  // Should display loading and error states
  // Should provide retry functionality
}

// Exercise 4: Error Recovery
// TODO: Create an ErrorDisplay component for error recovery
function ErrorDisplay({ error, onRetry }) {
  // TODO: Implement error display and recovery
  // Should show user-friendly error message
  // Should include technical details
  // Should provide retry button
}

// Exercise 5: Error Logging
// TODO: Create an error logging utility
function logError(error, context) {
  // TODO: Implement error logging
  // Should log errors to console
  // Should include context information
  // Should format error details
}

// Exercise 6: Complete Error Handling
// TODO: Create a robust TodoApp with error handling
function TodoApp() {
  // TODO: Implement the app with:
  // - Error boundaries
  // - Error handling in async operations
  // - Error recovery mechanisms
  // - Error logging
}

// Test Your Code
// Uncomment and run the tests to check your implementation

/*
// Test Exercise 1
const TestComponent = () => {
  throw new Error('Test error');
};
console.log('ErrorBoundary:', <ErrorBoundary><TestComponent /></ErrorBoundary>);

// Test Exercise 2
const testSubmit = async () => {
  throw new Error('Submit failed');
};
console.log('TodoForm:', <TodoForm onSubmit={testSubmit} />);

// Test Exercise 3
console.log('TodoList:', <TodoList />);

// Test Exercise 4
const testError = new Error('Test error');
const testRetry = () => console.log('Retrying...');
console.log('ErrorDisplay:', <ErrorDisplay error={testError} onRetry={testRetry} />);

// Test Exercise 5
const testContext = { component: 'TestComponent', action: 'test' };
logError(new Error('Test error'), testContext);

// Test Exercise 6
console.log('TodoApp:', <TodoApp />);
*/

// How to Use This File
// 1. Implement each TODO section
// 2. Uncomment the tests
// 3. Run the file with Node.js
// 4. Check the console output

// Tips for Testing
// - Start with Exercise 1 and work your way up
// - Test each component as you implement it
// - Verify error messages are user-friendly
// - Check that error recovery works
// - Ensure errors are properly logged 