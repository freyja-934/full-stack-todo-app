# Spread and Rest Operators Practice Exercises

## Exercise 1: Array Spread
Solve these array spread problems:

```javascript
// 1. Combine these arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Expected: [1, 2, 3, 4, 5, 6]

// 2. Create a new array with the first array's elements
// and add 0 at the beginning and 7 at the end
const numbers = [1, 2, 3, 4, 5];
// Expected: [0, 1, 2, 3, 4, 5, 7]

// 3. Create a copy of the array and modify the copy
const original = [1, 2, 3];
// Expected: original = [1, 2, 3], copy = [1, 2, 3, 4]

// 4. Convert a string to an array of characters
const str = 'hello';
// Expected: ['h', 'e', 'l', 'l', 'o']
```

## Exercise 2: Object Spread
Solve these object spread problems:

```javascript
// 1. Combine these objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Expected: { a: 1, b: 2, c: 3, d: 4 }

// 2. Create a new object with additional properties
const user = { name: 'John', age: 30 };
// Expected: { name: 'John', age: 30, role: 'Admin', active: true }

// 3. Update a property in an object
const person = { name: 'John', age: 30 };
// Expected: { name: 'John', age: 31 }

// 4. Create a copy of an object and modify the copy
const original = { a: 1, b: 2 };
// Expected: original = { a: 1, b: 2 }, copy = { a: 1, b: 2, c: 3 }
```

## Exercise 3: Rest Parameters
Create functions using rest parameters:

```javascript
// 1. Create a function that calculates the average of any number of arguments
// Example: average(1, 2, 3, 4) should return 2.5

// 2. Create a function that finds the maximum value among any number of arguments
// Example: max(1, 5, 3, 9, 2) should return 9

// 3. Create a function that combines any number of arrays
// Example: combine([1, 2], [3, 4], [5, 6]) should return [1, 2, 3, 4, 5, 6]

// 4. Create a function that takes a multiplier and any number of numbers
// and returns an array of the numbers multiplied by the multiplier
// Example: multiply(2, 1, 2, 3) should return [2, 4, 6]
```

## Exercise 4: Destructuring with Rest
Solve these destructuring problems:

```javascript
// 1. Extract the first element and collect the rest
const numbers = [1, 2, 3, 4, 5];
// Expected: first = 1, rest = [2, 3, 4, 5]

// 2. Extract specific properties and collect the rest
const user = {
    id: 1,
    name: 'John',
    age: 30,
    email: 'john@example.com',
    role: 'Admin'
};
// Expected: id = 1, name = 'John', rest = { age: 30, email: 'john@example.com', role: 'Admin' }

// 3. Extract the first two elements and the last element
const array = [1, 2, 3, 4, 5];
// Expected: first = 1, second = 2, last = 5

// 4. Extract nested properties and collect the rest
const data = {
    user: {
        name: 'John',
        age: 30
    },
    settings: {
        theme: 'dark',
        notifications: true
    },
    metadata: {
        created: '2023-01-01',
        updated: '2023-01-02'
    }
};
// Expected: name = 'John', theme = 'dark', rest = { metadata: { ... } }
```

## Exercise 5: Complex Scenarios
Solve these complex spread and rest problems:

```javascript
// 1. Create a function that merges two objects deeply
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};
const obj2 = {
    b: {
        e: 4
    },
    f: 5
};
// Expected: { a: 1, b: { c: 2, d: 3, e: 4 }, f: 5 }

// 2. Create a function that removes specified properties from an object
const user = {
    id: 1,
    name: 'John',
    password: 'secret',
    email: 'john@example.com',
    role: 'Admin'
};
// Expected: { id: 1, name: 'John', email: 'john@example.com', role: 'Admin' }

// 3. Create a function that combines multiple arrays and removes duplicates
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];
// Expected: [1, 2, 3, 4, 5, 6, 7]

// 4. Create a function that updates nested object properties
const state = {
    user: {
        profile: {
            name: 'John',
            age: 30
        },
        settings: {
            theme: 'light'
        }
    }
};
// Expected: { user: { profile: { name: 'John', age: 31 }, settings: { theme: 'dark' } } }
```

## Solutions

### Exercise 1 Solutions:
```javascript
// 1.
const combined = [...arr1, ...arr2];

// 2.
const newNumbers = [0, ...numbers, 7];

// 3.
const copy = [...original, 4];

// 4.
const chars = [...str];
```

### Exercise 2 Solutions:
```javascript
// 1.
const combined = { ...obj1, ...obj2 };

// 2.
const newUser = { ...user, role: 'Admin', active: true };

// 3.
const updatedPerson = { ...person, age: person.age + 1 };

// 4.
const copy = { ...original, c: 3 };
```

### Exercise 3 Solutions:
```javascript
// 1.
function average(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

// 2.
function max(...numbers) {
    return Math.max(...numbers);
}

// 3.
function combine(...arrays) {
    return [].concat(...arrays);
}

// 4.
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
```

### Exercise 4 Solutions:
```javascript
// 1.
const [first, ...rest] = numbers;

// 2.
const { id, name, ...rest } = user;

// 3.
const [first, second, ...middle] = array;
const last = middle.pop();

// 4.
const { user: { name }, settings: { theme }, ...rest } = data;
```

### Exercise 5 Solutions:
```javascript
// 1.
function deepMerge(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
        ...Object.keys(obj2).reduce((acc, key) => {
            if (typeof obj2[key] === 'object' && obj2[key] !== null) {
                acc[key] = deepMerge(obj1[key] || {}, obj2[key]);
            }
            return acc;
        }, {})
    };
}

// 2.
function removeProperties(obj, ...props) {
    const { [props]: removed, ...rest } = obj;
    return rest;
}

// 3.
function combineUnique(...arrays) {
    return [...new Set([].concat(...arrays))];
}

// 4.
function updateNested(state, updates) {
    return {
        ...state,
        user: {
            ...state.user,
            profile: {
                ...state.user.profile,
                ...updates.user.profile
            },
            settings: {
                ...state.user.settings,
                ...updates.user.settings
            }
        }
    };
}
```

[Back to Spread and Rest Guide →](./spread-rest.md) 