# Modifying the DOM Practice Exercises

## Exercise 1: Table Row Addition
Create a function that adds a new row to a table with specified data.

```html
<table id="userTable">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
```

```javascript
// Your code here
```

## Exercise 2: Element Visibility Toggle
Create a function that toggles the visibility of elements with a smooth transition.

```html
<div id="content" class="visible">
    <h2>Toggle Me</h2>
    <p>This content can be shown/hidden.</p>
</div>
<button id="toggleButton">Toggle Visibility</button>
```

```javascript
// Your code here
```

## Exercise 3: Style Updates
Create a function that updates multiple elements' styles based on a theme.

```html
<div id="themeContainer">
    <div class="theme-element">Element 1</div>
    <div class="theme-element">Element 2</div>
    <div class="theme-element">Element 3</div>
</div>
<button id="themeToggle">Toggle Theme</button>
```

```javascript
// Your code here
```

## Exercise 4: Element Cloning
Create a function that clones and modifies elements with custom data.

```html
<div id="template">
    <div class="card">
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
<div id="cardContainer"></div>
```

```javascript
// Your code here
```

## Exercise 5: Safe Element Removal
Create a function that safely removes elements with confirmation.

```html
<div id="itemList">
    <div class="item" data-id="1">Item 1</div>
    <div class="item" data-id="2">Item 2</div>
    <div class="item" data-id="3">Item 3</div>
</div>
```

```javascript
// Your code here
```

## Exercise 6: Dynamic Form Creation
Create a function that dynamically generates form fields based on configuration.

```html
<div id="formContainer"></div>
```

```javascript
// Your code here
```

## Exercise 7: Nested Element Creation
Create a function that builds a nested element structure.

```html
<div id="container"></div>
```

```javascript
// Your code here
```

## Exercise 8: Attribute Management
Create functions to manage element attributes with validation.

```html
<div id="attributeDemo">
    <div class="demo-element" data-custom="value">Element</div>
</div>
```

```javascript
// Your code here
```

## Exercise 9: Batch DOM Updates
Create a function that efficiently updates multiple elements.

```html
<ul id="list"></ul>
```

```javascript
// Your code here
```

## Exercise 10: DOM Traversal and Modification
Create functions to traverse and modify the DOM tree.

```html
<div id="tree">
    <div class="node">
        <div class="leaf">Leaf 1</div>
        <div class="leaf">Leaf 2</div>
    </div>
    <div class="node">
        <div class="leaf">Leaf 3</div>
    </div>
</div>
```

```javascript
// Your code here
```

## Exercise 11: Challenge: Todo List Manager
Create a complete todo list manager with DOM manipulation.

```html
<div id="todoApp">
    <input type="text" id="todoInput" placeholder="Add a todo">
    <button id="addTodo">Add</button>
    <div id="todoList"></div>
</div>
```

```javascript
// Your code here
```

## Exercise 12: Challenge: Dynamic Table Editor
Create a table editor that allows adding, editing, and deleting rows.

```html
<div id="tableEditor">
    <table id="dataTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <div id="controls"></div>
</div>
```

```javascript
// Your code here
```

## Exercise 13: Challenge: DOM Tree Visualizer
Create a tool that visualizes and allows manipulation of the DOM tree.

```html
<div id="visualizer">
    <div id="treeView"></div>
    <div id="controls"></div>
</div>
```

```javascript
// Your code here
```

<details>
<summary>Solutions</summary>

### Exercise 1: Table Row Addition
```javascript
function addTableRow(name, email) {
    const tbody = document.querySelector('#userTable tbody');
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;
    
    tbody.appendChild(tr);
}

function deleteRow(button) {
    button.closest('tr').remove();
}

// Usage
addTableRow('John Doe', 'john@example.com');
```

### Exercise 2: Element Visibility Toggle
```javascript
const content = document.getElementById('content');
const toggleButton = document.getElementById('toggleButton');

function toggleVisibility() {
    content.classList.toggle('visible');
    content.classList.toggle('hidden');
    
    // Update button text
    toggleButton.textContent = content.classList.contains('visible') 
        ? 'Hide Content' 
        : 'Show Content';
}

toggleButton.addEventListener('click', toggleVisibility);
```

