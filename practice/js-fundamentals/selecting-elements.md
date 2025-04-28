# Selecting Elements Practice Exercises

## Exercise 1: Basic Selection Methods
Given the following HTML, write JavaScript code to select elements using different methods:

```html
<div id="container">
    <h1 id="title">Todo List</h1>
    <div class="todo-list">
        <div class="todo-item">
            <input type="checkbox" class="todo-checkbox">
            <span class="todo-text">Learn JavaScript</span>
            <button class="delete-btn">Delete</button>
        </div>
        <div class="todo-item">
            <input type="checkbox" class="todo-checkbox">
            <span class="todo-text">Build a website</span>
            <button class="delete-btn">Delete</button>
        </div>
    </div>
    <form id="todo-form">
        <input type="text" id="new-todo" placeholder="Add a new todo">
        <button type="submit" id="add-btn">Add</button>
    </form>
</div>
```

1. Select the container div using `getElementById`
2. Select the title using `getElementById`
3. Select all todo items using `getElementsByClassName`
4. Select all delete buttons using `getElementsByClassName`
5. Select the form using `querySelector`
6. Select the new todo input using `querySelector`
7. Select all checkboxes using `querySelectorAll`
8. Select all todo text spans using `querySelectorAll`

## Exercise 2: Selecting Within Elements
Using the HTML from Exercise 1, write JavaScript code to:

1. Select the container div first, then select the title within it
2. Select the todo-list div first, then select all todo items within it
3. Select the first todo item, then select the checkbox and text within it
4. Select the form first, then select the input and button within it

## Exercise 3: Selecting by Attributes
Given the following HTML, write JavaScript code to select elements based on their attributes:

```html
<div class="user-profile">
    <img src="avatar.jpg" alt="User Avatar" data-user-id="123">
    <h2 data-user-name="John Doe">John Doe</h2>
    <p data-user-email="john@example.com">john@example.com</p>
    <div class="user-stats">
        <span data-stat="posts">42</span>
        <span data-stat="followers">128</span>
        <span data-stat="following">56</span>
    </div>
    <button data-action="edit">Edit Profile</button>
    <button data-action="delete">Delete Account</button>
</div>
```

1. Select the image element using its `alt` attribute
2. Select the user name element using its `data-user-name` attribute
3. Select the email element using its `data-user-email` attribute
4. Select all stat elements using their `data-stat` attribute
5. Select the edit button using its `data-action` attribute
6. Select the delete button using its `data-action` attribute

## Exercise 4: Selecting by Relationship
Using the HTML from Exercise 1, write JavaScript code to:

1. Select the first todo item, then select its parent element
2. Select the container div, then select all its children
3. Select the first todo item, then select its next sibling
4. Select the second todo item, then select its previous sibling
5. Select the form, then select its parent element

## Exercise 5: Converting Collections to Arrays
Using the HTML from Exercise 1, write JavaScript code to:

1. Select all todo items and convert the collection to an array using the spread operator
2. Select all delete buttons and convert the collection to an array using `Array.from()`
3. Use array methods (forEach, map, filter) on the converted arrays

## Exercise 6: Performance Optimization
Given the following JavaScript code, optimize it to avoid repeatedly querying the DOM:

```javascript
// Unoptimized code
document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.btn').classList.add('active');
    document.querySelector('.content').style.display = 'block';
    document.querySelector('.content').innerHTML = 'Button clicked!';
});

// Optimized code
// Your code here
```

## Exercise 7: Form Element Selection
Given the following HTML form, write JavaScript code to select form elements:

```html
<form id="registration-form">
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
    </div>
    <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" required>
    </div>
    <div class="form-group">
        <label for="terms">I agree to the terms and conditions</label>
        <input type="checkbox" id="terms" name="terms" required>
    </div>
    <button type="submit" id="submit-btn">Register</button>
</form>
```

1. Select the form element
2. Select the username input by its ID
3. Select the email input by its name attribute
4. Select the password input by its name attribute
5. Select the confirm password input by its name attribute
6. Select the terms checkbox by its ID
7. Select the submit button by its ID
8. Select all form inputs using a single selector

## Exercise 8: Data Attribute Selection
Given the following HTML, write JavaScript code to select elements based on data attributes:

