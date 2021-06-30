import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import StateDebuger from "../../shared/components/StateDebuger";
const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

class AddToDo extends Component {
  static propTypes = {
    handleAddToDo: PropTypes.func.isRequired,
  };

  state = {
    term: '',
    age: '',
    agreed: false,
    gender: '',
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { term } = this.state;
    const { handleAddToDo } = this.props;

    handleAddToDo(term);
    this.setState({ term: '' });
  };

  render() {
    const { term, agreed, gender, age, checked } = this.state;
    return (
      <>
        {/* <StateDebuger object={this.state} /> */}
        <form className="row mt-3" onSubmit={this.handleSubmit}>
          <div className="col-8">
            <input
              name="term"
              type="text"
              className="form-control"
              id="19kdjr"
              placeholder="...typing"
              onChange={this.handleChange}
              value={term}
            />
          </div>
          <div className="col-4"></div>

          {/* <div>
            <label>
              <h1></h1>
              Choose your age
              <select name="age" value={age} onChange={this.handleChange}>
                <option value="" disabled>
                  ...
                </option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36+">36+</option>
              </select>
            </label>

            <section>
              <label>
                Male
                <input
                  type="radio"
                  checked={gender === Gender.MALE}
                  name="gender"
                  value={Gender.MALE}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Female
                <input
                  type="radio"
                  checked={gender === Gender.FEMALE}
                  name="gender"
                  value={Gender.FEMALE}
                  onChange={this.handleChange}
                />
              </label>
            </section>
            <label>
              Agree to terms
              <input
                type="checkbox"
                checked={agreed}
                name="agreed"
                value={checked}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button type="submit" disabled={!agreed}>
            Sign up as login
          </button>*/}
          <button className="btn btn-primary w-100" type="submit">
            Add
          </button>
        </form>
      </>
    );
  }
}

export default AddToDo;
