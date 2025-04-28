import React from 'react';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

// Define the props interface for the TodoList component
interface TodoListProps {
  todos: Todo[];  // Array of todo items to display
  onToggleTodo: (id: string) => void;  // Function to toggle a todo's completion status
  onDeleteTodo: (id: string) => void;  // Function to delete a todo
}

// React.FC is a TypeScript type for Function Components
export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}) => {
  // If there are no todos, show a message
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No todos yet. Add one above!
      </div>
    );
  }

  // Render the list of todos
  return (
    // space-y-3 adds vertical spacing between children
    <div className="space-y-3">
      {/* Map over the todos array to create TodoItem components */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}  // React needs a unique key for each item in a list
          todo={todo}  // Pass the todo data
          onToggle={onToggleTodo}  // Pass the toggle function
          onDelete={onDeleteTodo}  // Pass the delete function
        />
      ))}
    </div>
  );
}; 