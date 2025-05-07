# JavaScript Arrays & Objects Practice

Practice exercises to reinforce your understanding of arrays and objects in JavaScript.

## Exercise 1: Array Operations
Create programs that:
1. Add/remove elements from an array
2. Find elements in an array
3. Sort array elements
4. Combine multiple arrays

```javascript
// TODO: Implement array operations
// HINT: Use push() and pop() for end operations
// HINT: Use shift() and unshift() for start operations
// HINT: Use find() and filter() for searching
// HINT: Use sort() with comparison function
// HINT: Use concat() or spread operator for combining
```

## Exercise 2: Array Methods
Create programs that:
1. Transform array elements
2. Filter array elements
3. Reduce array to a single value
4. Check array conditions

```javascript
// TODO: Use array methods
// HINT: Use map() for element transformation
// HINT: Use filter() for conditional selection
// HINT: Use reduce() for accumulation
// HINT: Use some() and every() for condition checking
// HINT: Use forEach() for side effects
```

## Exercise 3: Object Operations
Create programs that:
1. Add/remove object properties
2. Access nested properties
3. Create object copies
4. Merge multiple objects

```javascript
// TODO: Implement object operations
// HINT: Use dot notation for simple properties
// HINT: Use bracket notation for dynamic properties
// HINT: Use Object.assign() for shallow copies
// HINT: Use spread operator for merging
// HINT: Use optional chaining for nested access
```

## Exercise 4: Object Methods
Create programs that:
1. Check object properties
2. Create property descriptors
3. Freeze/seal objects
4. Create object prototypes

```javascript
// TODO: Use object methods
// HINT: Use hasOwnProperty() for own properties
// HINT: Use in operator for all properties
// HINT: Use Object.defineProperty() for descriptors
// HINT: Use Object.freeze() for immutability
// HINT: Use Object.create() for inheritance
```

## Exercise 5: Complex Data Structures
Create programs that:
1. Work with arrays of objects
2. Handle nested objects and arrays
3. Transform complex data structures
4. Query nested data

```javascript
// TODO: Work with complex data
// HINT: Use array methods with object properties
// HINT: Use recursion for deep traversal
// HINT: Consider using Map and Set
// HINT: Use structuredClone() for deep copies
```

## Challenge Exercise: Todo List Data Structure
Create a todo list data structure that:
- Stores todos with nested properties
- Groups todos by category
- Tracks todo dependencies
- Maintains todo history
- Supports todo relationships

```javascript
// Example todo structure
const todoSystem = {
  categories: {
    work: {
      id: 'work',
      name: 'Work',
      todos: [
        {
          id: 1,
          title: "Learn JavaScript",
          completed: false,
          priority: 'high',
          dependencies: [],
          history: [
            { action: 'created', timestamp: new Date() }
          ],
          relatedTodos: [2]
        }
      ]
    }
  },
  relationships: {
    blocks: [], // todo A blocks todo B
    requires: [], // todo A requires todo B
    related: [] // todo A is related to todo B
  }
};

// TODO: Create todo data structure
// HINT: Use Map for efficient lookups
// HINT: Use Set for unique relationships
// HINT: Implement circular dependency detection
// HINT: Use WeakMap for private data
// HINT: Consider using Proxy for validation
```

## Testing Your Code

1. Test with empty arrays/objects
2. Test with single items
3. Test with nested structures
4. Test edge cases
5. Verify data integrity

## Common Issues to Watch For

1. **Reference Issues**
   - Shallow vs deep copies
   - Object references
   - Array references

2. **Type Issues**
   - Mixed data types
   - Type coercion
   - Undefined properties

3. **Performance Issues**
   - Large data structures
   - Nested operations
   - Memory usage

## Next Steps

After completing these exercises, you should:
1. Understand array operations
2. Know object manipulation
3. Handle complex data structures
4. Use appropriate methods
5. Consider performance

Move on to the next guide: [Error Handling](../07-error-handling/error-handling.md) 