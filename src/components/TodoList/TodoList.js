import React from 'react';

const TodoList = props => {
  return (
    <ol>
      Todo List:
      <li> 123</li>
    </ol>
  );
};

TodoList.defaultProps = {
  todoList: 'TodoList',
};
export default TodoList;
