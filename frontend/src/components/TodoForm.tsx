import { PlusIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

// Define the props interface for the TodoForm component
interface TodoFormProps {
  onAddTodo: (title: string) => void;  // Function to add a new todo
}

// React.FC is a TypeScript type for Function Components
export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  // useState hook to manage the input field's value
  // Returns a stateful value (title) and a function to update it (setTitle)
  const [title, setTitle] = useState('');

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Prevent the default form submission behavior
    
    // Only add the todo if the title is not empty (after trimming whitespace)
    if (title.trim()) {
      onAddTodo(title.trim());
      setTitle('');  // Clear the input field after submission
    }
  };

  return (
    // Form element with onSubmit handler
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center space-x-2">
        {/* Input field for the todo title */}
        <input
          type="text"
          value={title}  // Controlled component: value is managed by React state
          onChange={(e) => setTitle(e.target.value)}  // Update state on change
          placeholder="Add a new todo..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {/* Submit button with icon */}
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <PlusIcon className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}; 