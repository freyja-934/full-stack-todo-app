# Forms and User Input Practice Exercises

## Exercise 1: Basic Form Validation
Create a form with the following fields and implement validation:
- Username (required, 3-20 characters)
- Email (required, valid email format)
- Password (required, at least 8 characters, must contain numbers and letters)
- Confirm Password (must match password)

```javascript
// HTML template
<form id="registrationForm">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <span class="error"></span>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <span class="error"></span>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <span class="error"></span>
  </div>
  <div>
    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" name="confirmPassword">
    <span class="error"></span>
  </div>
  <button type="submit">Register</button>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('registrationForm');
const inputs = form.querySelectorAll('input');
const errorSpans = form.querySelectorAll('.error');

// Validation rules
const rules = {
  username: {
    required: true,
    minLength: 3,
    maxLength: 20
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  },
  confirmPassword: {
    required: true,
    match: 'password'
  }
};

// Real-time validation
inputs.forEach(input => {
  input.addEventListener('input', () => {
    validateField(input);
  });
});

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let isValid = true;
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  if (isValid) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    // Here you would typically send the data to a server
  }
});

function validateField(input) {
  const fieldName = input.name;
  const value = input.value;
  const errorSpan = input.nextElementSibling;
  const fieldRules = rules[fieldName];
  
  // Clear previous error
  errorSpan.textContent = '';
  
  // Required validation
  if (fieldRules.required && !value) {
    errorSpan.textContent = `${fieldName} is required`;
    return false;
  }
  
  // Length validation
  if (fieldRules.minLength && value.length < fieldRules.minLength) {
    errorSpan.textContent = `${fieldName} must be at least ${fieldRules.minLength} characters`;
    return false;
  }
  
  if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
    errorSpan.textContent = `${fieldName} must be less than ${fieldRules.maxLength} characters`;
    return false;
  }
  
  // Pattern validation
  if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
    errorSpan.textContent = `Invalid ${fieldName} format`;
    return false;
  }
  
  // Password match validation
  if (fieldRules.match) {
    const matchValue = form[fieldRules.match].value;
    if (value !== matchValue) {
      errorSpan.textContent = 'Passwords do not match';
      return false;
    }
  }
  
  return true;
}
```
</details>

## Exercise 2: Dynamic Form Fields
Create a form that dynamically adds/removes fields based on user selection:

```javascript
// HTML template
<form id="dynamicForm">
  <div>
    <label for="formType">Form Type:</label>
    <select id="formType">
      <option value="personal">Personal Information</option>
      <option value="business">Business Information</option>
      <option value="education">Education Information</option>
    </select>
  </div>
  <div id="dynamicFields"></div>
  <button type="submit">Submit</button>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('dynamicForm');
const formType = document.getElementById('formType');
const dynamicFields = document.getElementById('dynamicFields');

const fieldTemplates = {
  personal: [
    { type: 'text', name: 'firstName', label: 'First Name', required: true },
    { type: 'text', name: 'lastName', label: 'Last Name', required: true },
    { type: 'date', name: 'birthDate', label: 'Birth Date', required: true }
  ],
  business: [
    { type: 'text', name: 'companyName', label: 'Company Name', required: true },
    { type: 'text', name: 'position', label: 'Position', required: true },
    { type: 'number', name: 'yearsExperience', label: 'Years of Experience', required: true }
  ],
  education: [
    { type: 'text', name: 'school', label: 'School Name', required: true },
    { type: 'text', name: 'degree', label: 'Degree', required: true },
    { type: 'number', name: 'graduationYear', label: 'Graduation Year', required: true }
  ]
};

formType.addEventListener('change', () => {
  updateFormFields(formType.value);
});

function updateFormFields(type) {
  // Clear existing fields
  dynamicFields.innerHTML = '';
  
  // Add new fields
  fieldTemplates[type].forEach(field => {
    const fieldContainer = document.createElement('div');
    
    const label = document.createElement('label');
    label.setAttribute('for', field.name);
    label.textContent = field.label;
    
    const input = document.createElement('input');
    input.type = field.type;
    input.name = field.name;
    input.id = field.name;
    if (field.required) {
      input.required = true;
    }
    
    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);
    dynamicFields.appendChild(fieldContainer);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log('Form submitted:', data);
  // Here you would typically send the data to a server
});

// Initialize with first form type
updateFormFields(formType.value);
```
</details>

