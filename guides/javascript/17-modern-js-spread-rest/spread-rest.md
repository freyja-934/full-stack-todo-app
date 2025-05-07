# Spread and Rest Operators in JavaScript

## Introduction
The spread (`...`) and rest operators are powerful features introduced in ES6 (ECMAScript 2015) that allow you to work with arrays and objects in a more flexible way. While they use the same syntax, they serve different purposes.

## Why Spread and Rest Matter
1. **Array Manipulation**: Easily combine, copy, or split arrays
2. **Object Manipulation**: Create new objects by combining or copying properties
3. **Function Arguments**: Handle variable numbers of arguments
4. **Clean Code**: Write more concise and readable code

## Spread Operator (`...`)

### Array Spread
```javascript
// Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// Copying arrays
const original = [1, 2, 3];
const copy = [...original];

// Adding elements
const numbers = [1, 2, 3];
const newNumbers = [0, ...numbers, 4];
```

### Object Spread
```javascript
// Combining objects
const obj1 = { foo: 'bar' };
const obj2 = { baz: 'qux' };
const combined = { ...obj1, ...obj2 };

// Copying objects
const original = { foo: 'bar' };
const copy = { ...original };

// Adding properties
const user = { name: 'John' };
const userWithRole = { ...user, role: 'Admin' };
```

### Function Arguments
```javascript
const numbers = [1, 2, 3];
Math.max(...numbers);  // Same as Math.max(1, 2, 3)
```

## Rest Operator (`...`)

### Function Parameters
```javascript
// Collecting remaining arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Using with other parameters
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
```

### Array Destructuring
```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
```

### Object Destructuring
```javascript
const { name, ...rest } = { name: 'John', age: 30, city: 'New York' };
// name = 'John', rest = { age: 30, city: 'New York' }
```

## Common Use Cases

### 1. Array Operations
```javascript
// Concatenating arrays
const allUsers = [...activeUsers, ...inactiveUsers];

// Removing elements
const [removed, ...remaining] = array;

// Converting array-like objects
const arrayFromString = [...'hello'];
```

### 2. Object Operations
```javascript
// Updating objects
const updatedUser = { ...user, age: user.age + 1 };

// Default values
const config = { ...defaultConfig, ...userConfig };

// Removing properties
const { password, ...userWithoutPassword } = user;
```

### 3. Function Arguments
```javascript
// Forwarding arguments
function wrapper(...args) {
    return originalFunction(...args);
}

// Combining arguments
function combine(...arrays) {
    return [].concat(...arrays);
}
```

## Best Practices

1. **Use for Immutability**: Create new arrays/objects instead of modifying existing ones
2. **Be Careful with Nested Objects**: Spread only creates a shallow copy
3. **Consider Performance**: Avoid unnecessary spreading of large arrays/objects
4. **Use Rest for Flexibility**: When number of arguments is unknown

## Common Pitfalls

1. **Shallow Copying**: Spread only creates a shallow copy
```javascript
const nested = { a: { b: 1 } };
const copy = { ...nested };
copy.a.b = 2;  // Also changes nested.a.b
```

2. **Performance with Large Arrays**: Spreading large arrays can be slow
```javascript
// Slow
const largeArray = [...Array(1000000).keys()];

// Better
const largeArray = Array(1000000).fill().map((_, i) => i);
```

3. **Overwriting Properties**: Later spreads override earlier ones
```javascript
const obj1 = { foo: 'bar' };
const obj2 = { foo: 'baz' };
const combined = { ...obj1, ...obj2 };  // foo = 'baz'
```

## Practice Exercises
1. Combine arrays and objects
2. Use rest parameters in functions
3. Create immutable updates
4. Handle function arguments

[Continue to Modules →](./modules.md) 