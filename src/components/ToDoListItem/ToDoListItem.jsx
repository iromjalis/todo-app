import React from 'react';
import PropTypes from 'prop-types';

import './ToDoListItem.css';

const ToDoListItem = ({
  important,
  done,
  label,
  handleImportant,
  handleDone,
  handleDelete,
}) => {
  const classArr = ['todo-list-item'];
  if (done) {
    classArr.push('done');
  }
  if (important) {
    classArr.push('important');
  }
  const classNames = classArr.join(' ');

  return (
    <li className="list-group-item">
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={handleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={handleImportant}
        >
          &#9734;
          <i className="fa fa-trash-o" />
        </button>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={handleDelete}
        >
          🗑
          <i className="fa fa-exclamation" />
        </button>
      </span>
    </li>
  );
};

PropTypes.propTypes = {
  important: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  handleImportant: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ToDoListItem;