## Exercise 3: File Upload with Preview
Create a form that handles file uploads with image preview and validation:

```javascript
// HTML template
<form id="uploadForm">
  <div>
    <label for="imageUpload">Upload Image:</label>
    <input type="file" id="imageUpload" name="image" accept="image/*">
    <div id="preview"></div>
    <span class="error"></span>
  </div>
  <button type="submit">Upload</button>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('uploadForm');
const fileInput = document.getElementById('imageUpload');
const preview = document.getElementById('preview');
const errorSpan = document.querySelector('.error');

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

fileInput.addEventListener('change', handleFileSelect);
form.addEventListener('submit', handleSubmit);

function handleFileSelect(e) {
  const file = e.target.files[0];
  errorSpan.textContent = '';
  
  // Validate file
  if (!file) {
    errorSpan.textContent = 'Please select a file';
    return;
  }
  
  if (!ALLOWED_TYPES.includes(file.type)) {
    errorSpan.textContent = 'Please select a valid image file (JPEG, PNG, or GIF)';
    return;
  }
  
  if (file.size > MAX_FILE_SIZE) {
    errorSpan.textContent = 'File size must be less than 5MB';
    return;
  }
  
  // Preview image
  const reader = new FileReader();
  reader.onload = function(e) {
    preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 300px;">`;
  };
  reader.readAsDataURL(file);
}

function handleSubmit(e) {
  e.preventDefault();
  
  const file = fileInput.files[0];
  if (!file) {
    errorSpan.textContent = 'Please select a file';
    return;
  }
  
  // Create FormData and simulate upload
  const formData = new FormData();
  formData.append('image', file);
  
  // Simulate API call
  console.log('Uploading file:', file.name);
  // Here you would typically send the FormData to a server
  // fetch('/upload', {
  //   method: 'POST',
  //   body: formData
  // });
}
```
</details>

## Exercise 4: Form with Auto-save
Create a form that automatically saves user input to localStorage:

```javascript
// HTML template
<form id="autoSaveForm">
  <div>
    <label for="title">Title:</label>
    <input type="text" id="title" name="title">
  </div>
  <div>
    <label for="content">Content:</label>
    <textarea id="content" name="content" rows="5"></textarea>
  </div>
  <button type="submit">Save</button>
  <span id="saveStatus"></span>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('autoSaveForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const saveStatus = document.getElementById('saveStatus');

const STORAGE_KEY = 'form_autosave';
const AUTO_SAVE_DELAY = 1000; // 1 second

let autoSaveTimeout;

// Load saved data
function loadSavedData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { title, content } = JSON.parse(savedData);
    titleInput.value = title || '';
    contentInput.value = content || '';
  }
}

// Save data
function saveData() {
  const data = {
    title: titleInput.value,
    content: contentInput.value,
    lastSaved: new Date().toISOString()
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  showSaveStatus('Draft saved');
}

// Show save status
function showSaveStatus(message) {
  saveStatus.textContent = message;
  saveStatus.style.opacity = '1';
  
  setTimeout(() => {
    saveStatus.style.opacity = '0';
  }, 2000);
}

// Auto-save on input
function handleInput() {
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(saveData, AUTO_SAVE_DELAY);
  showSaveStatus('Saving...');
}

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  saveData();
  showSaveStatus('Form submitted successfully!');
  // Here you would typically send the data to a server
});

// Add input listeners
titleInput.addEventListener('input', handleInput);
contentInput.addEventListener('input', handleInput);

// Load saved data on page load
loadSavedData();
```
</details>

## Exercise 5: Multi-step Form
Create a multi-step form with progress indicator and validation:

```javascript
// HTML template
<form id="multiStepForm">
  <div class="progress-bar">
    <div class="progress"></div>
  </div>
  
  <div class="step" data-step="1">
    <h3>Personal Information</h3>
    <div>
      <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
  </div>
  
  <div class="step" data-step="2" style="display: none;">
    <h3>Address Information</h3>
    <div>
      <label for="street">Street:</label>
      <input type="text" id="street" name="street" required>
    </div>
    <div>
      <label for="city">City:</label>
      <input type="text" id="city" name="city" required>
    </div>
    <div>
      <label for="zip">ZIP Code:</label>
      <input type="text" id="zip" name="zip" required>
    </div>
  </div>
  
  <div class="step" data-step="3" style="display: none;">
    <h3>Additional Information</h3>
    <div>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required>
    </div>
    <div>
      <label for="comments">Comments:</label>
      <textarea id="comments" name="comments"></textarea>
    </div>
  </div>
  
  <div class="buttons">
    <button type="button" id="prevBtn" style="display: none;">Previous</button>
    <button type="button" id="nextBtn">Next</button>
    <button type="submit" id="submitBtn" style="display: none;">Submit</button>
  </div>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('multiStepForm');
