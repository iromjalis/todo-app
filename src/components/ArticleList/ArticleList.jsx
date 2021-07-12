import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './ArticleList.styles';

class ArticleList extends PureComponent {
  state = {};

  render() {
    const { articles } = this.props;
    return (
      <div className="ArticleListWrapper">
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
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
