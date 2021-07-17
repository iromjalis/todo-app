import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SignUpForm.css";
const LEVEL = {
  junior: "junior",
  middle: "middle",
  senior: "senior",
};
const STATE = {
  login: "",
  password: "",
  email: "",
  agreed: false,
  level: null,
};

class SignUpForm extends Component {
  state = {
    ...STATE,
  };

  // * Отвечает за обновление состояния
  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  // * Вызывается при отправке формы
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);
    console.log(this.state);
    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit({ ...this.state });
    this.props.onClose();
    this.setState({ ...STATE });
    localStorage.setItem("login", this.state.login);
  };

  render() {
    const { login, password, email, agreed, level } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
            Junior
            <input
              type="radio"
              checked={level === LEVEL.junior}
              name="level"
              value={LEVEL.junior}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Middle
            <input
              type="radio"
              checked={level === LEVEL.middle}
              name="level"
              value={LEVEL.middle}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Senior
            <input
              type="radio"
              checked={level === LEVEL.senior}
              name="level"
              value={LEVEL.senior}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <label>
          Agree to terms
          <input
            name="agreed"
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" disabled={!agreed}>
          Sign up as <b>{login}</b>
        </button>
      </form>
    );
  }
}
export default SignUpForm;
