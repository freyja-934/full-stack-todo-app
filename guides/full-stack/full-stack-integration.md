# Full Stack Todo App Integration Guide

## Overview

This guide will help you connect the React frontend with the NestJS backend to create a fully functional todo application. You'll implement the missing pieces step by step, focusing on the integration points between the two applications.

## Project Structure

```
full-stack-todo-app/
├── frontend/           # React application
│   ├── src/
│   │   ├── components/  # Todo components
│   │   ├── services/    # API services
│   │   ├── store/       # Redux store
│   │   └── types/       # TypeScript types
│   └── package.json
│
└── backend/           # NestJS application
    ├── src/
    │   ├── controllers/  # API endpoints
    │   ├── services/     # Business logic
    │   ├── models/       # Database models
    │   └── dto/          # Data transfer objects
    └── package.json
```

## Implementation Steps

### 1. Backend Setup

First, ensure the backend is properly configured to accept requests from the frontend.

#### TODO 1: Enable CORS
**File**: `backend/src/main.ts`
```typescript
// HINT: You'll need to:
// 1. Import NestFactory and AppModule
// 2. Create a bootstrap function
// 3. Use app.enableCors() with configuration
// 4. Set the origin to match your frontend URL (e.g., http://localhost:3000)
// 5. Enable credentials if you plan to use cookies/sessions
// 6. Set the port to 3001 to avoid conflicts with the frontend
```

### 2. Frontend API Integration

Set up the frontend to communicate with the backend.

#### TODO 2: Create API Service
**File**: `frontend/src/services/api.ts`
```typescript
// HINT: You'll need to:
// 1. Import axios
// 2. Create an axios instance with create()
// 3. Set baseURL to your backend URL (e.g., http://localhost:3001)
// 4. Set default headers for JSON content
// 5. Add response interceptor to handle errors
// 6. Export the configured instance
```

#### TODO 3: Create Todo Service
**File**: `frontend/src/services/todo.service.ts`
```typescript
// HINT: You'll need to:
// 1. Import your api instance and types
// 2. Create an object with CRUD methods
// 3. Use proper HTTP methods (GET, POST, PATCH, DELETE)
// 4. Handle API responses and errors
// 5. Use TypeScript types for parameters and return values
// 6. Export the service object
```

### 3. State Management

Set up Redux to manage the application state.

#### TODO 4: Create Redux Store
**File**: `frontend/src/store/index.ts`
```typescript
// HINT: You'll need to:
// 1. Import configureStore from @reduxjs/toolkit
// 2. Import your todo reducer
// 3. Create store with configureStore()
// 4. Add todo reducer to the store
// 5. Export store and TypeScript types
// 6. Export AppDispatch type for useDispatch hook
```

#### TODO 5: Create Todo Slice
**File**: `frontend/src/store/todoSlice.ts`
```typescript
// HINT: You'll need to:
// 1. Import createSlice and createAsyncThunk
// 2. Import your todo service and types
// 3. Create async thunks for CRUD operations
// 4. Define initial state with items, loading, and error
// 5. Create slice with name and reducers
// 6. Handle async thunk states in extraReducers
// 7. Export actions and reducer
```

### 4. Component Updates

Update the components to use the Redux store and API services.

#### TODO 6: Update TodoList Component
**File**: `frontend/src/components/TodoList.tsx`
```typescript
// HINT: You'll need to:
// 1. Import necessary hooks and components
// 2. Use useDispatch and useSelector hooks
// 3. Fetch todos on component mount
// 4. Handle loading and error states
// 5. Create handlers for toggle and delete
// 6. Map over todos to render TodoItem components
// 7. Pass necessary props to TodoItem
```

#### TODO 7: Update TodoForm Component
**File**: `frontend/src/components/TodoForm.tsx`
```typescript
// HINT: You'll need to:
// 1. Import necessary hooks and actions
// 2. Create form state with useState
// 3. Get dispatch from useDispatch
// 4. Create submit handler
// 5. Add form validation
// 6. Handle submission errors
// 7. Clear form after successful submission
```

### 5. Testing the Integration

1. Start the backend:
```bash
cd backend
npm run start:dev
```

2. Start the frontend:
```bash
cd frontend
npm start
```

3. Test the following scenarios:
- Create a new todo using the form
- Verify the todo appears in the list
- Toggle the todo's completion status
- Delete the todo
- Check that loading states work
- Verify error handling

### Common Issues to Watch For

1. **CORS Errors**
   - Check your CORS configuration
   - Verify the backend port matches your configuration
   - Ensure credentials are properly set

2. **API Connection Issues**
   - Verify the API base URL
   - Check that the backend is running
   - Test API endpoints independently

3. **State Management Issues**
   - Verify Redux store configuration
   - Check action dispatching
   - Monitor state updates

## Next Steps

After completing these TODOs, you should have:
1. A fully functional todo application
2. API integration between frontend and backend
3. State management with Redux
4. Error handling and loading states

You can then:
- Add more features (filtering, sorting, etc.)
- Implement authentication
- Add more styling
- Write tests

[Continue to Full Stack Practice](./react-nestjs-practice.md) 