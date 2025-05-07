# React Basics Practice Exercises

Welcome to the practice exercises! These exercises are designed to help you learn React step by step. Each exercise builds on what you've learned in the guide, starting with simple concepts and gradually getting more complex.

## Exercise 1: Your First Component

Create a simple component that displays your name and a short introduction.

### What You'll Learn:
- How to create a basic component (from the Components section)
- How to use JSX (from the JSX section)
- How to structure a component

### Solution:
```jsx
// Create a new file called Introduction.js
import React from 'react';

function Introduction() {
  return (
    <div>
      <h1>Hi, I'm [Your Name]</h1>
      <p>I'm learning React and excited to build my first website!</p>
    </div>
  );
}

export default Introduction;
```

### Try These Variations:
1. Add more information about yourself
2. Style your component using CSS
3. Add an image of yourself

## Exercise 2: Props Practice

Create a component that can display different types of cards (like a greeting card or a business card).

### What You'll Learn:
- How to use props (from the Props section)
- How to make components reusable
- How to pass different types of data

### Solution:
```jsx
// Create a new file called Card.js
import React from 'react';

function Card({ title, message, type }) {
  return (
    <div className={`card ${type}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

// Using the Card component
function App() {
  return (
    <div>
      <Card 
        title="Welcome!"
        message="Thanks for visiting my website"
        type="greeting"
      />
      <Card 
        title="Contact Me"
        message="Email: example@email.com"
        type="business"
      />
    </div>
  );
}
```

### Try These Variations:
1. Add more card types
2. Add different styles for each card type
3. Add more information to the cards

## Exercise 3: State and Events

Create a simple counter that can count up and down, with a reset button.

### What You'll Learn:
- How to use state (from the State section)
- How to handle events (from the Event Handling section)
- How to update the UI based on state changes

### Solution:
```jsx
// Create a new file called Counter.js
import React, { useState } from 'react';

function Counter() {
  // Using the useState hook to manage our count
  const [count, setCount] = useState(0);

  // Event handlers for our buttons
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
```

### Try These Variations:
1. Add a maximum and minimum limit
2. Add different step sizes (count by 2, 5, or 10)
3. Add a display for the previous count

## Exercise 4: Form Handling

Create a simple form that collects user information and displays it.

### What You'll Learn:
- How to handle form inputs (from the Event Handling section)
- How to manage multiple pieces of state (from the State section)
- How to prevent form submission

### Solution:
```jsx
// Create a new file called UserForm.js
import React, { useState } from 'react';

function UserForm() {
  // Using state to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Try These Variations:
1. Add form validation
2. Add a success message after submission
3. Add different types of inputs (checkboxes, radio buttons)

## Exercise 5: Conditional Rendering

Create a component that shows different content based on user interaction.

### What You'll Learn:
- How to use conditional rendering (from the Conditional Rendering section)
- How to handle user interactions
- How to show/hide content

### Solution:
```jsx
// Create a new file called ToggleContent.js
import React, { useState } from 'react';

function ToggleContent() {
  // Using state to track login status and details visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>

      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
        <div>
          <h2>Welcome back!</h2>
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          
          {/* Conditional rendering based on showDetails state */}
          {showDetails && (
            <div>
              <p>Your profile details:</p>
              <ul>
                <li>Name: John Doe</li>
                <li>Email: john@example.com</li>
                <li>Member since: 2024</li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>Please log in to see your profile</p>
      )}
    </div>
  );
}
```

### Try These Variations:
1. Add more profile information
2. Add different user roles (admin, regular user)
3. Add a loading state

## Exercise 6: List Rendering

Create a simple todo list application.

### What You'll Learn:
- How to render lists (from the List Rendering section)
- How to manage multiple items
- How to add and remove items

### Solution:
```jsx
// Create a new file called TodoList.js
import React, { useState } from 'react';

function TodoList() {
  // State for managing todos and new todo input
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Event handler for adding a new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  // Event handler for toggling todo completion
  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Event handler for deleting a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      {/* Rendering the list of todos */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none' 
            }}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Try These Variations:
1. Add due dates to todos
2. Add categories for todos
3. Add a filter to show completed/incomplete todos

## Next Steps
After completing these exercises, you should:
1. Try combining multiple concepts (e.g., forms with lists)
2. Add styling to make your components look better
3. Try building a small project that uses all these concepts together

[Return to React Basics Guide](react-basics.md) 