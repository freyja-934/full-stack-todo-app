# HTML & CSS Basics for JavaScript Developers

## Introduction
HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundational technologies for building web pages. As a JavaScript developer, understanding HTML and CSS is crucial for effectively manipulating the DOM and creating interactive web applications.

## HTML Basics

### Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

### Common Elements
```html
<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>

<!-- Paragraphs -->
<p>This is a paragraph of text.</p>

<!-- Links -->
<a href="https://example.com">Click here</a>

<!-- Images -->
<img src="image.jpg" alt="Description">

<!-- Lists -->
<ul>
    <li>Unordered item 1</li>
    <li>Unordered item 2</li>
</ul>

<ol>
    <li>Ordered item 1</li>
    <li>Ordered item 2</li>
</ol>

<!-- Forms -->
<form>
    <input type="text" placeholder="Enter text">
    <button type="submit">Submit</button>
</form>

<!-- Divisions and Spans -->
<div class="container">
    <span class="highlight">Highlighted text</span>
</div>
```

### Important Attributes
```html
<!-- ID and Class -->
<div id="unique-element" class="shared-style">Content</div>

<!-- Data Attributes -->
<div data-user-id="123">User Content</div>

<!-- ARIA Attributes for Accessibility -->
<button aria-label="Close" aria-expanded="false">×</button>

<!-- Event Handlers -->
<button onclick="handleClick()">Click Me</button>
```

## CSS Basics

### Selectors
```css
/* Element Selector */
p { color: blue; }

/* Class Selector */
.highlight { background-color: yellow; }

/* ID Selector */
#header { font-size: 24px; }

/* Attribute Selector */
[data-type="user"] { border: 1px solid black; }

/* Descendant Selector */
div p { margin-bottom: 10px; }

/* Child Selector */
div > p { font-weight: bold; }

/* Pseudo-classes */
a:hover { text-decoration: underline; }
button:disabled { opacity: 0.5; }
```

### Common Properties
```css
/* Box Model */
.element {
    margin: 10px;
    padding: 15px;
    border: 1px solid black;
    width: 200px;
    height: 100px;
}

/* Typography */
.text {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
}

/* Layout */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

/* Visual */
.visual {
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    opacity: 0.8;
}
```

### CSS Units
```css
/* Absolute Units */
.pixels { width: 100px; }
.points { font-size: 12pt; }

/* Relative Units */
.percentage { width: 50%; }
.em { font-size: 1.5em; }
.rem { font-size: 1.5rem; }
.vw { width: 50vw; }
.vh { height: 50vh; }
```

## Connecting HTML, CSS, and JavaScript

### Inline Styles
```html
<div style="color: blue; font-size: 16px;">Styled content</div>
```

### Internal CSS
```html
<head>
    <style>
        .highlight { background-color: yellow; }
    </style>
</head>
```

### External CSS
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

### JavaScript Integration
```html
<!-- Inline JavaScript -->
<script>
    console.log('Hello, World!');
</script>

<!-- External JavaScript -->
<script src="script.js"></script>

<!-- Deferred JavaScript -->
<script src="script.js" defer></script>

<!-- Async JavaScript -->
<script src="script.js" async></script>
```

## Best Practices

### HTML Best Practices
1. Use semantic HTML elements
2. Include proper meta tags
3. Ensure accessibility with ARIA attributes
4. Use meaningful class and ID names
5. Keep markup clean and well-structured

### CSS Best Practices
1. Use a CSS reset or normalize
2. Follow a naming convention (e.g., BEM)
3. Minimize specificity conflicts
4. Use CSS variables for reusable values
5. Organize styles logically

### Performance Optimization
1. Minimize HTTP requests
2. Use CSS sprites for small images
3. Minify CSS and JavaScript files
4. Use appropriate image formats
5. Implement lazy loading for images

## Practice Exercises
1. Create a basic HTML structure for a todo list
2. Style the todo list using CSS
3. Add JavaScript interactions to the todo list

[Continue to Selecting Elements →](./selecting-elements.md) 