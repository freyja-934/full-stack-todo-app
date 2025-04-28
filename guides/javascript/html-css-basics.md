# HTML & CSS Basics for JavaScript Developers

## Why It's Important
HTML and CSS form the foundation of web development. HTML provides the structure of your webpage, while CSS handles the styling. Understanding these technologies is crucial for JavaScript developers because:
- You need to know how to select and manipulate HTML elements
- CSS classes and styles are frequently modified with JavaScript
- Modern web applications require a solid understanding of all three technologies working together

## HTML Basics

### Document Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
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
<a href="https://example.com">Click me</a>

<!-- Images -->
<img src="image.jpg" alt="Description">

<!-- Lists -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Forms -->
<form>
    <input type="text" placeholder="Enter text">
    <button type="submit">Submit</button>
</form>
```

### Important Attributes
- `id`: Unique identifier for an element
- `class`: Groups elements for styling
- `data-*`: Custom data attributes
- `style`: Inline CSS
- `src`: Source for media elements
- `href`: Hyperlink reference
- `type`: Input type for forms

## CSS Basics

### Selectors
```css
/* Element selector */
p { color: blue; }

/* Class selector */
.highlight { background-color: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Attribute selector */
[type="text"] { border: 1px solid gray; }

/* Descendant selector */
div p { margin: 10px; }

/* Child selector */
div > p { padding: 5px; }
```

### Common Properties
```css
/* Text styling */
color: blue;
font-size: 16px;
font-family: Arial, sans-serif;
text-align: center;

/* Box model */
margin: 10px;
padding: 15px;
border: 1px solid black;
width: 200px;
height: 100px;

/* Positioning */
position: relative;
top: 10px;
left: 20px;

/* Display */
display: flex;
display: none;
display: block;
display: inline-block;

/* Flexbox */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
```

### CSS Units
- `px`: Pixels (fixed size)
- `%`: Percentage (relative to parent)
- `em`: Relative to font size
- `rem`: Relative to root font size
- `vh/vw`: Viewport height/width
- `fr`: Fractional units (for grid/flex)

## Connecting HTML, CSS, and JavaScript

### Inline Styles
```html
<div style="color: blue; font-size: 16px;">
    Styled content
</div>
```

### Internal CSS
```html
<head>
    <style>
        .highlight {
            background-color: yellow;
        }
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
<button onclick="handleClick()">Click me</button>

<!-- External JavaScript -->
<script src="script.js"></script>

<!-- Internal JavaScript -->
<script>
    function handleClick() {
        console.log('Button clicked!');
    }
</script>
```

## Best Practices

1. **Separation of Concerns**
   - Keep HTML, CSS, and JavaScript in separate files
   - Use external stylesheets and scripts
   - Avoid inline styles and scripts

2. **Semantic HTML**
   - Use meaningful element names
   - Include proper ARIA attributes for accessibility
   - Structure content logically

3. **CSS Organization**
   - Use consistent naming conventions
   - Group related styles
   - Minimize specificity conflicts

4. **Performance**
   - Minimize DOM manipulation
   - Use CSS classes instead of inline styles
   - Optimize asset loading

## Practice Exercises

1. Create a basic HTML structure with:
   - A header containing a title
   - A navigation menu
   - A main content area
   - A footer

2. Style the elements using CSS:
   - Add colors and fonts
   - Create a responsive layout
   - Add hover effects

3. Add JavaScript interaction:
   - Toggle a class on click
   - Update content dynamically
   - Handle form submission

## Next Steps
After mastering HTML and CSS basics, you'll be ready to learn about:
- Selecting elements with JavaScript
- Adding event listeners
- Modifying the DOM
- Working with forms

[Continue to Selecting Elements →](../guides/javascript/selecting-elements.md) 