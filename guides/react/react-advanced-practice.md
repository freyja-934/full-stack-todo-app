# React Advanced Concepts Practice Exercises

Welcome to the advanced practice exercises! These exercises build upon the concepts covered in the React Advanced Concepts guide. Each exercise focuses on a specific advanced concept and includes detailed explanations and solutions.

## Exercise 1: Advanced Hooks

### What You'll Learn:
- How to use useReducer for complex state management (from Advanced Hooks section)
- How to implement custom hooks (from Custom Hooks section)
- How to handle form state and validation

### Task:
Create a form management system using useReducer and custom hooks.

```jsx
// Create a useFormReducer hook that:
// - Uses useReducer for state management
// - Handles form validation
// - Provides error messages
// - Manages form submission state

function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value
        },
        errors: {
          ...state.errors,
          [action.field]: validateField(action.field, action.value)
        }
      };
    case 'SUBMIT_START':
      return {
        ...state,
        isSubmitting: true
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        isSubmitting: false,
        isSubmitted: true
      };
    case 'SUBMIT_ERROR':
      return {
        ...state,
        isSubmitting: false,
        submitError: action.error
      };
    default:
      return state;
  }
}

function useFormReducer(initialValues, validate) {
  const [state, dispatch] = useReducer(formReducer, {
    values: initialValues,
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
    submitError: null
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', field: name, value });
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_START' });
    
    try {
      // Simulate API call
      await submitForm(state.values);
      dispatch({ type: 'SUBMIT_SUCCESS' });
    } catch (error) {
      dispatch({ type: 'SUBMIT_ERROR', error });
    }
  }, [state.values]);

  return {
    ...state,
    handleChange,
    handleSubmit
  };
}

// Usage:
function AdvancedForm() {
  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    handleChange,
    handleSubmit
  } = useFormReducer(
    { email: '', password: '' },
    validateForm
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      {submitError && <div className="error">{submitError}</div>}
      {isSubmitted && <div className="success">Form submitted successfully!</div>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
```

### Try These Variations:
1. Add field-level validation with useCallback
2. Implement form reset functionality
3. Add support for nested form fields

## Exercise 2: Context API and Performance

### What You'll Learn:
- How to implement the Context API (from Context API section)
- How to optimize performance with useMemo and useCallback (from Performance Optimization section)
- How to create a theme system

### Task:
Create a theme system with performance optimizations.

```jsx
// Create a ThemeContext and ThemeProvider that:
// - Manages theme state
// - Provides theme switching
// - Optimizes re-renders
// - Includes theme-specific styles

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    theme,
    setTheme,
    isDark: theme === 'dark'
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Optimized themed component
const ThemedButton = React.memo(function ThemedButton({ children, onClick }) {
  const { theme, isDark } = useContext(ThemeContext);
  
  // Memoize the button styles
  const buttonStyles = useMemo(() => ({
    backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? '#fff' : '#333',
    padding: '10px 20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer'
  }), [isDark]);

  // Memoize the click handler
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <button style={buttonStyles} onClick={handleClick}>
      {children}
    </button>
  );
});

// Usage:
function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemedButton>Click me</ThemedButton>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
```

### Try These Variations:
1. Add more theme options
2. Implement theme persistence
3. Add theme-specific animations

## Exercise 3: Error Boundaries and Code Splitting

### What You'll Learn:
- How to implement Error Boundaries (from Error Boundaries section)
- How to use Code Splitting (from Code Splitting section)
- How to handle loading states

### Task:
Create an error boundary and implement code splitting for a feature-rich component.

```jsx
// Create an ErrorBoundary component that:
// - Catches and handles errors
// - Provides error recovery
// - Logs error information
// - Shows a fallback UI

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // Log error to service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <details>
            <summary>Error Details</summary>
            <pre>{this.state.error && this.state.error.toString()}</pre>
            <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
          </details>
          <button onClick={this.handleReset}>Try Again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Lazy-loaded feature component
const FeatureComponent = React.lazy(() => import('./FeatureComponent'));

// Usage:
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading feature...</div>}>
        <FeatureComponent />
      </Suspense>
    </ErrorBoundary>
  );
}
```

### Try These Variations:
1. Add different fallback UIs for different error types
2. Implement error reporting to a service
3. Add retry logic for failed component loads

## Exercise 4: Advanced Patterns

### What You'll Learn:
- How to implement Render Props (from Advanced Patterns section)
- How to create compound components
- How to build flexible, reusable components

### Task:
Create a data table component using advanced patterns.

```jsx
// Create a DataTable component that:
// - Uses render props for flexibility
// - Implements compound components
// - Supports sorting and filtering
// - Handles pagination

const DataTable = ({ children, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const sortedAndFilteredData = useMemo(() => {
    let result = [...data];
    
    // Apply filter
    if (filter) {
      result = result.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
    
    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return result;
  }, [data, sortConfig, filter]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return sortedAndFilteredData.slice(start, start + itemsPerPage);
  }, [sortedAndFilteredData, page]);

  const contextValue = useMemo(() => ({
    data: paginatedData,
    sortConfig,
    setSortConfig,
    filter,
    setFilter,
    page,
    setPage,
    totalPages: Math.ceil(sortedAndFilteredData.length / itemsPerPage)
  }), [paginatedData, sortConfig, filter, page, sortedAndFilteredData.length]);

  return (
    <DataTableContext.Provider value={contextValue}>
      {children}
    </DataTableContext.Provider>
  );
};

// Compound components
DataTable.Header = function Header({ children }) {
  return <thead>{children}</thead>;
};

DataTable.Body = function Body({ children }) {
  return <tbody>{children}</tbody>;
};

DataTable.Row = function Row({ children }) {
  return <tr>{children}</tr>;
};

DataTable.Cell = function Cell({ children }) {
  return <td>{children}</td>;
};

// Usage:
function App() {
  const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    // ... more data
  ];

  return (
    <DataTable data={data}>
      <DataTable.Header>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </DataTable.Header>
      <DataTable.Body>
        {data => data.map(item => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.age}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable.Body>
    </DataTable>
  );
}
```

### Try These Variations:
1. Add column resizing
2. Implement row selection
3. Add export functionality

## Next Steps
After completing these exercises, you should:
1. Combine multiple advanced concepts in a single project
2. Implement performance optimizations in existing code
3. Create reusable component libraries using these patterns

[Return to React Advanced Concepts Guide](react-advanced.md) 