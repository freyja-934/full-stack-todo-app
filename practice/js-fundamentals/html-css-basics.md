# HTML & CSS Basics Practice Exercises

## Exercise 1: Basic HTML Structure
Create a basic HTML structure for a todo list application. Include:
- A header with a title
- A form to add new todos
- A list to display todos
- A footer with copyright information

```html
<!-- Your HTML code here -->
```

<details>
<summary>Solution</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
</head>
<body>
    <header>
        <h1>My Todo List</h1>
    </header>

    <main>
        <form id="todo-form">
            <input type="text" id="todo-input" placeholder="Enter a new todo">
            <button type="submit">Add Todo</button>
        </form>

        <ul id="todo-list">
            <!-- Todos will be added here -->
        </ul>
    </main>

    <footer>
        <p>&copy; 2024 Todo List App</p>
    </footer>
</body>
</html>
```
</details>

## Exercise 2: CSS Styling
Style the todo list application with CSS. Include:
- A clean, modern layout
- Responsive design
- Hover effects
- Visual feedback for interactions

```css
/* Your CSS code here */
```

<details>
<summary>Solution</summary>

```css
/* Reset default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

h1 {
    color: #333;
    font-size: 2.5rem;
}

#todo-form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

#todo-list {
    list-style: none;
}

.todo-item {
    background-color: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.2s;
}

.todo-item:hover {
    transform: translateX(5px);
}

.completed {
    text-decoration: line-through;
    opacity: 0.7;
}

footer {
    text-align: center;
    margin-top: 30px;
    color: #666;
}

/* Responsive Design */
@media (max-width: 600px) {
    body {
        padding: 10px;
    }

    h1 {
        font-size: 2rem;
    }

    #todo-form {
        flex-direction: column;
    }

    button {
        width: 100%;
    }
}
```
</details>

## Exercise 3: Semantic HTML
Create a semantic HTML structure for a blog post. Include:
- Proper heading hierarchy
- Article sections
- Navigation
- Sidebar
- Comments section

```html
<!-- Your HTML code here -->
```

<details>
<summary>Solution</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Post</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <header>
                <h1>Understanding HTML Semantics</h1>
                <p class="meta">Posted by John Doe on March 15, 2024</p>
            </header>

            <section>
                <h2>Introduction</h2>
                <p>Semantic HTML is crucial for web accessibility and SEO...</p>
            </section>

            <section>
                <h2>Key Benefits</h2>
                <ul>
                    <li>Improved accessibility</li>
                    <li>Better SEO</li>
                    <li>Easier maintenance</li>
                </ul>
            </section>

            <section>
                <h2>Conclusion</h2>
                <p>Using semantic HTML is a best practice...</p>
            </section>

            <section class="comments">
                <h2>Comments</h2>
                <article class="comment">
                    <h3>Jane Smith</h3>
                    <p>Great article! Very informative.</p>
                </article>
            </section>
        </article>

        <aside>
            <h2>Related Posts</h2>
            <ul>
                <li><a href="#">CSS Best Practices</a></li>
                <li><a href="#">JavaScript Fundamentals</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 My Blog</p>
    </footer>
</body>
</html>
```
</details>

## Exercise 4: CSS Layout
Create a responsive grid layout for a photo gallery. Include:
- Grid layout
- Flexbox for image containers
- Media queries for different screen sizes
- Image hover effects

```css
/* Your CSS code here */
```

<details>
<summary>Solution</summary>

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.gallery-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-item .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .overlay {
    transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
    .gallery {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .gallery {
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 10px;
    }
}
```
</details>

## Exercise 5: Form Styling
Create a styled contact form with:
- Input validation styles
- Custom checkbox and radio buttons
- Error states
- Success states
- Responsive design

```css
/* Your CSS code here */
```

<details>
<summary>Solution</summary>

```css
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    border-color: #4CAF50;
    outline: none;
}

input[type="text"].error,
input[type="email"].error,
textarea.error {
    border-color: #ff0000;
}

.error-message {
    color: #ff0000;
    font-size: 0.9rem;
    margin-top: 5px;
}

/* Custom Checkbox */
.checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
}

