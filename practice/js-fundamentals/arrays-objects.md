# Arrays & Objects Practice Exercises

## Exercise 1: Array Basics
Create an array of todo items and perform the following operations:
1. Add a new todo item
2. Remove the last todo item
3. Add a todo item at the beginning
4. Remove the first todo item
5. Find the index of a specific todo item
6. Check if a specific todo item exists in the array

```javascript
// Your code here
```

## Exercise 2: Array Methods
Given an array of numbers, use array methods to:
1. Double each number using `map`
2. Filter out all even numbers using `filter`
3. Calculate the sum of all numbers using `reduce`
4. Find the first number greater than 10 using `find`
5. Check if all numbers are positive using `every`
6. Check if any number is greater than 20 using `some`

```javascript
// Your code here
```

## Exercise 3: Object Basics
Create an object representing a todo item with the following properties:
- id (number)
- title (string)
- completed (boolean)
- dueDate (Date object)
- priority (string: "low", "medium", "high")
- tags (array of strings)

Then:
1. Access each property using both dot notation and bracket notation
2. Modify some properties
3. Add a new property
4. Delete a property
5. Check if a property exists

```javascript
// Your code here
```

## Exercise 4: Object Methods
Create an object with methods that:
1. Toggle the completed status of a todo
2. Update the priority of a todo
3. Add a tag to the todo
4. Remove a tag from the todo
5. Return a formatted string representation of the todo

```javascript
// Your code here
```

## Exercise 5: Array of Objects
Create an array of todo objects and:
1. Filter todos by completion status
2. Filter todos by priority
3. Sort todos by due date
4. Group todos by priority
5. Find todos with a specific tag

```javascript
// Your code here
```

## Exercise 6: Object Destructuring
Use object destructuring to:
1. Extract specific properties from a todo object
2. Rename properties during destructuring
3. Provide default values for missing properties
4. Destructure nested properties
5. Use the rest operator to collect remaining properties

```javascript
// Your code here
```

## Exercise 7: Array Destructuring
Use array destructuring to:
1. Extract specific elements from an array
2. Skip elements during destructuring
3. Use the rest operator to collect remaining elements
4. Provide default values for missing elements
5. Swap the values of two variables

```javascript
// Your code here
```

## Exercise 8: Spread Operator
Use the spread operator to:
1. Create a copy of an array
2. Merge two arrays
3. Create a copy of an object
4. Merge two objects
5. Convert a string to an array of characters

```javascript
// Your code here
```

## Exercise 9: JSON Operations
Create a todo list and:
1. Convert it to a JSON string
2. Parse the JSON string back to an object
3. Handle date objects in JSON conversion
4. Create a deep copy of an object using JSON
5. Compare two objects using JSON

```javascript
// Your code here
```

## Exercise 10: Nested Data Structures
Create a complex data structure with:
1. An array of todo objects
2. Each todo object having an array of subtasks
3. Each subtask having an array of comments
4. Use nested loops to process this data
5. Use nested destructuring to access specific data

```javascript
// Your code here
```

## Exercise 11: Challenge: Todo List Manager
Create a TodoListManager class that:
1. Stores todos in an array
2. Provides methods to add, remove, and update todos
3. Provides methods to filter and sort todos
4. Provides methods to mark todos as complete/incomplete
5. Provides methods to add/remove tags
6. Provides methods to export/import todos as JSON

```javascript
// Your code here
```

## Exercise 12: Challenge: Data Transformation
Create functions that:
1. Transform an array of todo objects into a different format
2. Group todos by various properties (status, priority, due date)
3. Calculate statistics about todos (completion rate, average priority)
4. Generate a report about todos
5. Create a visualization-friendly data structure

```javascript
// Your code here
```

## Exercise 13: Challenge: Advanced Object Operations
Create functions that:
1. Deep clone an object with nested properties
2. Merge two objects with nested properties
3. Compare two objects for equality
4. Create a proxy for an object to track changes
5. Implement a simple state management system

```javascript
// Your code here
```

## Solutions

<details>
<summary>Click to see solutions</summary>

