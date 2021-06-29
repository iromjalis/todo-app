import React from 'react';
import styles from './ToDoListHeader.module.css';

const ToDoHeader = ({ toDo, done, important }) => {
  const { header, title, subtitle } = styles;
  return (
    <div className={header}>
      <h1 className={title}>Todo List</h1>
      <h2 className={subtitle}>
        {toDo} more to do, {done} done, {important} important
      </h2>
    </div>
  );
};

export default ToDoHeader;
