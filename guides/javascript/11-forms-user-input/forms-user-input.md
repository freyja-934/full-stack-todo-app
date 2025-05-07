# Forms and User Input

## Introduction
Forms are a fundamental part of web applications, allowing users to input data that can be processed by JavaScript. Understanding how to handle form submissions, validate user input, and create interactive form elements is essential for building effective web applications.

## Key Concepts

### 1. Form Elements and Properties

#### Common Form Elements
```html
<form id="userForm">
    <!-- Text input -->
    <input type="text" id="username" name="username">
    
    <!-- Password input -->
    <input type="password" id="password" name="password">
    
    <!-- Checkbox -->
    <input type="checkbox" id="subscribe" name="subscribe">
    
    <!-- Radio buttons -->
    <input type="radio" id="option1" name="options" value="1">
    <input type="radio" id="option2" name="options" value="2">
    
    <!-- Select dropdown -->
    <select id="country" name="country">
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
    </select>
    
    <!-- Textarea -->
    <textarea id="message" name="message"></textarea>
    
    <!-- Submit button -->
    <button type="submit">Submit</button>
</form>
```

#### Accessing Form Elements
```javascript
// Get form element
const form = document.getElementById('userForm');

// Get form elements by ID
const username = document.getElementById('username');

// Get form elements by name
const password = form.elements['password'];

// Get all form elements
const allInputs = form.elements;

// Get form data as FormData object
const formData = new FormData(form);
```

### 2. Form Submission

#### Handling Form Submission
```javascript
const form = document.getElementById('userForm');

// Using addEventListener
form.addEventListener('submit', (event) => {
    // Prevent default form submission
    event.preventDefault();
    
    // Process form data
    const username = form.elements['username'].value;
    const password = form.elements['password'].value;
    
    console.log('Form submitted:', { username, password });
    
    // Submit form programmatically if needed
    // form.submit();
});

// Using onsubmit property
form.onsubmit = (event) => {
    event.preventDefault();
    // Process form data
};
```

#### FormData API
```javascript
const form = document.getElementById('userForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Create FormData object
    const formData = new FormData(form);
    
    // Access form values
    const username = formData.get('username');
    const password = formData.get('password');
    
    // Check if a field exists
    if (formData.has('subscribe')) {
        const subscribed = formData.get('subscribe') === 'on';
        console.log('User subscribed:', subscribed);
    }
    
    // Iterate over all form fields
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    // Convert to JSON
    const jsonData = Object.fromEntries(formData.entries());
    console.log('Form data as JSON:', jsonData);
});
```

### 3. Input Validation

#### Client-Side Validation
```javascript
// HTML5 validation attributes
<input type="text" required minlength="3" maxlength="20" pattern="[a-zA-Z]+">

// JavaScript validation
function validateForm() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    let isValid = true;
    
    // Check if username is empty
    if (!username.value.trim()) {
        showError(username, 'Username is required');
        isValid = false;
    } else {
        clearError(username);
    }
    
    // Check password length
    if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearError(password);
    }
    
    return isValid;
}

function showError(element, message) {
    const errorDiv = element.nextElementSibling || document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    if (!element.nextElementSibling) {
        element.parentNode.insertBefore(errorDiv, element.nextSibling);
    }
    
    element.classList.add('error');
}

function clearError(element) {
    const errorDiv = element.nextElementSibling;
    if (errorDiv && errorDiv.className === 'error-message') {
        errorDiv.remove();
    }
    
    element.classList.remove('error');
}
```

#### Real-Time Validation
```javascript
const username = document.getElementById('username');

username.addEventListener('input', () => {
    if (!username.value.trim()) {
        showError(username, 'Username is required');
    } else {
        clearError(username);
    }
});

username.addEventListener('blur', () => {
    if (username.value.length < 3) {
        showError(username, 'Username must be at least 3 characters');
    }
});
```

### 4. Form Events

#### Common Form Events
```javascript
const input = document.getElementById('username');

// Input event - fires when the value changes
input.addEventListener('input', (event) => {
    console.log('Input value changed:', event.target.value);
});

// Change event - fires when the value changes and the element loses focus
input.addEventListener('change', (event) => {
    console.log('Input value changed and element lost focus:', event.target.value);
});

// Focus event - fires when the element receives focus
input.addEventListener('focus', () => {
    console.log('Input received focus');
});

// Blur event - fires when the element loses focus
input.addEventListener('blur', () => {
    console.log('Input lost focus');
});

// Select event - fires when text is selected
input.addEventListener('select', (event) => {
    const selectedText = event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd
    );
    console.log('Selected text:', selectedText);
});
```

### 5. Custom Form Controls

#### Creating Custom Form Controls
```javascript
class CustomCheckbox {
    constructor(element) {
        this.element = element;
        this.createCustomControl();
        this.setupEventListeners();
    }
    
    createCustomControl() {
        // Hide the original checkbox
        this.element.style.display = 'none';
        
        // Create custom checkbox
        this.customCheckbox = document.createElement('div');
        this.customCheckbox.className = 'custom-checkbox';
        this.customCheckbox.setAttribute('role', 'checkbox');
        this.customCheckbox.setAttribute('aria-checked', this.element.checked);
        
        // Insert custom checkbox after the original
        this.element.parentNode.insertBefore(this.customCheckbox, this.element.nextSibling);
        
        // Update custom checkbox state
        this.updateCustomCheckbox();
    }
    
    setupEventListeners() {
        // Toggle on click
        this.customCheckbox.addEventListener('click', () => {
            this.element.checked = !this.element.checked;
            this.updateCustomCheckbox();
        });
        
        // Update on original checkbox change
        this.element.addEventListener('change', () => {
            this.updateCustomCheckbox();
        });
    }
    
    updateCustomCheckbox() {
        this.customCheckbox.setAttribute('aria-checked', this.element.checked);
        this.customCheckbox.classList.toggle('checked', this.element.checked);
    }
}

// Usage
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => new CustomCheckbox(checkbox));
```

