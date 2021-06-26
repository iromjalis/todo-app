import styles from './Editor.module.css';
import React, { Component } from 'react';

class Editor extends Component {
  state = { message: '' };
  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };
  render() {
    return (
      <form className={styles.EditorForm} onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    );
  }
}
export default Editor;
