import React, { Component } from "react";
import PropTypes from "prop-types";
// import StateDebuger from "../../shared/components/StateDebuger";

class AddToDo extends Component {
  static propTypes = {
    handleAddToDo: PropTypes.func.isRequired,
  };

  state = {
    term: "",
  };

  handleChange = ({ target }) => {
    this.setState({ term: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { term } = this.state;
    const { handleAddToDo } = this.props;

    handleAddToDo(term);
    this.setState({ term: "" });
  };

  render() {
    const { term } = this.state;
    return (
      <>
        {/* <StateDebuger object={this.state} /> */}
        <form className="row mt-3" onSubmit={this.handleSubmit}>
          <div className="col-8">
            <input
              name="term"
              type="text"
              className="form-control"
              id="19kdjr"
              placeholder="...typing"
              onChange={this.handleChange}
              value={term}
            />
          </div>
          <div className="col-4">
            <button className="btn btn-primary w-100" type="submit">
              Add
            </button>
          </div>
        </form>
      </>
    );
  }
}


export default AddToDo;