### Exercise 3: Style Updates
```javascript
const container = document.getElementById('themeContainer');
const themeToggle = document.getElementById('themeToggle');
let isDarkTheme = false;

function updateTheme() {
    isDarkTheme = !isDarkTheme;
    const elements = container.getElementsByClassName('theme-element');
    
    Array.from(elements).forEach(element => {
        if (isDarkTheme) {
            element.style.backgroundColor = '#333';
            element.style.color = '#fff';
        } else {
            element.style.backgroundColor = '#fff';
            element.style.color = '#333';
        }
    });
}

themeToggle.addEventListener('click', updateTheme);
```

### Exercise 4: Element Cloning
```javascript
function createCard(title, description) {
    const template = document.querySelector('#template .card');
    const card = template.cloneNode(true);
    
    card.querySelector('h3').textContent = title;
    card.querySelector('p').textContent = description;
    
    return card;
}

function addCard(title, description) {
    const container = document.getElementById('cardContainer');
    const card = createCard(title, description);
    container.appendChild(card);
}

// Usage
addCard('New Card', 'This is a cloned card');
```

### Exercise 5: Safe Element Removal
```javascript
function removeItem(element) {
    if (confirm('Are you sure you want to remove this item?')) {
        element.remove();
    }
}

function setupItemList() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', () => removeItem(item));
    });
}

setupItemList();
```

### Exercise 6: Dynamic Form Creation
```javascript
function createForm(fields) {
    const container = document.getElementById('formContainer');
    const form = document.createElement('form');
    
    fields.forEach(field => {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        
        label.textContent = field.label;
        input.type = field.type;
        input.name = field.name;
        input.required = field.required || false;
        
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
    });
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);
    
    container.appendChild(form);
}

// Usage
const fields = [
    { label: 'Name', type: 'text', name: 'name', required: true },
    { label: 'Email', type: 'email', name: 'email', required: true },
    { label: 'Age', type: 'number', name: 'age' }
];

createForm(fields);
```

### Exercise 7: Nested Element Creation
```javascript
function createNestedStructure(config) {
    const container = document.getElementById('container');
    
    function createElement(data) {
        const element = document.createElement(data.tag);
        if (data.class) element.className = data.class;
        if (data.text) element.textContent = data.text;
        
        if (data.children) {
            data.children.forEach(child => {
                element.appendChild(createElement(child));
            });
        }
        
        return element;
    }
    
    container.appendChild(createElement(config));
}

// Usage
const config = {
    tag: 'div',
    class: 'parent',
    children: [
        {
            tag: 'div',
            class: 'child',
            text: 'Child 1'
        },
        {
            tag: 'div',
            class: 'child',
            text: 'Child 2'
        }
    ]
};

createNestedStructure(config);
```

### Exercise 8: Attribute Management
```javascript
function setAttributeWithValidation(element, attribute, value) {
    if (!element) return false;
    
    try {
        element.setAttribute(attribute, value);
        return true;
    } catch (error) {
        console.error('Error setting attribute:', error);
        return false;
    }
}

function getAttributeWithDefault(element, attribute, defaultValue = '') {
    if (!element) return defaultValue;
    
    return element.getAttribute(attribute) || defaultValue;
}

// Usage
const element = document.querySelector('.demo-element');
setAttributeWithValidation(element, 'data-custom', 'new-value');
const value = getAttributeWithDefault(element, 'data-custom', 'default');
```

### Exercise 9: Batch DOM Updates
```javascript
function updateListItems(items) {
    const list = document.getElementById('list');
    const fragment = document.createDocumentFragment();
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li);
    });
    
    // Clear existing items
    list.innerHTML = '';
    // Add all new items at once
    list.appendChild(fragment);
}

// Usage
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
updateListItems(items);
```

### Exercise 10: DOM Traversal and Modification
```javascript
function traverseAndModify(root) {
    function processNode(node) {
        if (node.classList.contains('leaf')) {
            node.style.color = 'green';
        }
        
        Array.from(node.children).forEach(child => {
            processNode(child);
        });
    }
    
    processNode(root);
}

// Usage
const tree = document.getElementById('tree');
traverseAndModify(tree);
```

### Exercise 11: Todo List Manager
```javascript
class TodoListManager {
    constructor() {
        this.todoInput = document.getElementById('todoInput');
        this.addButton = document.getElementById('addTodo');
        this.todoList = document.getElementById('todoList');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.addButton.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
    }
    
    addTodo() {
        const text = this.todoInput.value.trim();
        if (!text) return;
        
        const todo = this.createTodoElement(text);
        this.todoList.appendChild(todo);
        this.todoInput.value = '';
    }
    
    createTodoElement(text) {
        const div = document.createElement('div');
        div.className = 'todo-item';
        
        const span = document.createElement('span');
        span.textContent = text;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => div.remove();
        
        div.appendChild(span);
        div.appendChild(deleteButton);
        
        return div;
    }
}

// Initialize
new TodoListManager();
```

