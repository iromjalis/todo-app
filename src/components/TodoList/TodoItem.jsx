import React from "react";
import PropTypes from "prop-types";
//import { Test } from './TodoItem.styles';
import Button from "@material-ui/core/Button";
import IconBtn from "../IconBtn";

import { ReactComponent as DeleteBtn } from "../../icons/Delete.svg";

const TodoItem = ({ id, text, completed, onDeleteTodo, onToggleCompleted }) => (
  <div className="TodoItemWrapper">
    <input
      type="checkbox"
      name="checkbox"
      id=""
      checked={completed}
      onChange={onToggleCompleted}
    />
    {completed ? "✅" : "⛔"} {text}&emsp;
    {/* <Button variant="contained" color="primary" onClick={onDeleteTodo}>
      &#10060; Delete
    </Button> */}
    <IconBtn onClick={onDeleteTodo(id)} placeholder="Click to delete">
      <DeleteBtn width="20" height="20" fill="#fff" />
    </IconBtn>{" "}
  </div>
);

TodoItem.propTypes = {
  // bla: PropTypes.string,
};

TodoItem.defaultProps = {
  // bla: 'test',
};

export default TodoItem;