const steps = form.querySelectorAll('.step');
const progress = form.querySelector('.progress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

let currentStep = 1;
const totalSteps = steps.length;

// Update progress bar
function updateProgress() {
  const percent = ((currentStep - 1) / (totalSteps - 1)) * 100;
  progress.style.width = `${percent}%`;
}

// Show/hide steps
function showStep(step) {
  steps.forEach(s => {
    if (parseInt(s.dataset.step) === step) {
      s.style.display = 'block';
    } else {
      s.style.display = 'none';
    }
  });
  
  // Update buttons
  prevBtn.style.display = step === 1 ? 'none' : 'inline-block';
  nextBtn.style.display = step === totalSteps ? 'none' : 'inline-block';
  submitBtn.style.display = step === totalSteps ? 'inline-block' : 'none';
  
  updateProgress();
}

// Validate current step
function validateStep(step) {
  const currentStepElement = form.querySelector(`[data-step="${step}"]`);
  const inputs = currentStepElement.querySelectorAll('input[required], textarea[required]');
  
  let isValid = true;
  inputs.forEach(input => {
    if (!input.value) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

// Event listeners
prevBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
});

nextBtn.addEventListener('click', () => {
  if (validateStep(currentStep)) {
    currentStep++;
    showStep(currentStep);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (validateStep(currentStep)) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    // Here you would typically send the data to a server
  }
});

// Initialize form
showStep(currentStep);
```
</details>

## Exercise 6: Form with Dynamic Validation Rules
Create a form where validation rules can be changed dynamically:

```javascript
// HTML template
<form id="dynamicValidationForm">
  <div>
    <label for="validationType">Validation Type:</label>
    <select id="validationType">
      <option value="strict">Strict</option>
      <option value="moderate">Moderate</option>
      <option value="lenient">Lenient</option>
    </select>
  </div>
  
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <span class="error"></span>
  </div>
  
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <span class="error"></span>
  </div>
  
  <button type="submit">Submit</button>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('dynamicValidationForm');
const validationType = document.getElementById('validationType');
const inputs = form.querySelectorAll('input');
const errorSpans = form.querySelectorAll('.error');

// Validation rules for different types
const validationRules = {
  strict: {
    username: {
      minLength: 8,
      maxLength: 20,
      pattern: /^[a-zA-Z0-9_]+$/,
      message: 'Username must be 8-20 characters and contain only letters, numbers, and underscores'
    },
    password: {
      minLength: 12,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
      message: 'Password must be at least 12 characters and contain uppercase, lowercase, numbers, and special characters'
    }
  },
  moderate: {
    username: {
      minLength: 6,
      maxLength: 15,
      pattern: /^[a-zA-Z0-9_]+$/,
      message: 'Username must be 6-15 characters and contain only letters, numbers, and underscores'
    },
    password: {
      minLength: 8,
      pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message: 'Password must be at least 8 characters and contain both letters and numbers'
    }
  },
  lenient: {
    username: {
      minLength: 3,
      maxLength: 20,
      pattern: /^[a-zA-Z0-9_]+$/,
      message: 'Username must be 3-20 characters and contain only letters, numbers, and underscores'
    },
    password: {
      minLength: 6,
      pattern: /^.{6,}$/,
      message: 'Password must be at least 6 characters'
    }
  }
};

// Current validation rules
let currentRules = validationRules.strict;

// Update validation rules
validationType.addEventListener('change', () => {
  currentRules = validationRules[validationType.value];
  validateAllFields();
});

// Validate a single field
function validateField(input) {
  const fieldName = input.name;
  const value = input.value;
  const errorSpan = input.nextElementSibling;
  const rules = currentRules[fieldName];
  
  errorSpan.textContent = '';
  
  if (value.length < rules.minLength) {
    errorSpan.textContent = rules.message;
    return false;
  }
  
  if (rules.maxLength && value.length > rules.maxLength) {
    errorSpan.textContent = rules.message;
    return false;
  }
  
  if (rules.pattern && !rules.pattern.test(value)) {
    errorSpan.textContent = rules.message;
    return false;
  }
  
  return true;
}

// Validate all fields
function validateAllFields() {
  inputs.forEach(input => {
    validateField(input);
  });
}

// Real-time validation
inputs.forEach(input => {
  input.addEventListener('input', () => {
    validateField(input);
  });
});

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let isValid = true;
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  if (isValid) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    // Here you would typically send the data to a server
  }
});
```
</details>

## Exercise 7: Form with Conditional Fields
Create a form where certain fields appear/disappear based on other field values:

```javascript
// HTML template
<form id="conditionalForm">
  <div>
    <label for="employmentStatus">Employment Status:</label>
    <select id="employmentStatus" name="employmentStatus">
      <option value="">Select status</option>
      <option value="employed">Employed</option>
      <option value="selfEmployed">Self-Employed</option>
      <option value="unemployed">Unemployed</option>
    </select>
  </div>
  
  <div id="employedFields" style="display: none;">
    <div>
      <label for="employer">Employer:</label>
      <input type="text" id="employer" name="employer">
    </div>
    <div>
      <label for="position">Position:</label>
      <input type="text" id="position" name="position">
    </div>
  </div>
  
  <div id="selfEmployedFields" style="display: none;">
    <div>
      <label for="businessName">Business Name:</label>
      <input type="text" id="businessName" name="businessName">
    </div>
    <div>
      <label for="businessType">Business Type:</label>
      <input type="text" id="businessType" name="businessType">
    </div>
  </div>
  
  <div id="unemployedFields" style="display: none;">
    <div>
      <label for="lastEmployer">Last Employer:</label>
      <input type="text" id="lastEmployer" name="lastEmployer">
    </div>
    <div>
      <label for="unemploymentDuration">Duration of Unemployment (months):</label>
      <input type="number" id="unemploymentDuration" name="unemploymentDuration">
    </div>
  </div>
  
  <button type="submit">Submit</button>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('conditionalForm');
