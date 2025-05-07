# Node.js and Express Practice Exercises

## Exercise 1: Basic Express Server

Create a basic Express server that:
1. Listens on port 3000
2. Responds with "Hello, World!" at the root route
3. Has a `/health` endpoint that returns `{ status: 'ok' }`
4. Uses middleware to log request method and URL

### Solution
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## Exercise 2: RESTful Todo API

Create a RESTful API for managing todos with the following endpoints:
1. `GET /todos` - Get all todos
2. `POST /todos` - Create a new todo
3. `GET /todos/:id` - Get a specific todo
4. `PUT /todos/:id` - Update a todo
5. `DELETE /todos/:id` - Delete a todo

### Solution
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// In-memory storage (replace with database in production)
let todos = [];
let nextId = 1;

// Routes
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = {
    id: nextId++,
    title: req.body.title,
    completed: false
  };
  todos.push(todo);
  res.status(201).json(todo);
});

app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  res.json(todo);
});

app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  
  todo.title = req.body.title || todo.title;
  todo.completed = req.body.completed ?? todo.completed;
  
  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Todo not found' });
  
  const deletedTodo = todos.splice(index, 1)[0];
  res.json(deletedTodo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## Exercise 3: Error Handling Middleware

Create an Express application with proper error handling:
1. Create a custom error class
2. Implement error handling middleware
3. Add try-catch blocks for async operations
4. Return appropriate HTTP status codes

### Solution
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    Error.captureStackTrace(this, this.constructor);
  }
}

// Async handler wrapper
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Example route with error
app.get('/error', asyncHandler(async (req, res) => {
  throw new AppError('Something went wrong', 500);
}));

// Error handling middleware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## Exercise 4: Authentication Middleware

Create a simple authentication system:
1. Create a middleware to verify JWT tokens
2. Protect routes that require authentication
3. Handle token expiration
4. Return appropriate error messages

### Solution
```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Secret key (use environment variable in production)
const JWT_SECRET = 'your-secret-key';

// Authentication middleware
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Protected route
app.get('/protected', auth, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // In a real app, validate credentials against database
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## Exercise 5: File Upload System

Create a file upload system:
1. Use multer for handling file uploads
2. Implement file size and type validation
3. Store files in a specific directory
4. Return file information after upload

### Solution
```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

// Configure multer
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Upload route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  
  res.json({
    message: 'File uploaded successfully',
    file: {
      filename: req.file.filename,
      size: req.file.size,
      mimetype: req.file.mimetype
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'File too large' });
    }
    return res.status(400).json({ message: err.message });
  }
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

[Return to Node.js and Express Guide](nodejs-express-basics.md) 