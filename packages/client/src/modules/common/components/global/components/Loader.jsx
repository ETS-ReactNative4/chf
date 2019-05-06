import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Triangle.css';

class Loader extends Component {
  static propTypes = {
    color: PropTypes.string,
    type: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.shape({})
  };

  static defaultProps = {
    color: '#f48100',
    type: 'Triangle',
    height: 80,
    width: 80
  };

  // svgRenderer = type => {
  //   return <Triangle {...this.props} />;
  // };

  render() {
    const { height, color } = this.props;
    return (
      <div className="react-spinner-loader-svg">
        <svg id="triangle" width={height} height={height} viewBox="-3 -4 39 39">
          <polygon fill="transparent" stroke={color} strokeWidth="2" points="16,0 32,32 0,32" />
        </svg>
      </div>
    );
  }
}
export default class Loading extends Component {
  render() {
    return <Loader type="Triangle" color="#f48100" height="100" width="100" />;
  }
}
