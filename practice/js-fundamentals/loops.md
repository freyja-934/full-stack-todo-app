# Loops Practice Exercises

## Exercise 1: Basic for Loop
Write a for loop that prints the numbers 1 through 5 to the console.

```javascript
// Your code here
```

## Exercise 2: while Loop
Write a while loop that counts down from 5 to 1 and prints each number.

```javascript
// Your code here
```

## Exercise 3: do...while Loop
Write a do...while loop that asks the user for a number between 1 and 10 until they enter a valid number.

```javascript
// Your code here
```

## Exercise 4: for...of Loop
Create an array of fruits and use a for...of loop to print each fruit to the console.

```javascript
// Your code here
```

## Exercise 5: for...in Loop
Create an object representing a person with properties like name, age, and occupation. Use a for...in loop to print each property and its value.

```javascript
// Your code here
```

## Exercise 6: Loop Control Statements
Write a for loop that prints numbers 1 through 10, but:
- Skip printing the number 3 using continue
- Stop the loop when it reaches 8 using break

```javascript
// Your code here
```

## Exercise 7: Nested Loops
Create a nested loop that prints a multiplication table for numbers 1 through 5.

```javascript
// Your code here
```

## Exercise 8: Array Operations with Loops
Create an array of numbers and write a loop that:
1. Calculates the sum of all numbers
2. Finds the maximum value
3. Creates a new array with only even numbers

```javascript
// Your code here
```

## Exercise 9: String Operations with Loops
Write a function that takes a string and:
1. Counts the number of vowels
2. Reverses the string
3. Creates a new string with all spaces removed

```javascript
// Your code here
```

## Exercise 10: Object Operations with Loops
Create an array of objects representing todo items. Write a loop that:
1. Counts the number of completed todos
2. Creates a new array with only uncompleted todos
3. Updates all todos to have a priority property

```javascript
// Your code here
```

## Exercise 11: Challenge: Pattern Printing
Write a loop that prints the following pattern:
```
*
**
***
****
*****
```

```javascript
// Your code here
```

## Exercise 12: Challenge: Number Guessing Game
Create a number guessing game that:
1. Generates a random number between 1 and 100
2. Asks the user to guess the number
3. Provides hints (higher/lower)
4. Counts the number of attempts
5. Asks if they want to play again

```javascript
// Your code here
```

## Exercise 13: Challenge: Todo List Manager
Create a simple todo list manager that:
1. Allows adding new todos
2. Marks todos as complete
3. Deletes todos
4. Shows all todos
5. Shows only completed todos
6. Shows only uncompleted todos

```javascript
// Your code here
```

## Solutions

<details>
<summary>Click to see solutions</summary>

### Exercise 1: Basic for Loop
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### Exercise 2: while Loop
```javascript
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}
```

### Exercise 3: do...while Loop
```javascript
let userInput;
do {
  userInput = prompt("Enter a number between 1 and 10:");
} while (userInput < 1 || userInput > 10);
console.log(`You entered: ${userInput}`);
```

### Exercise 4: for...of Loop
```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

### Exercise 5: for...in Loop
```javascript
const person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### Exercise 6: Loop Control Statements
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  if (i === 8) {
    break;
  }
  console.log(i);
}
```

### Exercise 7: Nested Loops
```javascript
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
  console.log("-------------------");
}
```

### Exercise 8: Array Operations with Loops
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Calculate sum
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log(`Sum: ${sum}`);

// Find maximum
let max = numbers[0];
for (const num of numbers) {
  if (num > max) {
    max = num;
  }
}
console.log(`Maximum: ${max}`);

// Create array of even numbers
const evenNumbers = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log(`Even numbers: ${evenNumbers}`);
```

### Exercise 9: String Operations with Loops
```javascript
function stringOperations(str) {
  // Count vowels
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";
  for (const char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  console.log(`Vowel count: ${vowelCount}`);

  // Reverse string
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(`Reversed: ${reversed}`);

  // Remove spaces
  let noSpaces = "";
  for (const char of str) {
    if (char !== " ") {
      noSpaces += char;
    }
  }
  console.log(`No spaces: ${noSpaces}`);
}

stringOperations("Hello World");
```

### Exercise 10: Object Operations with Loops
```javascript
const todos = [
  { text: "Learn JavaScript", completed: true },
  { text: "Build a todo app", completed: false },
  { text: "Deploy the app", completed: false },
  { text: "Write documentation", completed: true }
];

// Count completed todos
let completedCount = 0;
for (const todo of todos) {
  if (todo.completed) {
    completedCount++;
  }
}
console.log(`Completed todos: ${completedCount}`);

// Create array of uncompleted todos
const uncompletedTodos = [];
for (const todo of todos) {
  if (!todo.completed) {
    uncompletedTodos.push(todo);
  }
}
console.log("Uncompleted todos:", uncompletedTodos);

// Add priority property
for (const todo of todos) {
  todo.priority = todo.completed ? "low" : "high";
}
console.log("Todos with priority:", todos);
```

### Exercise 11: Pattern Printing
```javascript
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
```

### Exercise 12: Number Guessing Game
```javascript
function numberGuessingGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let gameOver = false;

  while (!gameOver) {
    const guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
      console.log("Please enter a valid number");
      continue;
    }

    if (guess === randomNumber) {
      console.log(`Congratulations! You guessed the number in ${attempts} attempts`);
      gameOver = true;
    } else if (guess < randomNumber) {
      console.log("Higher!");
    } else {
      console.log("Lower!");
    }
  }

  const playAgain = prompt("Would you like to play again? (yes/no)");
  if (playAgain.toLowerCase() === "yes") {
    numberGuessingGame();
  }
}

numberGuessingGame();
```

### Exercise 13: Todo List Manager
```javascript
class TodoListManager {
  constructor() {
    this.todos = [];
  }

  addTodo(text) {
    this.todos.push({
      id: Date.now(),
      text,
      completed: false
    });
    console.log("Todo added:", text);
  }

  markAsComplete(id) {
    for (const todo of this.todos) {
      if (todo.id === id) {
        todo.completed = true;
        console.log("Todo marked as complete:", todo.text);
        break;
      }
    }
  }

  deleteTodo(id) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === id) {
        const deletedTodo = this.todos.splice(i, 1)[0];
        console.log("Todo deleted:", deletedTodo.text);
        break;
      }
    }
  }

  showAllTodos() {
    console.log("All todos:");
    for (const todo of this.todos) {
      console.log(`[${todo.completed ? "X" : " "}] ${todo.text}`);
    }
  }

  showCompletedTodos() {
    console.log("Completed todos:");
    for (const todo of this.todos) {
      if (todo.completed) {
        console.log(`[X] ${todo.text}`);
      }
    }
  }

  showUncompletedTodos() {
    console.log("Uncompleted todos:");
    for (const todo of this.todos) {
      if (!todo.completed) {
        console.log(`[ ] ${todo.text}`);
      }
    }
  }
}

// Example usage
const todoManager = new TodoListManager();
todoManager.addTodo("Learn JavaScript");
todoManager.addTodo("Build a todo app");
todoManager.addTodo("Deploy the app");
todoManager.showAllTodos();
todoManager.markAsComplete(todoManager.todos[0].id);
todoManager.showCompletedTodos();
todoManager.showUncompletedTodos();
todoManager.deleteTodo(todoManager.todos[1].id);
todoManager.showAllTodos();
```

</details> 