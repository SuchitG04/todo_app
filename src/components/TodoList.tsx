import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No todos yet. Add one above!
      </div>
    );
  }

  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
