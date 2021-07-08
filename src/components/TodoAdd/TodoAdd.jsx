import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

//import { Test } from './Phonebook.styles';

class TodoAdd extends Component {
  state = {
    text: "",
    value: 0,
    enable: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addNewTodo(this.state);
    this.toggle();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  toggle = () => {
    this.setState((prevState) => ({
      enable: !prevState.enable,
    }));
    setTimeout(() => {
      this.setState({ enable: true });
    }, 500);
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            variant="contained"
            type="text"
            name="text"
            value={this.state.text}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            placeholder="...new todo"
          />
          {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
          {this.state.enable ? (
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
          ) : (
            <Button variant="contained" color="default" disabled type="submit">
              Added
            </Button>
          )}
        </label>
      </form>
    );
  }
}

TodoAdd.propTypes = {
  // bla: PropTypes.string,
};

TodoAdd.defaultProps = {
  // bla: 'test',
};

export default TodoAdd;
