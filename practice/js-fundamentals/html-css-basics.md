# HTML & CSS Basics Practice Exercises

## Exercise 1: Basic HTML Structure
Create a simple webpage with the following structure:
- A header with a title and navigation menu
- A main content area with a heading and paragraph
- A sidebar with a list of links
- A footer with copyright information

```html
<!-- Your HTML code here -->
```

## Exercise 2: Semantic HTML
Convert the following HTML to use semantic elements:
```html
<div class="header">
    <div class="nav">
        <div class="nav-item">Home</div>
        <div class="nav-item">About</div>
        <div class="nav-item">Contact</div>
    </div>
</div>
<div class="main">
    <div class="content">
        <div class="heading">Welcome</div>
        <div class="text">This is a paragraph.</div>
    </div>
    <div class="sidebar">
        <div class="links">
            <div class="link">Link 1</div>
            <div class="link">Link 2</div>
        </div>
    </div>
</div>
<div class="footer">
    <div class="copyright">© 2024</div>
</div>
```

## Exercise 3: CSS Selectors
Write CSS selectors to style the following HTML:
```html
<div class="container">
    <header id="main-header">
        <h1>Title</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article class="post">
            <h2>Article Title</h2>
            <p>Article content...</p>
        </article>
    </main>
</div>
```

## Exercise 4: Box Model
Create a card component using the box model properties:
- Width: 300px
- Height: 200px
- Padding: 20px
- Margin: 10px
- Border: 1px solid gray
- Border radius: 8px

## Exercise 5: Flexbox Layout
Create a responsive navigation bar using flexbox:
- Logo on the left
- Navigation links in the center
- Login button on the right
- Items should wrap on smaller screens

## Exercise 6: CSS Units
Create a responsive layout using different CSS units:
- Font sizes using rem
- Margins and padding using em
- Container width using %
- Viewport-based heights using vh
- Grid columns using fr

## Exercise 7: CSS Transitions
Add transitions to the following elements:
- Button hover effect
- Image scale on hover
- Color change on link hover
- Smooth height change for an accordion

## Exercise 8: Media Queries
Create a responsive layout that:
- Shows a sidebar on desktop
- Hides sidebar on mobile
- Changes font sizes based on screen width
- Adjusts grid columns for different breakpoints

## Exercise 9: CSS Grid
Create a photo gallery using CSS Grid:
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Gap between items: 20px
- Responsive image sizes

## Exercise 10: Form Styling
Style a contact form with:
- Custom input styles
- Focus states
- Error states
- Submit button styling
- Responsive layout

## Exercise 11: Challenge: Card Component
Create a reusable card component that:
- Has a header with title and icon
- Contains main content area
- Includes a footer with actions
- Supports different variants (primary, secondary)
- Is fully responsive

## Exercise 12: Challenge: Navigation Menu
Build a responsive navigation menu that:
- Collapses to a hamburger menu on mobile
- Has dropdown submenus
- Includes active states
- Supports keyboard navigation
- Has smooth animations

## Exercise 13: Challenge: Modal Dialog
Create a modal dialog component that:
- Centers content on screen
- Has a semi-transparent backdrop
- Closes on backdrop click
- Supports keyboard navigation (Esc to close)
- Has smooth enter/exit animations

## Solutions

<details>
<summary>Click to see solutions</summary>

### Exercise 1: Basic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Welcome to Our Site</h2>
        <p>This is the main content area of our website.</p>
    </main>

    <aside>
        <h3>Quick Links</h3>
        <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>
```

### Exercise 2: Semantic HTML
```html
<header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>Welcome</h1>
        <p>This is a paragraph.</p>
    </article>
    <aside>
        <nav>
            <ul>
                <li><a href="#link1">Link 1</a></li>
                <li><a href="#link2">Link 2</a></li>
            </ul>
        </nav>
    </aside>
</main>

<footer>
    <p>&copy; 2024</p>
</footer>
```

### Exercise 3: CSS Selectors
```css
/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
#main-header {
    background-color: #f8f9fa;
    padding: 1rem;
}

#main-header h1 {
    color: #333;
    margin: 0;
}

/* Navigation */
nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
}

nav a {
    color: #666;
    text-decoration: none;
}

nav a:hover {
    color: #333;
}

