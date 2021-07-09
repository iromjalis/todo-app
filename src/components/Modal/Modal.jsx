import React, { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import "./Modal.scss";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {
    hasError: false,
  };

  componentWillMount = () => {
    console.log("Modal will mount");
  };

  componentDidMount = () => {
    console.log("Modal mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("Modal will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Modal will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Modal did update");
  };

  componentWillUnmount = () => {
    console.log("Modal will unmount");
  };

  render() {
    return (
      (
        <div className="ModalBackdrop" onClick={this.handleBackdropClick}>
          <div className="ModalContent">{this.props.children}</div>
        </div>
      ),
      modalRoot
    );
  }
}

Modal.propTypes = {
  // bla: PropTypes.string,
};

Modal.defaultProps = {
  // bla: 'test',
};

export default Modal;
