import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
//import { toUrlName } from './PageBreadcrumbs';
import settings from '../../../../../../../../settings';
import ResponsiveShpfyPicture from './ResponsiveShpfyPicture';

import '../styles/modules/category-grid.scss';

class CategoryGrid extends React.Component {
  state = {
    width: null,
    height: null
  };
  componentDidMount() {
    this.measureCategoryGrid();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.measureCategoryGrid, false);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureCategoryGrid, false);
  }
  saveRef = ref => (this.containerNode = ref);
  measureCategoryGrid = () => {
    const { clientWidth, clientHeight } = this.containerNode;
    this.setState({
      width: clientWidth,
      height: clientHeight
    });
  };
  renderImage = image => {
    const className = image.hasOwnProperty('className') ? image.className : '';
    const options = {
      image: image.link,
      altText: image.name,
      className,
      image_size: '300X300',
      sources: [
        {
          image: image.link,
          image_size: '300X300',
          size: '(min-width: 990px)'
        },
        {
          image: image.link,
          image_size: '370X370',
          size: '(max-width: 450px)'
        }
      ]
    };
    return <ResponsiveShpfyPicture options={options} />;
  };
  categoryLocation = handle => ({ pathname: `/products/${handle}`, search: 'page=1' });
  render() {
    const { categories } = this.props;
    const { width } = this.state;
    return (
      <section
        ref={this.saveRef}
        className={classnames(
          'category-grid',
          {
            'category-grid--xsmall': width < settings.breakpoints.small
          },
          {
            'category-grid--small': width >= settings.breakpoints.small && width < settings.breakpoints.medium
          },
          {
            'category-grid--medium': width >= settings.breakpoints.medium && width < settings.breakpoints.large
          },
          {
            'category-grid--large': width >= settings.breakpoints.large
          }
        )}
      >
        {'categories' in this.props && categories.length > 0 ? (
          categories.map(({ node: { id, title, handle, image } }) => {
            return (
              <Link key={id} to={this.categoryLocation(handle)} className="category-grid__link">
                {this.renderImage({ link: image.originalSrc, name: title, className: 'category-grid__image' })}
                {/* <img
                  src={image ? image.originalSrc : 'https://via.placeholder.com/200x200'}
                  alt={title}
                  className="category-grid__image"
                /> */}
                <h4 className="category-grid__title">{title}</h4>
              </Link>
            );
          })
        ) : (
          <span>No categories to display</span>
        )}
      </section>
    );
  }
}

CategoryGrid.propTypes = {
  categories: PropTypes.array
};

export default CategoryGrid;
