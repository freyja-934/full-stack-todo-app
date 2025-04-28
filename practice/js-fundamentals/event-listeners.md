# Event Listeners Practice Exercises

## Exercise 1: Basic Click Events
Create a button that changes its text when clicked.

```html
<button id="toggleButton">Click Me</button>
```

```javascript
// Your code here
```

## Exercise 2: Form Submission
Create a form with input fields and handle the submit event to log the form data.

```html
<form id="userForm">
    <input type="text" id="name" placeholder="Name">
    <input type="email" id="email" placeholder="Email">
    <button type="submit">Submit</button>
</form>
```

```javascript
// Your code here
```

## Exercise 3: Event Delegation
Create a list of items where clicking an item removes it from the list.

```html
<ul id="itemList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

```javascript
// Your code here
```

## Exercise 4: Keyboard Events
Create an input field that logs the key pressed and prevents certain keys.

```html
<input type="text" id="keyInput" placeholder="Type something...">
```

```javascript
// Your code here
```

## Exercise 5: Mouse Events
Create a div that changes color when the mouse enters and leaves.

```html
<div id="colorBox" style="width: 100px; height: 100px; background-color: blue;"></div>
```

```javascript
// Your code here
```

## Exercise 6: Custom Events
Create a custom event that fires when a specific action occurs.

```html
<button id="customButton">Trigger Custom Event</button>
<div id="eventLog"></div>
```

```javascript
// Your code here
```

## Exercise 7: Event Propagation
Create nested elements and demonstrate event bubbling and capturing.

```html
<div id="outer">
    <div id="middle">
        <div id="inner">Click me!</div>
    </div>
</div>
```

```javascript
// Your code here
```

## Exercise 8: Form Validation
Create a form with real-time validation using input events.

```html
<form id="validationForm">
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button type="submit">Submit</button>
</form>
```

```javascript
// Your code here
```

## Exercise 9: Debouncing
Create a search input that uses debouncing to prevent too many API calls.

```html
<input type="text" id="searchInput" placeholder="Search...">
<div id="searchResults"></div>
```

```javascript
// Your code here
```

## Exercise 10: Drag and Drop
Create a simple drag and drop interface.

```html
<div id="draggable" style="width: 100px; height: 100px; background-color: red;"></div>
<div id="dropzone" style="width: 200px; height: 200px; border: 2px dashed black;"></div>
```

```javascript
// Your code here
```

## Exercise 11: Challenge: Todo List with Events
Create a todo list application that uses various event types.

```html
<div id="todoApp">
    <input type="text" id="todoInput" placeholder="Add a todo">
    <button id="addTodo">Add</button>
    <ul id="todoList"></ul>
</div>
```

```javascript
// Your code here
```

## Exercise 12: Challenge: Image Gallery
Create an image gallery with click events, keyboard navigation, and touch events.

```html
<div id="gallery">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
</div>
```

```javascript
// Your code here
```

## Exercise 13: Challenge: Form Wizard
Create a multi-step form with validation and navigation events.

```html
<div id="formWizard">
    <div id="step1" class="step">
        <input type="text" id="name" placeholder="Name">
        <button id="next1">Next</button>
    </div>
    <div id="step2" class="step" style="display: none;">
        <input type="email" id="email" placeholder="Email">
        <button id="prev2">Previous</button>
        <button id="next2">Next</button>
    </div>
    <div id="step3" class="step" style="display: none;">
        <input type="tel" id="phone" placeholder="Phone">
        <button id="prev3">Previous</button>
        <button id="submit">Submit</button>
    </div>
</div>
```

```javascript
// Your code here
```

<details>
<summary>Solutions</summary>

### Exercise 1: Basic Click Events
```javascript
const button = document.getElementById('toggleButton');
let isClicked = false;

button.addEventListener('click', () => {
    isClicked = !isClicked;
    button.textContent = isClicked ? 'Clicked!' : 'Click Me';
});
```

### Exercise 2: Form Submission
```javascript
const form = document.getElementById('userForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    console.log('Form Data:', { name, email });
});
```

### Exercise 3: Event Delegation
```javascript
const list = document.getElementById('itemList');

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
```

### Exercise 4: Keyboard Events
```javascript
const input = document.getElementById('keyInput');

