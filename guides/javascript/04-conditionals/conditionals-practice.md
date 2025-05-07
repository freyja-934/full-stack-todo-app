# JavaScript Conditionals Practice

Practice exercises to reinforce your understanding of conditional statements and logical operators in JavaScript.

## Exercise 1: Basic Conditionals
Create a program that:
1. Checks if a number is positive, negative, or zero
2. Determines if a year is a leap year
3. Validates a password (length and complexity)
4. Calculates a grade based on a score

```javascript
// TODO: Implement basic conditionals
// HINT: Use if/else statements with clear conditions
// HINT: Use comparison operators (>, <, ===, !==)
// HINT: Consider edge cases (zero, empty strings)
// HINT: Use logical operators for complex conditions
```

## Exercise 2: Switch Statements
Create a program that:
1. Converts a number to a day of the week
2. Determines the season based on a month
3. Calculates shipping cost based on region
4. Returns a message based on HTTP status code

```javascript
// TODO: Implement switch statements
// HINT: Use switch/case syntax with break statements
// HINT: Include default cases for invalid inputs
// HINT: Consider fall-through behavior when needed
// HINT: Use strict equality (===) for case matching
```

## Exercise 3: Ternary Operators
Convert the following if/else statements to ternary operators:
1. Check if a user is an adult
2. Determine if a number is even or odd
3. Format a price with or without tax
4. Set a background color based on status

```javascript
// TODO: Convert to ternary operators
// HINT: Use ? and : operators for simple conditions
// HINT: Keep it readable by using parentheses
// HINT: Consider nesting ternaries for complex logic
// HINT: Use template literals for string formatting
```

## Exercise 4: Logical Operators
Create a program that:
1. Validates user input (not empty and valid format)
2. Checks if a number is between two values
3. Determines if a user has permission
4. Validates a form submission

```javascript
// TODO: Use logical operators
// HINT: Use && for AND conditions
// HINT: Use || for OR conditions
// HINT: Use ! for NOT conditions
// HINT: Consider operator precedence with parentheses
// HINT: Use short-circuit evaluation for efficiency
```

## Exercise 5: Complex Conditions
Create a program that:
1. Validates a credit card number
2. Determines if a triangle is valid
3. Checks if a date is a business day
4. Validates an email address

```javascript
// TODO: Create complex conditions
// HINT: Break down complex conditions into smaller parts
// HINT: Use parentheses to group related conditions
// HINT: Consider all edge cases and invalid inputs
// HINT: Use regular expressions for pattern matching
```

## Challenge Exercise: Todo Item Validator
Create a todo item validator that checks:
- Title is not empty and has valid length
- Due date is in the future
- Priority is valid (high, medium, low)
- Tags are valid and not empty
- Status is valid (pending, in-progress, completed)

```javascript
// Example todo structure
const todo = {
  title: "Learn JavaScript",
  dueDate: new Date('2024-03-20'),
  priority: 'high',
  tags: ['javascript', 'learning'],
  status: 'pending'
};

// TODO: Create todo validator
// HINT: Use multiple conditions with logical operators
// HINT: Return an object with validation results
// HINT: Handle all edge cases (empty strings, invalid dates)
// HINT: Use array methods to validate tags
// HINT: Consider using a validation library for complex rules
```

## Testing Your Code

1. Test with valid inputs
2. Test with invalid inputs
3. Test edge cases
4. Test boundary conditions
5. Test error cases

## Common Issues to Watch For

1. **Logic Errors**
   - Incorrect operator usage
   - Missing conditions
   - Wrong operator precedence

2. **Type Issues**
   - Type coercion
   - Comparing different types
   - Truthy/falsy values

3. **Edge Cases**
   - Empty values
   - Null/undefined
   - Boundary values

## Next Steps

After completing these exercises, you should:
1. Understand if/else statements
2. Be comfortable with switch statements
3. Know how to use ternary operators
4. Understand logical operators
5. Handle complex conditions

Move on to the next guide: [Loops](../05-loops/loops.md) 