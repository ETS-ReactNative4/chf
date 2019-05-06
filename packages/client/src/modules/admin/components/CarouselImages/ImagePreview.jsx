import React from 'react';
import PropTypes from 'prop-types';
import { MdCancel } from 'react-icons/md';

const ImagePreview = props => {
  const {
    images,
    handleDragStart,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDragEnd,
    handleDrop,
    removeImage
  } = props;
  return (
    // <div className="admin__container">
    <div className="admin__images">
      {Array.from(images.entries()).map((entry, idx) => {
        return (
          <div
            id={entry[0]}
            key={entry[0]}
            className="admin__images--item"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <img
              className="admin__images--image"
              // id={entry[0]}
              draggable="false"
              src={entry[1].url}
              alt={entry[1].name}
            />
            <div className="admin__images--image--info">
              <span className="admin__images--image--position" draggable="false">
                Image Position: {idx}
              </span>
              <span className="admin__images--image--name" draggable="false">
                File Name: {entry[1].name}
              </span>
            </div>
            <div className="admin__btn--container">
              <button className="admin__btn--remove" onClick={() => removeImage(entry[0])}>
                <MdCancel size={30} className="admin__btn--cancel" color="#DB3A34" />
              </button>
            </div>
            <div className="admin__images--spacer" />
          </div>
        );
      })}
    </div>
    // {/* <div id="upload-bar" className="upload-progress">
    //   <div className="upload-bar">0%</div>
    // </div> */}

    // </div>
  );
};
ImagePreview.propTypes = {
  images: PropTypes.object,
  handleDragStart: PropTypes.func.isRequired,
  handleDragEnter: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleDragLeave: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  handleDragEnd: PropTypes.func.isRequired
};

export default ImagePreview;
