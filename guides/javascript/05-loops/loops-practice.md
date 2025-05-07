# JavaScript Loops Practice

Practice exercises to reinforce your understanding of loops and iteration in JavaScript.

## Exercise 1: For Loops
Create programs that:
1. Print numbers from 1 to 10
2. Calculate the sum of numbers from 1 to 100
3. Print a multiplication table
4. Count the frequency of letters in a string

```javascript
// TODO: Implement for loops
// HINT: Use for (let i = 0; i < n; i++) for counting
// HINT: Use for (let i = start; i <= end; i++) for ranges
// HINT: Consider using template literals for output
// HINT: Use an object to store frequencies
```

## Exercise 2: While Loops
Create programs that:
1. Generate Fibonacci numbers until a limit
2. Find the greatest common divisor
3. Simulate a countdown timer
4. Process user input until valid

```javascript
// TODO: Implement while loops
// HINT: Use while (condition) for unknown iterations
// HINT: Update loop variables inside the loop
// HINT: Use break or return to exit loops
// HINT: Consider using a flag variable
```

## Exercise 3: For...of Loops
Create programs that:
1. Sum all numbers in an array
2. Find the longest string in an array
3. Count vowels in each string
4. Create a frequency map of array elements

```javascript
// TODO: Implement for...of loops
// HINT: Use for (const item of array) for array iteration
// HINT: Use for (const char of string) for string iteration
// HINT: Use for (const value of set) for Set iteration
// HINT: Consider using Map for frequency counting
```

## Exercise 4: For...in Loops
Create programs that:
1. Print all properties of an object
2. Calculate the sum of all numeric properties
3. Create a copy of an object with modified values
4. Count the number of properties in nested objects

```javascript
// TODO: Implement for...in loops
// HINT: Use for (const key in object) for object iteration
// HINT: Check hasOwnProperty to avoid inherited properties
// HINT: Use Object.keys() for array-like iteration
// HINT: Consider recursion for nested objects
```

## Exercise 5: Array Methods
Create programs that:
1. Filter an array of numbers
2. Map an array of strings
3. Reduce an array to a single value
4. Sort an array of objects

```javascript
// TODO: Use array methods
// HINT: Use filter() for conditional selection
// HINT: Use map() for transformation
// HINT: Use reduce() for accumulation
// HINT: Use sort() with comparison function
// HINT: Consider method chaining for complex operations
```

## Challenge Exercise: Todo List Processor
Create a todo list processor that:
- Filters todos by status
- Sorts todos by date
- Groups todos by priority
- Calculates completion statistics
- Updates todo properties

```javascript
// Example todo structure
const todos = [
  {
    id: 1,
    title: "Learn JavaScript",
    completed: false,
    dueDate: new Date('2024-03-20'),
    priority: 'high'
  },
  {
    id: 2,
    title: "Build a todo app",
    completed: true,
    dueDate: new Date('2024-03-15'),
    priority: 'medium'
  }
];

// TODO: Create todo processor
// HINT: Use filter() for status filtering
// HINT: Use sort() with date comparison
// HINT: Use reduce() for grouping and statistics
// HINT: Use map() for property updates
// HINT: Consider using Object.groupBy() for grouping
```

## Testing Your Code

1. Test with empty arrays/objects
2. Test with single items
3. Test with large datasets
4. Test edge cases
5. Verify loop termination

## Common Issues to Watch For

1. **Infinite Loops**
   - Missing increment/decrement
   - Incorrect loop conditions
   - No exit condition

2. **Off-by-One Errors**
   - Array index bounds
   - Loop counter mistakes
   - String length issues

3. **Performance Issues**
   - Nested loops
   - Unnecessary iterations
   - Memory usage

## Next Steps

After completing these exercises, you should:
1. Understand different loop types
2. Know when to use each loop
3. Be comfortable with array methods
4. Handle nested iterations
5. Optimize loop performance

Move on to the next guide: [Arrays & Objects](../06-arrays-objects/arrays-objects.md) 