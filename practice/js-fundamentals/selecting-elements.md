# Selecting Elements Practice Exercises

## Exercise 1: Basic Element Selection
Create a function that demonstrates different ways to select elements. Include:
- Selecting by ID
- Selecting by class name
- Selecting by tag name
- Using querySelector
- Using querySelectorAll

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function demonstrateSelection() {
    // Select by ID
    const header = document.getElementById('header');
    console.log('Header element:', header);

    // Select by class name
    const buttons = document.getElementsByClassName('btn');
    console.log('Number of buttons:', buttons.length);

    // Select by tag name
    const paragraphs = document.getElementsByTagName('p');
    console.log('Number of paragraphs:', paragraphs.length);

    // Using querySelector
    const firstButton = document.querySelector('.btn');
    const firstListItem = document.querySelector('ul li');
    console.log('First button:', firstButton);
    console.log('First list item:', firstListItem);

    // Using querySelectorAll
    const allButtons = document.querySelectorAll('.btn');
    console.log('All buttons:', allButtons);
}
```
</details>

## Exercise 2: Working with Collections
Create a function that:
- Selects all elements with a specific class
- Converts the collection to an array
- Uses array methods to modify the elements
- Demonstrates different ways to iterate over the collection

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function workWithCollections() {
    // Select elements
    const items = document.getElementsByClassName('item');
    
    // Convert to array
    const itemsArray = Array.from(items);
    
    // Use array methods
    itemsArray.forEach(item => {
        item.style.backgroundColor = 'lightblue';
    });
    
    // Different ways to iterate
    // 1. for...of loop
    for (const item of items) {
        item.style.padding = '10px';
    }
    
    // 2. forEach (if it's a NodeList)
    if (items.forEach) {
        items.forEach(item => {
            item.style.margin = '5px';
        });
    }
    
    // 3. Traditional for loop
    for (let i = 0; i < items.length; i++) {
        items[i].style.border = '1px solid black';
    }
}
```
</details>

## Exercise 3: Selecting Within Elements
Create a function that:
- Selects a container element
- Finds all elements within that container
- Modifies specific elements based on their relationship to the container

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function selectWithinContainer() {
    // Select container
    const container = document.getElementById('container');
    if (!container) return;

    // Select elements within container
    const buttons = container.querySelectorAll('.btn');
    const paragraphs = container.getElementsByTagName('p');
    
    // Select by relationship
    const firstChild = container.firstElementChild;
    const lastChild = container.lastElementChild;
    const parent = container.parentElement;
    
    // Modify elements
    if (firstChild) {
        firstChild.style.backgroundColor = 'yellow';
    }
    
    if (lastChild) {
        lastChild.style.backgroundColor = 'lightgreen';
    }
    
    // Modify all buttons within container
    buttons.forEach(button => {
        button.style.color = 'blue';
    });
}
```
</details>

## Exercise 4: Attribute Selection
Create a function that:
- Selects elements based on different attribute patterns
- Modifies elements with specific attributes
- Handles data attributes

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function selectByAttributes() {
    // Select elements with specific attributes
    const requiredInputs = document.querySelectorAll('input[required]');
    const dataElements = document.querySelectorAll('[data-*]');
    const userElements = document.querySelectorAll('[data-type="user"]');
    
    // Select elements with attribute patterns
    const startsWithUser = document.querySelectorAll('[data-type^="user"]');
    const endsWithProfile = document.querySelectorAll('[data-type$="profile"]');
    const containsUser = document.querySelectorAll('[data-type*="user"]');
    
    // Modify elements
    requiredInputs.forEach(input => {
        input.style.borderColor = 'red';
    });
    
    dataElements.forEach(element => {
        element.style.backgroundColor = 'lightgray';
    });
    
    userElements.forEach(element => {
        element.style.color = 'blue';
    });
}
```
</details>

## Exercise 5: Best Practices Implementation
Create a function that demonstrates best practices for element selection:
- Caching selected elements
- Using specific selectors
- Checking for element existence
- Avoiding repeated DOM queries

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function demonstrateBestPractices() {
    // Cache frequently used elements
    const header = document.getElementById('header');
    const mainContent = document.querySelector('main');
    const buttons = document.querySelectorAll('.btn');
    
    // Check if elements exist before using them
    if (!header || !mainContent) {
        console.error('Required elements not found');
        return;
    }
    
    // Use specific selectors
    const primaryButtons = mainContent.querySelectorAll('.btn.primary');
    const largeButtons = mainContent.querySelectorAll('.btn.large');
    
    // Avoid repeated DOM queries
    function updateUI() {
        // Use cached elements
        header.style.backgroundColor = 'lightblue';
        mainContent.style.padding = '20px';
        
        // Use cached collection
        buttons.forEach(button => {
            button.style.margin = '5px';
        });
    }
    
    // Call the function
    updateUI();
}
```
</details>

## Exercise 6: Complex Selection Patterns
Create a function that combines multiple selection techniques to:
- Find elements matching complex criteria
- Handle nested elements
- Work with dynamic content

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function complexSelection() {
    // Select elements matching multiple criteria
    const activePrimaryButtons = document.querySelectorAll('.btn.primary.active');
    const largePrimaryButtons = document.querySelectorAll('.btn.primary.large');
    
    // Handle nested elements
    const container = document.getElementById('container');
    if (container) {
        const nestedButtons = container.querySelectorAll('.btn');
        const nestedActiveButtons = container.querySelectorAll('.btn.active');
        
        // Work with dynamic content
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length) {
                    const newButtons = container.querySelectorAll('.btn:not(.processed)');
                    newButtons.forEach(button => {
                        button.classList.add('processed');
                        button.style.backgroundColor = 'lightgreen';
                    });
                }
            });
        });
        
        observer.observe(container, { childList: true, subtree: true });
    }
}
```
</details>

