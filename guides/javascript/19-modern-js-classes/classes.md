# Classes in JavaScript

## Introduction
Classes in JavaScript are a template for creating objects. They provide a more structured and cleaner way to work with objects and inheritance compared to the traditional prototype-based approach. Classes were introduced in ES6 (ECMAScript 2015) and have become a fundamental part of modern JavaScript development.

## Why Classes Matter
1. **Object-Oriented Programming**: Implement OOP principles in JavaScript
2. **Code Organization**: Structure code in a more organized way
3. **Inheritance**: Create hierarchical relationships between objects
4. **Encapsulation**: Control access to object properties and methods

## Basic Class Syntax

### Class Declaration
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
```

### Class Expression
```javascript
const Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
```

## Class Features

### 1. Constructor
```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }
}
```

### 2. Methods
```javascript
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }
}
```

### 3. Getters and Setters
```javascript
class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        if (value < 0) {
            throw new Error('Balance cannot be negative');
        }
        this._balance = value;
    }
}
```

## Inheritance

### Basic Inheritance
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}
```

### Super Keyword
```javascript
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Manager extends Employee {
    constructor(name, id, department) {
        super(name, id);
        this.department = department;
    }
}
```

## Advanced Features

### 1. Private Fields
```javascript
class User {
    #password;

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    validatePassword(password) {
        return this.#password === password;
    }
}
```

### 2. Static Methods
```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}
```

### 3. Computed Properties
```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    ['get' + 'Name']() {
        return this.name;
    }
}
```

## Common Use Cases

### 1. Data Models
```javascript
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    get formattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }

    static createFromJSON(json) {
        return new Product(json.name, json.price, json.category);
    }
}
```

### 2. Service Classes
```javascript
class UserService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getUser(id) {
        return await this.apiClient.get(`/users/${id}`);
    }

    async updateUser(id, data) {
        return await this.apiClient.put(`/users/${id}`, data);
    }
}
```

### 3. Utility Classes
```javascript
class StringUtils {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static reverse(str) {
        return str.split('').reverse().join('');
    }
}
```

## Best Practices

1. **Single Responsibility**: Each class should have one primary purpose
2. **Encapsulation**: Use private fields and methods when appropriate
3. **Inheritance**: Use inheritance for "is-a" relationships
4. **Composition**: Prefer composition over inheritance when possible

## Common Pitfalls

1. **Forgetting `new`**: Always use `new` when creating class instances
```javascript
// Wrong
const person = Person('John', 30);

// Correct
const person = new Person('John', 30);
```

2. **Arrow Functions in Methods**: Arrow functions don't bind `this`
```javascript
// Wrong
class Counter {
    count = 0;
    increment = () => {
        this.count++;
    }
}

// Correct
class Counter {
    count = 0;
    increment() {
        this.count++;
    }
}
```

3. **Overusing Inheritance**: Can lead to complex hierarchies
```javascript
// Bad: Deep inheritance
class Animal {}
class Mammal extends Animal {}
class Dog extends Mammal {}
class Labrador extends Dog {}

// Better: Composition
class Dog {
    constructor(breed) {
        this.breed = breed;
    }
}
```

## Practice Exercises
1. Create basic classes
2. Implement inheritance
3. Use getters and setters
4. Work with static methods

[Continue to Promises →](./promises.md) 