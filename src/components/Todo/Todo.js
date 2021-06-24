import React from 'react';
import PropTypes from 'prop-types';

import styles from './Todo.module.css';
import image from '../../default.jpg';

const Todo = ({ price, title, url, children }) => {
  return (
    <>
      Todo App lives here
      <img src={url} alt="cat" />
      <form action="submit">
        <label htmlFor="">
          <input type="text" name="" id="" className={styles.Input} />
        </label>
        <button type="submit">+ Send</button>
      </form>
      {children}
    </>
  );
};

Todo.defaultProps = {
  url: image,
};
Todo.protoTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};
export default Todo;
