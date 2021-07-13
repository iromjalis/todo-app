import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Test } from './TodoList.styles';
import Button from "@material-ui/core/Button";

class TodoList extends Component {
  state = {
    todos: this.props.todos,
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    this.setState({ [name]: type === "checkbox" ? checked : value });
    console.log(this.state.checked);
  };

  render() {
    const { todos, onDeleteTodo } = this.props;
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    return (
      <div className="TodoListWrapper">
        TodoList:
        <p>
          total : {total} | ✅ &#8594; {completed}
        </p>
        <ol>
          {todos.map(({ id, text, completed }) => (
            <li key={id}>
              <input
                type="checkbox"
                name="completed"
                id=""
                checked={completed}
                onChange={() => this.props.toggleCompleted(id)}
              />
              {completed ? "✅" : "⛔"} {text}&emsp;
              <Button
                variant="contained"
                color="primary"
                onClick={() => onDeleteTodo(id)}
              >
                &#10060; Delete
              </Button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

TodoList.defaultProps = {
  // bla: 'test',
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any.isRequired),
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