### Exercise 1: Array Basics
```javascript
// Create an array of todo items
const todos = ["Learn JavaScript", "Build a todo app", "Deploy the app"];

// Add a new todo item
todos.push("Write documentation");
console.log("After adding:", todos);

// Remove the last todo item
todos.pop();
console.log("After removing last:", todos);

// Add a todo item at the beginning
todos.unshift("Plan the project");
console.log("After adding at beginning:", todos);

// Remove the first todo item
todos.shift();
console.log("After removing first:", todos);

// Find the index of a specific todo item
const index = todos.indexOf("Build a todo app");
console.log("Index of 'Build a todo app':", index);

// Check if a specific todo item exists in the array
const exists = todos.includes("Deploy the app");
console.log("'Deploy the app' exists:", exists);
```

### Exercise 2: Array Methods
```javascript
const numbers = [5, 10, 15, 20, 25, 30];

// Double each number using map
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// Filter out all even numbers using filter
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// Calculate the sum of all numbers using reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

// Find the first number greater than 10 using find
const firstGreaterThan10 = numbers.find(num => num > 10);
console.log("First number greater than 10:", firstGreaterThan10);

// Check if all numbers are positive using every
const allPositive = numbers.every(num => num > 0);
console.log("All numbers are positive:", allPositive);

// Check if any number is greater than 20 using some
const anyGreaterThan20 = numbers.some(num => num > 20);
console.log("Any number greater than 20:", anyGreaterThan20);
```

### Exercise 3: Object Basics
```javascript
// Create a todo object
const todo = {
  id: 1,
  title: "Learn JavaScript",
  completed: false,
  dueDate: new Date("2023-12-31"),
  priority: "high",
  tags: ["javascript", "programming", "learning"]
};

// Access properties using dot notation
console.log("ID:", todo.id);
console.log("Title:", todo.title);

// Access properties using bracket notation
console.log("Completed:", todo["completed"]);
console.log("Due Date:", todo["dueDate"]);

// Modify properties
todo.completed = true;
todo["priority"] = "medium";

// Add a new property
todo.notes = "Focus on arrays and objects";

// Delete a property
delete todo.notes;

// Check if a property exists
console.log("Has 'notes' property:", "notes" in todo);
console.log("Has 'title' property:", todo.hasOwnProperty("title"));
```

### Exercise 4: Object Methods
```javascript
const todo = {
  id: 1,
  title: "Learn JavaScript",
  completed: false,
  priority: "medium",
  tags: ["javascript", "programming"]
};

// Toggle completed status
todo.toggleCompleted = function() {
  this.completed = !this.completed;
  return this.completed;
};

// Update priority
todo.updatePriority = function(newPriority) {
  const validPriorities = ["low", "medium", "high"];
  if (validPriorities.includes(newPriority)) {
    this.priority = newPriority;
    return true;
  }
  return false;
};

// Add a tag
todo.addTag = function(tag) {
  if (!this.tags.includes(tag)) {
    this.tags.push(tag);
    return true;
  }
  return false;
};

// Remove a tag
todo.removeTag = function(tag) {
  const index = this.tags.indexOf(tag);
  if (index !== -1) {
    this.tags.splice(index, 1);
    return true;
  }
  return false;
};

// Return formatted string
todo.toString = function() {
  return `[${this.completed ? "X" : " "}] ${this.title} (${this.priority})`;
};

// Test the methods
console.log(todo.toString());
todo.toggleCompleted();
console.log(todo.toString());
todo.updatePriority("high");
console.log(todo.toString());
todo.addTag("learning");
console.log("Tags:", todo.tags);
todo.removeTag("programming");
console.log("Tags after removal:", todo.tags);
```

