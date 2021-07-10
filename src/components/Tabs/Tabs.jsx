import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Tabs.styles';

class Tabs extends PureComponent {
  state = {
    activeIdx: 0,
  };
  componentDidUpdate(prevProps, prevState) {
    const { activeIdx } = this.state;

    if (this.state.activeIdx !== prevState.activeIdx) {
      localStorage.setItem("activeIdx", activeIdx);
    }
  }

  componentDidMount() {
    const activeIdx = localStorage.getItem("activeIdx");

    this.setState({ activeIdx });
  }

  setActiveTabIdx = (index) => {
    if (this.state.activeIdx === index) {
      return;
    } else this.setState({ activeIdx: index });
  };

  render() {
    const { tabs, toggleCompleted } = this.props;
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
        <h2>{activeTab.text}</h2>
        <p>{activeTab.completed ? "✅" : "⛔"}</p>
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