const employmentStatus = document.getElementById('employmentStatus');
const employedFields = document.getElementById('employedFields');
const selfEmployedFields = document.getElementById('selfEmployedFields');
const unemployedFields = document.getElementById('unemployedFields');

// Show/hide fields based on employment status
employmentStatus.addEventListener('change', () => {
  const status = employmentStatus.value;
  
  // Hide all conditional fields
  [employedFields, selfEmployedFields, unemployedFields].forEach(field => {
    field.style.display = 'none';
  });
  
  // Show relevant fields
  switch (status) {
    case 'employed':
      employedFields.style.display = 'block';
      break;
    case 'selfEmployed':
      selfEmployedFields.style.display = 'block';
      break;
    case 'unemployed':
      unemployedFields.style.display = 'block';
      break;
  }
  
  // Update required attributes
  updateRequiredFields(status);
});

// Update required attributes based on visible fields
function updateRequiredFields(status) {
  const allInputs = form.querySelectorAll('input');
  allInputs.forEach(input => {
    input.required = false;
  });
  
  let requiredInputs;
  switch (status) {
    case 'employed':
      requiredInputs = employedFields.querySelectorAll('input');
      break;
    case 'selfEmployed':
      requiredInputs = selfEmployedFields.querySelectorAll('input');
      break;
    case 'unemployed':
      requiredInputs = unemployedFields.querySelectorAll('input');
      break;
  }
  
  if (requiredInputs) {
    requiredInputs.forEach(input => {
      input.required = true;
    });
  }
}

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Clean up empty fields
  Object.keys(data).forEach(key => {
    if (data[key] === '') {
      delete data[key];
    }
  });
  
  console.log('Form submitted:', data);
  // Here you would typically send the data to a server
});
```
</details>

## Exercise 8: Form with File Upload and Image Preview
Create a form that handles multiple file uploads with previews and validation:

```javascript
// HTML template
<form id="fileUploadForm">
  <div>
    <label for="files">Select Images:</label>
    <input type="file" id="files" name="files" multiple accept="image/*">
    <div id="previewContainer"></div>
    <span class="error"></span>
  </div>
  <button type="submit">Upload</button>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('fileUploadForm');