/* Main content */
main {
    padding: 2rem 0;
}

.post {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.post h2 {
    color: #333;
    margin-top: 0;
}
```

### Exercise 4: Box Model
```css
.card {
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 10px;
    border: 1px solid gray;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Exercise 5: Flexbox Layout
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.login-button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-links {
        flex-direction: column;
        text-align: center;
    }
}
```

### Exercise 6: CSS Units
```css
:root {
    font-size: 16px;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.heading {
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.text {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
}

.sidebar {
    width: 25%;
    padding: 1.5rem;
}

.hero {
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}
```

### Exercise 7: CSS Transitions
```css
/* Button hover effect */
.button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
}

/* Image scale on hover */
.image {
    transition: transform 0.3s ease;
}

.image:hover {
    transform: scale(1.1);
}

/* Link color change */
.link {
    color: #666;
    transition: color 0.3s ease;
}

.link:hover {
    color: #333;
}

/* Accordion height change */
.accordion {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
}

.accordion.open {
    max-height: 500px;
}
```

### Exercise 8: Media Queries
```css
/* Base styles */
.container {
    display: flex;
    gap: 2rem;
}

.sidebar {
    width: 250px;
}

.main-content {
    flex: 1;
}

/* Tablet */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    
    .sidebar {
        width: 100%;
    }
    
    .heading {
        font-size: 1.5rem;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .container {
        padding: 1rem;
    }
    
    .heading {
        font-size: 1.25rem;
    }
    
    .text {
        font-size: 0.875rem;
    }
}
```

### Exercise 9: CSS Grid
```css
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.gallery-item {
    aspect-ratio: 1;
    overflow: hidden;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Tablet */
@media (max-width: 768px) {
    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile */
@media (max-width: 480px) {
    .gallery {
        grid-template-columns: 1fr;
    }
}
```

### Exercise 10: Form Styling
```css
.form-group {
    margin-bottom: 1rem;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: #007bff;
}

.form-input.error {
    border-color: #dc3545;
}

.error-message {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

.submit-button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #0056b3;
}

@media (max-width: 768px) {
    .form-group {
        margin-bottom: 0.75rem;
    }
}
```

### Exercise 11: Challenge: Card Component
```css
.card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
}

.card-header {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.card-title {
    margin: 0;
    font-size: 1.25rem;
}

.card-icon {
    width: 24px;
    height: 24px;
}

.card-content {
    padding: 1rem;
}

.card-footer {
    padding: 1rem;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}

/* Variants */
.card.primary {
    border-top: 4px solid #007bff;
}

.card.secondary {
    border-top: 4px solid #6c757d;
}

/* Responsive */
@media (max-width: 768px) {
    .card-header {
        flex-direction: column;
        text-align: center;
    }
    
    .card-footer {
        flex-direction: column;
    }
    
    .card-footer button {
        width: 100%;
    }
}
```

### Exercise 12: Challenge: Navigation Menu
```css
.nav {
    background-color: #f8f9fa;
    padding: 1rem;
}

.nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1rem;
}

.nav-item {
    position: relative;
}

.nav-link {
    color: #333;
    text-decoration: none;
    padding: 0.5rem;
    display: block;
}

.nav-link:hover {
    color: #007bff;
}

/* Dropdown */
.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    min-width: 200px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

.nav-item:hover .dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Mobile menu */
.menu-toggle {
    display: none;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    
    .nav-list {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: white;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .nav-list.open {
        display: flex;
    }
    
    .dropdown {
        position: static;
        box-shadow: none;
        opacity: 1;
        visibility: visible;
        transform: none;
        display: none;
    }
    
    .nav-item.open .dropdown {
        display: block;
    }
}
```

### Exercise 13: Challenge: Modal Dialog
```css
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.modal-backdrop.open {
    opacity: 1;
    visibility: visible;
}

.modal {
    background-color: white;
    border-radius: 8px;
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    transform: translateY(-20px);
    transition: transform 0.3s ease;
}

.modal-backdrop.open .modal {
    transform: translateY(0);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.modal-title {
    margin: 0;
    font-size: 1.5rem;
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
}

.modal-content {
    margin-bottom: 1.5rem;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}

/* Animation keyframes */
@keyframes modalIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes modalOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}
```

</details> 