input[type="checkbox"]:checked {
    background-color: #4CAF50;
    border-color: #4CAF50;
}

input[type="checkbox"]:checked::after {
    content: '✓';
    position: absolute;
    color: white;
    font-size: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Success State */
.success-message {
    background-color: #dff0d8;
    color: #3c763d;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
    display: none;
}

.success-message.show {
    display: block;
}

/* Responsive Design */
@media (max-width: 480px) {
    .contact-form {
        padding: 10px;
    }
}
```
</details>

## Exercise 6: CSS Variables and Theming
Create a themeable component using CSS variables. Include:
- Light and dark themes
- Color schemes
- Typography settings
- Spacing variables

```css
/* Your CSS code here */
```

<details>
<summary>Solution</summary>

```css
:root {
    /* Colors */
    --primary-color: #4CAF50;
    --secondary-color: #2196F3;
    --text-color: #333;
    --background-color: #fff;
    --border-color: #ddd;
    
    /* Typography */
    --font-family: Arial, sans-serif;
    --font-size-base: 16px;
    --font-size-h1: 2.5rem;
    --font-size-h2: 2rem;
    --font-size-h3: 1.75rem;
    
    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    
    /* Border Radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
}

/* Dark Theme */
[data-theme="dark"] {
    --primary-color: #66bb6a;
    --secondary-color: #42a5f5;
    --text-color: #fff;
    --background-color: #333;
    --border-color: #555;
}

/* Component Styles */
.card {
    background-color: var(--background-color);
    color: var(--text-color);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-md);
    border: 1px solid var(--border-color);
    margin-bottom: var(--spacing-md);
}

.card h2 {
    font-family: var(--font-family);
    font-size: var(--font-size-h2);
    margin-bottom: var(--spacing-md);
    color: var(--primary-color);
}

.card p {
    font-size: var(--font-size-base);
    line-height: 1.6;
}

.button {
    background-color: var(--primary-color);
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-sm);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: var(--secondary-color);
}
```
</details>

## Exercise 7: CSS Animations
Create a set of reusable animations for:
- Loading spinners
- Button hover effects
- Page transitions
- Notification animations

```css
/* Your CSS code here */
```

<details>
<summary>Solution</summary>

```css
/* Loading Spinner */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Button Hover Effect */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.pulse-button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.pulse-button:hover {
    animation: pulse 1s infinite;
}

/* Page Transition */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.page-transition {
    animation: fadeIn 0.5s ease-in;
}

/* Notification Animation */
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    border-radius: 4px;
    animation: slideIn 0.3s ease-out;
}

