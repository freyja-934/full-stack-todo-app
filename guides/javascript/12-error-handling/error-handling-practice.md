# JavaScript Error Handling Practice

Practice exercises to reinforce your understanding of error handling in JavaScript.

## Exercise 1: Try-Catch Blocks
Create programs that:
1. Handle division by zero
2. Process invalid JSON data
3. Handle array index out of bounds
4. Validate user input

```javascript
// TODO: Implement try-catch blocks
// HINT: Use try { } catch (error) { }
// HINT: Access error.message
// HINT: Use finally block
// HINT: Handle specific error types
```

## Exercise 2: Custom Errors
Create programs that:
1. Define custom error classes
2. Throw custom errors
3. Handle specific error types
4. Chain error handling

```javascript
// TODO: Create custom errors
// HINT: Extend Error class
// HINT: Add custom properties
// HINT: Use instanceof
// HINT: Implement error hierarchy
```

## Exercise 3: Async Error Handling
Create programs that:
1. Handle promise rejections
2. Process async/await errors
3. Implement error boundaries
4. Retry failed operations

```javascript
// TODO: Handle async errors
// HINT: Use .catch() with promises
// HINT: Try-catch with async/await
// HINT: Handle multiple promises
// HINT: Implement retry logic
```

## Exercise 4: Error Logging
Create programs that:
1. Log errors to console
2. Format error messages
3. Track error frequency
4. Report errors to service

```javascript
// TODO: Implement error logging
// HINT: Use console.error
// HINT: Format stack traces
// HINT: Add timestamps
// HINT: Include context
```

## Exercise 5: Error Prevention
Create programs that:
1. Validate function parameters
2. Check data types
3. Handle edge cases
4. Implement fallbacks

```javascript
// TODO: Prevent errors
// HINT: Use type checking
// HINT: Validate inputs
// HINT: Provide defaults
// HINT: Handle null/undefined
```

## Challenge Exercise
Create a todo application error handler that:
- Validates todo data
- Handles API errors
- Manages state errors
- Provides user feedback
- Implements recovery strategies

```javascript
// TODO: Create error handler
// HINT: Define error types
// HINT: Implement recovery
// HINT: Add logging
// HINT: Show user messages
```

## Testing Your Code

1. Test with invalid inputs
2. Test with network errors
3. Test with state errors
4. Test error recovery
5. Verify error messages

## Common Issues to Watch For

1. **Silent Failures**
   - Uncaught errors
   - Missing error handling
   - Swallowed exceptions

2. **Error Propagation**
   - Lost error context
   - Incorrect error types
   - Missing stack traces

3. **Async Issues**
   - Unhandled rejections
   - Race conditions
   - Timing problems

## Next Steps

After completing these exercises, you should:
1. Understand error types
2. Handle errors properly
3. Create custom errors
4. Implement logging
5. Prevent common errors

Move on to the next guide: [Promises & Async/Await](./promises-async-await.md) 