### Exercise 5: Array of Objects
```javascript
const todos = [
  { id: 1, title: "Learn JavaScript", completed: false, priority: "high", dueDate: new Date("2023-12-31"), tags: ["javascript", "programming"] },
  { id: 2, title: "Build a todo app", completed: true, priority: "medium", dueDate: new Date("2023-12-15"), tags: ["javascript", "app"] },
  { id: 3, title: "Deploy the app", completed: false, priority: "low", dueDate: new Date("2024-01-15"), tags: ["deployment", "app"] },
  { id: 4, title: "Write documentation", completed: false, priority: "medium", dueDate: new Date("2024-01-30"), tags: ["documentation"] }
];

// Filter todos by completion status
const completedTodos = todos.filter(todo => todo.completed);
console.log("Completed todos:", completedTodos);

const uncompletedTodos = todos.filter(todo => !todo.completed);
console.log("Uncompleted todos:", uncompletedTodos);

// Filter todos by priority
const highPriorityTodos = todos.filter(todo => todo.priority === "high");
console.log("High priority todos:", highPriorityTodos);

// Sort todos by due date
const sortedByDueDate = [...todos].sort((a, b) => a.dueDate - b.dueDate);
console.log("Sorted by due date:", sortedByDueDate);

// Group todos by priority
const groupedByPriority = todos.reduce((acc, todo) => {
  if (!acc[todo.priority]) {
    acc[todo.priority] = [];
  }
  acc[todo.priority].push(todo);
  return acc;
}, {});
console.log("Grouped by priority:", groupedByPriority);

// Find todos with a specific tag
const todosWithTag = (tag) => todos.filter(todo => todo.tags.includes(tag));
console.log("Todos with 'javascript' tag:", todosWithTag("javascript"));
```

### Exercise 6: Object Destructuring
```javascript
const todo = {
  id: 1,
  title: "Learn JavaScript",
  completed: false,
  priority: "high",
  dueDate: new Date("2023-12-31"),
  tags: ["javascript", "programming"],
  notes: "Focus on arrays and objects"
};

// Extract specific properties
const { id, title, completed } = todo;
console.log("Extracted properties:", { id, title, completed });

// Rename properties during destructuring
const { title: todoTitle, priority: importance } = todo;
console.log("Renamed properties:", { todoTitle, importance });

// Provide default values for missing properties
const { category = "uncategorized", difficulty = "medium" } = todo;
console.log("Default values:", { category, difficulty });

// Destructure nested properties
const complexTodo = {
  id: 2,
  title: "Build a todo app",
  details: {
    description: "Create a simple todo application",
    estimatedHours: 10
  }
};

const { details: { description, estimatedHours } } = complexTodo;
console.log("Nested properties:", { description, estimatedHours });

// Use the rest operator to collect remaining properties
const { id: todoId, title: todoName, ...rest } = todo;
console.log("Remaining properties:", rest);
```

### Exercise 7: Array Destructuring
```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Extract specific elements
const [first, second] = fruits;
console.log("First two fruits:", first, second);

// Skip elements during destructuring
const [firstFruit, , thirdFruit] = fruits;
console.log("First and third fruits:", firstFruit, thirdFruit);

// Use the rest operator to collect remaining elements
const [firstItem, secondItem, ...remainingItems] = fruits;
console.log("Remaining items:", remainingItems);

// Provide default values for missing elements
const [a = "default", b = "default"] = [];
console.log("Default values:", a, b);

// Swap the values of two variables
let x = 10;
let y = 20;
console.log("Before swap:", x, y);
[x, y] = [y, x];
console.log("After swap:", x, y);
```

### Exercise 8: Spread Operator
```javascript
// Create a copy of an array
const originalArray = [1, 2, 3, 4, 5];
const arrayCopy = [...originalArray];
console.log("Array copy:", arrayCopy);

// Merge two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Merged array:", mergedArray);

// Create a copy of an object
const originalObject = { name: "John", age: 30 };
const objectCopy = { ...originalObject };
console.log("Object copy:", objectCopy);

// Merge two objects
const object1 = { name: "John", age: 30 };
const object2 = { occupation: "Developer", city: "New York" };
const mergedObject = { ...object1, ...object2 };
console.log("Merged object:", mergedObject);

// Convert a string to an array of characters
const str = "Hello";
const charArray = [...str];
console.log("String as array:", charArray);
```

