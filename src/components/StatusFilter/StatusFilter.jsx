import React from "react";
import PropTypes from "prop-types";

const buttons = [
  { label: "ALL", name: "all" },
  { label: "Active", name: "active" },
  { label: "Done", name: "done" },
];

const StatusFilter = ({ filter, handleFilterChange }) => {
  const btnItems = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    const className = isActive ? "btn btn-info" : "btn btn-outline-info";
    return (
      <button className={className} onClick={() => handleFilterChange(name)} key={name}>
        {label}
      </button>
    );
  });
  return <div className="btn-group">{btnItems}</div>;
};

StatusFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default StatusFilter;
