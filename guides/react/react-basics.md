# React Basics: A Beginner's Guide

## Introduction
Welcome to React! If you're new to programming, React is a great place to start building interactive websites. Think of React as a set of building blocks (called components) that you can use to create anything from a simple button to a complex social media feed.

### What is React?
React is a JavaScript library created by Facebook that helps developers build user interfaces (the parts of websites that users see and interact with). It's like having a set of LEGO pieces that you can combine in different ways to build whatever you want.

### Why Learn React?
1. **Easy to Start**: React has a gentle learning curve, especially if you're new to programming
2. **High Demand**: Many companies use React, making it a valuable skill
3. **Great Community**: Lots of help available when you get stuck
4. **Reusable Components**: Build something once, use it many times
5. **Fast Development**: React helps you build websites quickly

## Getting Started

### What You Need to Know First
Before starting with React, you should understand:
- Basic HTML (how to structure a webpage)
- Basic CSS (how to style a webpage)
- Basic JavaScript (how to make things interactive)

### Setting Up Your First React Project
```bash
# This command creates a new React project
npx create-react-app my-first-app

# Go into your project folder
cd my-first-app

# Start your project
npm start
```

After running these commands, your website will open in your browser at `http://localhost:3000`. You'll see a spinning React logo - this is your first React app!

## Core Concepts

### 1. Components: The Building Blocks
Components are like custom HTML elements that you create. They can be as simple as a button or as complex as a navigation bar.

```jsx
// This is a simple component that says "Hello"
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// This is how you use the component
function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}
```

**Why Components Matter:**
- They make your code reusable
- They help you organize your code
- They make it easier to maintain your website

### 2. Props: Passing Information
Props are like parameters that you pass to your components. They let you customize how a component looks or behaves.

```jsx
// This component can greet different people
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component with different names
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}
```

**When to Use Props:**
- When you want to make a component reusable
- When you need to pass data from a parent to a child component
- When you want to customize how a component looks

### 3. State: Remembering Things
State is like a component's memory. It helps components remember information and update when that information changes.

```jsx
// This component counts how many times you click a button
function Counter() {
  // count is the current number, setCount is how we change it
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**When to Use State:**
- When you need to remember information
- When you want to update what's shown on the screen
- When you need to respond to user actions

### 4. JSX: Writing HTML in JavaScript
JSX is a special way of writing HTML inside your JavaScript code. It looks like HTML but has the power of JavaScript.

```jsx
// This is JSX
function Welcome() {
  const name = "World";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to my website</p>
    </div>
  );
}
```

**Why JSX is Important:**
- It makes it easy to write HTML in your JavaScript
- It helps catch errors early
- It makes your code more readable

## React Hooks: Special Functions

### 1. useState: Managing State
The useState hook helps you add state to your components.

```jsx
function Counter() {
  // count is the current value, setCount is how we change it
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
      <button onClick={() => setCount(count - 1)}>
        Subtract 1
      </button>
    </div>
  );
}
```

**When to Use useState:**
- When you need to remember a value
- When you want to update the screen
- When you need to respond to user actions

### 2. useEffect: Doing Things at the Right Time
The useEffect hook helps you perform actions at specific times, like when your component first appears.

```jsx
function WelcomeMessage() {
  const [message, setMessage] = useState("Loading...");

  // This runs when the component first appears
  useEffect(() => {
    // Simulate getting data from a server
    setTimeout(() => {
      setMessage("Welcome to our website!");
    }, 1000);
  }, []);

  return <h1>{message}</h1>;
}
```

**When to Use useEffect:**
- When you need to fetch data
- When you need to set up timers
- When you need to clean up after your component

## Event Handling: Responding to User Actions

### Basic Click Events
```jsx
function Button() {
  const handleClick = () => {
    alert('You clicked the button!');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

### Form Handling
```jsx
function SimpleForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    alert('Hello, ' + name + '!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Say Hello</button>
    </form>
  );
}
```

## Conditional Rendering: Showing Different Things

### Simple Conditions
```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
}
```

### Using Ternary Operators
```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      <h1>
        {isLoggedIn ? 'Welcome back!' : 'Please log in'}
      </h1>
      {isLoggedIn && <p>You have 3 new messages</p>}
    </div>
  );
}
```

## Lists: Showing Multiple Items

### Rendering a List
```jsx
function TodoList() {
  const todos = [
    'Learn React',
    'Build a website',
    'Deploy to the internet'
  ];

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
```

## Best Practices for Beginners

### 1. Keep Components Simple
- Each component should do one thing
- If a component gets too big, break it into smaller pieces
- Use clear, descriptive names

### 2. Use Comments
- Explain what your code does
- Comment complex logic
- Keep comments up to date

### 3. Test Your Code
- Check if your components work as expected
- Try different inputs
- Look for errors in the console

### 4. Ask for Help
- Use the React documentation
- Join React communities
- Don't be afraid to ask questions

## Common Mistakes to Avoid

### 1. Forgetting to Import React
```jsx
// Always include this at the top of your file
import React from 'react';
```

### 2. Not Using Keys in Lists
```jsx
// Wrong
{todos.map(todo => <li>{todo}</li>)}

// Right
{todos.map((todo, index) => <li key={index}>{todo}</li>)}
```

### 3. Modifying State Directly
```jsx
// Wrong
count = count + 1;

// Right
setCount(count + 1);
```

## Next Steps
1. Try building a simple todo list
2. Learn about React Router for navigation
3. Explore more advanced hooks
4. Practice with real projects

[Continue to Practice Exercises](react-basics-practice.md) 