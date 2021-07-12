import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './AddNewTodo.styles';

class AddNewTodo extends PureComponent {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.text);

    this.setState({ text: "" });
  };
  render() {
    const { text } = this.state;
    // console.log("text", text);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add new todo
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Add new todo..."
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

AddNewTodo.propTypes = {
  // bla: PropTypes.string,
};

AddNewTodo.defaultProps = {
  // bla: 'test',
};

export default AddNewTodo;