```html
<div class="product-list">
    <div class="product" data-product-id="1" data-category="electronics">
        <h3>Smartphone</h3>
        <p class="price" data-currency="USD">$699</p>
        <button data-action="add-to-cart">Add to Cart</button>
    </div>
    <div class="product" data-product-id="2" data-category="clothing">
        <h3>T-Shirt</h3>
        <p class="price" data-currency="USD">$19.99</p>
        <button data-action="add-to-cart">Add to Cart</button>
    </div>
    <div class="product" data-product-id="3" data-category="electronics">
        <h3>Laptop</h3>
        <p class="price" data-currency="USD">$1299</p>
        <button data-action="add-to-cart">Add to Cart</button>
    </div>
</div>
```

1. Select all products
2. Select all products in the "electronics" category
3. Select all products in the "clothing" category
4. Select the product with ID "1"
5. Select all "Add to Cart" buttons
6. Select all price elements with currency "USD"

## Exercise 9: Multiple Selector Selection
Given the following HTML, write JavaScript code to select multiple elements with different selectors:

```html
<div class="dashboard">
    <header class="dashboard-header">
        <h1>Dashboard</h1>
        <nav class="dashboard-nav">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">Profile</a>
            <a href="#" class="nav-link">Settings</a>
        </nav>
    </header>
    <main class="dashboard-content">
        <section class="card">
            <h2>Statistics</h2>
            <div class="stat">Views: 1,234</div>
            <div class="stat">Likes: 567</div>
            <div class="stat">Comments: 89</div>
        </section>
        <section class="card">
            <h2>Recent Activity</h2>
            <ul class="activity-list">
                <li class="activity-item">Posted a new photo</li>
                <li class="activity-item">Liked a post</li>
                <li class="activity-item">Commented on a post</li>
            </ul>
        </section>
    </main>
    <footer class="dashboard-footer">
        <p>&copy; 2024 Dashboard</p>
    </footer>
</div>
```

1. Select all headings (h1 and h2)
2. Select all navigation links and activity items
3. Select all cards and stats
4. Select the header, main content, and footer

## Exercise 10: Challenge: Todo List Selector
Create a function that selects elements in a todo list based on different criteria:

```javascript
function selectTodoElements(criteria) {
    // Your code here
    // criteria can be: 'all', 'completed', 'active', 'by-id', 'by-text'
    // Return the selected elements
}
```

## Exercise 11: Challenge: DOM Traversal
Create functions to traverse the DOM in different ways:

```javascript
function getParent(element) {
    // Your code here
    // Return the parent element
}

function getChildren(element) {
    // Your code here
    // Return all children elements
}

function getNextSibling(element) {
    // Your code here
    // Return the next sibling element
}

function getPreviousSibling(element) {
    // Your code here
    // Return the previous sibling element
}

function getClosest(element, selector) {
    // Your code here
    // Return the closest ancestor element that matches the selector
}
```

## Exercise 12: Challenge: Element Collection Converter
Create a utility function to convert element collections to arrays with additional functionality:

```javascript
function convertToArray(elements, options = {}) {
    // Your code here
    // options can include: filter, map, sort
    // Return the processed array
}
```

## Exercise 13: Challenge: Smart Selector
Create a function that intelligently selects elements based on various criteria:

```javascript
function smartSelect(criteria) {
    // Your code here
    // criteria can be an object with properties like:
    // { tag: 'div', class: 'card', id: 'main', attribute: { name: 'data-id', value: '123' } }
    // Return the selected elements
}
```

## Solutions

<details>
<summary>Click to see solutions</summary>

### Exercise 1: Basic Selection Methods
```javascript
// 1. Select the container div using getElementById
const container = document.getElementById('container');

// 2. Select the title using getElementById
const title = document.getElementById('title');

// 3. Select all todo items using getElementsByClassName
const todoItems = document.getElementsByClassName('todo-item');

// 4. Select all delete buttons using getElementsByClassName
const deleteButtons = document.getElementsByClassName('delete-btn');

// 5. Select the form using querySelector
const form = document.querySelector('#todo-form');

// 6. Select the new todo input using querySelector
const newTodoInput = document.querySelector('#new-todo');

// 7. Select all checkboxes using querySelectorAll
const checkboxes = document.querySelectorAll('.todo-checkbox');

// 8. Select all todo text spans using querySelectorAll
const todoTexts = document.querySelectorAll('.todo-text');
```

