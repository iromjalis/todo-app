import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonComponent = (props) => {
  const { children, className, type, disabled } = props;
  return (
    <button className={className} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

ButtonComponent.defaultProps = {
  type: "button",
};

ButtonComponent.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

const Button = styled(ButtonComponent)`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  background-color: ${({ variant }) => (variant ? "#0d6efd" : "transparent")};
  transition: all 0.3s ease 0s;
  :disabled {
    opacity: 0.4;
  }
  :not(:disabled) {
    cursor: none;
  }

  :hover {
    background-color: #5a6268;
  }
`;

export default Button;