### 6. File Uploads

#### Handling File Uploads
```javascript
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

fileInput.addEventListener('change', () => {
    // Clear previous file list
    fileList.innerHTML = '';
    
    // Display selected files
    Array.from(fileInput.files).forEach(file => {
        const li = document.createElement('li');
        li.textContent = `${file.name} (${formatFileSize(file.size)})`;
        fileList.appendChild(li);
    });
});

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
```

### 7. Form Reset and Clearing

#### Resetting Forms
```javascript
const form = document.getElementById('userForm');
const resetButton = document.getElementById('resetButton');

// Reset form to default values
resetButton.addEventListener('click', () => {
    form.reset();
});

// Clear form manually
function clearForm() {
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
}
```

## Best Practices

1. **Accessibility**
   - Use proper labels for form controls
   - Include appropriate ARIA attributes
   - Ensure keyboard navigation works

2. **Validation**
   - Validate on both client and server side
   - Provide clear error messages
   - Use HTML5 validation attributes when possible

3. **User Experience**
   - Provide immediate feedback
   - Use appropriate input types
   - Include helpful placeholder text

4. **Security**
   - Sanitize user input
   - Use CSRF protection
   - Implement rate limiting for submissions

## Code Examples

### Example 1: Form Submission with Validation
```javascript
const form = document.getElementById('userForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (validateForm()) {
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        
        // Send data to server
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            showSuccessMessage('Form submitted successfully!');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            showErrorMessage('An error occurred. Please try again.');
        });
    }
});

function validateForm() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let isValid = true;
    
    // Username validation
    if (!username.value.trim()) {
        showError(username, 'Username is required');
        isValid = false;
    } else if (username.value.length < 3) {
        showError(username, 'Username must be at least 3 characters');
        isValid = false;
    } else {
        clearError(username);
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(email);
    }
    
    // Password validation
    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearError(password);
    }
    
    return isValid;
}
```

### Example 2: Dynamic Form Generation
```javascript
function createDynamicForm(fields) {
    const form = document.createElement('form');
    form.id = 'dynamicForm';
    
    fields.forEach(field => {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'form-field';
        
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;
        
        let input;
        
        switch (field.type) {
            case 'textarea':
                input = document.createElement('textarea');
                break;
            case 'select':
                input = document.createElement('select');
                field.options.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.value;
                    optionElement.textContent = option.label;
                    input.appendChild(optionElement);
                });
                break;
            default:
                input = document.createElement('input');
                input.type = field.type;
        }
        
        input.id = field.id;
        input.name = field.name;
        
        if (field.placeholder) input.placeholder = field.placeholder;
        if (field.required) input.required = true;
        if (field.value) input.value = field.value;
        
        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        form.appendChild(fieldContainer);
    });
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);
    
    return form;
}

// Usage
const fields = [
    { type: 'text', id: 'name', name: 'name', label: 'Name', required: true },
    { type: 'email', id: 'email', name: 'email', label: 'Email', required: true },
    { type: 'select', id: 'country', name: 'country', label: 'Country', options: [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' }
    ]},
    { type: 'textarea', id: 'message', name: 'message', label: 'Message', placeholder: 'Enter your message here' }
];

const dynamicForm = createDynamicForm(fields);
document.getElementById('formContainer').appendChild(dynamicForm);
```

### Example 3: Form with File Upload and Preview
```javascript
class FileUploadForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.fileInput = this.form.querySelector('input[type="file"]');
        this.previewContainer = document.getElementById('imagePreview');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.fileInput.addEventListener('change', () => this.handleFileSelect());
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }
    
    handleFileSelect() {
        this.previewContainer.innerHTML = '';
        
        Array.from(this.fileInput.files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.onload = (event) => {
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.className = 'preview-image';
                    this.previewContainer.appendChild(img);
                };
                
                reader.readAsDataURL(file);
            }
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(this.form);
        
        // Validate file size
        const files = this.fileInput.files;
        let totalSize = 0;
        
        Array.from(files).forEach(file => {
            totalSize += file.size;
        });
        
        if (totalSize > 5 * 1024 * 1024) { // 5MB limit
            alert('Total file size exceeds 5MB limit');
            return;
        }
        
        // Submit form
        fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Files uploaded successfully!');
            this.form.reset();
            this.previewContainer.innerHTML = '';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred during upload');
        });
    }
}

// Initialize
new FileUploadForm('uploadForm');
```

## Practice Exercises
1. Create a form with validation for user registration
2. Build a dynamic form generator based on configuration
3. Implement a file upload form with preview
4. Create a multi-step form with progress tracking
5. Build a form with real-time validation and feedback

[Continue to Advanced JavaScript Concepts →](../guides/javascript/advanced-concepts.md) 