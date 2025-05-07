# JavaScript Error Handling Practice

Practice exercises to reinforce your understanding of error handling in JavaScript.

## Exercise 1: Basic Error Handling
Create functions that:
1. Handle division by zero
2. Validate user input
3. Process array operations safely
4. Handle file operations

```javascript
// TODO: Implement basic error handling
// HINT: Use try/catch blocks
// HINT: Check for edge cases
// HINT: Provide meaningful error messages
// HINT: Use appropriate error types
```

## Exercise 2: Custom Errors
Create custom error classes for:
1. Validation errors
2. Network errors
3. Authentication errors
4. Business logic errors

```javascript
// TODO: Create custom error classes
// HINT: Extend the Error class
// HINT: Add custom properties
// HINT: Implement error hierarchy
// HINT: Use instanceof for type checking
```

## Exercise 3: Async Error Handling
Create async functions that:
1. Handle API errors
2. Implement retry logic
3. Process multiple promises
4. Handle timeouts

```javascript
// TODO: Implement async error handling
// HINT: Use try/catch with async/await
// HINT: Handle promise rejections
// HINT: Implement error recovery
// HINT: Use Promise.all and Promise.race
```

## Exercise 4: Error Boundaries
Create error boundary components that:
1. Catch rendering errors
2. Display fallback UI
3. Log error information
4. Recover from errors

```javascript
// TODO: Create error boundaries
// HINT: Use React error boundary lifecycle
// HINT: Implement fallback rendering
// HINT: Add error logging
// HINT: Handle error recovery
```

## Exercise 5: Error Propagation
Create functions that:
1. Propagate errors correctly
2. Transform error types
3. Add context to errors
4. Handle error chains

```javascript
// TODO: Implement error propagation
// HINT: Use error wrapping
// HINT: Preserve error stack
// HINT: Add error context
// HINT: Handle error chains
```

## Challenge Exercise: Todo App Error Handling
Create a robust error handling system for a todo app that:
- Validates todo input
- Handles API errors
- Manages concurrent operations
- Provides user feedback
- Implements retry logic

```javascript
// Example todo service with error handling
class TodoService {
  constructor(maxRetries = 3) {
    this.maxRetries = maxRetries;
  }

  async addTodo(todo) {
    // TODO: Implement todo addition with error handling
    // HINT: Validate todo input
    // HINT: Handle API errors
    // HINT: Implement retry logic
    // HINT: Provide user feedback
  }

  async updateTodo(id, updates) {
    // TODO: Implement todo update with error handling
    // HINT: Check todo existence
    // HINT: Validate updates
    // HINT: Handle conflicts
    // HINT: Manage concurrent updates
  }

  async deleteTodo(id) {
    // TODO: Implement todo deletion with error handling
    // HINT: Handle not found errors
    // HINT: Manage dependencies
    // HINT: Implement soft delete
    // HINT: Handle cascading deletes
  }
}

// Example usage
const todoService = new TodoService();
try {
  const todo = await todoService.addTodo({
    title: "Learn Error Handling",
    completed: false
  });
  console.log('Todo added:', todo);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation failed:', error.message);
  } else if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Testing Your Code

1. Test with valid inputs
2. Test with invalid inputs
3. Test error recovery
4. Test error propagation
5. Test concurrent operations

## Common Issues to Watch For

1. **Error Swallowing**
   - Catching errors without handling
   - Missing error logging
   - Silent failures

2. **Error Type Issues**
   - Wrong error types
   - Missing error context
   - Lost error stack

3. **Async Error Problems**
   - Unhandled rejections
   - Missing await
   - Race conditions

## Next Steps

After completing these exercises, you should:
1. Understand error handling patterns
2. Know how to create custom errors
3. Handle async errors properly
4. Implement error boundaries
5. Manage error propagation

Move on to the next guide: [Promises & Async/Await](../08-promises-async-await/promises-async-await.md) 