# Conditionals

## Why It's Important

Conditionals allow your program to make decisions based on certain conditions. They're essential for:
- Controlling program flow
- Responding to user input
- Handling different scenarios
- Creating interactive applications

**Real-World Example:**
In a todo application, you might use conditionals to show different UI elements based on whether a task is completed or not.

## Key Concepts

### if / else if / else Statements

```javascript
// Basic if statement
if (condition) {
  // Code to execute if condition is true
}

// if-else statement
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}

// if-else if-else statement
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if all conditions are false
}
```

### Comparison Operators

```javascript
// Equal to (==) - Checks if values are equal (with type coercion)
console.log(5 == "5"); // true

// Strictly equal to (===) - Checks if values and types are equal
console.log(5 === "5"); // false

// Not equal to (!=)
console.log(5 != "6"); // true

// Strictly not equal to (!==)
console.log(5 !== "5"); // true

// Greater than (>)
console.log(5 > 3); // true

// Less than (<)
console.log(3 < 5); // true

// Greater than or equal to (>=)
console.log(5 >= 5); // true

// Less than or equal to (<=)
console.log(5 <= 5); // true
```

### Logical Operators

```javascript
// AND (&&) - Both conditions must be true
console.log(true && true); // true
console.log(true && false); // false

// OR (||) - At least one condition must be true
console.log(true || false); // true
console.log(false || false); // false

// NOT (!) - Inverts the condition
console.log(!true); // false
console.log(!false); // true
```

### Ternary Operator

```javascript
// Shorthand for if-else
const result = condition ? valueIfTrue : valueIfFalse;

// Example
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
```

### Switch Statement

```javascript
// Alternative to multiple if-else if statements
switch (value) {
  case value1:
    // Code to execute if value === value1
    break;
  case value2:
    // Code to execute if value === value2
    break;
  default:
    // Code to execute if value doesn't match any case
}
```

## Code Examples

### Basic if Statement

```javascript
// Check if a number is positive
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

console.log(isPositive(5)); // true
console.log(isPositive(-3)); // false
```

### if-else Statement

```javascript
// Determine if a user is an adult or minor
function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(checkAge(20)); // Adult
console.log(checkAge(15)); // Minor
```

### if-else if-else Statement

```javascript
// Determine grade based on score
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95)); // A
console.log(getGrade(85)); // B
console.log(getGrade(75)); // C
console.log(getGrade(65)); // D
console.log(getGrade(55)); // F
```

### Switch Statement

```javascript
// Determine day of the week
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

console.log(getDayName(0)); // Sunday
console.log(getDayName(3)); // Wednesday
console.log(getDayName(6)); // Saturday
console.log(getDayName(7)); // Invalid day
```

### Ternary Operator

```javascript
// Determine if a number is even or odd
function isEven(number) {
  return number % 2 === 0 ? true : false;
}

// Shorthand version
function isEvenShort(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

### Logical Operators

```javascript
// Check if a user can access a feature
function canAccessFeature(user) {
  // User must be logged in AND have a premium subscription
  return user.isLoggedIn && user.hasPremiumSubscription;
}

// Check if a user needs to reset their password
function needsPasswordReset(user) {
  // User has never logged in OR their password is expired
  return !user.hasLoggedIn || user.passwordExpired;
}

const user1 = {
  isLoggedIn: true,
  hasPremiumSubscription: true,
  hasLoggedIn: true,
  passwordExpired: false
};

const user2 = {
  isLoggedIn: true,
  hasPremiumSubscription: false,
  hasLoggedIn: false,
  passwordExpired: true
};

console.log(canAccessFeature(user1)); // true
console.log(canAccessFeature(user2)); // false
console.log(needsPasswordReset(user1)); // false
console.log(needsPasswordReset(user2)); // true
```

### Nested Conditionals

```javascript
// Determine shipping cost based on order total and destination
function calculateShipping(orderTotal, destination) {
  if (orderTotal >= 100) {
    // Free shipping for orders over $100
    return 0;
  } else {
    if (destination === "domestic") {
      return 5.99;
    } else if (destination === "international") {
      return 14.99;
    } else {
      return "Invalid destination";
    }
  }
}

console.log(calculateShipping(150, "domestic")); // 0
console.log(calculateShipping(50, "domestic")); // 5.99
console.log(calculateShipping(50, "international")); // 14.99
console.log(calculateShipping(50, "mars")); // Invalid destination
```

## Practice Exercises

1. Write a function that checks if a number is positive, negative, or zero
2. Use a switch statement to print a message based on the day of the week
3. Create a function that determines if a year is a leap year
4. Write a function that returns the letter grade for a numerical score
5. Create a function that checks if a string is a palindrome

## Related Practice

Check out the [Conditionals practice exercises](../../practice/js-fundamentals/conditionals.md) to test your knowledge.

## Next Steps

After understanding conditionals, move on to [Loops](./loops.md) to learn how to repeat actions in your code. 