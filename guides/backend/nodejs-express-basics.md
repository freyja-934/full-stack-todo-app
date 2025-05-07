# Backend Basics with Node.js and Express

## Introduction

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server side. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Together, they form a powerful combination for building backend services and APIs.

## Why Node.js and Express Matter

1. **JavaScript Everywhere**: Use the same language (JavaScript) for both frontend and backend development
2. **Fast and Scalable**: Node.js is event-driven and non-blocking, making it efficient for I/O-intensive applications
3. **Rich Ecosystem**: Access to npm (Node Package Manager) with thousands of packages
4. **Easy to Learn**: If you know JavaScript, you can quickly start building backend applications
5. **Great for APIs**: Express makes it simple to create RESTful APIs

## Getting Started

### Prerequisites
- Basic JavaScript knowledge
- Node.js installed (v14 or higher recommended)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

### Installation

1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Verify installation:
   ```bash
   node --version
   npm --version
   ```

3. Create a new project:
   ```bash
   mkdir my-express-app
   cd my-express-app
   npm init -y
   ```

4. Install Express:
   ```bash
   npm install express
   ```

## Basic Express Server

Create a basic Express server:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## Core Concepts

### 1. Routing

Express provides a robust routing system:

```javascript
// Basic routes
app.get('/users', (req, res) => {
  res.send('Get all users');
});

app.post('/users', (req, res) => {
  res.send('Create a user');
});

// Route parameters
app.get('/users/:id', (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`);
});

// Query parameters
app.get('/search', (req, res) => {
  res.send(`Search query: ${req.query.q}`);
});
```

### 2. Middleware

Middleware functions have access to the request and response objects:

```javascript
// Custom middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Using middleware
app.use(logger);

// Built-in middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
```

### 3. Error Handling

Implement error handling middleware:

```javascript
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Async error handling
app.get('/async-route', async (req, res, next) => {
  try {
    // Async operation
    const result = await someAsyncOperation();
    res.json(result);
  } catch (error) {
    next(error);
  }
});
```

## Common Use Cases

### 1. RESTful API

Create a RESTful API for a todo application:

```javascript
// Todo routes
app.get('/todos', (req, res) => {
  // Get all todos
});

app.post('/todos', (req, res) => {
  // Create a new todo
});

app.get('/todos/:id', (req, res) => {
  // Get a specific todo
});

app.put('/todos/:id', (req, res) => {
  // Update a todo
});

app.delete('/todos/:id', (req, res) => {
  // Delete a todo
});
```

### 2. File Upload

Handle file uploads using multer:

```javascript
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});
```

### 3. Authentication

Basic authentication middleware:

```javascript
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  // Verify token
  next();
};

app.use('/protected', auth);
```

## Best Practices

1. **Project Structure**
   - Organize code into modules
   - Separate routes, controllers, and models
   - Use environment variables for configuration

2. **Error Handling**
   - Use try-catch blocks for async operations
   - Implement global error handling middleware
   - Return appropriate HTTP status codes

3. **Security**
   - Use HTTPS in production
   - Implement rate limiting
   - Sanitize user input
   - Use security middleware (helmet)

4. **Performance**
   - Use compression middleware
   - Implement caching where appropriate
   - Optimize database queries

## Common Pitfalls

1. **Callback Hell**
   - Use async/await instead of callbacks
   - Properly handle promises

2. **Memory Leaks**
   - Clean up event listeners
   - Monitor memory usage

3. **Security Issues**
   - Don't expose sensitive information
   - Validate all user input
   - Use proper authentication

4. **Error Handling**
   - Don't swallow errors
   - Log errors properly
   - Return meaningful error messages

## Practice Exercises

1. Create a basic Express server
2. Implement RESTful routes for a resource
3. Add middleware for logging and error handling
4. Create a simple authentication system
5. Build a file upload system

[Continue to Practice Exercises](nodejs-express-practice.md) 