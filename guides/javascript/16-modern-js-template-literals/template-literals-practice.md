# Template Literals Practice Exercises

## Exercise 1: Basic String Interpolation
Convert these traditional string concatenations to template literals:

```javascript
// 1. Convert this concatenation
const name = 'John';
const greeting = 'Hello, ' + name + '!';

// 2. Convert this concatenation
const age = 30;
const message = name + ' is ' + age + ' years old';

// 3. Convert this concatenation
const price = 19.99;
const quantity = 3;
const total = 'Total: $' + (price * quantity).toFixed(2);

// 4. Convert this concatenation
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
```

## Exercise 2: Multi-line Strings
Convert these multi-line strings to template literals:

```javascript
// 1. Convert this multi-line string
const html = '<div>\n' +
             '  <h1>Title</h1>\n' +
             '  <p>Content</p>\n' +
             '</div>';

// 2. Convert this SQL query
const query = 'SELECT *\n' +
             'FROM users\n' +
             'WHERE age > 18\n' +
             'ORDER BY name';

// 3. Convert this error message
const error = 'Error: Invalid input\n' +
             'Please check the following:\n' +
             '1. Name is required\n' +
             '2. Age must be positive\n' +
             '3. Email must be valid';
```

## Exercise 3: Expressions in Template Literals
Use template literals to create these strings with expressions:

```javascript
// 1. Create a string with a calculation
const a = 5;
const b = 10;
// Expected: "The sum of 5 and 10 is 15"

// 2. Create a string with a conditional
const age = 20;
// Expected: "You are old enough to vote" or "You are not old enough to vote"

// 3. Create a string with a method call
const date = new Date();
// Expected: "Today is [current date]"

// 4. Create a string with multiple expressions
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isAdmin: true
};
// Expected: "John Doe (30) is an admin" or "John Doe (30) is not an admin"
```

## Exercise 4: Tagged Templates
Create tagged template functions for these scenarios:

```javascript
// 1. Create a function that uppercases all interpolated values
function upper(strings, ...values) {
    // Your code here
}
const name = 'John';
const result = upper`Hello ${name}!`;
// Expected: "Hello JOHN!"

// 2. Create a function that adds HTML escaping
function escapeHtml(strings, ...values) {
    // Your code here
}
const userInput = '<script>alert("XSS")</script>';
const safe = escapeHtml`<div>${userInput}</div>`;
// Expected: "<div>&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;</div>"

// 3. Create a function that formats currency
function formatCurrency(strings, ...values) {
    // Your code here
}
const price = 19.99;
const message = formatCurrency`The price is ${price}`;
// Expected: "The price is $19.99"
```

## Exercise 5: Complex Templates
Create these complex template literals:

```javascript
// 1. Create an HTML table row template
const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin'
};
// Expected: "<tr><td>1</td><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>"

// 2. Create a SQL query template
const filters = {
    table: 'users',
    conditions: [
        { field: 'age', operator: '>', value: 18 },
        { field: 'status', operator: '=', value: 'active' }
    ],
    orderBy: 'name',
    limit: 10
};
// Expected: "SELECT * FROM users WHERE age > 18 AND status = 'active' ORDER BY name LIMIT 10"

// 3. Create an error message template
const validationErrors = {
    field: 'email',
    value: 'invalid-email',
    rules: ['required', 'email'],
    message: 'Invalid email format'
};
// Expected: "Validation Error: email\nValue: invalid-email\nFailed rules: required, email\nMessage: Invalid email format"
```

## Solutions

### Exercise 1 Solutions:
```javascript
// 1.
const greeting = `Hello, ${name}!`;

// 2.
const message = `${name} is ${age} years old`;

// 3.
const total = `Total: $${(price * quantity).toFixed(2)}`;

// 4.
const fullName = `${firstName} ${lastName}`;
```

### Exercise 2 Solutions:
```javascript
// 1.
const html = `
    <div>
        <h1>Title</h1>
        <p>Content</p>
    </div>
`;

// 2.
const query = `
    SELECT *
    FROM users
    WHERE age > 18
    ORDER BY name
`;

// 3.
const error = `
    Error: Invalid input
    Please check the following:
    1. Name is required
    2. Age must be positive
    3. Email must be valid
`;
```

### Exercise 3 Solutions:
```javascript
// 1.
const sum = `The sum of ${a} and ${b} is ${a + b}`;

// 2.
const votingMessage = `You are ${age >= 18 ? 'old enough' : 'not old enough'} to vote`;

// 3.
const dateMessage = `Today is ${date.toLocaleDateString()}`;

// 4.
const userMessage = `${user.firstName} ${user.lastName} (${user.age}) is ${user.isAdmin ? 'an admin' : 'not an admin'}`;
```

### Exercise 4 Solutions:
```javascript
// 1.
function upper(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? values[i].toUpperCase() : '';
        return result + str + value;
    }, '');
}

// 2.
function escapeHtml(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? values[i]
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            : '';
        return result + str + value;
    }, '');
}

// 3.
function formatCurrency(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? `$${values[i].toFixed(2)}` : '';
        return result + str + value;
    }, '');
}
```

### Exercise 5 Solutions:
```javascript
// 1.
const tableRow = `
    <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
    </tr>
`;

// 2.
const sqlQuery = `
    SELECT * FROM ${filters.table}
    WHERE ${filters.conditions.map(c => `${c.field} ${c.operator} '${c.value}'`).join(' AND ')}
    ORDER BY ${filters.orderBy}
    LIMIT ${filters.limit}
`;

// 3.
const errorMessage = `
    Validation Error: ${validationErrors.field}
    Value: ${validationErrors.value}
    Failed rules: ${validationErrors.rules.join(', ')}
    Message: ${validationErrors.message}
`;
```

[Back to Template Literals Guide →](./template-literals.md) 