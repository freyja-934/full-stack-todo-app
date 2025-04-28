# Reference Variables

## Why It's Important

Reference variables (arrays and objects) behave differently from primitive variables (strings, numbers, booleans). Understanding this difference is crucial for working with complex data structures in JavaScript.

**Real-World Example:**
Managing a list of todo items or user preferences in your application.

## Key Concepts

### Reference vs. Value

1. **Primitive Types** (Value Types):
   - When you assign a primitive value, JavaScript creates a copy
   - Changes to one variable don't affect others
   - Examples: strings, numbers, booleans

2. **Reference Types**:
   - When you assign an object or array, JavaScript creates a reference
   - Multiple variables can point to the same data
   - Changes to one variable affect all references
   - Examples: arrays, objects

### Memory Model

```javascript
// Primitive (Value) Type
let x = 5;
let y = x;  // Creates a copy
x = 10;     // y remains 5

// Reference Type
let arr1 = [1, 2, 3];
let arr2 = arr1;  // Creates a reference
arr1.push(4);     // arr2 also changes
```

## Code Examples

### Array References

```javascript
// Creating references
const originalTodos = ["Learn JS", "Build app", "Deploy"];
const todoCopy = originalTodos;

// Modifying through reference
todoCopy.push("Test");
console.log(originalTodos); // ["Learn JS", "Build app", "Deploy", "Test"]

// Creating a true copy
const todoClone = [...originalTodos]; // Spread operator
todoClone.push("Document");
console.log(originalTodos); // Unchanged
```

### Object References

```javascript
// User object
const user = {
  name: "John",
  preferences: {
    theme: "dark",
    notifications: true
  }
};

// Creating a reference
const userRef = user;
userRef.name = "Jane";
console.log(user.name); // "Jane"

// Creating a shallow copy
const userCopy = { ...user };
userCopy.name = "Bob";
console.log(user.name); // "Jane" (unchanged)

// Nested objects still share references
userCopy.preferences.theme = "light";
console.log(user.preferences.theme); // "light" (changed!)
```

### Deep Copying

```javascript
// Deep copy using JSON
const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.preferences.theme = "dark";
console.log(user.preferences.theme); // "light" (unchanged)

// Modern way using structuredClone
const modernDeepCopy = structuredClone(user);
modernDeepCopy.preferences.notifications = false;
console.log(user.preferences.notifications); // true (unchanged)
```

### Common Pitfalls

```javascript
// 1. Accidental reference sharing
const todos = [
  { title: "Task 1", completed: false },
  { title: "Task 2", completed: false }
];
const filteredTodos = todos.filter(todo => !todo.completed);
filteredTodos[0].completed = true; // Also modifies todos!

// 2. Array methods that modify vs. return new array
const numbers = [1, 2, 3];
numbers.push(4);     // Modifies original
const doubled = numbers.map(n => n * 2); // Returns new array

// 3. Object property assignment
const config = { theme: "dark" };
config.theme = "light";     // Modifies original
const newConfig = { ...config, theme: "dark" }; // Creates new object
```

## Practice Exercises

1. Create an array of todo items and demonstrate reference behavior
2. Create an object with nested properties and show how deep copying works
3. Write code that accidentally modifies data through references
4. Fix the reference issues in the previous exercise
5. Create a function that safely updates a todo item without modifying the original

## Related Practice

Check out the [Reference Variables practice exercises](../../practice/js-fundamentals/reference-variables.md) to test your knowledge.

## Next Steps

After understanding reference variables, move on to [Functions](./functions.md) to learn how to organize and reuse your code. 