### Exercise 2: Selecting Within Elements
```javascript
// 1. Select the container div first, then select the title within it
const container = document.getElementById('container');
const title = container.querySelector('#title');

// 2. Select the todo-list div first, then select all todo items within it
const todoList = container.querySelector('.todo-list');
const todoItems = todoList.getElementsByClassName('todo-item');

// 3. Select the first todo item, then select the checkbox and text within it
const firstTodoItem = todoItems[0];
const checkbox = firstTodoItem.querySelector('.todo-checkbox');
const text = firstTodoItem.querySelector('.todo-text');

// 4. Select the form first, then select the input and button within it
const form = container.querySelector('#todo-form');
const input = form.querySelector('#new-todo');
const button = form.querySelector('#add-btn');
```

### Exercise 3: Selecting by Attributes
```javascript
// 1. Select the image element using its alt attribute
const avatar = document.querySelector('img[alt="User Avatar"]');

// 2. Select the user name element using its data-user-name attribute
const userName = document.querySelector('[data-user-name="John Doe"]');

// 3. Select the email element using its data-user-email attribute
const userEmail = document.querySelector('[data-user-email="john@example.com"]');

// 4. Select all stat elements using their data-stat attribute
const stats = document.querySelectorAll('[data-stat]');

// 5. Select the edit button using its data-action attribute
const editButton = document.querySelector('[data-action="edit"]');

// 6. Select the delete button using its data-action attribute
const deleteButton = document.querySelector('[data-action="delete"]');
```

### Exercise 4: Selecting by Relationship
```javascript
// 1. Select the first todo item, then select its parent element
const firstTodoItem = document.querySelector('.todo-item');
const parent = firstTodoItem.parentNode;

// 2. Select the container div, then select all its children
const container = document.getElementById('container');
const children = container.children;

// 3. Select the first todo item, then select its next sibling
const firstTodoItem = document.querySelector('.todo-item');
const nextSibling = firstTodoItem.nextElementSibling;

// 4. Select the second todo item, then select its previous sibling
const secondTodoItem = document.querySelectorAll('.todo-item')[1];
const prevSibling = secondTodoItem.previousElementSibling;

// 5. Select the form, then select its parent element
const form = document.getElementById('todo-form');
const formParent = form.parentNode;
```

### Exercise 5: Converting Collections to Arrays
```javascript
// 1. Select all todo items and convert the collection to an array using the spread operator
const todoItems = [...document.getElementsByClassName('todo-item')];
console.log(todoItems);

// 2. Select all delete buttons and convert the collection to an array using Array.from()
const deleteButtons = Array.from(document.getElementsByClassName('delete-btn'));
console.log(deleteButtons);

// 3. Use array methods (forEach, map, filter) on the converted arrays
// forEach
todoItems.forEach(item => {
    console.log(item);
});

// map
const todoTexts = todoItems.map(item => item.querySelector('.todo-text').textContent);
console.log(todoTexts);

// filter
const completedTodos = todoItems.filter(item => item.querySelector('.todo-checkbox').checked);
console.log(completedTodos);
```

### Exercise 6: Performance Optimization
```javascript
// Optimized code
const button = document.querySelector('.btn');
const content = document.querySelector('.content');

button.addEventListener('click', () => {
    button.classList.add('active');
    content.style.display = 'block';
    content.innerHTML = 'Button clicked!';
});
```

### Exercise 7: Form Element Selection
```javascript
// 1. Select the form element
const form = document.getElementById('registration-form');

// 2. Select the username input by its ID
const username = document.getElementById('username');

// 3. Select the email input by its name attribute
const email = form.querySelector('[name="email"]');

// 4. Select the password input by its name attribute
const password = form.querySelector('[name="password"]');

// 5. Select the confirm password input by its name attribute
const confirmPassword = form.querySelector('[name="confirm-password"]');

// 6. Select the terms checkbox by its ID
const terms = document.getElementById('terms');

// 7. Select the submit button by its ID
const submitButton = document.getElementById('submit-btn');

// 8. Select all form inputs using a single selector
const allInputs = form.querySelectorAll('input, select, textarea');
```

