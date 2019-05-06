import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../../../../../../../settings';
import '../styles/modules/article-image-grid.scss';

class ArticleImageGrid extends React.Component {
  state = {
    width: null,
    height: null
  };
  componentDidMount() {
    this.measureArticleImageGrid();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.measureArticleImageGrid, false);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureArticleImageGrid, false);
  }
  saveRef = ref => (this.containerNode = ref);
  measureArticleImageGrid = () => {
    const { clientWidth, clientHeight } = this.containerNode;
    this.setState({
      width: clientWidth,
      height: clientHeight
    });
  };

  render() {
    const { children } = this.props;
    const { width } = this.state;
    return (
      <section
        ref={this.saveRef}
        className={classnames(
          'article-image-grid',
          {
            'article-image-grid--xsmall': width < settings.breakpoints.small
          },
          {
            'article-image-grid--small': width >= settings.breakpoints.small && width < settings.breakpoints.medium
          },
          {
            'article-image-grid--medium': width >= settings.breakpoints.medium && width < settings.breakpoints.large
          },
          {
            'article-image-grid--large': width >= settings.breakpoints.large
          }
        )}
      >
        {children}
      </section>
    );
  }
}

ArticleImageGrid.propTypes = {
  children: PropTypes.node
};

ArticleImageGrid.defaultProps = {};

export default ArticleImageGrid;
