# Express API Practice

## Question 1: Basic Express Server

Create a basic Express server that listens on port 3000 and responds with "Hello, World!" when accessing the root route.

## Question 2: RESTful Routes

Create the following RESTful routes for a todo API:
- GET /todos - Get all todos
- GET /todos/:id - Get a specific todo
- POST /todos - Create a new todo
- PUT /todos/:id - Update a todo
- DELETE /todos/:id - Delete a todo

## Question 3: Middleware

Create a middleware function that:
1. Logs the request method and URL
2. Measures the time it takes to process the request
3. Logs the processing time when the response is sent

## Question 4: Error Handling

Implement error handling middleware that:
1. Catches errors thrown in route handlers
2. Returns appropriate HTTP status codes
3. Sends a JSON response with an error message

## Question 5: Data Validation

Create middleware to validate todo data:
1. Ensure the title is provided and is a string
2. Ensure the completed status is a boolean
3. Return a 400 Bad Request if validation fails

## Question 6: Practice Exercise

Create a complete Express API for a todo application that:
1. Uses MongoDB to store todos
2. Implements all CRUD operations
3. Includes proper error handling
4. Validates input data
5. Uses environment variables for configuration
