# Destructuring Practice Exercises

## Exercise 1: Array Destructuring
Solve these array destructuring problems:

```javascript
// 1. Extract the first and last elements from this array
const numbers = [1, 2, 3, 4, 5];
// Expected: first = 1, last = 5

// 2. Skip the second element and get the rest
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
// Expected: first = 'red', third = 'blue', rest = ['yellow', 'purple']

// 3. Use default values for missing elements
const [a, b, c] = [1];
// Expected: a = 1, b = 0, c = 0

// 4. Swap two variables using destructuring
let x = 10;
let y = 20;
// Expected: x = 20, y = 10
```

## Exercise 2: Object Destructuring
Solve these object destructuring problems:

```javascript
const user = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    address: {
        street: '123 Main St',
        city: 'Boston',
        country: 'USA'
    },
    hobbies: ['reading', 'gaming', 'coding']
};

// 1. Extract name and age
// Expected: name = 'John Doe', age = 30

// 2. Rename properties
// Expected: fullName = 'John Doe', userAge = 30

// 3. Extract nested address properties
// Expected: street = '123 Main St', city = 'Boston'

// 4. Use default values for missing properties
const { phone = 'N/A', name = 'Anonymous' } = {};
// Expected: phone = 'N/A', name = 'Anonymous'
```

## Exercise 3: Function Parameters
Rewrite these functions using destructuring:

```javascript
// 1. Rewrite this function to use destructuring
function printUserInfo(user) {
    console.log(`${user.name} is ${user.age} years old`);
}

// 2. Rewrite this function to use destructuring with default values
function createUser(name, age, country = 'USA') {
    return {
        name,
        age,
        country
    };
}

// 3. Rewrite this function to use nested destructuring
function printAddress(user) {
    console.log(`${user.address.street}, ${user.address.city}`);
}
```

## Exercise 4: Complex Destructuring
Solve these more complex destructuring problems:

```javascript
const data = {
    users: [
        {
            id: 1,
            name: 'John',
            posts: [
                { id: 1, title: 'First Post' },
                { id: 2, title: 'Second Post' }
            ]
        },
        {
            id: 2,
            name: 'Jane',
            posts: [
                { id: 3, title: 'Third Post' }
            ]
        }
    ],
    metadata: {
        totalUsers: 2,
        totalPosts: 3
    }
};

// 1. Extract the first user's name and first post title
// Expected: name = 'John', firstPostTitle = 'First Post'

// 2. Extract the total number of users and posts
// Expected: totalUsers = 2, totalPosts = 3

// 3. Extract all post titles from the first user
// Expected: postTitles = ['First Post', 'Second Post']
```

## Exercise 5: Real-World Scenarios
Solve these real-world destructuring problems:

```javascript
// 1. API Response Handling
const apiResponse = {
    status: 200,
    data: {
        user: {
            id: 1,
            name: 'John',
            preferences: {
                theme: 'dark',
                notifications: true
            }
        }
    },
    error: null
};

// Extract user data and preferences
// Expected: userId = 1, userName = 'John', theme = 'dark', notifications = true

// 2. Configuration Object
const config = {
    server: {
        host: 'localhost',
        port: 3000,
        ssl: {
            enabled: true,
            cert: 'cert.pem'
        }
    },
    database: {
        url: 'mongodb://localhost:27017',
        name: 'myapp'
    }
};

// Extract server and database configuration
// Expected: host = 'localhost', port = 3000, dbUrl = 'mongodb://localhost:27017', dbName = 'myapp'

// 3. Event Object
const event = {
    type: 'click',
    target: {
        id: 'submit-button',
        className: 'btn btn-primary',
        dataset: {
            action: 'save',
            formId: 'user-form'
        }
    },
    clientX: 100,
    clientY: 200
};

// Extract event details
// Expected: type = 'click', buttonId = 'submit-button', action = 'save', x = 100, y = 200
```

## Solutions

### Exercise 1 Solutions:
```javascript
// 1.
const [first, , , , last] = numbers;

// 2.
const [first, , third, ...rest] = colors;

// 3.
const [a, b = 0, c = 0] = [1];

// 4.
[x, y] = [y, x];
```

### Exercise 2 Solutions:
```javascript
// 1.
const { name, age } = user;

// 2.
const { name: fullName, age: userAge } = user;

// 3.
const { address: { street, city } } = user;

// 4.
const { phone = 'N/A', name = 'Anonymous' } = {};
```

### Exercise 3 Solutions:
```javascript
// 1.
function printUserInfo({ name, age }) {
    console.log(`${name} is ${age} years old`);
}

// 2.
function createUser({ name, age, country = 'USA' }) {
    return { name, age, country };
}

// 3.
function printAddress({ address: { street, city } }) {
    console.log(`${street}, ${city}`);
}
```

### Exercise 4 Solutions:
```javascript
// 1.
const { users: [{ name, posts: [{ title: firstPostTitle }] }] } = data;

// 2.
const { metadata: { totalUsers, totalPosts } } = data;

// 3.
const { users: [{ posts }] } = data;
const postTitles = posts.map(({ title }) => title);
```

### Exercise 5 Solutions:
```javascript
// 1.
const { data: { user: { id: userId, name: userName, preferences: { theme, notifications } } } } = apiResponse;

// 2.
const { server: { host, port }, database: { url: dbUrl, name: dbName } } = config;

// 3.
const { type, target: { id: buttonId, dataset: { action } }, clientX: x, clientY: y } = event;
```

[Back to Destructuring Guide →](./destructuring.md) 