import React, { Component } from 'react';

class Todo extends Component {
  state = {
    name: '',
    number: '',
    experience: 'junior',
    licence: false,
  };

  handleChange = ({ currentTarget }) => {
    console.log(currentTarget.value);

    this.setState({
      [currentTarget.name]: currentTarget.value,
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    // localStorage.setItem(JSON.parse(this.setState));
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            placeholder="Add your name"
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            placeholder="Add your number"
            id="number"
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            onChange={this.handleChange}
            value="junior"
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            onChange={this.handleChange}
            value="middle"
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            onChange={this.handleChange}
            value="senior"
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <label>
          <input
            type="checkbox"
            name="licence"
            onChange={this.handleLicenceChange}
            checked={this.state.licence}
          />
          Licence
        </label>
        <button disabled={!this.state.licence}>Add</button>
      </form>
    );
  }
}
export default Todo;
