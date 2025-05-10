// React Getting Started Practice
// Run this file with: node getting-started-practice.js

// ===== Exercise 1: Basic Component Creation =====
// TODO: Implement these basic component functions

function createHeaderComponent() {
  // Your code here
  // Should return a header component with:
  // - Title
  // - Navigation links
  // - Logo
}

function createFooterComponent() {
  // Your code here
  // Should return a footer component with:
  // - Copyright information
  // - Social media links
  // - Contact information
}

function createButtonComponent(text, onClick) {
  // Your code here
  // Should return a button component with:
  // - Custom text
  // - Click handler
  // - Basic styling
}

// ===== Exercise 2: JSX Practice =====
// TODO: Implement these JSX functions

function createUserProfile(name, age, email) {
  // Your code here
  // Should return JSX for a user profile with:
  // - Name
  // - Age
  // - Email
  // - Profile picture placeholder
}

function createTodoItem(title, completed) {
  // Your code here
  // Should return JSX for a todo item with:
  // - Title
  // - Completion status
  // - Checkbox
  // - Delete button
}

// ===== Exercise 3: Component Composition =====
// TODO: Implement these component composition functions

function createTodoList(todos) {
  // Your code here
  // Should return JSX for a todo list with:
  // - List of todo items
  // - Add todo form
  // - Clear all button
}

function createUserDashboard(user) {
  // Your code here
  // Should return JSX for a user dashboard with:
  // - User profile
  // - Todo list
  // - Statistics
}

// ===== Exercise 4: Styling Components =====
// TODO: Implement these styled component functions

function createStyledButton(text, variant) {
  // Your code here
  // Should return a styled button with:
  // - Primary/secondary/danger variants
  // - Hover effects
  // - Active state
}

function createCardComponent(title, content) {
  // Your code here
  // Should return a styled card with:
  // - Title
  // - Content
  // - Shadow
  // - Border radius
}

// ===== Challenge Exercise: Todo App Structure =====
// TODO: Implement this todo app structure

class TodoApp {
  constructor() {
    this.components = {
      header: null,
      todoList: null,
      footer: null
    };
  }

  createAppStructure() {
    // Your code here
    // Should create the basic structure for a todo app with:
    // - Header with title and theme toggle
    // - Todo list with add/remove functionality
    // - Footer with filters and stats
  }

  render() {
    // Your code here
    // Should return the complete app structure
  }
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Basic Components ===');
console.log('Header:', createHeaderComponent());
console.log('Footer:', createFooterComponent());
console.log('Button:', createButtonComponent('Click me', () => {}));

// Test Exercise 2
console.log('\n=== Testing JSX ===');
console.log('User Profile:', createUserProfile('John Doe', 30, 'john@example.com'));
console.log('Todo Item:', createTodoItem('Learn React', false));

// Test Exercise 3
console.log('\n=== Testing Component Composition ===');
const todos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build a todo app', completed: true }
];
console.log('Todo List:', createTodoList(todos));
console.log('User Dashboard:', createUserDashboard({
  name: 'John Doe',
  email: 'john@example.com'
}));

// Test Exercise 4
console.log('\n=== Testing Styled Components ===');
console.log('Styled Button:', createStyledButton('Submit', 'primary'));
console.log('Card:', createCardComponent('Welcome', 'This is a card component'));

// Test Challenge Exercise
console.log('\n=== Testing Todo App Structure ===');
const todoApp = new TodoApp();
console.log('App Structure:', todoApp.createAppStructure());
console.log('Rendered App:', todoApp.render());

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node getting-started-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each component as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 