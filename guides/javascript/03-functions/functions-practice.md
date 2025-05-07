# JavaScript Functions Practice

Practice exercises to reinforce your understanding of functions, parameters, and scope in JavaScript.

## Exercise 1: Basic Functions
Create functions that:
1. Calculate the area of a rectangle
2. Convert temperature from Celsius to Fahrenheit
3. Check if a number is even or odd
4. Generate a random number between two values

```javascript
// TODO: Create basic functions
// HINT: Use function declarations with clear parameter names
// HINT: Include return statements for calculations
// HINT: Add input validation where appropriate
// HINT: Use template literals for string outputs
```

## Exercise 2: Arrow Functions
Convert the following functions to arrow functions:
1. A function that doubles a number
2. A function that checks if a string is empty
3. A function that calculates the average of an array
4. A function that formats a name (first + last)

```javascript
// TODO: Convert to arrow functions
// HINT: Use arrow function syntax (=>)
// HINT: For single parameters, parentheses are optional
// HINT: For single expressions, return is implicit
// HINT: For multiple lines, use curly braces and explicit return
```

## Exercise 3: Function Scope
Create a program that demonstrates:
1. Global variables
2. Function-scoped variables
3. Block-scoped variables
4. Variable shadowing in functions

```javascript
// TODO: Demonstrate function scope
// HINT: Use let/const for block scope
// HINT: Use var for function scope
// HINT: Create nested functions to show scope chain
// HINT: Use console.log to show variable accessibility
```

## Exercise 4: Callback Functions
Create functions that:
1. Filter an array of numbers
2. Map an array of strings
3. Reduce an array to a single value
4. Sort an array of objects

```javascript
// TODO: Implement callback functions
// HINT: Use array methods (filter, map, reduce, sort)
// HINT: Pass functions as arguments
// HINT: Use arrow functions for callbacks
// HINT: Consider using optional parameters
```

## Exercise 5: Higher-Order Functions
Create a higher-order function that:
1. Takes a function as an argument
2. Returns a new function
3. Modifies the behavior of the input function
4. Maintains the original function's context

```javascript
// TODO: Create higher-order functions
// HINT: Use function composition
// HINT: Consider function currying
// HINT: Handle function context with bind/call/apply
// HINT: Use closure to maintain state
```

## Challenge Exercise: Todo List Manager
Create a todo list manager with functions that:
- Add a new todo
- Mark a todo as complete
- Filter todos by status
- Sort todos by date
- Calculate completion statistics

```javascript
// Example todo structure
const todo = {
  id: 1,
  title: "Learn JavaScript",
  completed: false,
  createdAt: new Date(),
  priority: "high"
};

// TODO: Create todo list functions
// HINT: Use array methods for filtering and sorting
// HINT: Use Date objects for timestamps
// HINT: Implement error handling for invalid inputs
// HINT: Use object methods for todo operations
// HINT: Consider using reduce for statistics
```

## Testing Your Code

1. Test each function with different inputs
2. Verify return values
3. Check error handling
4. Test scope behavior
5. Verify callback execution
6. Test higher-order functions

## Common Issues to Watch For

1. **Scope Issues**
   - Accessing variables outside scope
   - Context loss in callbacks
   - Variable shadowing

2. **Parameter Problems**
   - Missing parameters
   - Wrong parameter order
   - Default values

3. **Return Value Issues**
   - Missing return statements
   - Implicit returns in arrow functions
   - Undefined returns

## Next Steps

After completing these exercises, you should:
1. Understand function declarations and expressions
2. Be comfortable with arrow functions
3. Understand function scope
4. Know how to use callbacks
5. Understand higher-order functions

Move on to the next guide: [Conditionals](../04-conditionals/conditionals.md) 