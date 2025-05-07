# Modules Practice Exercises

## Exercise 1: Basic Module Exports
Create these module files with appropriate exports:

```javascript
// 1. Create a math.js module with these functions:
// - add(a, b): adds two numbers
// - subtract(a, b): subtracts b from a
// - multiply(a, b): multiplies two numbers
// - divide(a, b): divides a by b

// 2. Create a user.js module with:
// - A User class with name and email properties
// - A function to validate email addresses
// - A constant for the default role

// 3. Create a config.js module with:
// - API configuration (baseUrl, timeout)
// - Database configuration (host, port, name)
// - Environment variables (development, production)

// 4. Create a utils.js module with:
// - Date formatting functions
// - String manipulation functions
// - Number formatting functions
```

## Exercise 2: Module Imports
Write the import statements for these scenarios:

```javascript
// 1. Import specific functions from math.js
// Expected: import add and multiply functions

// 2. Import the User class and email validation
// Expected: import User class and validateEmail function

// 3. Import all configuration
// Expected: import entire config object

// 4. Import specific utility functions
// Expected: import formatDate and formatCurrency functions
```

## Exercise 3: Mixed Exports
Create modules with mixed exports:

```javascript
// 1. Create a logger.js module with:
// - A default Logger class
// - Named exports for log levels (INFO, WARN, ERROR)
// - A function to format log messages

// 2. Create a database.js module with:
// - A default Database class
// - Named exports for connection types
// - Utility functions for query building

// 3. Create a validation.js module with:
// - A default Validator class
// - Named exports for validation rules
// - Helper functions for common validations
```

## Exercise 4: Module Organization
Organize these features into appropriate modules:

```javascript
// 1. Authentication features:
// - User authentication
// - Token management
// - Password hashing
// - Session handling

// 2. API features:
// - Request handling
// - Response formatting
// - Error handling
// - Rate limiting

// 3. Data processing features:
// - Data transformation
// - Data validation
// - Data formatting
// - Data export/import
```

## Exercise 5: Complex Module Structure
Create a complex module structure for a todo application:

```javascript
// 1. Create a models module structure:
// - Todo model
// - User model
// - Category model
// - Shared types and interfaces

// 2. Create a services module structure:
// - Todo service
// - User service
// - Authentication service
// - Shared utilities

// 3. Create a utils module structure:
// - Date formatting
// - String manipulation
// - Validation helpers
// - Common constants
```

## Solutions

### Exercise 1 Solutions:
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

// user.js
export const DEFAULT_ROLE = 'user';

export function validateEmail(email) {
    return email.includes('@');
}

export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// config.js
export const config = {
    api: {
        baseUrl: 'https://api.example.com',
        timeout: 5000
    },
    database: {
        host: 'localhost',
        port: 27017,
        name: 'myapp'
    },
    env: {
        development: process.env.NODE_ENV === 'development',
        production: process.env.NODE_ENV === 'production'
    }
};

// utils.js
export const formatDate = (date) => date.toLocaleDateString();
export const formatCurrency = (amount) => `$${amount.toFixed(2)}`;
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
```

### Exercise 2 Solutions:
```javascript
// 1.
import { add, multiply } from './math.js';

// 2.
import { User, validateEmail } from './user.js';

// 3.
import { config } from './config.js';

// 4.
import { formatDate, formatCurrency } from './utils.js';
```

### Exercise 3 Solutions:
```javascript
// logger.js
export const INFO = 'INFO';
export const WARN = 'WARN';
export const ERROR = 'ERROR';

export function formatMessage(level, message) {
    return `[${level}] ${message}`;
}

export default class Logger {
    log(level, message) {
        console.log(formatMessage(level, message));
    }
}

// database.js
export const MYSQL = 'mysql';
export const POSTGRES = 'postgres';
export const MONGODB = 'mongodb';

export function buildQuery(table, conditions) {
    // Query building logic
}

export default class Database {
    constructor(type) {
        this.type = type;
    }
}

// validation.js
export const REQUIRED = 'required';
export const EMAIL = 'email';
export const MIN_LENGTH = 'minLength';

export function validateRequired(value) {
    return value !== undefined && value !== null && value !== '';
}

export default class Validator {
    validate(rules, data) {
        // Validation logic
    }
}
```

### Exercise 4 Solutions:
```javascript
// auth/index.js
export { default as UserAuth } from './UserAuth.js';
export { default as TokenManager } from './TokenManager.js';
export { default as PasswordHasher } from './PasswordHasher.js';
export { default as SessionHandler } from './SessionHandler.js';

// api/index.js
export { default as RequestHandler } from './RequestHandler.js';
export { default as ResponseFormatter } from './ResponseFormatter.js';
export { default as ErrorHandler } from './ErrorHandler.js';
export { default as RateLimiter } from './RateLimiter.js';

// data/index.js
export { default as DataTransformer } from './DataTransformer.js';
export { default as DataValidator } from './DataValidator.js';
export { default as DataFormatter } from './DataFormatter.js';
export { default as DataExporter } from './DataExporter.js';
```

### Exercise 5 Solutions:
```javascript
// models/index.js
export { default as Todo } from './Todo.js';
export { default as User } from './User.js';
export { default as Category } from './Category.js';
export * from './types.js';

// services/index.js
export { default as TodoService } from './TodoService.js';
export { default as UserService } from './UserService.js';
export { default as AuthService } from './AuthService.js';
export * from './utils.js';

// utils/index.js
export * from './date.js';
export * from './string.js';
export * from './validation.js';
export * from './constants.js';
```

[Back to Modules Guide →](./modules.md) 