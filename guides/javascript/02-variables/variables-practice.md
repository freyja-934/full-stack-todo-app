# JavaScript Variables Practice

Practice exercises to reinforce your understanding of variables, data types, and variable declaration in JavaScript.

## Exercise 1: Variable Declaration
Create variables to store information about yourself:
- Your name
- Your age
- Your favorite color
- Whether you like programming (boolean)
- Your favorite numbers (array)
- Your address (object with street, city, state, zip)

```javascript
// TODO: Declare variables using let, const, and var appropriately
// HINT: Use const for values that won't change
// HINT: Use let for values that might change
// HINT: Use appropriate data types for each piece of information
```

## Exercise 2: Type Conversion
Create a program that:
1. Takes a string number (e.g., "42")
2. Converts it to a number
3. Adds 10 to it
4. Converts it back to a string
5. Logs the result

```javascript
// TODO: Implement type conversion
// HINT: Use Number() to convert to number
// HINT: Use String() to convert to string
// HINT: Use template literals for the final output
```

## Exercise 3: Variable Scope
Create a program that demonstrates:
1. Global scope
2. Function scope
3. Block scope
4. Variable shadowing

```javascript
// TODO: Create variables in different scopes
// HINT: Use let for block scope
// HINT: Use var for function scope
// HINT: Create a variable that shadows another
```

## Exercise 4: Constants and Mutability
Create a program that demonstrates:
1. A constant object that can be modified
2. A constant array that can be modified
3. A constant primitive that cannot be modified

```javascript
// TODO: Create and modify constants
// HINT: const only prevents reassignment
// HINT: Object properties can still be modified
// HINT: Array methods can still be used
```

## Exercise 5: Variable Hoisting
Create a program that demonstrates:
1. Variable hoisting with var
2. Variable hoisting with let
3. The temporal dead zone

```javascript
// TODO: Demonstrate hoisting behavior
// HINT: Try accessing variables before declaration
// HINT: Compare var and let behavior
// HINT: Show the temporal dead zone with let
```

## Challenge Exercise
Create a todo item variable that includes:
- A unique ID (number)
- A title (string)
- A completed status (boolean)
- A due date (Date object)
- Tags (array of strings)
- Priority (object with level and color)

```javascript
// TODO: Create a complex todo item
// HINT: Use appropriate data types
// HINT: Use const for the main object
// HINT: Include nested objects and arrays
```

## Testing Your Code

1. Run each exercise in your browser's console or Node.js
2. Check that variables are declared correctly
3. Verify type conversions work as expected
4. Confirm scope behavior is correct
5. Test constant mutability
6. Verify hoisting behavior

## Common Issues to Watch For

1. **Type Errors**
   - Using wrong data types
   - Incorrect type conversions
   - Undefined variables

2. **Scope Issues**
   - Accessing variables outside their scope
   - Variable shadowing problems
   - Hoisting confusion

3. **Constant Errors**
   - Trying to reassign constants
   - Confusing const with immutability
   - Modifying const objects incorrectly

## Next Steps

After completing these exercises, you should:
1. Understand variable declaration methods
2. Be comfortable with type conversion
3. Understand variable scope
4. Know when to use const vs let
5. Understand hoisting behavior

Move on to the next guide: [Functions](../03-functions/functions.md) 