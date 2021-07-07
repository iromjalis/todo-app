import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = { value: this.props.initialValue };

  handleIncrement = (evt) => {
    // console.log("Increment button was clicked!", evt); // работает
    // console.log("this.props: ", this.props); // Error: cannot read props of undefined
    this.setState((prevState) => ({
      value: prevState.value + this.props.step,
    }));
  };

  handleDecrement = (evt) => {
    // console.log("Decrement button was clicked!", evt); // работает
    // console.log("this.props: ", this.props); // Error: cannot read props of undefined
    this.setState((prevState) => ({
      value: prevState.value - this.props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <p>Value: {this.state.value}</p>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={this.handleIncrement}
        >
          Increment by {step}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={this.handleDecrement}
        >
          Decrement by {step}
        </Button>
      </div>
    );
  }
}

export default Counter;