/* Hover Card Effect */
@keyframes lift {
    from {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    to {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
}

.hover-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.hover-card:hover {
    animation: lift 0.3s forwards;
}
```
</details>

## Exercise 8: Responsive Navigation
Create a responsive navigation menu that:
- Collapses into a hamburger menu on mobile
- Has smooth transitions
- Includes dropdown menus
- Is accessible

```css
/* Your CSS code here */
```

<details>
<summary>Solution</summary>

```css
.nav {
    background-color: #333;
    padding: 1rem;
}

.nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-item {
    position: relative;
    margin-right: 1rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: #555;
}

/* Dropdown Menu */
.dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    min-width: 200px;
    display: none;
    z-index: 1;
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.dropdown-item {
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: block;
}

.dropdown-item:hover {
    background-color: #555;
}

/* Hamburger Menu */
.hamburger {
    display: none;
    cursor: pointer;
    padding: 0.5rem;
}

.hamburger-line {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    transition: 0.3s;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    .nav-list {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #333;
        flex-direction: column;
    }

    .nav-list.active {
        display: flex;
    }

    .nav-item {
        margin: 0;
    }

    .dropdown-menu {
        position: static;
        background-color: #444;
        display: none;
    }

    .dropdown.active .dropdown-menu {
        display: block;
    }
}

/* Accessibility */
.nav-link:focus,
.dropdown-item:focus {
    outline: 2px solid #fff;
    outline-offset: -2px;
}

/* Screen Reader Only */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
```
</details>

## Exercise 9: CSS Grid Layout
Create a responsive grid layout for a dashboard with:
- Sidebar navigation
- Main content area
- Widget grid
- Responsive breakpoints

```css
/* Your CSS code here */
```

<details>
<summary>Solution</summary>

```css
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr;
    min-height: 100vh;
}

/* Header */
.header {
    grid-column: 1 / -1;
    background-color: #333;
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Sidebar */
.sidebar {
    background-color: #f5f5f5;
    padding: 1rem;
    grid-row: 2 / -1;
}

.sidebar-nav {
    list-style: none;
    padding: 0;
}

.sidebar-item {
    margin-bottom: 0.5rem;
}

.sidebar-link {
    color: #333;
    text-decoration: none;
    padding: 0.5rem;
    display: block;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.sidebar-link:hover {
    background-color: #e0e0e0;
}

/* Main Content */
.main-content {
    padding: 1rem;
    background-color: #fff;
}

/* Widget Grid */
.widget-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.widget {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .dashboard {
        grid-template-columns: 1fr;
    }

    .sidebar {
        grid-column: 1 / -1;
        grid-row: auto;
    }

    .widget-grid {
        grid-template-columns: 1fr;
    }
}

/* Widget Sizes */
.widget-large {
    grid-column: span 2;
}

.widget-tall {
    grid-row: span 2;
}

@media (max-width: 768px) {
    .widget-large,
    .widget-tall {
        grid-column: auto;
        grid-row: auto;
    }
}
```
</details>

## Exercise 10: CSS Custom Properties
Create a theme system using CSS custom properties that:
- Supports multiple color schemes
- Allows for dynamic theme switching
- Includes typography settings
- Has spacing variables

```css
/* Your CSS code here */
```

<details>
<summary>Solution</summary>

```css
/* Theme Variables */
:root {
    /* Light Theme (Default) */
    --primary-color: #4CAF50;
    --secondary-color: #2196F3;
    --background-color: #ffffff;
    --surface-color: #f5f5f5;
    --text-primary: #333333;
    --text-secondary: #666666;
    --border-color: #dddddd;
    
    /* Typography */
    --font-family: 'Segoe UI', system-ui, sans-serif;
    --font-size-base: 16px;
    --font-size-sm: 14px;
    --font-size-lg: 18px;
    --font-weight-normal: 400;
    --font-weight-bold: 700;
    --line-height: 1.5;
    
    /* Spacing */
    --spacing-unit: 8px;
    --spacing-xs: calc(var(--spacing-unit) * 1);
    --spacing-sm: calc(var(--spacing-unit) * 2);
    --spacing-md: calc(var(--spacing-unit) * 3);
    --spacing-lg: calc(var(--spacing-unit) * 4);
    --spacing-xl: calc(var(--spacing-unit) * 5);
    
    /* Border Radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    
    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 8px rgba(0,0,0,0.1);
    --shadow-lg: 0 8px 16px rgba(0,0,0,0.1);
}

/* Dark Theme */
[data-theme="dark"] {
    --primary-color: #66bb6a;
    --secondary-color: #42a5f5;
    --background-color: #121212;
    --surface-color: #1e1e1e;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --border-color: #333333;
}

/* Component Styles */
.card {
    background-color: var(--surface-color);
    color: var(--text-primary);
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-sm);
    margin-bottom: var(--spacing-md);
}

.button {
    background-color: var(--primary-color);
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-sm);
    border: none;
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: var(--secondary-color);
}

.text {
    color: var(--text-primary);
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: var(--line-height);
}

.text-secondary {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
}

/* Theme Switch Button */
.theme-switch {
    position: fixed;
    top: var(--spacing-md);
    right: var(--spacing-md);
    padding: var(--spacing-sm);
    background-color: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-sm);
    cursor: pointer;
}
```
</details>

## Next Steps
After completing these exercises, you should be comfortable with:
1. Creating semantic HTML structures
2. Styling elements with CSS
3. Building responsive layouts
4. Working with CSS variables and themes
5. Creating animations and transitions
6. Implementing responsive navigation
7. Using CSS Grid and Flexbox
8. Building accessible components

[Continue to Selecting Elements →](../guides/javascript/selecting-elements.md) 