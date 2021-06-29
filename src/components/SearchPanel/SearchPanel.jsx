import React, { Component } from 'react';

import styles from './SearchPanel.module.css';

class SearchPanel extends Component {
  state = {
    term: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    const { handleSearchChange } = this.props;

    this.setState({ term: value });
    handleSearchChange(value);
  };

  render() {
    const { term } = this.state;
    const { input } = styles;
    return (
      <input
        name="term"
        type="text"
        onChange={this.handleChange}
        className={`form-control ${input}`}
        placeholder="type to search..."
        id="search123"
        value={term}
      />
    );
  }
}

export default SearchPanel;
