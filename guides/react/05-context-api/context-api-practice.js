// React Context API Practice
// Run this file with: node context-api-practice.js

// ===== Exercise 1: Basic Context =====
// TODO: Implement these basic context functions

function createThemeContext() {
  // Your code here
  // Should create a theme context with:
  // - Theme state (light/dark)
  // - Toggle function
  // - Provider component
}

function createTodoContext() {
  // Your code here
  // Should create a todo context with:
  // - Todo list state
  // - Add/remove functions
  // - Provider component
}

// ===== Exercise 2: Multiple Contexts =====
// TODO: Implement these multi-context functions

function createUserContext() {
  // Your code here
  // Should create a user context with:
  // - User state
  // - Login/logout functions
  // - Provider component
}

function createSettingsContext() {
  // Your code here
  // Should create a settings context with:
  // - Settings state
  // - Update functions
  // - Provider component
}

// ===== Exercise 3: Context with useReducer =====
// TODO: Implement these reducer-based context functions

function createTodoReducer() {
  // Your code here
  // Should create a reducer for:
  // - Adding todos
  // - Toggling todos
  // - Deleting todos
  // - Filtering todos
}

function createTodoContextWithReducer() {
  // Your code here
  // Should create a context that:
  // - Uses the todo reducer
  // - Provides state and dispatch
  // - Handles all todo operations
}

// ===== Exercise 4: Custom Context Hooks =====
// TODO: Implement these custom hook functions

function createUseTheme() {
  // Your code here
  // Should create a hook that:
  // - Uses theme context
  // - Provides theme state
  // - Handles theme changes
}

function createUseTodo() {
  // Your code here
  // Should create a hook that:
  // - Uses todo context
  // - Provides todo operations
  // - Handles todo state
}

// ===== Challenge Exercise: Advanced Context App =====
// TODO: Implement this advanced context app

class ContextApp {
  constructor() {
    this.contexts = {
      theme: null,
      todo: null,
      user: null,
      settings: null
    };
  }

  createContexts() {
    // Your code here
    // Should create all contexts
  }

  createProviders() {
    // Your code here
    // Should create provider components
  }

  createCustomHooks() {
    // Your code here
    // Should create custom hooks
  }

  render() {
    // Your code here
    // Should return the complete app
  }
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Basic Context ===');
console.log('Theme Context:', createThemeContext());
console.log('Todo Context:', createTodoContext());

// Test Exercise 2
console.log('\n=== Testing Multiple Contexts ===');
console.log('User Context:', createUserContext());
console.log('Settings Context:', createSettingsContext());

// Test Exercise 3
console.log('\n=== Testing Context with useReducer ===');
console.log('Todo Reducer:', createTodoReducer());
console.log('Todo Context with Reducer:', createTodoContextWithReducer());

// Test Exercise 4
console.log('\n=== Testing Custom Context Hooks ===');
console.log('Use Theme Hook:', createUseTheme());
console.log('Use Todo Hook:', createUseTodo());

// Test Challenge Exercise
console.log('\n=== Testing Advanced Context App ===');
const contextApp = new ContextApp();
console.log('Contexts:', contextApp.createContexts());
console.log('Providers:', contextApp.createProviders());
console.log('Custom Hooks:', contextApp.createCustomHooks());
console.log('Rendered App:', contextApp.render());

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node context-api-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each context as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 