const fileInput = document.getElementById('files');
const previewContainer = document.getElementById('previewContainer');
const errorSpan = document.querySelector('.error');

const MAX_FILES = 5;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

fileInput.addEventListener('change', handleFileSelect);
form.addEventListener('submit', handleSubmit);

function handleFileSelect(e) {
  const files = Array.from(e.target.files);
  errorSpan.textContent = '';
  previewContainer.innerHTML = '';
  
  // Validate number of files
  if (files.length > MAX_FILES) {
    errorSpan.textContent = `Maximum ${MAX_FILES} files allowed`;
    return;
  }
  
  // Validate each file
  const invalidFiles = files.filter(file => {
    return !ALLOWED_TYPES.includes(file.type) || file.size > MAX_FILE_SIZE;
  });
  
  if (invalidFiles.length > 0) {
    errorSpan.textContent = 'Some files are invalid. Please ensure all files are images under 5MB.';
    return;
  }
  
  // Create previews
  files.forEach(file => {
    const reader = new FileReader();
    const preview = document.createElement('div');
    preview.className = 'preview';
    
    reader.onload = function(e) {
      preview.innerHTML = `
        <img src="${e.target.result}" alt="Preview">
        <span class="filename">${file.name}</span>
        <button type="button" class="remove">×</button>
      `;
      
      preview.querySelector('.remove').addEventListener('click', () => {
        preview.remove();
        updateFileInput();
      });
    };
    
    reader.readAsDataURL(file);
    previewContainer.appendChild(preview);
  });
}

function updateFileInput() {
  const dt = new DataTransfer();
  const previews = previewContainer.querySelectorAll('.preview');
  
  Array.from(fileInput.files).forEach((file, index) => {
    if (previews[index]) {
      dt.items.add(file);
    }
  });
  
  fileInput.files = dt.files;
}

function handleSubmit(e) {
  e.preventDefault();
  
  const files = Array.from(fileInput.files);
  if (files.length === 0) {
    errorSpan.textContent = 'Please select at least one file';
    return;
  }
  
  const formData = new FormData();
  files.forEach(file => {
    formData.append('files', file);
  });
  
  console.log('Uploading files:', files.map(f => f.name));
  // Here you would typically send the FormData to a server
  // fetch('/upload', {
  //   method: 'POST',
  //   body: formData
  // });
}
```
</details>

## Exercise 9: Form with Real-time Password Strength Meter
Create a form with a password strength meter that updates in real-time:

```javascript
// HTML template
<form id="passwordForm">
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <div class="strength-meter">
      <div class="strength-bar"></div>
    </div>
    <div class="strength-text"></div>
    <div class="requirements"></div>
  </div>
  <button type="submit">Submit</button>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.querySelector('.strength-text');
const requirements = document.querySelector('.requirements');

const passwordRequirements = [
  { regex: /.{8,}/, text: 'At least 8 characters' },
  { regex: /[A-Z]/, text: 'At least one uppercase letter' },
  { regex: /[a-z]/, text: 'At least one lowercase letter' },
  { regex: /[0-9]/, text: 'At least one number' },
  { regex: /[^A-Za-z0-9]/, text: 'At least one special character' }
];

// Initialize requirements list
function initializeRequirements() {
  passwordRequirements.forEach(req => {
    const li = document.createElement('li');
    li.textContent = req.text;
    li.classList.add('requirement');
    requirements.appendChild(li);
  });
}

// Check password strength
function checkPasswordStrength(password) {
  let strength = 0;
  const metRequirements = [];
  
  passwordRequirements.forEach((req, index) => {
    const isMet = req.regex.test(password);
    metRequirements.push(isMet);
    
    if (isMet) {
      strength += 20;
    }
    
    const li = requirements.children[index];
    li.classList.toggle('met', isMet);
  });
  
  return {
    strength,
    metRequirements
  };
}