input.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
    
    // Prevent numbers
    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault();
    }
});
```

### Exercise 5: Mouse Events
```javascript
const box = document.getElementById('colorBox');

box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = 'red';
});

box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = 'blue';
});
```

### Exercise 6: Custom Events
```javascript
const button = document.getElementById('customButton');
const log = document.getElementById('eventLog');

// Create custom event
const customEvent = new CustomEvent('customAction', {
    detail: { message: 'Custom event triggered!' }
});

// Listen for custom event
document.addEventListener('customAction', (event) => {
    log.textContent = event.detail.message;
});

// Trigger custom event
button.addEventListener('click', () => {
    document.dispatchEvent(customEvent);
});
```

### Exercise 7: Event Propagation
```javascript
const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

// Bubbling phase
outer.addEventListener('click', () => console.log('Outer clicked'));
middle.addEventListener('click', () => console.log('Middle clicked'));
inner.addEventListener('click', () => console.log('Inner clicked'));

// Capturing phase
outer.addEventListener('click', () => console.log('Outer captured'), true);
middle.addEventListener('click', () => console.log('Middle captured'), true);
inner.addEventListener('click', () => console.log('Inner captured'), true);
```

### Exercise 8: Form Validation
```javascript
const form = document.getElementById('validationForm');
const username = document.getElementById('username');
const password = document.getElementById('password');

function validateUsername(value) {
    return value.length >= 3;
}

function validatePassword(value) {
    return value.length >= 6;
}

username.addEventListener('input', (event) => {
    const isValid = validateUsername(event.target.value);
    event.target.style.borderColor = isValid ? 'green' : 'red';
});

password.addEventListener('input', (event) => {
    const isValid = validatePassword(event.target.value);
    event.target.style.borderColor = isValid ? 'green' : 'red';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (validateUsername(username.value) && validatePassword(password.value)) {
        console.log('Form is valid!');
    } else {
        console.log('Form is invalid!');
    }
});
```

### Exercise 9: Debouncing
```javascript
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

const search = debounce((query) => {
    // Simulate API call
    searchResults.textContent = `Searching for: ${query}`;
}, 300);

searchInput.addEventListener('input', (event) => {
    search(event.target.value);
});
```

### Exercise 10: Drag and Drop
```javascript
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
});

dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
});

dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const element = document.getElementById(id);
    dropzone.appendChild(element);
});
```

### Exercise 11: Todo List with Events
```javascript
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => li.remove());
    
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

addButton.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text) {
        addTodo(text);
        todoInput.value = '';
    }
});

todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const text = todoInput.value.trim();
        if (text) {
            addTodo(text);
            todoInput.value = '';
        }
    }
});
```

### Exercise 12: Image Gallery
```javascript
const gallery = document.getElementById('gallery');
const images = gallery.getElementsByTagName('img');
let currentIndex = 0;

function showImage(index) {
    Array.from(images).forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = Array.from(images).indexOf(event.target);
        currentIndex = index;
        showImage(currentIndex);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    } else if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
});

// Touch events for mobile
let touchStartX = 0;
gallery.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});

gallery.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            currentIndex = (currentIndex + 1) % images.length;
        } else {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        showImage(currentIndex);
    }
});
```

### Exercise 13: Form Wizard
```javascript
const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.style.display = index === stepIndex ? 'block' : 'none';
    });
}

function validateStep(stepIndex) {
    const step = steps[stepIndex];
    const inputs = step.getElementsByTagName('input');
    let isValid = true;
    
    Array.from(inputs).forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = 'green';
        }
    });
    
    return isValid;
}

// Next buttons
document.getElementById('next1').addEventListener('click', () => {
    if (validateStep(0)) {
        currentStep = 1;
        showStep(currentStep);
    }
});

document.getElementById('next2').addEventListener('click', () => {
    if (validateStep(1)) {
        currentStep = 2;
        showStep(currentStep);
    }
});

// Previous buttons
document.getElementById('prev2').addEventListener('click', () => {
    currentStep = 0;
    showStep(currentStep);
});

document.getElementById('prev3').addEventListener('click', () => {
    currentStep = 1;
    showStep(currentStep);
});

// Submit button
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    if (validateStep(2)) {
        console.log('Form submitted successfully!');
    }
});
```

</details> 