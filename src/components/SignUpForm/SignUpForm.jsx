import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Test } from './SignUpForm.styles';

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
  gender: null,
  age: "",
};

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  // * Отвечает за обновление состояния
  handleChange = (e) => {
    const { name, value, type, agreed, checked } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  // * Вызывается при отправке формы
  handleSubmit = (evt) => {
    evt.preventDefault();

    const { login, email, password } = this.state;

    console.log(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
    `);

    this.props.onSubmit({ ...this.state });
    this.props.onClick();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Registration form</h3>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <section>
          <h2>Choose your gender</h2>
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
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value=">18">менее 18</option>
            <option value="18<">более 18+ </option>
          </select>
        </label>
        <h2></h2>
        <label>
          <span>Agree to terms</span>
          <input
            name="agreed"
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" onClick={this.props.onClick} disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
export default SignUpForm;
