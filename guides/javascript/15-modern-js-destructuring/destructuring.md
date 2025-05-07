# Destructuring in JavaScript

## Introduction
Destructuring is a JavaScript expression that allows you to extract values from arrays or properties from objects into distinct variables. It's a powerful feature introduced in ES6 that makes your code cleaner and more readable.

## Why Destructuring Matters
1. **Cleaner Code**: Reduces the amount of code needed to extract values
2. **Better Readability**: Makes it clear what values you're extracting
3. **Default Values**: Allows setting default values for missing properties
4. **Nested Data**: Makes working with nested objects and arrays easier

## Array Destructuring

### Basic Array Destructuring
```javascript
const numbers = [1, 2, 3, 4, 5];

// Traditional way
const first = numbers[0];
const second = numbers[1];

// With destructuring
const [first, second] = numbers;
```

### Skipping Elements
```javascript
const [first, , third] = [1, 2, 3];
// first = 1, third = 3
```

### Rest Pattern
```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
```

### Default Values
```javascript
const [first = 0, second = 0] = [1];
// first = 1, second = 0
```

### Swapping Variables
```javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
// a = 2, b = 1
```

## Object Destructuring

### Basic Object Destructuring
```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Traditional way
const name = person.name;
const age = person.age;

// With destructuring
const { name, age } = person;
```

### Renaming Properties
```javascript
const { name: firstName, age: years } = person;
// firstName = 'John', years = 30
```

### Default Values
```javascript
const { name = 'Anonymous', age = 0 } = {};
// name = 'Anonymous', age = 0
```

### Nested Objects
```javascript
const user = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'Boston'
    }
};

const { address: { street, city } } = user;
// street = '123 Main St', city = 'Boston'
```

## Common Use Cases

### 1. Function Parameters
```javascript
// Traditional
function printUser(user) {
    console.log(user.name, user.age);
}

// With destructuring
function printUser({ name, age }) {
    console.log(name, age);
}
```

### 2. API Responses
```javascript
const response = {
    data: {
        user: {
            id: 1,
            name: 'John',
            email: 'john@example.com'
        }
    },
    status: 200
};

const { data: { user: { name, email } } } = response;
```

### 3. Array Methods
```javascript
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

users.map(({ name }) => name);
// ['John', 'Jane']
```

## Best Practices

1. **Use Meaningful Names**: When renaming properties, use clear and descriptive names
2. **Provide Default Values**: Always provide default values for optional properties
3. **Keep it Simple**: Don't nest destructuring too deeply
4. **Consider Readability**: Sometimes traditional assignment is more readable

## Common Pitfalls

1. **Missing Properties**: Destructuring non-existent properties returns `undefined`
```javascript
const { missing } = {};
// missing = undefined
```

2. **Nested Destructuring**: Be careful with deeply nested destructuring
```javascript
// Hard to read
const { a: { b: { c: { d } } } } = obj;

// Better
const { a } = obj;
const { b } = a;
const { c } = b;
const { d } = c;
```

3. **Array Destructuring with Objects**: Don't mix array and object destructuring
```javascript
// Wrong
const [ { name } ] = { name: 'John' };

// Correct
const { name } = { name: 'John' };
```

## Practice Exercises
1. Extract values from arrays and objects
2. Use destructuring with function parameters
3. Handle nested data structures
4. Apply default values

[Continue to Template Literals →](./template-literals.md) 