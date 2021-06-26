import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input onChange={onChange} />
    </label>
  );
};

export default Filter;
