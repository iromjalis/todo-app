import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Filter.styles';

const Filter = (props) => {
  const { filter, onChange } = props;
  return (
    <label>
      Фильтр по имени
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  // bla: 'test',
};

export default Filter;
