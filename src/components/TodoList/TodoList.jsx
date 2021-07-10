import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Test } from './TodoList.styles';
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    todos: this.props.todos,
  };

  handleChange = (e) => {
    console.log("target", e.target);
    this.setState({ completed: true });
  };

  render() {
    const { todos, onDeleteTodo, onToggleCompleted } = this.props;
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
              <TodoItem
                id={id}
                text={text}
                completed={completed}
                onToggleCompleted={() => onToggleCompleted(id)}
                onDeleteTodo={() => {
                  onDeleteTodo(id);
                }}
              />
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
