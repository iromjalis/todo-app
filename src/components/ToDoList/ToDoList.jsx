import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ToDoListItem from '../ToDoListItem/ToDoListItem';

// const StatusEnum = {
//   IN_STOCK: 'in-tock'
// }

// // export default StatusEnum;

// // import StatusEnum from './'

const ToDoList = props => {
  const { todos, handleImportant, handleDone, handleDelete } = props;

  const items = todos.map(item => {
    const { id, ...rest } = item;

    return (
      <Fragment key={id}>
        <ToDoListItem
          handleImportant={() => handleImportant(id)}
          handleDelete={() => handleDelete(id)}
          handleDone={() => handleDone(id)}
          {...rest}
        />
      </Fragment>
    );
  });

  return <ol className="list-group">{items}</ol>;
};

ToDoList.propTypes = {
  hi: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      important: PropTypes.bool.isRequired,
      done: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
      updatedAt: PropTypes.number.isRequired,
    }).isRequired,
  ),
  handleImportant: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ToDoList;