### Exercise 12: Dynamic Table Editor
```javascript
class TableEditor {
    constructor() {
        this.table = document.getElementById('dataTable');
        this.tbody = this.table.querySelector('tbody');
        this.controls = document.getElementById('controls');
        
        this.setupControls();
    }
    
    setupControls() {
        const addButton = document.createElement('button');
        addButton.textContent = 'Add Row';
        addButton.onclick = () => this.addRow();
        
        this.controls.appendChild(addButton);
    }
    
    addRow() {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="text" class="name-input"></td>
            <td><input type="text" class="value-input"></td>
            <td>
                <button onclick="tableEditor.saveRow(this)">Save</button>
                <button onclick="tableEditor.deleteRow(this)">Delete</button>
            </td>
        `;
        
        this.tbody.appendChild(tr);
    }
    
    saveRow(button) {
        const tr = button.closest('tr');
        const nameInput = tr.querySelector('.name-input');
        const valueInput = tr.querySelector('.value-input');
        
        tr.innerHTML = `
            <td>${nameInput.value}</td>
            <td>${valueInput.value}</td>
            <td>
                <button onclick="tableEditor.editRow(this)">Edit</button>
                <button onclick="tableEditor.deleteRow(this)">Delete</button>
            </td>
        `;
    }
    
    editRow(button) {
        const tr = button.closest('tr');
        const name = tr.cells[0].textContent;
        const value = tr.cells[1].textContent;
        
        tr.innerHTML = `
            <td><input type="text" class="name-input" value="${name}"></td>
            <td><input type="text" class="value-input" value="${value}"></td>
            <td>
                <button onclick="tableEditor.saveRow(this)">Save</button>
                <button onclick="tableEditor.deleteRow(this)">Delete</button>
            </td>
        `;
    }
    
    deleteRow(button) {
        if (confirm('Are you sure you want to delete this row?')) {
            button.closest('tr').remove();
        }
    }
}

// Initialize
const tableEditor = new TableEditor();
```

### Exercise 13: DOM Tree Visualizer
```javascript
class DOMTreeVisualizer {
    constructor() {
        this.treeView = document.getElementById('treeView');
        this.controls = document.getElementById('controls');
        
        this.setupControls();
        this.visualize(document.body);
    }
    
    setupControls() {
        const expandAllButton = document.createElement('button');
        expandAllButton.textContent = 'Expand All';
        expandAllButton.onclick = () => this.expandAll();
        
        const collapseAllButton = document.createElement('button');
        collapseAllButton.textContent = 'Collapse All';
        collapseAllButton.onclick = () => this.collapseAll();
        
        this.controls.appendChild(expandAllButton);
        this.controls.appendChild(collapseAllButton);
    }
    
    visualize(node, level = 0) {
        const div = document.createElement('div');
        div.style.marginLeft = `${level * 20}px`;
        
        const toggle = document.createElement('span');
        toggle.textContent = node.children.length ? '▼' : '•';
        toggle.style.cursor = 'pointer';
        toggle.onclick = () => this.toggleChildren(div);
        
        const info = document.createElement('span');
        info.textContent = ` ${node.tagName.toLowerCase()}`;
        if (node.id) info.textContent += `#${node.id}`;
        if (node.className) info.textContent += `.${node.className}`;
        
        div.appendChild(toggle);
        div.appendChild(info);
        this.treeView.appendChild(div);
        
        Array.from(node.children).forEach(child => {
            this.visualize(child, level + 1);
        });
    }
    
    toggleChildren(div) {
        const children = div.nextElementSibling;
        if (children) {
            children.style.display = 
                children.style.display === 'none' ? 'block' : 'none';
            div.querySelector('span').textContent = 
                children.style.display === 'none' ? '▶' : '▼';
        }
    }
    
    expandAll() {
        const toggles = this.treeView.querySelectorAll('span');
        toggles.forEach(toggle => {
            if (toggle.textContent === '▶') {
                toggle.click();
            }
        });
    }
    
    collapseAll() {
        const toggles = this.treeView.querySelectorAll('span');
        toggles.forEach(toggle => {
            if (toggle.textContent === '▼') {
                toggle.click();
            }
        });
    }
}

// Initialize
new DOMTreeVisualizer();
```

</details> 