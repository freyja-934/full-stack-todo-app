# Classes Practice Exercises

## Exercise 1: Basic Class Implementation
Create a `Rectangle` class with the following requirements:
- Properties: `width` and `height`
- Methods: `area()` and `perimeter()`
- A constructor that takes width and height as parameters

```javascript
// Your code here
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// Test your implementation
const rect = new Rectangle(5, 3);
console.log(rect.area());      // Should output: 15
console.log(rect.perimeter()); // Should output: 16
```

## Exercise 2: Getters and Setters
Create a `BankAccount` class with:
- Private balance property
- Getter for balance
- Setter for balance that prevents negative values
- Methods for deposit and withdraw

```javascript
// Your code here
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(value) {
        if (value < 0) {
            throw new Error('Balance cannot be negative');
        }
        this.#balance = value;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }
        this.#balance -= amount;
    }
}

// Test your implementation
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.balance);  // Should output: 1500
account.withdraw(200);
console.log(account.balance);  // Should output: 1300
```

## Exercise 3: Inheritance
Create a class hierarchy for different types of vehicles:
- Base class `Vehicle` with properties: `make`, `model`, `year`
- Subclass `Car` that adds `numDoors`
- Subclass `Motorcycle` that adds `hasSidecar`

```javascript
// Your code here
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    getInfo() {
        return `${super.getInfo()} with ${this.numDoors} doors`;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }

    getInfo() {
        return `${super.getInfo()} ${this.hasSidecar ? 'with sidecar' : 'without sidecar'}`;
    }
}

// Test your implementation
const car = new Car('Toyota', 'Camry', 2020, 4);
console.log(car.getInfo());  // Should output: "2020 Toyota Camry with 4 doors"

const bike = new Motorcycle('Harley', 'Davidson', 2019, true);
console.log(bike.getInfo());  // Should output: "2019 Harley Davidson with sidecar"
```

## Exercise 4: Static Methods
Create a `MathUtils` class with static methods for common mathematical operations:
- `add(a, b)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)`
- `average(numbers)`

```javascript
// Your code here
class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    }

    static average(numbers) {
        if (!numbers.length) {
            throw new Error('Array cannot be empty');
        }
        return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    }
}

// Test your implementation
console.log(MathUtils.add(5, 3));        // Should output: 8
console.log(MathUtils.subtract(5, 3));   // Should output: 2
console.log(MathUtils.multiply(5, 3));   // Should output: 15
console.log(MathUtils.divide(6, 2));     // Should output: 3
console.log(MathUtils.average([1, 2, 3, 4, 5])); // Should output: 3
```

## Exercise 5: Complex Class Implementation
Create a `TodoList` class that manages a list of tasks:
- Properties: `tasks` (array)
- Methods:
  - `addTask(task)`
  - `removeTask(taskId)`
  - `completeTask(taskId)`
  - `getTasks()`
  - `getCompletedTasks()`
  - `getPendingTasks()`

```javascript
// Your code here
class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false,
            createdAt: new Date()
        };
        this.tasks.push(newTask);
        return newTask;
    }

    removeTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }

    getTasks() {
        return this.tasks;
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    getPendingTasks() {
        return this.tasks.filter(task => !task.completed);
    }
}

// Test your implementation
const todoList = new TodoList();
todoList.addTask('Buy groceries');
todoList.addTask('Call mom');
todoList.addTask('Finish homework');

const tasks = todoList.getTasks();
console.log(tasks.length);  // Should output: 3

todoList.completeTask(tasks[0].id);
console.log(todoList.getCompletedTasks().length);  // Should output: 1
console.log(todoList.getPendingTasks().length);    // Should output: 2
```

## Solutions

### Exercise 1 Solution
```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}
```

### Exercise 2 Solution
```javascript
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(value) {
        if (value < 0) {
            throw new Error('Balance cannot be negative');
        }
        this.#balance = value;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }
        this.#balance -= amount;
    }
}
```

### Exercise 3 Solution
```javascript
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    getInfo() {
        return `${super.getInfo()} with ${this.numDoors} doors`;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }

    getInfo() {
        return `${super.getInfo()} ${this.hasSidecar ? 'with sidecar' : 'without sidecar'}`;
    }
}
```

### Exercise 4 Solution
```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    }

    static average(numbers) {
        if (!numbers.length) {
            throw new Error('Array cannot be empty');
        }
        return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    }
}
```

### Exercise 5 Solution
```javascript
class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false,
            createdAt: new Date()
        };
        this.tasks.push(newTask);
        return newTask;
    }

    removeTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }

    getTasks() {
        return this.tasks;
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    getPendingTasks() {
        return this.tasks.filter(task => !task.completed);
    }
}
```

[Return to Classes Guide →](./classes.md) 