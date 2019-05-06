import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import '../styles/modules/article-image.scss';

class ArticleImage extends React.Component {
  render() {
    const { width, location, image, shadow } = this.props;
    // const {  } = this.state;
    return (
      <div className={classnames('article-image', { 'article-image--shadowed': shadow })} data-grid-w={width}>
        {'location' in this.props ? (
          <Link className="article-image__link" to={location}>
            <img src={image} className="article-image__image" />
          </Link>
        ) : (
          <div className="article-image__link">
            <img src={image} className="article-image__image" />
          </div>
        )}
      </div>
    );
  }
}

ArticleImage.propTypes = {
  width: PropTypes.number.isRequired,
  location: PropTypes.string,
  image: PropTypes.string,
  shadow: PropTypes.bool
};

ArticleImage.defaultProps = {};

export default ArticleImage;
