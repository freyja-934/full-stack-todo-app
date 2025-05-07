# MongoDB & Mongoose Practice Exercises

## Exercise 1: Basic MongoDB Connection

Create a Node.js application that:
1. Connects to MongoDB using Mongoose
2. Handles connection errors
3. Implements connection options
4. Uses environment variables for the connection string

### Solution
```javascript
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Create a .env file with:
// MONGODB_URI=mongodb://localhost:27017/myapp

module.exports = connectDB;
```

## Exercise 2: User Schema and Model

Create a User schema with the following requirements:
1. Required fields: name, email, password
2. Email validation
3. Password hashing using middleware
4. Timestamps for created and updated dates

### Solution
```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare passwords
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
```

## Exercise 3: Todo Schema with References

Create a Todo schema that:
1. References the User model
2. Includes title, description, and status
3. Has validation for required fields
4. Implements proper indexing

### Solution
```javascript
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Create indexes
todoSchema.index({ user: 1, status: 1 });
todoSchema.index({ title: 'text', description: 'text' });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
```

## Exercise 4: CRUD Operations

Implement CRUD operations for the Todo model:
1. Create a new todo
2. Get all todos for a user
3. Update a todo's status
4. Delete a todo

### Solution
```javascript
const Todo = require('./models/todo');

// Create a new todo
const createTodo = async (todoData) => {
  try {
    const todo = await Todo.create(todoData);
    return todo;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all todos for a user
const getUserTodos = async (userId) => {
  try {
    const todos = await Todo.find({ user: userId })
      .sort({ createdAt: -1 });
    return todos;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update todo status
const updateTodoStatus = async (todoId, userId, status) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: todoId, user: userId },
      { status },
      { new: true }
    );
    if (!todo) {
      throw new Error('Todo not found');
    }
    return todo;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete todo
const deleteTodo = async (todoId, userId) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: todoId,
      user: userId
    });
    if (!todo) {
      throw new Error('Todo not found');
    }
    return todo;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createTodo,
  getUserTodos,
  updateTodoStatus,
  deleteTodo
};
```

## Exercise 5: Advanced Queries and Aggregation

Implement advanced queries and aggregation:
1. Search todos by title and description
2. Get todo statistics by status
3. Get todos with pagination
4. Implement date range filtering

### Solution
```javascript
const Todo = require('./models/todo');

// Search todos
const searchTodos = async (userId, searchTerm) => {
  try {
    const todos = await Todo.find({
      user: userId,
      $text: { $search: searchTerm }
    }).sort({ score: { $meta: 'textScore' } });
    return todos;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get todo statistics
const getTodoStats = async (userId) => {
  try {
    const stats = await Todo.aggregate([
      { $match: { user: mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    return stats;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get todos with pagination
const getPaginatedTodos = async (userId, page = 1, limit = 10) => {
  try {
    const todos = await Todo.find({ user: userId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    
    const total = await Todo.countDocuments({ user: userId });
    
    return {
      todos,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalTodos: total
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get todos by date range
const getTodosByDateRange = async (userId, startDate, endDate) => {
  try {
    const todos = await Todo.find({
      user: userId,
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      }
    }).sort({ createdAt: -1 });
    return todos;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  searchTodos,
  getTodoStats,
  getPaginatedTodos,
  getTodosByDateRange
};
```

[Return to MongoDB & Mongoose Guide](mongodb-mongoose-basics.md) 