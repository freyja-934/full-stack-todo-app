# NestJS API Practice

## Question 1: Basic NestJS Application

Create a basic NestJS application that responds with "Hello, World!" when accessing the root route.

## Question 2: Controller and Service

Create a TodoController and TodoService that:
1. Implements a GET endpoint to return all todos
2. Uses dependency injection to connect the controller and service
3. Returns mock data from the service

## Question 3: DTOs and Validation

Create DTOs (Data Transfer Objects) for:
1. Creating a new todo
2. Updating an existing todo
3. Add validation using class-validator decorators

## Question 4: MongoDB Integration

Set up MongoDB integration with NestJS:
1. Create a Todo schema using @nestjs/mongoose
2. Configure the MongoDB connection in the app module
3. Implement CRUD operations using the Mongoose model

## Question 5: Custom Pipes and Filters

Create:
1. A custom pipe to validate MongoDB ObjectIds
2. A custom exception filter to handle specific errors
3. Apply these to your TodoController

## Question 6: Practice Exercise

Create a complete NestJS API for a todo application that:
1. Uses MongoDB to store todos
2. Implements all CRUD operations
3. Includes proper validation and error handling
4. Uses environment variables for configuration
5. Follows NestJS best practices for modularity 