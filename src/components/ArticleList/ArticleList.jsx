import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './ArticleList.styles';

class ArticleList extends PureComponent {
  state = {
    url: "",
    title: "",
  };
  handleClick = (e) => {
    console.log("handleClick");
    console.dir(e.target);
    this.setState({
      title: e.target.textContent,
      url: e.target.attributes.href.nodeValue,
    });
  };

  render() {
    const { articles } = this.props;
    return (
      <div className="ArticleListWrapper">
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID} onClick={this.handleClick}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ArticleList.propTypes = {
  // bla: PropTypes.string,
};

ArticleList.defaultProps = {
  // bla: 'test',
};

export default ArticleList;
