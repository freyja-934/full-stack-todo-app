// React Components and Props Practice
// Run this file with: node components-props-practice.js

// ===== Exercise 1: Basic Components =====
// TODO: Implement these basic component functions

function createHeaderComponent({ title, subtitle }) {
  // Your code here
  // Should return a header component with:
  // - Title
  // - Subtitle
  // - Basic styling
}

function createCardComponent({ title, content, footer }) {
  // Your code here
  // Should return a card component with:
  // - Title
  // - Content
  // - Footer
  // - Basic styling
}

function createButtonComponent({ text, onClick, variant }) {
  // Your code here
  // Should return a button component with:
  // - Text
  // - Click handler
  // - Variant styling (primary/secondary/danger)
}

// ===== Exercise 2: Props and Destructuring =====
// TODO: Implement these prop handling functions

function createUserProfile({ name, age, email, avatar }) {
  // Your code here
  // Should return a user profile component with:
  // - Name
  // - Age
  // - Email
  // - Avatar image
  // Use prop destructuring
}

function createTodoItem({ id, title, completed, priority }) {
  // Your code here
  // Should return a todo item component with:
  // - Title
  // - Completion status
  // - Priority level
  // Use prop destructuring
}

// ===== Exercise 3: Component Composition =====
// TODO: Implement these component composition functions

function createTodoList({ todos, onTodoClick }) {
  // Your code here
  // Should return a todo list component that:
  // - Renders a list of todo items
  // - Handles todo click events
  // - Shows completion status
}

function createUserDashboard({ user, todos, onTodoAdd }) {
  // Your code here
  // Should return a dashboard component that:
  // - Shows user profile
  // - Displays todo list
  // - Allows adding new todos
}

// ===== Exercise 4: Prop Types =====
// TODO: Implement these prop type validation functions

function createValidatedInput({ value, onChange, type, required }) {
  // Your code here
  // Should return an input component with:
  // - Value
  // - Change handler
  // - Type validation
  // - Required validation
}

function createValidatedForm({ onSubmit, children }) {
  // Your code here
  // Should return a form component with:
  // - Submit handler
  // - Child components
  // - Form validation
}

// ===== Challenge Exercise: Todo App Components =====
// TODO: Implement these todo app components

class TodoApp {
  constructor() {
    this.components = {
      header: null,
      todoList: null,
      todoForm: null,
      footer: null
    };
  }

  createTodoForm({ onSubmit }) {
    // Your code here
    // Should create a form component for adding todos
  }

  createTodoList({ todos, onTodoToggle, onTodoDelete }) {
    // Your code here
    // Should create a list component for displaying todos
  }

  createTodoFilter({ filter, onFilterChange }) {
    // Your code here
    // Should create a filter component for filtering todos
  }

  render() {
    // Your code here
    // Should return the complete todo app structure
  }
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Basic Components ===');
console.log('Header:', createHeaderComponent({
  title: 'My App',
  subtitle: 'Welcome to React'
}));
console.log('Card:', createCardComponent({
  title: 'Todo Item',
  content: 'Learn React',
  footer: 'High Priority'
}));
console.log('Button:', createButtonComponent({
  text: 'Click Me',
  onClick: () => {},
  variant: 'primary'
}));

// Test Exercise 2
console.log('\n=== Testing Props and Destructuring ===');
console.log('User Profile:', createUserProfile({
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
  avatar: 'https://example.com/avatar.jpg'
}));
console.log('Todo Item:', createTodoItem({
  id: 1,
  title: 'Learn React',
  completed: false,
  priority: 'high'
}));

// Test Exercise 3
console.log('\n=== Testing Component Composition ===');
const todos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build a todo app', completed: true }
];
console.log('Todo List:', createTodoList({
  todos,
  onTodoClick: (id) => console.log('Todo clicked:', id)
}));
console.log('User Dashboard:', createUserDashboard({
  user: { name: 'John Doe', email: 'john@example.com' },
  todos,
  onTodoAdd: (todo) => console.log('Todo added:', todo)
}));

// Test Exercise 4
console.log('\n=== Testing Prop Types ===');
console.log('Validated Input:', createValidatedInput({
  value: 'test',
  onChange: (e) => console.log(e.target.value),
  type: 'text',
  required: true
}));
console.log('Validated Form:', createValidatedForm({
  onSubmit: (e) => console.log('Form submitted'),
  children: <div>Form content</div>
}));

// Test Challenge Exercise
console.log('\n=== Testing Todo App Components ===');
const todoApp = new TodoApp();
console.log('Todo Form:', todoApp.createTodoForm({
  onSubmit: (todo) => console.log('New todo:', todo)
}));
console.log('Todo List:', todoApp.createTodoList({
  todos,
  onTodoToggle: (id) => console.log('Todo toggled:', id),
  onTodoDelete: (id) => console.log('Todo deleted:', id)
}));
console.log('Todo Filter:', todoApp.createTodoFilter({
  filter: 'all',
  onFilterChange: (filter) => console.log('Filter changed:', filter)
}));
console.log('Rendered App:', todoApp.render());

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node components-props-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each component as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 