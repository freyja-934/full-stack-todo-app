import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Todo } from '../types/todo';

// Define the props interface for the TodoItem component
// This helps TypeScript understand what props this component expects
interface TodoItemProps {
  todo: Todo;              // The todo item to display
  onToggle: (id: string) => void;  // Function to toggle completion status
  onDelete: (id: string) => void;  // Function to delete the todo
}

// React.FC is a TypeScript type for Function Components
// It ensures our component receives the correct props
export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    // Using Tailwind CSS classes for styling
    // flex: display: flex
    // items-center: align-items: center
    // justify-between: justify-content: space-between
    // p-4: padding: 1rem
    // bg-white: background-color: white
    // rounded-lg: border-radius: 0.5rem
    // shadow-sm: box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    // border: border: 1px solid
    // border-gray-200: border-color: #e5e7eb
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center space-x-3">
        {/* Toggle button with conditional styling */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`p-1 rounded-full ${
            todo.completed ? 'text-green-500' : 'text-gray-400'
          }`}
        >
          <CheckCircleIcon className="w-6 h-6" />
        </button>
        {/* Todo title with conditional styling for completed items */}
        <span
          className={`text-lg ${
            todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'
          }`}
        >
          {todo.title}
        </span>
      </div>
      {/* Delete button with hover effect */}
      <button
        onClick={() => onDelete(todo.id)}
        className="p-1 text-red-500 hover:text-red-600 rounded-full"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </div>
  );
}; 