import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

//import { Test } from './Phonebook.styles';

class Phonebook extends Component {
  state = {
    name: "",
    value: 0,
    enable: false,
  };

  handleChange = (e) => {
    console.dir("e", e);
  };

  handleSubmit = (e) => {
    console.log("e", e.currentTarget.value);
  };

  toggle = () => {
    this.setState((prevState) => ({
      enable: !prevState.enable,
    }));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <label>
          Name
          <input
            variant="contained"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
          {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
          <Button variant="contained" color="primary" onClick={this.toggle}>
            {this.state.enable ? "Added" : "Add"}
          </Button>
        </label>
      </form>
    );
  }
}

Phonebook.propTypes = {
  // bla: PropTypes.string,
};

Phonebook.defaultProps = {
  // bla: 'test',
};

export default Phonebook;
