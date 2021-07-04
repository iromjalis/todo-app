import React, { PureComponent } from "react";

class Container extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <div className="styles.App">{this.props.children}</div>;
  }
}

Container.propTypes = {
  // bla: PropTypes.string,
};

Container.defaultProps = {
  // bla: 'test',
};

export default Container;
