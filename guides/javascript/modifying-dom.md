# Modifying the DOM

## Introduction
The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page as a tree of nodes, where each node is an object representing a part of the document. JavaScript can modify this tree to create dynamic, interactive web applications.

## Key Concepts

### 1. Creating Elements
```javascript
// Create a new element
const div = document.createElement('div');

// Create a text node
const text = document.createTextNode('Hello World');

// Create a comment node
const comment = document.createComment('This is a comment');
```

### 2. Modifying Elements

#### Setting Properties
```javascript
// Set attributes
element.setAttribute('class', 'container');
element.id = 'main-content';

// Set styles
element.style.backgroundColor = 'blue';
element.style.fontSize = '16px';

// Set content
element.textContent = 'New text';
element.innerHTML = '<span>HTML content</span>';
```

#### Adding and Removing Classes
```javascript
// Add a class
element.classList.add('active');

// Remove a class
element.classList.remove('active');

// Toggle a class
element.classList.toggle('active');

// Check if element has a class
if (element.classList.contains('active')) {
    // Do something
}
```

### 3. Adding Elements to the DOM

#### Append and Prepend
```javascript
// Append to the end
parent.appendChild(child);

// Prepend to the beginning
parent.prepend(child);

// Insert before a reference node
parent.insertBefore(newNode, referenceNode);

// Insert after a reference node
referenceNode.after(newNode);
```

### 4. Removing Elements
```javascript
// Remove an element
element.remove();

// Remove a child element
parent.removeChild(child);

// Clear all children
while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
```

### 5. Cloning Elements
```javascript
// Create a shallow clone
const clone = element.cloneNode();

// Create a deep clone (including all descendants)
const deepClone = element.cloneNode(true);
```

### 6. Working with Attributes
```javascript
// Get attribute value
const value = element.getAttribute('data-id');

// Set attribute value
element.setAttribute('data-id', '123');

// Remove attribute
element.removeAttribute('data-id');

// Check if attribute exists
if (element.hasAttribute('data-id')) {
    // Do something
}
```

### 7. Modifying Styles
```javascript
// Set individual styles
element.style.color = 'red';
element.style.fontSize = '16px';

// Set multiple styles
Object.assign(element.style, {
    color: 'red',
    fontSize: '16px',
    backgroundColor: 'blue'
});

// Add/remove CSS classes
element.classList.add('highlight');
element.classList.remove('highlight');
```

### 8. Working with Forms
```javascript
// Get form values
const input = document.querySelector('input');
const value = input.value;

// Set form values
input.value = 'New value';

// Reset form
form.reset();

// Disable/enable elements
input.disabled = true;
button.disabled = false;
```

## Best Practices

1. **Performance**
   - Batch DOM operations
   - Use DocumentFragment for multiple elements
   - Minimize reflows and repaints

2. **Security**
   - Avoid using innerHTML with user input
   - Sanitize data before insertion
   - Use textContent for plain text

3. **Maintainability**
   - Use meaningful class names
   - Keep DOM manipulation logic separate
   - Comment complex operations

4. **Error Handling**
   - Check if elements exist before modifying
   - Handle edge cases gracefully
   - Provide fallback content

## Code Examples

### Example 1: Creating and Adding Elements
```javascript
// Create a new todo item
function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const span = document.createElement('span');
    span.textContent = text;
    
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.onclick = () => li.remove();
    
    li.appendChild(span);
    li.appendChild(button);
    
    return li;
}

// Add todo to list
const todoList = document.getElementById('todoList');
const newTodo = createTodoItem('Learn DOM Manipulation');
todoList.appendChild(newTodo);
```

### Example 2: Modifying Styles and Classes
```javascript
// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Update theme-specific elements
    const elements = document.querySelectorAll('.theme-aware');
    elements.forEach(element => {
        element.classList.toggle('dark-mode');
    });
}
```

### Example 3: Batch DOM Operations
```javascript
// Add multiple items efficiently
function addMultipleItems(items) {
    const fragment = document.createDocumentFragment();
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li);
    });
    
    document.getElementById('list').appendChild(fragment);
}
```

## Practice Exercises
1. Create a function that adds a new row to a table
2. Implement a function that toggles visibility of elements
3. Create a function that updates multiple elements' styles
4. Build a function that clones and modifies elements
5. Implement a function that safely removes elements

[Continue to Forms and User Input →](../guides/javascript/forms-user-input.md) 