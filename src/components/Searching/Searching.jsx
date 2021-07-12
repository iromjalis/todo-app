import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Searching.styles';

class Searching extends PureComponent {
  state = {
    query: "",
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ query: e.target.value });
    // this.props.onSubmit(this.state.query);
  };
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    this.setState({ query: e.target.value });
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    const { onSubmit } = this.props;
    const { query } = this.state;
    return (
      <form onSubmit={onSubmit}>
        <label>
          Фильтр по имени
          <input type="text" value={query} onChange={this.handleChange} />
        </label>
        <button type="submit">🔍</button>
      </form>
    );
  }
}

Searching.propTypes = {
  // bla: PropTypes.string,
};

Searching.defaultProps = {
  // bla: 'test',
};

export default Searching;
