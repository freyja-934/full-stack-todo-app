# Arrays & Objects

## Why They're Important

Arrays and Objects are fundamental data structures in JavaScript that allow you to:
- Store and organize collections of data
- Create complex data relationships
- Model real-world entities
- Build dynamic applications

**Real-World Example:**
In a todo application, you might use arrays to store lists of tasks and objects to represent individual tasks with properties like title, due date, and completion status.

## Arrays

### Creating Arrays

```javascript
// Array literal
const fruits = ["apple", "banana", "cherry"];

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Empty array
const emptyArray = [];

// Array with mixed types
const mixedArray = [1, "hello", true, { name: "John" }, [1, 2, 3]];
```

### Array Properties and Methods

```javascript
const fruits = ["apple", "banana", "cherry"];

// Length property
console.log(fruits.length); // 3

// Accessing elements
console.log(fruits[0]); // "apple"
console.log(fruits[fruits.length - 1]); // "cherry"

// Modifying elements
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]

// Adding elements
fruits.push("date"); // Add to end
fruits.unshift("apricot"); // Add to beginning
console.log(fruits); // ["apricot", "apple", "blueberry", "cherry", "date"]

// Removing elements
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning
console.log(fruits); // ["apple", "blueberry", "cherry"]

// Finding elements
console.log(fruits.indexOf("blueberry")); // 1
console.log(fruits.includes("cherry")); // true

// Slicing arrays
console.log(fruits.slice(1, 3)); // ["blueberry", "cherry"]

// Splice (modify array)
fruits.splice(1, 1, "blackberry"); // Replace 1 element at index 1
console.log(fruits); // ["apple", "blackberry", "cherry"]
```

### Array Iteration Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num * 2));

// map
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// find
const found = numbers.find(num => num > 3);
console.log(found); // 4

// some
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
```

### Array Spread and Rest

```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Rest parameter
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
```

## Objects

### Creating Objects

```javascript
// Object literal
const person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};

// Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

// Empty object
const emptyObject = {};

// Nested objects
const user = {
  name: "Jane",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  },
  hobbies: ["reading", "hiking"]
};
```

### Accessing and Modifying Properties

```javascript
const person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};

// Dot notation
console.log(person.name); // "John"
person.age = 31;

// Bracket notation
console.log(person["occupation"]); // "Developer"
person["occupation"] = "Senior Developer";

// Adding new properties
person.email = "john@example.com";
person["phone"] = "123-456-7890";

// Deleting properties
delete person.phone;
```

### Object Methods

```javascript
const person = {
  name: "John",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

// Calling methods
console.log(person.greet()); // "Hello, my name is John"

// Adding methods
person.sayAge = function() {
  return `I am ${this.age} years old`;
};
console.log(person.sayAge()); // "I am 30 years old"
```

### Object Properties and Methods

```javascript
const person = {
  name: "John",
  age: 30
};

// Getting keys
console.log(Object.keys(person)); // ["name", "age"]

// Getting values
console.log(Object.values(person)); // ["John", 30]

// Getting entries
console.log(Object.entries(person)); // [["name", "John"], ["age", 30]]

// Checking properties
console.log(person.hasOwnProperty("name")); // true
console.log("age" in person); // true

// Freezing object (prevents modifications)
Object.freeze(person);
person.name = "Jane"; // This won't work
console.log(person.name); // Still "John"
```

### Object Spread and Rest

```javascript
// Spread operator
const person = { name: "John", age: 30 };
const personWithEmail = { ...person, email: "john@example.com" };
console.log(personWithEmail); // { name: "John", age: 30, email: "john@example.com" }

// Rest parameter in object destructuring
const { name, ...rest } = person;
console.log(name); // "John"
console.log(rest); // { age: 30 }
```

## Destructuring

### Array Destructuring

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Basic destructuring
const [first, second] = fruits;
console.log(first); // "apple"
console.log(second); // "banana"

// Skipping elements
const [first, , third] = fruits;
console.log(first); // "apple"
console.log(third); // "cherry"

// Rest parameter
const [first, second, ...rest] = fruits;
console.log(rest); // ["cherry", "date", "elderberry"]

// Default values
const [a = "default", b = "default"] = [];
console.log(a); // "default"
console.log(b); // "default"
```

### Object Destructuring

```javascript
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

// Basic destructuring
const { name, age } = person;
console.log(name); // "John"
console.log(age); // 30

// Renaming variables
const { name: fullName, age: years } = person;
console.log(fullName); // "John"
console.log(years); // 30

// Nested destructuring
const { address: { street, city } } = person;
console.log(street); // "123 Main St"
console.log(city); // "Anytown"

// Default values
const { email = "no email", phone = "no phone" } = person;
console.log(email); // "no email"
console.log(phone); // "no phone"
```

## JSON (JavaScript Object Notation)

```javascript
// Converting object to JSON string
const person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};
const jsonString = JSON.stringify(person);
console.log(jsonString); // '{"name":"John","age":30,"occupation":"Developer"}'

// Converting JSON string to object
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson.name); // "John"
```

## Practice Exercises

1. Create an array of todo items and add/remove items
2. Create an object representing a todo item with properties
3. Use array methods to filter and map todo items
4. Use object destructuring to access todo properties
5. Convert a todo list to JSON and back

## Related Practice

Check out the [Arrays & Objects practice exercises](../../practice/js-fundamentals/arrays-objects.md) to test your knowledge.

## Next Steps

After understanding arrays and objects, move on to [Error Handling](./error-handling.md) to learn how to handle errors in your code. 