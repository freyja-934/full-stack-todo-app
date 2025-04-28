# React Components Practice

## Question 1: Functional Component

Create a functional component called `TodoItem` that displays a todo item with a title and a checkbox for completion status.

## Question 2: Props

Modify the `TodoItem` component to accept props for the todo title and completion status. The component should display these values.

## Question 3: Event Handling

Add an `onToggle` prop to the `TodoItem` component that gets called when the checkbox is clicked. The component should call this function with the todo's ID.

## Question 4: Conditional Rendering

Modify the `TodoItem` component to:
1. Display the title in a different color if the todo is completed
2. Add a "Delete" button that only appears when hovering over the todo item

## Question 5: Component Composition

Create a `TodoList` component that:
1. Accepts an array of todos as a prop
2. Renders a `TodoItem` component for each todo
3. Passes the appropriate props to each `TodoItem`

## Question 6: Practice Exercise

Create a `TodoForm` component that:
1. Has input fields for the todo title
2. Has a submit button
3. Calls an `onAdd` prop function when the form is submitted
4. Clears the input field after submission
