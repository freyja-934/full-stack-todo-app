# React Advanced Concepts

## Introduction
This guide covers advanced React concepts that will help you build more sophisticated applications. These concepts are essential for creating maintainable, performant, and scalable React applications.

## Advanced Hooks

### 1. useReducer
`useReducer` is an alternative to `useState` for managing complex state logic.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

### 2. useCallback
`useCallback` memoizes functions to prevent unnecessary re-renders.

```jsx
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency array means function never changes
  
  return <ChildComponent onClick={handleClick} />;
}
```

### 3. useMemo
`useMemo` memoizes computed values to optimize performance.

```jsx
function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: complexCalculation(item)
    }));
  }, [data]); // Only recompute when data changes
  
  return <div>{/* Render processed data */}</div>;
}
```

### 4. Custom Hooks
Create reusable logic with custom hooks.

```jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

## Context API

### 1. Creating Context
```jsx
const ThemeContext = React.createContext('light');

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 2. Using Context
```jsx
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={theme}
    >
      Toggle Theme
    </button>
  );
}
```

## Performance Optimization

### 1. React.memo
Prevent unnecessary re-renders of functional components.

```jsx
const MemoizedComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
```

### 2. useMemo and useCallback
Optimize expensive calculations and function references.

```jsx
function OptimizedComponent({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.value - b.value);
  }, [items]);

  const handleClick = useCallback(() => {
    console.log('Item clicked');
  }, []);

  return (
    <div>
      {sortedItems.map(item => (
        <button key={item.id} onClick={handleClick}>
          {item.value}
        </button>
      ))}
    </div>
  );
}
```

## Error Boundaries

### 1. Creating Error Boundaries
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

### 2. Using Error Boundaries
```jsx
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

## Code Splitting

### 1. React.lazy
```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### 2. Route-based Code Splitting
```jsx
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
```

## Advanced Patterns

### 1. Render Props
```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

// Usage
<MouseTracker
  render={({ x, y }) => (
    <div>
      Mouse position: {x}, {y}
    </div>
  )}
/>
```

### 2. Higher-Order Components (HOCs)
```jsx
function withLogging(WrappedComponent) {
  return function WithLoggingComponent(props) {
    useEffect(() => {
      console.log('Component mounted:', WrappedComponent.name);
      return () => {
        console.log('Component unmounted:', WrappedComponent.name);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}

// Usage
const LoggedComponent = withLogging(MyComponent);
```

### 3. Compound Components
```jsx
const Select = ({ children, value, onChange }) => {
  return (
    <div className="select">
      {React.Children.map(children, child =>
        React.cloneElement(child, { value, onChange })
      )}
    </div>
  );
};

Select.Option = ({ value, onChange, children }) => {
  return (
    <div
      className="option"
      onClick={() => onChange(value)}
    >
      {children}
    </div>
  );
};

// Usage
<Select value={selected} onChange={setSelected}>
  <Select.Option value="1">Option 1</Select.Option>
  <Select.Option value="2">Option 2</Select.Option>
</Select>
```

## Best Practices

### 1. State Management
- Use appropriate state management solutions
- Keep state as local as possible
- Consider using Context for global state
- Use reducers for complex state logic

### 2. Performance
- Implement code splitting
- Use memoization when necessary
- Optimize re-renders
- Monitor performance with React DevTools

### 3. Testing
- Write unit tests for components
- Test custom hooks
- Use React Testing Library
- Implement integration tests

### 4. Security
- Sanitize user input
- Use proper authentication
- Implement proper authorization
- Follow security best practices

## Common Pitfalls

### 1. Infinite Loops
```jsx
// Wrong
useEffect(() => {
  setCount(count + 1);
}, [count]);

// Correct
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  return () => clearInterval(timer);
}, []);
```

### 2. Memory Leaks
```jsx
// Wrong
useEffect(() => {
  window.addEventListener('resize', handleResize);
});

// Correct
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### 3. Context Re-renders
```jsx
// Wrong
const value = { theme, setTheme };

// Correct
const value = useMemo(() => ({ theme, setTheme }), [theme]);
```

## Practice Exercises
1. Implement custom hooks
2. Create error boundaries
3. Optimize performance
4. Build compound components
5. Implement code splitting

[Continue to Practice Exercises →](./react-advanced-practice.md) 