### Exercise 9: JSON Operations
```javascript
// Create a todo list
const todoList = [
  { id: 1, title: "Learn JavaScript", completed: false, dueDate: new Date("2023-12-31") },
  { id: 2, title: "Build a todo app", completed: true, dueDate: new Date("2023-12-15") }
];

// Convert to JSON string
const jsonString = JSON.stringify(todoList);
console.log("JSON string:", jsonString);

// Parse JSON string back to object
const parsedTodoList = JSON.parse(jsonString);
console.log("Parsed todo list:", parsedTodoList);

// Handle date objects in JSON conversion
const todoWithDate = { title: "Learn JavaScript", dueDate: new Date() };
const jsonWithDate = JSON.stringify(todoWithDate);
console.log("JSON with date:", jsonWithDate);

const parsedWithDate = JSON.parse(jsonWithDate);
parsedWithDate.dueDate = new Date(parsedWithDate.dueDate);
console.log("Parsed with date:", parsedWithDate);

// Create a deep copy of an object using JSON
const deepCopy = JSON.parse(JSON.stringify(todoList));
console.log("Deep copy:", deepCopy);

// Compare two objects using JSON
const areEqual = JSON.stringify(todoList) === JSON.stringify(deepCopy);
console.log("Objects are equal:", areEqual);
```

### Exercise 10: Nested Data Structures
```javascript
// Create a complex data structure
const todoList = [
  {
    id: 1,
    title: "Learn JavaScript",
    completed: false,
    subtasks: [
      {
        id: 101,
        title: "Study arrays",
        completed: true,
        comments: [
          { id: 1001, text: "Arrays are fun!", author: "John" },
          { id: 1002, text: "Need to practice more", author: "Jane" }
        ]
      },
      {
        id: 102,
        title: "Study objects",
        completed: false,
        comments: [
          { id: 1003, text: "Objects are confusing", author: "John" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Build a todo app",
    completed: false,
    subtasks: [
      {
        id: 201,
        title: "Design UI",
        completed: true,
        comments: []
      }
    ]
  }
];

// Use nested loops to process this data
let totalComments = 0;
let completedSubtasks = 0;

for (const todo of todoList) {
  for (const subtask of todo.subtasks) {
    if (subtask.completed) {
      completedSubtasks++;
    }
    
    for (const comment of subtask.comments) {
      totalComments++;
    }
  }
}

console.log("Total comments:", totalComments);
console.log("Completed subtasks:", completedSubtasks);

// Use nested destructuring to access specific data
const [{ subtasks: [{ comments: [firstComment] }] }] = todoList;
console.log("First comment:", firstComment);
```

### Exercise 11: Challenge: Todo List Manager
```javascript
class TodoListManager {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(title, priority = "medium", dueDate = null) {
    const todo = {
      id: this.nextId++,
      title,
      completed: false,
      priority,
      dueDate: dueDate ? new Date(dueDate) : null,
      tags: [],
      createdAt: new Date()
    };
    
    this.todos.push(todo);
    return todo;
  }

  removeTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      const removed = this.todos.splice(index, 1)[0];
      return removed;
    }
    return null;
  }

  updateTodo(id, updates) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      Object.assign(todo, updates);
      return todo;
    }
    return null;
  }

  getTodo(id) {
    return this.todos.find(todo => todo.id === id);
  }

  getAllTodos() {
    return [...this.todos];
  }

  filterTodos(filterFn) {
    return this.todos.filter(filterFn);
  }

  sortTodos(sortFn) {
    return [...this.todos].sort(sortFn);
  }

  markAsComplete(id) {
    const todo = this.getTodo(id);
    if (todo) {
      todo.completed = true;
      return todo;
    }
    return null;
  }

  markAsIncomplete(id) {
    const todo = this.getTodo(id);
    if (todo) {
      todo.completed = false;
      return todo;
    }
    return null;
  }

  addTag(id, tag) {
    const todo = this.getTodo(id);
    if (todo && !todo.tags.includes(tag)) {
      todo.tags.push(tag);
      return todo;
    }
    return null;
  }

  removeTag(id, tag) {
    const todo = this.getTodo(id);
    if (todo) {
      const index = todo.tags.indexOf(tag);
      if (index !== -1) {
        todo.tags.splice(index, 1);
        return todo;
      }
    }
    return null;
  }

  exportToJSON() {
    return JSON.stringify(this.todos);
  }

  importFromJSON(jsonString) {
    try {
      const importedTodos = JSON.parse(jsonString);
      this.todos = importedTodos;
      this.nextId = Math.max(...importedTodos.map(todo => todo.id)) + 1;
      return true;
    } catch (error) {
      console.error("Error importing todos:", error);
      return false;
    }
  }
}

// Example usage
const todoManager = new TodoListManager();

// Add todos
todoManager.addTodo("Learn JavaScript", "high", "2023-12-31");
todoManager.addTodo("Build a todo app", "medium", "2023-12-15");
todoManager.addTodo("Deploy the app", "low", "2024-01-15");

// Mark as complete
todoManager.markAsComplete(1);

// Add tags
todoManager.addTag(1, "javascript");
todoManager.addTag(1, "programming");
todoManager.addTag(2, "javascript");
todoManager.addTag(2, "app");

// Filter todos
const completedTodos = todoManager.filterTodos(todo => todo.completed);
console.log("Completed todos:", completedTodos);

const highPriorityTodos = todoManager.filterTodos(todo => todo.priority === "high");
console.log("High priority todos:", highPriorityTodos);

// Sort todos
const sortedByDueDate = todoManager.sortTodos((a, b) => a.dueDate - b.dueDate);
console.log("Sorted by due date:", sortedByDueDate);

// Export to JSON
const jsonExport = todoManager.exportToJSON();
console.log("JSON export:", jsonExport);

// Create a new manager and import
const newManager = new TodoListManager();
newManager.importFromJSON(jsonExport);
console.log("Imported todos:", newManager.getAllTodos());
```