## Exercise 7: Performance Optimization
Create a function that demonstrates performance optimization techniques:
- Using efficient selectors
- Caching selectors
- Batch processing
- Avoiding unnecessary queries

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function optimizePerformance() {
    // Cache selectors
    const container = document.getElementById('container');
    if (!container) return;
    
    // Use efficient selectors
    const buttons = container.getElementsByClassName('btn');
    const paragraphs = container.getElementsByTagName('p');
    
    // Batch processing
    const updates = [];
    for (const button of buttons) {
        updates.push(() => {
            button.style.backgroundColor = 'lightblue';
            button.style.padding = '10px';
        });
    }
    
    // Process in batches
    function processBatch(start, end) {
        for (let i = start; i < end && i < updates.length; i++) {
            updates[i]();
        }
    }
    
    // Process in chunks of 10
    for (let i = 0; i < updates.length; i += 10) {
        setTimeout(() => processBatch(i, i + 10), 0);
    }
}
```
</details>

## Exercise 8: Error Handling
Create a function that demonstrates proper error handling when selecting elements:
- Checking for null/undefined
- Handling missing elements
- Providing fallback behavior
- Logging errors appropriately

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function handleSelectionErrors() {
    try {
        // Select elements with error handling
        const header = document.getElementById('header');
        if (!header) {
            throw new Error('Header element not found');
        }
        
        const buttons = document.querySelectorAll('.btn');
        if (buttons.length === 0) {
            console.warn('No buttons found');
        }
        
        // Provide fallback behavior
        const container = document.getElementById('container') || document.body;
        const content = container.querySelector('.content') || container;
        
        // Safe element modification
        function safeModify(element, property, value) {
            if (element && element.style) {
                element.style[property] = value;
            }
        }
        
        // Use safe modification
        safeModify(header, 'backgroundColor', 'lightblue');
        safeModify(content, 'padding', '20px');
        
    } catch (error) {
        console.error('Error selecting elements:', error.message);
        // Implement fallback behavior
        document.body.style.backgroundColor = 'lightgray';
    }
}
```
</details>

## Exercise 9: Dynamic Content
Create a function that handles dynamic content selection:
- Selecting elements after they're added
- Using MutationObserver
- Handling removed elements
- Updating selections

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function handleDynamicContent() {
    const container = document.getElementById('container');
    if (!container) return;
    
    // Track selected elements
    let selectedElements = new Set();
    
    // Create observer
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            // Handle added nodes
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const newElements = node.querySelectorAll('.btn');
                    newElements.forEach(element => {
                        selectedElements.add(element);
                        element.style.backgroundColor = 'lightblue';
                    });
                }
            });
            
            // Handle removed nodes
            mutation.removedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const removedElements = node.querySelectorAll('.btn');
                    removedElements.forEach(element => {
                        selectedElements.delete(element);
                    });
                }
            });
        });
        
        // Update all selected elements
        selectedElements.forEach(element => {
            if (document.contains(element)) {
                element.style.color = 'blue';
            } else {
                selectedElements.delete(element);
            }
        });
    });
    
    // Start observing
    observer.observe(container, {
        childList: true,
        subtree: true
    });
}
```
</details>

## Exercise 10: Selection Patterns
Create a function that implements common selection patterns:
- Selecting form elements
- Selecting table elements
- Selecting navigation elements
- Selecting modal elements

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
function implementSelectionPatterns() {
    // Form elements
    const form = document.querySelector('form');
    if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        const requiredInputs = form.querySelectorAll('[required]');
        const submitButton = form.querySelector('button[type="submit"]');
    }
    
    // Table elements
    const table = document.querySelector('table');
    if (table) {
        const rows = table.querySelectorAll('tr');
        const headerCells = table.querySelectorAll('th');
        const dataCells = table.querySelectorAll('td');
    }
    
    // Navigation elements
    const nav = document.querySelector('nav');
    if (nav) {
        const links = nav.querySelectorAll('a');
        const activeLink = nav.querySelector('.active');
        const dropdownMenus = nav.querySelectorAll('.dropdown-menu');
    }
    
    // Modal elements
    const modal = document.querySelector('.modal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        const closeButton = modal.querySelector('.close-button');
        const modalHeader = modal.querySelector('.modal-header');
        const modalBody = modal.querySelector('.modal-body');
        const modalFooter = modal.querySelector('.modal-footer');
    }
}
```
</details>

## Next Steps
After completing these exercises, you should be comfortable with:
1. Using different methods to select elements
2. Working with collections of elements
3. Selecting elements based on relationships and attributes
4. Implementing best practices for element selection
5. Handling errors and edge cases
6. Working with dynamic content
7. Optimizing selection performance

[Continue to Event Listeners →](../guides/javascript/event-listeners.md) 