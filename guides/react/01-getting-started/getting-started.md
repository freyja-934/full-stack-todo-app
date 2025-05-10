# React Getting Started

## Introduction
Welcome to React! This guide will help you get started with building modern web applications using React. We'll cover the basics of setting up a React project and understanding its core concepts.

### What is React?
React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage their state efficiently. React is maintained by Meta (formerly Facebook) and has a large, active community.

### Why Learn React?
1. **Component-Based Architecture**: Build reusable UI components
2. **Virtual DOM**: Efficient rendering and updates
3. **Large Ecosystem**: Rich set of tools and libraries
4. **Strong Community**: Extensive documentation and support
5. **High Demand**: Popular in the job market

## Setting Up Your First React Project

### Prerequisites
Before starting with React, you should have:
- Basic knowledge of HTML, CSS, and JavaScript
- Node.js installed on your computer
- A code editor (VS Code recommended)

### Creating a New React Project
```bash
# Create a new React project
npx create-react-app my-first-app

# Navigate to project directory
cd my-first-app

# Start the development server
npm start
```

Your first React app will be running at `http://localhost:3000`. You'll see the default React page with a spinning logo.

## Project Structure
```
my-first-app/
├── node_modules/     # Dependencies
├── public/          # Static files
│   ├── index.html   # Main HTML file
│   └── favicon.ico  # Website icon
├── src/             # Source code
│   ├── App.js       # Main component
│   ├── index.js     # Entry point
│   └── App.css      # Styles
├── package.json     # Project configuration
└── README.md        # Project documentation
```

## Your First Component

### Creating a Simple Component
```jsx
// src/App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Welcome to my first React app</p>
    </div>
  );
}

export default App;
```

### Understanding JSX
JSX is a syntax extension for JavaScript that lets you write HTML-like code in your JavaScript files.

```jsx
// JSX Example
function Greeting() {
  const name = "World";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is JSX syntax</p>
    </div>
  );
}
```

## Todo App Example
Let's create a simple todo app to demonstrate basic React concepts:

```jsx
// src/App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className="todo-container">
        <input 
          type="text" 
          placeholder="Add a new todo"
        />
        <button>Add Todo</button>
        <ul>
          <li>Learn React</li>
          <li>Build a todo app</li>
          <li>Deploy to production</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
```

## Next Steps
Now that you have your first React project set up, you can:
1. Try modifying the App component
2. Add more components
3. Style your components with CSS
4. Move on to learning about [Components and Props](../02-components-props/components-props.md)

## Common Issues and Solutions

### 1. Module Not Found
If you see "Module not found" errors:
- Check if you've installed all dependencies with `npm install`
- Verify import paths are correct
- Make sure you're in the correct directory

### 2. Development Server Issues
If the development server won't start:
- Check if port 3000 is already in use
- Try running `npm start` again
- Check the terminal for error messages

### 3. JSX Syntax Errors
If you see JSX-related errors:
- Make sure you've imported React
- Check for missing closing tags
- Verify all expressions are properly wrapped in curly braces

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Create a new React project
2. Modify the default App component
3. Add your own components
4. Style your components with CSS

Check out the [practice file](./getting-started-practice.js) for more exercises and examples. 