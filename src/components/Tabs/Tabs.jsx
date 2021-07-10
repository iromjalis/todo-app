import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Tabs.styles';

class Tabs extends PureComponent {
  state = {
    tabs: [
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
    ],
    activeIdx: 0,
  };
  // componentDidUpdate(prevProps, prevState) {
  //   const { activeIdx } = this.state;
  //   if (this.state.activeIdx !== prevState.activeIdx) {
  //     localStorage.setItem("activeIdx", activeIdx);
  //   }
  // }

  // componentDidMount() {
  //   const activeIdx = localStorage.getItem("activeIdx");
  //   this.setState({ activeIdx });
  // }

  setActiveTabIdx = (index) => {
    if (this.state.activeIdx === index) {
      return;
    } else this.setState({ activeIdx: index });
  };

  render() {
    const { tabs, toggleCompleted } = this.props;
    console.log("tabs", tabs);
    const { activeIdx } = this.state;
    const activeTab = tabs[activeIdx];

    return (
      <div>
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={index}
            onClick={() => this.setActiveTabIdx(index)}
          >
            {index}
          </button>
        ))}
        <h2>{activeTab.content}</h2>
        <p>{activeTab && activeTab.completed ? "✅" : "⛔"}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  // bla: PropTypes.string,
};

Tabs.defaultProps = {
  // bla: 'test',
};

export default Tabs;
