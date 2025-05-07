# MongoDB & Mongoose Basics

## Introduction

MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js that provides a schema-based solution to model your application data. Together, they provide a powerful and flexible way to work with data in your Node.js applications.

## Why MongoDB & Mongoose Matter

1. **Flexible Schema**: MongoDB's document model allows for flexible and dynamic schemas
2. **Scalability**: Horizontal scaling through sharding and replication
3. **Performance**: Fast read and write operations with indexing
4. **Rich Query Language**: Powerful querying capabilities
5. **Schema Validation**: Mongoose provides built-in schema validation
6. **Type Safety**: Mongoose adds type safety to MongoDB operations

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed locally or a MongoDB Atlas account
- Basic understanding of JavaScript and Node.js

### Installation

1. Install MongoDB:
   - [Download MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - Or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-hosted solution

2. Install Mongoose in your Node.js project:
   ```bash
   npm install mongoose
   ```

3. Connect to MongoDB:
   ```javascript
   const mongoose = require('mongoose');

   mongoose.connect('mongodb://localhost:27017/myapp', {
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.error('Could not connect to MongoDB:', err));
   ```

## Core Concepts

### 1. Schemas and Models

Define a schema and create a model:

```javascript
const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model
const User = mongoose.model('User', userSchema);
```

### 2. Data Types

Mongoose supports various data types:

```javascript
const schema = new mongoose.Schema({
  string: String,
  number: Number,
  boolean: Boolean,
  date: Date,
  array: [String],
  object: {
    field: String
  },
  mixed: mongoose.Schema.Types.Mixed,
  objectId: mongoose.Schema.Types.ObjectId
});
```

### 3. Schema Validation

Add validation to your schemas:

```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: function(v) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative'],
    max: [120, 'Age cannot be greater than 120']
  }
});
```

## Common Operations

### 1. Create (Insert)

```javascript
// Create a single document
const user = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

await user.save();

// Create multiple documents
const users = await User.insertMany([
  { name: 'Jane Doe', email: 'jane@example.com', age: 25 },
  { name: 'Bob Smith', email: 'bob@example.com', age: 35 }
]);
```

### 2. Read (Query)

```javascript
// Find all documents
const allUsers = await User.find();

// Find with conditions
const youngUsers = await User.find({ age: { $lt: 30 } });

// Find one document
const user = await User.findOne({ email: 'john@example.com' });

// Find by ID
const userById = await User.findById('user_id_here');
```

### 3. Update

```javascript
// Update one document
await User.updateOne(
  { email: 'john@example.com' },
  { $set: { age: 31 } }
);

// Update multiple documents
await User.updateMany(
  { age: { $lt: 30 } },
  { $inc: { age: 1 } }
);

// Find and update
const updatedUser = await User.findOneAndUpdate(
  { email: 'john@example.com' },
  { $set: { age: 31 } },
  { new: true }
);
```

### 4. Delete

```javascript
// Delete one document
await User.deleteOne({ email: 'john@example.com' });

// Delete multiple documents
await User.deleteMany({ age: { $lt: 30 } });

// Find and delete
const deletedUser = await User.findOneAndDelete({ email: 'john@example.com' });
```

## Advanced Features

### 1. Indexes

```javascript
// Single field index
userSchema.index({ email: 1 });

// Compound index
userSchema.index({ name: 1, age: -1 });

// Unique index
userSchema.index({ email: 1 }, { unique: true });
```

### 2. Middleware (Hooks)

```javascript
// Pre-save middleware
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }
  next();
});

// Post-save middleware
userSchema.post('save', function(doc) {
  console.log('User saved:', doc);
});
```

### 3. Virtual Properties

```javascript
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});
```

## Best Practices

1. **Schema Design**
   - Keep documents small
   - Use references for large datasets
   - Consider query patterns
   - Use appropriate data types

2. **Performance**
   - Create indexes for frequently queried fields
   - Use projection to limit returned fields
   - Implement pagination for large result sets
   - Use lean queries when possible

3. **Error Handling**
   - Use try-catch blocks
   - Handle validation errors
   - Implement proper error messages
   - Use transactions when needed

4. **Security**
   - Validate user input
   - Use environment variables for connection strings
   - Implement proper access control
   - Sanitize data before saving

## Common Pitfalls

1. **Schema Design**
   - Over-normalization
   - Too many embedded documents
   - Missing indexes
   - Inappropriate data types

2. **Performance**
   - Unnecessary queries
   - Missing indexes
   - Large documents
   - Inefficient queries

3. **Error Handling**
   - Not handling async operations properly
   - Missing validation
   - Not checking for null/undefined
   - Not using transactions when needed

4. **Security**
   - Exposing sensitive data
   - Not validating input
   - Insecure connection strings
   - Missing access control

## Practice Exercises

1. Create a basic MongoDB connection
2. Define schemas and models
3. Implement CRUD operations
4. Add validation and middleware
5. Create indexes and optimize queries

[Continue to Practice Exercises](mongodb-mongoose-practice.md) 