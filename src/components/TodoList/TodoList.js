import React from 'react';

const TodoList = ({ todos, onDeleteTodo, onChange }) => {
  console.log(todos);
  return (
    <ul>
      Todo list:
      {todos.map(({ id, text, completed }) => (
        <li key={id}>
          {text}
          <input
            type="checkbox"
            name="done"
            id=""
            checked={completed}
            onChange={onChange}
          />
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
