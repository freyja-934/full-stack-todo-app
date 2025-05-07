# Template Literals in JavaScript

## Introduction
Template literals are a new way to work with strings in JavaScript, introduced in ES6 (ECMAScript 2015). They provide a more powerful and flexible way to create strings, allowing for multi-line strings, string interpolation, and tagged templates.

## Why Template Literals Matter
1. **String Interpolation**: Easily embed expressions in strings
2. **Multi-line Strings**: Create strings that span multiple lines without concatenation
3. **Tagged Templates**: Process template literals with a function
4. **Cleaner Code**: More readable than traditional string concatenation

## Basic Syntax

### Traditional String Concatenation
```javascript
const name = 'John';
const greeting = 'Hello, ' + name + '!';
```

### Template Literal
```javascript
const name = 'John';
const greeting = `Hello, ${name}!`;
```

## String Interpolation

### Basic Interpolation
```javascript
const name = 'John';
const age = 30;
const message = `${name} is ${age} years old`;
```

### Expressions
```javascript
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}`;
```

### Object Properties
```javascript
const user = {
    name: 'John',
    age: 30
};
const message = `${user.name} is ${user.age} years old`;
```

## Multi-line Strings

### Traditional Way
```javascript
const multiLine = 'First line\n' +
                 'Second line\n' +
                 'Third line';
```

### Template Literal
```javascript
const multiLine = `First line
Second line
Third line`;
```

## Tagged Templates

### Basic Tagged Template
```javascript
function tag(strings, ...values) {
    console.log(strings);  // ['Hello ', '!']
    console.log(values);   // ['John']
    return 'Processed string';
}

const name = 'John';
const result = tag`Hello ${name}!`;
```

### HTML Escaping
```javascript
function htmlEscape(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? values[i]
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            : '';
        return result + str + value;
    }, '');
}

const userInput = '<script>alert("XSS")</script>';
const safe = htmlEscape`<div>${userInput}</div>`;
```

## Common Use Cases

### 1. SQL Queries
```javascript
const table = 'users';
const id = 1;
const query = `
    SELECT *
    FROM ${table}
    WHERE id = ${id}
`;
```

### 2. HTML Templates
```javascript
const user = {
    name: 'John',
    role: 'Admin'
};

const html = `
    <div class="user-card">
        <h2>${user.name}</h2>
        <p>Role: ${user.role}</p>
    </div>
`;
```

### 3. Error Messages
```javascript
function validateAge(age) {
    if (age < 0) {
        throw new Error(`Invalid age: ${age}. Age cannot be negative.`);
    }
}
```

## Best Practices

1. **Use for Complex Strings**: Use template literals for strings with multiple variables or expressions
2. **Keep Expressions Simple**: Avoid complex logic inside template literals
3. **Consider Tagged Templates**: Use tagged templates for string processing or validation
4. **Maintain Readability**: Break long template literals into multiple lines

## Common Pitfalls

1. **Nested Template Literals**: Can become hard to read
```javascript
// Hard to read
const message = `Hello ${`${firstName} ${lastName}`}!`;

// Better
const fullName = `${firstName} ${lastName}`;
const message = `Hello ${fullName}!`;
```

2. **Complex Expressions**: Can make code harder to maintain
```javascript
// Hard to read
const message = `The result is ${(a + b) * (c - d) / e}`;

// Better
const result = (a + b) * (c - d) / e;
const message = `The result is ${result}`;
```

3. **Missing Backticks**: Can cause syntax errors
```javascript
// Wrong
const message = 'Hello ${name}!';

// Correct
const message = `Hello ${name}!`;
```

## Practice Exercises
1. Create multi-line strings
2. Use string interpolation
3. Create tagged templates
4. Build HTML templates

[Continue to Spread and Rest Operators →](./spread-rest.md) 