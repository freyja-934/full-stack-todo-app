// JavaScript Conditionals Practice
// Run this file with: node conditionals-practice.js

// ===== Exercise 1: Basic Conditionals =====
// TODO: Implement these basic conditional functions

function checkNumber(number) {
  // Your code here
  // Should return 'positive', 'negative', or 'zero'
}

function isLeapYear(year) {
  // Your code here
  // Should return true if year is a leap year
}

function validatePassword(password) {
  // Your code here
  // Should return true if password is valid
  // Should check length and complexity
}

function calculateGrade(score) {
  // Your code here
  // Should return letter grade based on score
}

// ===== Exercise 2: Switch Statements =====
// TODO: Implement these switch statement functions

function getDayOfWeek(number) {
  // Your code here
  // Should return day name based on number (1-7)
}

function getSeason(month) {
  // Your code here
  // Should return season based on month (1-12)
}

function calculateShippingCost(region) {
  // Your code here
  // Should return shipping cost based on region
}

function getHttpMessage(statusCode) {
  // Your code here
  // Should return message based on HTTP status code
}

// ===== Exercise 3: Ternary Operators =====
// TODO: Implement these ternary operator functions

const isAdult = (age) => {
  // Your code here
  // Should return true if age >= 18
}

const isEven = (number) => {
  // Your code here
  // Should return true if number is even
}

const formatPrice = (price, includeTax) => {
  // Your code here
  // Should return price with or without tax
}

const getBackgroundColor = (status) => {
  // Your code here
  // Should return color based on status
}

// ===== Exercise 4: Logical Operators =====
// TODO: Implement these logical operator functions

function validateUserInput(input) {
  // Your code here
  // Should return true if input is valid
}

function isNumberInRange(number, min, max) {
  // Your code here
  // Should return true if number is between min and max
}

function checkUserPermission(user, permission) {
  // Your code here
  // Should return true if user has permission
}

function validateForm(formData) {
  // Your code here
  // Should return true if form data is valid
}

// ===== Exercise 5: Complex Conditions =====
// TODO: Implement these complex condition functions

function validateCreditCard(number) {
  // Your code here
  // Should return true if credit card number is valid
}

function isValidTriangle(a, b, c) {
  // Your code here
  // Should return true if triangle is valid
}

function isBusinessDay(date) {
  // Your code here
  // Should return true if date is a business day
}

function validateEmail(email) {
  // Your code here
  // Should return true if email is valid
}

// ===== Challenge Exercise: Todo Item Validator =====
// TODO: Implement this todo validator function

function validateTodo(todo) {
  // Your code here
  // Should validate:
  // - title (not empty, valid length)
  // - due date (in future)
  // - priority (high, medium, low)
  // - tags (valid, not empty)
  // - status (pending, in-progress, completed)
  // Return object with validation results
}

// ===== Test Your Code =====
// Uncomment and run the tests you want to try

// Test Exercise 1
console.log('\n=== Testing Basic Conditionals ===');
console.log('Number Check:', checkNumber(5));
console.log('Leap Year:', isLeapYear(2024));
console.log('Password Valid:', validatePassword('Password123!'));
console.log('Grade:', calculateGrade(85));

// Test Exercise 2
console.log('\n=== Testing Switch Statements ===');
console.log('Day of Week:', getDayOfWeek(1));
console.log('Season:', getSeason(3));
console.log('Shipping Cost:', calculateShippingCost('US'));
console.log('HTTP Message:', getHttpMessage(404));

// Test Exercise 3
console.log('\n=== Testing Ternary Operators ===');
console.log('Is Adult:', isAdult(20));
console.log('Is Even:', isEven(4));
console.log('Price with Tax:', formatPrice(100, true));
console.log('Background Color:', getBackgroundColor('success'));

// Test Exercise 4
console.log('\n=== Testing Logical Operators ===');
console.log('User Input Valid:', validateUserInput('test'));
console.log('Number in Range:', isNumberInRange(5, 1, 10));
console.log('User Permission:', checkUserPermission({ role: 'admin' }, 'delete'));
console.log('Form Valid:', validateForm({ name: 'John', email: 'john@example.com' }));

// Test Exercise 5
console.log('\n=== Testing Complex Conditions ===');
console.log('Credit Card Valid:', validateCreditCard('4111111111111111'));
console.log('Triangle Valid:', isValidTriangle(3, 4, 5));
console.log('Business Day:', isBusinessDay(new Date()));
console.log('Email Valid:', validateEmail('test@example.com'));

// Test Challenge Exercise
console.log('\n=== Testing Todo Validator ===');
const todo = {
  title: 'Learn JavaScript',
  dueDate: new Date('2024-03-20'),
  priority: 'high',
  tags: ['javascript', 'learning'],
  status: 'pending'
};
console.log('Todo Valid:', validateTodo(todo));

// ===== How to Use This File =====
/*
1. Implement the TODO sections in each exercise
2. Uncomment the tests you want to run
3. Run the file with Node.js:
   node conditionals-practice.js

Tips:
- Start with Exercise 1 and work your way up
- Test each function as you implement it
- Check the console output for results
- Add more test cases as needed
*/ 