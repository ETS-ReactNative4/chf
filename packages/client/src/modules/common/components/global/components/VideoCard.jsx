import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
// import classnames from 'classnames';
import moment from 'moment';
import { FaComment, FaEye, FaShare } from 'react-icons/fa';
import { Modal } from './';
import '../styles/modules/video-card.scss';

class VideoCard extends React.Component {
  state = {
    videoModalIsOpen: false,
    videoTarget: null
  };
  toggleVideoModal = () =>
    this.setState({ videoModalIsOpen: !this.state.videoModalIsOpen }, () => {
      const { videoModalIsOpen, videoTarget } = this.state;
      if (!videoModalIsOpen) {
        // Pause video on close
        videoTarget.pauseVideo();
      }
    });
  _onReady = e => {
    // access to player in all event handlers via e.target
    this.setState({ videoTarget: e.target }, () => {
      const { videoTarget } = this.state;
      // Make sure video is paused on load
      videoTarget.pauseVideo();
    });
  };
  render() {
    const videoOpts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    const {
      video: {
        snippet: { title, description, thumbnails, publishedAt },
        statistics: { viewCount, commentCount },
        id
      }
    } = this.props;
    const { videoModalIsOpen } = this.state;
    const date = moment(publishedAt, moment.ISO_8601).format('D MMM YYYY');
    return (
      <div className="video-card" onClick={this.toggleVideoModal}>
        <Modal showModal={videoModalIsOpen} toggleModal={this.toggleVideoModal}>
          <div className="iframe-wrapper">
            <YouTube videoId={id} opts={videoOpts} onReady={this._onReady} />
          </div>
        </Modal>
        <img src={thumbnails.high.url} alt={title} className="video-card__image" />
        <div className="video-card__content">
          <sub className="video-card__date">{date}</sub>
          <div className="video-card__text">
            <h3 className="video-card__title">{title}</h3>
            <p className="video-card__summary">{description}</p>
          </div>
          <div className="video-card__info">
            <div className="video-card__info-item">
              <FaComment className="video-card__info-icon" />
              <span>{commentCount}</span>
            </div>
            <div className="video-card__info-item">
              <FaEye className="video-card__info-icon" />
              <span>{viewCount}</span>
            </div>
            <div className="video-card__info-item">
              <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
                <FaShare className="video-card__info-icon" />
                <span hidden>Go to video</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VideoCard.propTypes = {
  video: PropTypes.object
};
VideoCard.defaultProps = {};

export default VideoCard;
