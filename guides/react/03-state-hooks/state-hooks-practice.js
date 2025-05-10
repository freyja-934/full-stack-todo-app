// React State and Hooks Practice
// Run this file with: node state-hooks-practice.js

// ===== Exercise 1: Basic State Management =====
// TODO: Implement these state management functions

function createCounter() {
  // Your code here
  // Should return a counter component with:
  // - Current count
  // - Increment button
  // - Decrement button
  // - Reset button
}

function createTodoForm() {
  // Your code here
  // Should return a form component with:
  // - Input field for todo title
  // - Priority selection
  // - Submit button
  // - Form state management
}

// ===== Exercise 2: Multiple State Variables =====
// TODO: Implement these multi-state functions

function createUserProfile() {
  // Your code here
  // Should return a profile component with:
  // - Name input
  // - Age input
  // - Email input
  // - Save button
  // - Multiple state variables
}

function createTodoItem() {
  // Your code here
  // Should return a todo item component with:
  // - Title
  // - Completion status
  // - Priority level
  // - Edit mode
  // - Multiple state variables
}

// ===== Exercise 3: Side Effects =====
// TODO: Implement these effect-based functions

function createDataFetcher() {
  // Your code here
  // Should return a component that:
  // - Fetches data on mount
  // - Shows loading state
  // - Displays fetched data
  // - Handles errors
}

function createWindowResizeTracker() {
  // Your code here
  // Should return a component that:
  // - Tracks window size
  // - Updates on resize
  // - Cleans up event listener
}

// ===== Exercise 4: Form Handling =====
// TODO: Implement these form handling functions

function createValidatedForm() {
  // Your code here
  // Should return a form component with:
  // - Input validation
  // - Error messages
  // - Submit handling
  // - Form state
}

function createSearchInput() {
  // Your code here
  // Should return a search component with:
  // - Debounced input
  // - Search results
  // - Loading state
  // - Error handling
}

// ===== Challenge Exercise: Todo App with State =====
// TODO: Implement this todo app with state management

class TodoApp {
  constructor() {
    this.state = {
      todos: [],
      newTodo: '',
      filter: 'all',
      loading: false,
      error: null
    };
  }

  addTodo() {
    // Your code here
    // Should add a new todo to the list
  }

  toggleTodo(id) {
    // Your code here
    // Should toggle todo completion status
  }

  deleteTodo(id) {
    // Your code here
    // Should remove a todo from the list
  }

  filterTodos() {
    // Your code here
    // Should filter todos based on current filter
  }

  render() {
    // Your code here
    // Should return the complete todo app
  }
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Basic State Management ===');
console.log('Counter:', createCounter());
console.log('Todo Form:', createTodoForm());

// Test Exercise 2
console.log('\n=== Testing Multiple State Variables ===');
console.log('User Profile:', createUserProfile());
console.log('Todo Item:', createTodoItem());

// Test Exercise 3
console.log('\n=== Testing Side Effects ===');
console.log('Data Fetcher:', createDataFetcher());
console.log('Window Resize Tracker:', createWindowResizeTracker());

// Test Exercise 4
console.log('\n=== Testing Form Handling ===');
console.log('Validated Form:', createValidatedForm());
console.log('Search Input:', createSearchInput());

// Test Challenge Exercise
console.log('\n=== Testing Todo App with State ===');
const todoApp = new TodoApp();
console.log('Initial State:', todoApp.state);
todoApp.addTodo();
console.log('After Adding Todo:', todoApp.state);
todoApp.toggleTodo(1);
console.log('After Toggling Todo:', todoApp.state);
todoApp.deleteTodo(1);
console.log('After Deleting Todo:', todoApp.state);
console.log('Rendered App:', todoApp.render());

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node state-hooks-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each component as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 