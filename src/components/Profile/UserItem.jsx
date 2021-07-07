import React from "react";

const UserItem = ({ stats }) => {
  return Object.entries(stats).map((stat) => (
    <li key={stat[0]}>
      <span className="label"> {stat[0]}:</span>
      <span className="quantity"> {stat[1]} </span>
    </li>
  ));
};

export default UserItem;