### Exercise 8: Data Attribute Selection
```javascript
// 1. Select all products
const products = document.querySelectorAll('.product');

// 2. Select all products in the "electronics" category
const electronicsProducts = document.querySelectorAll('[data-category="electronics"]');

// 3. Select all products in the "clothing" category
const clothingProducts = document.querySelectorAll('[data-category="clothing"]');

// 4. Select the product with ID "1"
const product1 = document.querySelector('[data-product-id="1"]');

// 5. Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('[data-action="add-to-cart"]');

// 6. Select all price elements with currency "USD"
const usdPrices = document.querySelectorAll('[data-currency="USD"]');
```

### Exercise 9: Multiple Selector Selection
```javascript
// 1. Select all headings (h1 and h2)
const headings = document.querySelectorAll('h1, h2');

// 2. Select all navigation links and activity items
const navAndActivityItems = document.querySelectorAll('.nav-link, .activity-item');

// 3. Select all cards and stats
const cardsAndStats = document.querySelectorAll('.card, .stat');

// 4. Select the header, main content, and footer
const header = document.querySelector('.dashboard-header');
const mainContent = document.querySelector('.dashboard-content');
const footer = document.querySelector('.dashboard-footer');
```

### Exercise 10: Challenge: Todo List Selector
```javascript
function selectTodoElements(criteria) {
    const todoItems = document.querySelectorAll('.todo-item');
    
    switch (criteria) {
        case 'all':
            return [...todoItems];
            
        case 'completed':
            return [...todoItems].filter(item => 
                item.querySelector('.todo-checkbox').checked
            );
            
        case 'active':
            return [...todoItems].filter(item => 
                !item.querySelector('.todo-checkbox').checked
            );
            
        case 'by-id':
            return (id) => {
                return document.querySelector(`.todo-item[data-id="${id}"]`);
            };
            
        case 'by-text':
            return (text) => {
                return [...todoItems].filter(item => 
                    item.querySelector('.todo-text').textContent.includes(text)
                );
            };
            
        default:
            return [];
    }
}
```

### Exercise 11: Challenge: DOM Traversal
```javascript
function getParent(element) {
    return element.parentNode;
}

function getChildren(element) {
    return [...element.children];
}

function getNextSibling(element) {
    return element.nextElementSibling;
}

function getPreviousSibling(element) {
    return element.previousElementSibling;
}

function getClosest(element, selector) {
    let current = element;
    
    while (current && current !== document.body) {
        if (current.matches(selector)) {
            return current;
        }
        current = current.parentNode;
    }
    
    return null;
}
```

### Exercise 12: Challenge: Element Collection Converter
```javascript
function convertToArray(elements, options = {}) {
    // Convert to array
    let array = [...elements];
    
    // Apply filter if provided
    if (options.filter) {
        array = array.filter(options.filter);
    }
    
    // Apply map if provided
    if (options.map) {
        array = array.map(options.map);
    }
    
    // Apply sort if provided
    if (options.sort) {
        array.sort(options.sort);
    }
    
    return array;
}

// Example usage:
// const buttons = convertToArray(document.querySelectorAll('.btn'), {
//     filter: btn => btn.disabled === false,
//     map: btn => btn.textContent,
//     sort: (a, b) => a.localeCompare(b)
// });
```

### Exercise 13: Challenge: Smart Selector
```javascript
function smartSelect(criteria) {
    let selector = '';
    
    // Build selector based on criteria
    if (criteria.tag) {
        selector += criteria.tag;
    }
    
    if (criteria.id) {
        selector += `#${criteria.id}`;
    }
    
    if (criteria.class) {
        selector += `.${criteria.class}`;
    }
    
    if (criteria.attribute) {
        const { name, value } = criteria.attribute;
        if (value) {
            selector += `[${name}="${value}"]`;
        } else {
            selector += `[${name}]`;
        }
    }
    
    // Return all matching elements
    return document.querySelectorAll(selector);
}

// Example usage:
// const elements = smartSelect({
//     tag: 'div',
//     class: 'card',
//     attribute: { name: 'data-id', value: '123' }
// });
```

</details> 