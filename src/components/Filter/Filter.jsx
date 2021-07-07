import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Filter.styles';

const Filter = (props) => {
  const { value, onChange } = props;
  return (
    <label>
      Фильтр по имени
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  // bla: PropTypes.string,
};

Filter.defaultProps = {
  // bla: 'test',
};

export default Filter;
