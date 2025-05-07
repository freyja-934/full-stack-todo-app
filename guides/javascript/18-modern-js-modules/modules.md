# Modules in JavaScript

## Introduction
JavaScript modules are a way to organize and structure code by splitting it into separate files. They allow you to encapsulate code, manage dependencies, and create reusable components. Modules were officially introduced in ES6 (ECMAScript 2015) and have become a fundamental part of modern JavaScript development.

## Why Modules Matter
1. **Code Organization**: Split code into logical, manageable pieces
2. **Encapsulation**: Keep code private and expose only what's needed
3. **Dependency Management**: Clearly define and manage dependencies
4. **Reusability**: Create reusable components that can be shared

## Module Syntax

### Exporting
```javascript
// Named exports
export const name = 'John';
export function greet() {
    return 'Hello!';
}

// Default export
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// Multiple named exports
export { name, greet };
```

### Importing
```javascript
// Import named exports
import { name, greet } from './user.js';

// Import default export
import User from './user.js';

// Import both
import User, { name, greet } from './user.js';

// Import everything
import * as userModule from './user.js';
```

## Module Types

### 1. ES Modules (ESM)
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math.js';
```

### 2. CommonJS (Node.js)
```javascript
// math.js
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// main.js
const math = require('./math.js');
```

## Module Features

### 1. Named Exports
```javascript
// utils.js
export const formatDate = (date) => {
    return date.toLocaleDateString();
};

export const validateEmail = (email) => {
    return email.includes('@');
};

// main.js
import { formatDate, validateEmail } from './utils.js';
```

### 2. Default Exports
```javascript
// User.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// main.js
import User from './User.js';
```

### 3. Mixed Exports
```javascript
// config.js
export const API_URL = 'https://api.example.com';
export const VERSION = '1.0.0';

export default {
    timeout: 5000,
    retries: 3
};

// main.js
import config, { API_URL, VERSION } from './config.js';
```

## Common Use Cases

### 1. Utility Functions
```javascript
// utils.js
export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
};

export const formatDate = (date) => {
    return date.toLocaleDateString();
};

// main.js
import { formatCurrency, formatDate } from './utils.js';
```

### 2. Class Definitions
```javascript
// User.js
export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getProfile() {
        return `${this.name} (${this.email})`;
    }
}

// main.js
import { User } from './User.js';
```

### 3. Configuration
```javascript
// config.js
export const config = {
    api: {
        baseUrl: 'https://api.example.com',
        timeout: 5000
    },
    auth: {
        tokenKey: 'auth_token',
        refreshInterval: 3600
    }
};

// main.js
import { config } from './config.js';
```

## Best Practices

1. **Single Responsibility**: Each module should have one primary purpose
2. **Clear Exports**: Be explicit about what you're exporting
3. **Consistent Naming**: Use consistent naming conventions
4. **Avoid Circular Dependencies**: Structure modules to avoid circular imports

## Common Pitfalls

1. **Missing File Extension**: Always include the `.js` extension
```javascript
// Wrong
import { name } from './user';

// Correct
import { name } from './user.js';
```

2. **Circular Dependencies**: Can cause issues with initialization
```javascript
// a.js
import { b } from './b.js';
export const a = 'a';

// b.js
import { a } from './a.js';
export const b = 'b';
```

3. **Default Export Confusion**: Can make imports less clear
```javascript
// Wrong
export default {
    name: 'John',
    age: 30
};

// Better
export const user = {
    name: 'John',
    age: 30
};
```

## Practice Exercises
1. Create and export utility functions
2. Set up module dependencies
3. Use named and default exports
4. Handle module imports

[Continue to Classes →](./classes.md) 