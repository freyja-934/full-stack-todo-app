# Reference Variables Practice Exercises

These exercises will help you understand how reference variables work in JavaScript and how to handle them properly.

## Exercise 1: Array References

Create an array of todo items and demonstrate reference behavior:

```javascript
// Your code here
```

## Exercise 2: Object References

Create an object with nested properties and show how deep copying works:

```javascript
// Your code here
```

## Exercise 3: Accidental Reference Sharing

Write code that accidentally modifies data through references:

```javascript
// Your code here
```

## Exercise 4: Fix Reference Issues

Fix the reference issues in your previous exercise:

```javascript
// Your code here
```

## Exercise 5: Safe Updates

Create a function that safely updates a todo item without modifying the original:

```javascript
// Your code here
```

## Exercise 6: Array Methods

Demonstrate the difference between array methods that modify the original array and those that return a new array:

```javascript
// Your code here
```

## Exercise 7: Nested Object References

Create a complex object with nested arrays and objects, then demonstrate how changes affect the original:

```javascript
// Your code here
```

## Exercise 8: Practical Application

Create a simple todo list manager that demonstrates proper handling of reference types:

```javascript
// Your code here
```

## Exercise 9: Debugging Reference Issues

Debug the following code that has reference-related bugs:

```javascript
// Buggy code
const user = {
  name: "John",
  preferences: {
    theme: "dark",
    notifications: true
  }
};

const userCopy = user;
userCopy.name = "Jane";

const userDeepCopy = JSON.parse(JSON.stringify(user));
userDeepCopy.preferences.theme = "light";

console.log(user.name); // What will this output?
console.log(user.preferences.theme); // What will this output?

// Fix the code
```

## Exercise 10: Challenge

Create a function that takes an array of objects and returns a new array with all objects deeply copied, ensuring that modifications to the returned array don't affect the original:

```javascript
// Your code here
``` 