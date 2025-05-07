# Arrow Functions Practice Exercises

## Exercise 1: Converting Traditional Functions
Convert the following traditional functions to arrow functions:

```javascript
// 1. Convert this function
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Convert this function
function calculateArea(width, height) {
    return width * height;
}

// 3. Convert this function
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// 4. Convert this function
function isEven(number) {
    return number % 2 === 0;
}
```

## Exercise 2: Array Methods with Arrow Functions
Use arrow functions with array methods to solve these problems:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Use map to double each number
// Expected output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 2. Use filter to get only even numbers
// Expected output: [2, 4, 6, 8, 10]

// 3. Use reduce to calculate the sum of all numbers
// Expected output: 55

// 4. Use map and filter to get the squares of even numbers
// Expected output: [4, 16, 36, 64, 100]
```

## Exercise 3: Object Methods and `this`
Fix the following code to properly handle the `this` context:

```javascript
// 1. Fix this object method
const calculator = {
    value: 0,
    add: (num) => {
        this.value += num;
    },
    getValue: () => {
        return this.value;
    }
};

// 2. Fix this class
class Counter {
    constructor() {
        this.count = 0;
        this.increment = () => {
            this.count++;
        };
    }
}

// 3. Fix this event handler
const button = document.querySelector('button');
button.addEventListener('click', () => {
    this.classList.toggle('active');
});
```

## Exercise 4: Advanced Arrow Functions
Solve these more complex problems using arrow functions:

```javascript
// 1. Create a function that returns a function
// The outer function should take a multiplier
// The inner function should take a number and multiply it by the multiplier
// Example usage: const double = createMultiplier(2); double(5) // returns 10

// 2. Create a function that takes an array of objects and returns a new array
// Each object should have a 'name' and 'age' property
// Return an array of strings in the format "name is age years old"
// Example input: [{name: 'John', age: 30}, {name: 'Jane', age: 25}]
// Expected output: ['John is 30 years old', 'Jane is 25 years old']

// 3. Create a function that takes a string and returns a function
// The returned function should check if a given string matches the original string
// Example usage: const isHello = createStringMatcher('hello'); isHello('hello') // returns true
```

## Exercise 5: Debugging Arrow Functions
Fix the following code that has issues with arrow functions:

```javascript
// 1. Fix the object return
const createPerson = (name, age) => {
    name,
    age
};

// 2. Fix the arguments object usage
const sum = () => {
    return arguments.reduce((total, num) => total + num, 0);
};

// 3. Fix the constructor function
const Person = (name) => {
    this.name = name;
};
```

## Solutions

### Exercise 1 Solutions:
```javascript
// 1.
const greet = name => `Hello, ${name}!`;

// 2.
const calculateArea = (width, height) => width * height;

// 3.
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// 4.
const isEven = number => number % 2 === 0;
```

### Exercise 2 Solutions:
```javascript
// 1.
const doubled = numbers.map(num => num * 2);

// 2.
const evenNumbers = numbers.filter(num => num % 2 === 0);

// 3.
const sum = numbers.reduce((total, num) => total + num, 0);

// 4.
const evenSquares = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * num);
```

### Exercise 3 Solutions:
```javascript
// 1.
const calculator = {
    value: 0,
    add(num) {
        this.value += num;
    },
    getValue() {
        return this.value;
    }
};

// 2.
class Counter {
    constructor() {
        this.count = 0;
        this.increment = () => {
            this.count++;
        };
    }
}

// 3.
const button = document.querySelector('button');
button.addEventListener('click', function() {
    this.classList.toggle('active');
});
```

### Exercise 4 Solutions:
```javascript
// 1.
const createMultiplier = multiplier => num => num * multiplier;

// 2.
const formatPeople = people => 
    people.map(person => `${person.name} is ${person.age} years old`);

// 3.
const createStringMatcher = target => str => str === target;
```

### Exercise 5 Solutions:
```javascript
// 1.
const createPerson = (name, age) => ({ name, age });

// 2.
const sum = (...args) => args.reduce((total, num) => total + num, 0);

// 3.
function Person(name) {
    this.name = name;
}
```

[Back to Arrow Functions Guide →](./arrow-functions.md) 