// Update strength meter
function updateStrengthMeter(password) {
  const { strength, metRequirements } = checkPasswordStrength(password);
  
  strengthBar.style.width = `${strength}%`;
  
  // Update color based on strength
  if (strength <= 20) {
    strengthBar.style.backgroundColor = '#ff4444';
    strengthText.textContent = 'Very Weak';
  } else if (strength <= 40) {
    strengthBar.style.backgroundColor = '#ffbb33';
    strengthText.textContent = 'Weak';
  } else if (strength <= 60) {
    strengthBar.style.backgroundColor = '#ffeb3b';
    strengthText.textContent = 'Medium';
  } else if (strength <= 80) {
    strengthBar.style.backgroundColor = '#00C851';
    strengthText.textContent = 'Strong';
  } else {
    strengthBar.style.backgroundColor = '#007E33';
    strengthText.textContent = 'Very Strong';
  }
}

// Event listeners
passwordInput.addEventListener('input', (e) => {
  updateStrengthMeter(e.target.value);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const password = passwordInput.value;
  const { strength, metRequirements } = checkPasswordStrength(password);
  
  if (strength < 60) {
    alert('Please choose a stronger password');
    return;
  }
  
  console.log('Password submitted:', password);
  // Here you would typically send the data to a server
});

// Initialize
initializeRequirements();
```
</details>

## Exercise 10: Form with Custom Validation Messages
Create a form with custom validation messages and styling:

```javascript
// HTML template
<form id="customValidationForm">
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <span class="error"></span>
  </div>
  
  <div>
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone">
    <span class="error"></span>
  </div>
  
  <div>
    <label for="website">Website:</label>
    <input type="url" id="website" name="website">
    <span class="error"></span>
  </div>
  
  <button type="submit">Submit</button>
</form>

// Your code here
```

<details>
<summary>Solution</summary>

```javascript
const form = document.getElementById('customValidationForm');
const inputs = form.querySelectorAll('input');
const errorSpans = form.querySelectorAll('.error');

const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
    customValidation: (value) => {
      // Check for disposable email domains
      const disposableDomains = ['tempmail.com', 'throwaway.com'];
      const domain = value.split('@')[1];
      return !disposableDomains.includes(domain);
    },
    customMessage: 'Please use a non-disposable email address'
  },
  phone: {
    pattern: /^\+?[\d\s-]{10,}$/,
    message: 'Please enter a valid phone number',
    customValidation: (value) => {
      // Remove all non-digit characters
      const digits = value.replace(/\D/g, '');
      return digits.length >= 10;
    },
    customMessage: 'Phone number must contain at least 10 digits'
  },
  website: {
    pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
    message: 'Please enter a valid website URL',
    customValidation: (value) => {
      // Check if URL is accessible (simulated)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(value.startsWith('https://'));
        }, 500);
      });
    },
    customMessage: 'Website must use HTTPS'
  }
};

// Validate a single field
async function validateField(input) {
  const fieldName = input.name;
  const value = input.value;
  const errorSpan = input.nextElementSibling;
  const rules = validationRules[fieldName];
  
  errorSpan.textContent = '';
  input.classList.remove('error');
  
  if (!value) {
    return true; // Empty fields are handled by HTML5 validation
  }
  
  if (!rules.pattern.test(value)) {
    errorSpan.textContent = rules.message;
    input.classList.add('error');
    return false;
  }
  
  if (rules.customValidation) {
    try {
      const isValid = await rules.customValidation(value);
      if (!isValid) {
        errorSpan.textContent = rules.customMessage;
        input.classList.add('error');
        return false;
      }
    } catch (error) {
      errorSpan.textContent = 'Validation error occurred';
      input.classList.add('error');
      return false;
    }
  }
  
  return true;
}

// Real-time validation
inputs.forEach(input => {
  input.addEventListener('input', () => {
    validateField(input);
  });
  
  input.addEventListener('blur', () => {
    validateField(input);
  });
});

// Form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  let isValid = true;
  for (const input of inputs) {
    if (!(await validateField(input))) {
      isValid = false;
    }
  }
  
  if (isValid) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    // Here you would typically send the data to a server
  }
});
```
</details>

## Next Steps
After completing these exercises, you should be comfortable with:
1. Basic form validation
2. Dynamic form fields
3. File uploads and previews
4. Multi-step forms
5. Conditional form fields
6. Real-time validation
7. Custom validation rules
8. Form data handling
9. User feedback and error messages
10. Form submission and data processing

You can now move on to more advanced topics like:
- Form accessibility
- Form security
- Form state management
- Form testing
- Form optimization 