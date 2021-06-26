import React from 'react';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ol>
      Todo list:
      {todos.map(({ id, text, completed }) => (
        <li key={id}>
          {text}
          <input
            type="checkbox"
            name="done"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
