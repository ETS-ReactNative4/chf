import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../../../../../../../settings';
import '../styles/modules/video-text.scss';

class VideoText extends React.Component {
  state = {
    width: null,
    height: null
  };
  componentDidMount() {
    this.measureVideoText();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.measureVideoText, false);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureVideoText, false);
  }
  saveRef = ref => (this.containerNode = ref);
  measureVideoText = () => {
    const { clientWidth, clientHeight } = this.containerNode;
    this.setState({
      width: clientWidth,
      height: clientHeight
    });
  };

  render() {
    const { children, videoLink, videoSide, iframeVideo } = this.props;
    const { width } = this.state;
    return (
      <section
        ref={this.saveRef}
        className={classnames(
          'video-text',
          {
            'video-text--xsmall': width < settings.breakpoints.small
          },
          {
            'video-text--small': width >= settings.breakpoints.small && width < settings.breakpoints.medium
          },
          {
            'video-text--medium': width >= settings.breakpoints.medium && width < settings.breakpoints.large
          },
          {
            'video-text--large': width >= settings.breakpoints.large
          }
        )}
      >
        <div
          className={classnames(
            'video-text__content',
            { 'video-text__content--left': videoSide === 'right' },
            { 'video-text__content--right': videoSide === 'left' }
          )}
        >
          {children}
        </div>
        <div
          className={classnames(
            'video-text__video',
            { 'video-text__video--right': videoSide === 'right' },
            { 'video-text__video--left': videoSide === 'left' }
          )}
        >
          {iframeVideo ? (
            <div className="aspect-ratio">
              <iframe src={videoLink} width="640" height="480" />
            </div>
          ) : (
            <img src={videoLink} />
          )}
          {/* <div className="iframe--video">
            <video src={videoLink} />
          </div> */}
        </div>
      </section>
    );
  }
}

VideoText.propTypes = {
  children: PropTypes.node,
  videoLink: PropTypes.string,
  videoSide: PropTypes.string,
  iframeVideo: PropTypes.bool
};

VideoText.defaultProps = {
  // videoLink: 'https://via.placeholder.com/640x360'
};

export default VideoText;
