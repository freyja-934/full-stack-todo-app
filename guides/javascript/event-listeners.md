# Event Listeners in JavaScript

## Why It's Important
Event listeners are the foundation of interactive web applications. They allow your JavaScript code to respond to user actions like clicks, keyboard input, form submissions, and more. Understanding how to properly add, remove, and manage event listeners is crucial for building responsive and user-friendly web applications.

## Basic Event Listener Syntax

### Adding Event Listeners
The most common way to add an event listener is using the `addEventListener` method:

```javascript
// Basic syntax
element.addEventListener(event, handler);

// Example: Add a click event to a button
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
```

### Removing Event Listeners
To remove an event listener, you need to use the same event type and handler function:

```javascript
// Define the handler function
function handleClick() {
    console.log('Button clicked!');
}

// Add the event listener
button.addEventListener('click', handleClick);

// Remove the event listener
button.removeEventListener('click', handleClick);
```

## Common Event Types

### Mouse Events
- `click`: Triggered when an element is clicked
- `dblclick`: Triggered when an element is double-clicked
- `mousedown`: Triggered when a mouse button is pressed down
- `mouseup`: Triggered when a mouse button is released
- `mouseover`: Triggered when the mouse enters an element
- `mouseout`: Triggered when the mouse leaves an element
- `mousemove`: Triggered when the mouse moves over an element

### Keyboard Events
- `keydown`: Triggered when a key is pressed down
- `keyup`: Triggered when a key is released
- `keypress`: Triggered when a key is pressed (deprecated, use keydown instead)

### Form Events
- `submit`: Triggered when a form is submitted
- `change`: Triggered when a form control's value changes
- `focus`: Triggered when an element receives focus
- `blur`: Triggered when an element loses focus
- `input`: Triggered when the value of an input element changes

### Document/Window Events
- `load`: Triggered when the page has finished loading
- `DOMContentLoaded`: Triggered when the DOM is fully loaded and parsed
- `resize`: Triggered when the window is resized
- `scroll`: Triggered when the document is scrolled

## Event Object

When an event occurs, JavaScript creates an event object that contains information about the event. This object is passed to the event handler function:

```javascript
button.addEventListener('click', (event) => {
    console.log(event.type); // 'click'
    console.log(event.target); // The element that triggered the event
    console.log(event.currentTarget); // The element the event listener is attached to
});
```

### Common Event Object Properties
- `event.type`: The type of event (e.g., 'click', 'submit')
- `event.target`: The element that triggered the event
- `event.currentTarget`: The element the event listener is attached to
- `event.preventDefault()`: Prevents the default behavior of the event
- `event.stopPropagation()`: Stops the event from bubbling up the DOM tree

## Event Propagation

Events in JavaScript follow a propagation model with two phases:

1. **Capturing Phase**: The event travels from the root of the document down to the target element.
2. **Bubbling Phase**: The event travels from the target element up to the root of the document.

By default, event listeners are added in the bubbling phase. You can add a listener in the capturing phase by setting the third parameter of `addEventListener` to `true`:

```javascript
// Add event listener in the capturing phase
element.addEventListener('click', handler, true);

// Add event listener in the bubbling phase (default)
element.addEventListener('click', handler, false);
// or simply
element.addEventListener('click', handler);
```

### Event Delegation

Event delegation is a technique where you attach a single event listener to a parent element to handle events for all of its children, even those that are added dynamically:

```javascript
// Instead of adding event listeners to each button
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// Add a single event listener to the parent
const container = document.querySelector('.container');
container.addEventListener('click', (event) => {
    // Check if the clicked element is a button
    if (event.target.classList.contains('btn')) {
        handleClick(event);
    }
});
```

## Handling Events

### Preventing Default Behavior
Some events have default behaviors (like form submission or link navigation). You can prevent these using `preventDefault()`:

```javascript
// Prevent a form from submitting
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Custom form handling logic
});

// Prevent a link from navigating
link.addEventListener('click', (event) => {
    event.preventDefault();
    // Custom link handling logic
});
```

### Stopping Event Propagation
To prevent an event from bubbling up the DOM tree, use `stopPropagation()`:

```javascript
button.addEventListener('click', (event) => {
    event.stopPropagation();
    // This click event won't bubble up to parent elements
});
```

### Handling Multiple Events
You can add multiple event listeners to the same element:

```javascript
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    console.log('Button clicked!');
});

button.addEventListener('mouseover', () => {
    console.log('Mouse over button!');
});

button.addEventListener('mouseout', () => {
    console.log('Mouse out of button!');
});
```

## Best Practices

1. **Use Event Delegation**: When you have many similar elements, use event delegation to improve performance.

2. **Remove Event Listeners**: Always remove event listeners when they're no longer needed to prevent memory leaks.

3. **Use Named Functions**: Use named functions for event handlers when you need to remove them later.

4. **Avoid Inline Event Handlers**: Don't use inline event handlers like `onclick="handleClick()"` as they're harder to maintain and remove.

5. **Use `DOMContentLoaded`**: Add event listeners after the DOM is fully loaded to ensure elements exist.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners here
});
```

6. **Throttle and Debounce**: For events that fire rapidly (like scroll or resize), use throttling or debouncing to improve performance.

```javascript
// Debounce function
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Use debounce for scroll event
window.addEventListener('scroll', debounce(() => {
    console.log('Scrolled!');
}, 200));
```

## Practice Exercises

1. Add a click event listener to a button that changes its text when clicked.
2. Add a form submit event listener that prevents the default behavior and logs the form data.
3. Implement event delegation for a list of items where clicking an item removes it from the list.
4. Add a keyboard event listener that logs the key pressed.
5. Create a custom event and dispatch it when a specific action occurs.

## Next Steps
After mastering event listeners, you'll be ready to learn about:
- Modifying the DOM
- Working with forms and user input
- Creating dynamic user interfaces
- Building interactive web applications

[Continue to Modifying the DOM →](../guides/javascript/modifying-dom.md) 