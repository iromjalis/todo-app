import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Filter.styles';

const Filter = (props) => {
  const { value, onChangeFilter } = props;
  return (
    <label>
      <p>Фильтр по имени:</p>
      <input type="text" value={value} onChange={onChangeFilter} />
      <button type="submit">🔍</button>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

Filter.defaultProps = {
  // bla: 'test',
};

export default Filter;
