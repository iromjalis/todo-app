import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Tabs.styles';

const tabs = [
  {
    label: "Tab 1",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    label: "Tab 2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    label: "Tab 3",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
];

class Tabs extends PureComponent {
  state = {
    hasError: false,
  };

  componentWillMount = () => {
    console.log("Tabs will mount");
  };

  componentDidMount = () => {
    console.log("Tabs mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("Tabs will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Tabs will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Tabs did update");
  };

  componentWillUnmount = () => {
    console.log("Tabs will unmount");
  };

  render() {
    return <div></div>;
  }
}

Tabs.propTypes = {
  // bla: PropTypes.string,
};

Tabs.defaultProps = {
  // bla: 'test',
};

export default Tabs;