### Exercise 12: Challenge: Data Transformation
```javascript
// Sample todo data
const todos = [
  { id: 1, title: "Learn JavaScript", completed: false, priority: "high", dueDate: new Date("2023-12-31"), tags: ["javascript", "programming"] },
  { id: 2, title: "Build a todo app", completed: true, priority: "medium", dueDate: new Date("2023-12-15"), tags: ["javascript", "app"] },
  { id: 3, title: "Deploy the app", completed: false, priority: "low", dueDate: new Date("2024-01-15"), tags: ["deployment", "app"] },
  { id: 4, title: "Write documentation", completed: false, priority: "medium", dueDate: new Date("2024-01-30"), tags: ["documentation"] }
];

// Transform an array of todo objects into a different format
function transformTodos(todos) {
  return todos.map(todo => ({
    taskId: todo.id,
    taskName: todo.title,
    isDone: todo.completed,
    importance: todo.priority,
    deadline: todo.dueDate,
    categories: todo.tags
  }));
}

const transformedTodos = transformTodos(todos);
console.log("Transformed todos:", transformedTodos);

// Group todos by various properties
function groupByProperty(todos, property) {
  return todos.reduce((acc, todo) => {
    const value = todo[property];
    if (!acc[value]) {
      acc[value] = [];
    }
    acc[value].push(todo);
    return acc;
  }, {});
}

const groupedByStatus = groupByProperty(todos, "completed");
console.log("Grouped by status:", groupedByStatus);

const groupedByPriority = groupByProperty(todos, "priority");
console.log("Grouped by priority:", groupedByPriority);

// Calculate statistics about todos
function calculateStats(todos) {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const completionRate = (completed / total) * 100;
  
  const priorityCounts = todos.reduce((acc, todo) => {
    acc[todo.priority] = (acc[todo.priority] || 0) + 1;
    return acc;
  }, {});
  
  const tagCounts = todos.reduce((acc, todo) => {
    todo.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
  
  return {
    total,
    completed,
    completionRate: `${completionRate.toFixed(1)}%`,
    priorityCounts,
    tagCounts
  };
}

const stats = calculateStats(todos);
console.log("Todo statistics:", stats);

// Generate a report about todos
function generateReport(todos) {
  const stats = calculateStats(todos);
  
  let report = "TODO LIST REPORT\n";
  report += "================\n\n";
  
  report += `Total todos: ${stats.total}\n`;
  report += `Completed: ${stats.completed}\n`;
  report += `Completion rate: ${stats.completionRate}\n\n`;
  
  report += "By Priority:\n";
  Object.entries(stats.priorityCounts).forEach(([priority, count]) => {
    report += `- ${priority}: ${count}\n`;
  });
  
  report += "\nBy Tag:\n";
  Object.entries(stats.tagCounts).forEach(([tag, count]) => {
    report += `- ${tag}: ${count}\n`;
  });
  
  return report;
}

const report = generateReport(todos);
console.log(report);

// Create a visualization-friendly data structure
function createVisualizationData(todos) {
  // For a pie chart of completion status
  const completionData = {
    labels: ["Completed", "Incomplete"],
    data: [
      todos.filter(todo => todo.completed).length,
      todos.filter(todo => !todo.completed).length
    ]
  };
  
  // For a bar chart of priorities
  const priorityData = {
    labels: Object.keys(groupByProperty(todos, "priority")),
    data: Object.values(groupByProperty(todos, "priority")).map(group => group.length)
  };
  
  // For a timeline of due dates
  const timelineData = todos
    .filter(todo => todo.dueDate)
    .map(todo => ({
      id: todo.id,
      title: todo.title,
      date: todo.dueDate,
      completed: todo.completed
    }))
    .sort((a, b) => a.date - b.date);
  
  return {
    completionData,
    priorityData,
    timelineData
  };
}

const visualizationData = createVisualizationData(todos);
console.log("Visualization data:", visualizationData);
```

