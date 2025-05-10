# React Routing

## Introduction
Routing is essential for creating single-page applications (SPAs) in React. This guide covers how to implement routing using React Router, handle navigation, and manage route parameters.

## Setting Up React Router

### Installation
Install React Router:

```bash
npm install react-router-dom
```

### Basic Setup
Set up basic routing in your app:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/todos/:id" element={<TodoDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Navigation

### Link Component
Use `Link` for navigation:

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

### Programmatic Navigation
Use `useNavigate` hook for programmatic navigation:

```jsx
import { useNavigate } from 'react-router-dom';

function TodoForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = await createTodo(formData);
    navigate(`/todos/${todo.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
}
```

## Route Parameters

### URL Parameters
Access URL parameters using `useParams`:

```jsx
import { useParams } from 'react-router-dom';

function TodoDetail() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetchTodo(id).then(setTodo);
  }, [id]);

  if (!todo) return <div>Loading...</div>;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
}
```

### Query Parameters
Handle query parameters:

```jsx
import { useSearchParams } from 'react-router-dom';

function TodoList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'all';

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(t => !t.completed);
      case 'completed':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <div>
      <select
        value={filter}
        onChange={(e) => setSearchParams({ filter: e.target.value })}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <TodoList items={filteredTodos} />
    </div>
  );
}
```

## Nested Routes

### Basic Nested Routes
Create nested routes:

```jsx
function TodoApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<TodoList />}>
          <Route path=":id" element={<TodoDetail />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
```

### Protected Routes
Create protected routes:

```jsx
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <TodoList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
```

## Route Guards

### Authentication Guard
Implement authentication guards:

```jsx
function AuthGuard({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
```

### Role-based Guard
Implement role-based access:

```jsx
function RoleGuard({ children, requiredRole }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user.roles.includes(requiredRole)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return children;
}
```

## Best Practices

### 1. Route Organization
- Keep routes organized
- Use nested routes
- Implement lazy loading

```jsx
const TodoList = lazy(() => import('./TodoList'));
const TodoDetail = lazy(() => import('./TodoDetail'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/todos" element={<TodoList />}>
          <Route path=":id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
```

### 2. Navigation
- Use Link for static navigation
- Use useNavigate for dynamic navigation
- Handle navigation errors

```jsx
function Navigation() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleNavigation = async (path) => {
    try {
      await navigate(path);
    } catch (error) {
      setError('Navigation failed');
    }
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <button onClick={() => handleNavigation('/todos')}>
        Go to Todos
      </button>
      {error && <div>{error}</div>}
    </nav>
  );
}
```

### 3. Route Parameters
- Validate route parameters
- Handle missing parameters
- Use type checking

```jsx
function TodoDetail() {
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      setError('Invalid todo ID');
      return;
    }

    fetchTodo(id)
      .then(setTodo)
      .catch(setError);
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!todo) return <div>Loading...</div>;

  return <div>{todo.title}</div>;
}
```

## Common Issues and Solutions

### 1. Navigation Issues
If you're having navigation problems:
- Check route definitions
- Verify path parameters
- Handle navigation errors

### 2. Route Parameters
If route parameters aren't working:
- Validate parameter types
- Handle missing parameters
- Check parameter format

### 3. Protected Routes
If protected routes aren't working:
- Verify authentication state
- Check role permissions
- Handle loading states

## Next Steps
Now that you understand routing, you can:
1. Implement complex routing patterns
2. Add route guards
3. Handle navigation
4. Move on to learning about [Performance Optimization](../07-performance/performance.md)

## Practice Exercises
Try these exercises to reinforce your understanding:
1. Create a basic routing setup
2. Implement protected routes
3. Handle route parameters
4. Build a todo app with routing

Check out the [practice file](./routing-practice.js) for more exercises and examples. 