### Exercise 13: Challenge: Advanced Object Operations
```javascript
// Deep clone an object with nested properties
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj);
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  
  if (obj instanceof Object) {
    const clone = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  }
}

const complexObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  },
  hobbies: ["reading", "hiking"],
  birthDate: new Date("1990-01-01"),
  scores: [85, 90, 95]
};

const clonedObject = deepClone(complexObject);
console.log("Cloned object:", clonedObject);
console.log("Are they equal?", JSON.stringify(complexObject) === JSON.stringify(clonedObject));
console.log("Are they the same object?", complexObject === clonedObject);

// Merge two objects with nested properties
function deepMerge(target, source) {
  const output = { ...target };
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  
  return output;
}

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

const obj1 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

const obj2 = {
  age: 31,
  address: {
    city: "Newtown",
    country: "USA"
  },
  hobbies: ["reading", "hiking"]
};

const mergedObject = deepMerge(obj1, obj2);
console.log("Merged object:", mergedObject);

// Compare two objects for equality
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  
  if (typeof obj1 !== "object" || obj1 === null || 
      typeof obj2 !== "object" || obj2 === null) {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  
  return true;
}

const objA = { a: 1, b: { c: 2, d: 3 } };
const objB = { a: 1, b: { c: 2, d: 3 } };
const objC = { a: 1, b: { c: 2, d: 4 } };

console.log("Are objA and objB equal?", deepEqual(objA, objB));
console.log("Are objA and objC equal?", deepEqual(objA, objC));

// Create a proxy for an object to track changes
function createTrackedObject(obj) {
  const changes = [];
  
  const handler = {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, value) {
      const oldValue = target[prop];
      target[prop] = value;
      changes.push({
        property: prop,
        oldValue,
        newValue: value,
        timestamp: new Date()
      });
      return true;
    }
  };
  
  const proxy = new Proxy(obj, handler);
  
  return {
    proxy,
    getChanges: () => [...changes],
    clearChanges: () => changes.length = 0
  };
}

const { proxy, getChanges, clearChanges } = createTrackedObject({ name: "John", age: 30 });

proxy.name = "Jane";
proxy.age = 31;
proxy.email = "jane@example.com";

console.log("Tracked object:", proxy);
console.log("Changes:", getChanges());

// Implement a simple state management system
class SimpleStateManager {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = [];
  }
  
  getState() {
    return { ...this.state };
  }
  
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notifyListeners();
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
  
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

const stateManager = new SimpleStateManager({ todos: [], filter: "all" });

// Subscribe to state changes
const unsubscribe = stateManager.subscribe(state => {
  console.log("State updated:", state);
});

// Update state
stateManager.setState({ todos: [{ id: 1, text: "Learn JavaScript", completed: false }] });
stateManager.setState({ filter: "active" });

// Unsubscribe
unsubscribe();
```

</details> 