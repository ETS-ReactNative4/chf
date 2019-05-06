import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import AWSImageAdapter from './ImageAdapter';
import ImagePreview from './ImagePreview';

const FileInput = props => {
  const uploadToS3 = () => {
    return;
  };
  return (
    <div className="admin__btn-upload">
      <button type="button">
        Upload
        <input style={{ opacity: 0 }} onChange={props.adaptFileEventToValue(uploadToS3)} type={'file'} multiple />
      </button>
    </div>
  );
};
FileInput.propTypes = {
  adaptFileEventToValue: PropTypes.func.isRequired
};
class Image_Upload extends Component {
  constructor(props) {
    super(props);
    this.dropEl = null;
    this.state = {
      reorder: false,
      separator: {
        show: false,
        position: null
      }
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { imageData, percentCompleted } = nextProps;
    if (percentCompleted > 0) {
      this.updateProgress(percentCompleted);
    }
    if (percentCompleted == 0 || percentCompleted == 100) {
      const elem = document.getElementById('upload-bar');
      elem.style.visibility = 'hidden';
    }
    if (this.state.reorder) {
      this.props.imageToState(imageData);
      this.setState({ reorder: false });
    }
    if (imageData.size !== this.props.imageData.size) {
      this.props.imageToState(imageData);
    }
  }
  updateProgress = percent => {
    const elem = document.getElementById('upload-bar');
    elem.style.visibility = 'visible';
    elem.style.width = percent + '%';
    elem.innerHTML = percent * 1 + '%';
  };
  handleDragStart = e => {
    e.dataTransfer.setData('text', e.currentTarget.id);
    e.dataTransfer.dropEffect = 'move';
    this.setState({ mouseY: e.clientY });
  };

  handleDragEnter = e => {
    e.preventDefault();
    let target = e.target;
    if (target.parentElement.className === 'drag-drop-item') target = e.target.parentNode;
    target.style.borderTop = '1px solid red';
  };

  handleDragOver = e => e.preventDefault();

  handleDrop = e => {
    // NOTE used currentTarget as it seemed to pick up the div much easier
    // also used clientY prop from event object to determine if we are draggin item upward

    e.preventDefault();
    const dataToDrop = e.dataTransfer.getData('text');
    const dataEl = document.getElementById(dataToDrop);
    let target = e.currentTarget;
    target.style.borderTop = 'none';
    // NOTE: we are pulling from the top item in list no element above
    if (!dataEl.previousElementSibling) {
      return target.insertAdjacentElement('afterend', dataEl);
    }
    if (dataEl.previousElementSibling && target.nextElementSibling) {
      const oldY = this.state.mouseY;
      const newY = e.clientY;
      if (oldY > newY) {
        return target.insertAdjacentElement('beforebegin', dataEl);
      }
      return target.insertAdjacentElement('afterend', dataEl);
    }

    // NOTE we are trying to drop in the last position so we should insert above the target
    if (!target.nextElementSibling) {
      return target.insertAdjacentElement('afterend', dataEl);
    }
  };
  handleDragEnd = e => {
    const imageNodeList = e.target.parentNode.children;
    const imagesArray = Array.prototype.slice.call(imageNodeList);
    const imageMap = new Map();
    imagesArray.map(node => {
      console.log('NODE::???', node);
      imageMap.set(node.id, this.props.imageData.get(node.id));
    });
    // needed? NOTE YES THIS IS NEEDED TO THE IMAGE ADAPTER CAN UPDATE ITS INTERNAL
    // TRACK OF WHAT THE IMAGE ORDER
    this.setState({ reorder: true });
    console.log('IMAGE_MAP ON END', imageMap);
    this.props.handleImageReorder(imageMap);
  };
  handleDragLeave = e => {
    e.target.style.borderTop = 'none';
    e.target.parentNode.borderTop = 'none';
  };
  render() {
    console.log('PROPS:::', this.props);
    return (
      <div id="image-upload-wrapper" className={'admin__carousel'}>
        {/* <FileInput {...this.props} /> */}
        <ImagePreview
          images={this.props.imageData}
          handleDragStart={this.handleDragStart}
          handleDragEnter={this.handleDragEnter}
          handleDrop={this.handleDrop}
          handleDragOver={this.handleDragOver}
          handleDragLeave={this.handleDragLeave}
          handleDragEnd={this.handleDragEnd}
          handleReorder={this.handleReorder}
        />
      </div>
    );
  }
}
Image_Upload.propTypes = {
  imageData: PropTypes.object,
  handleImageUpload: PropTypes.func,
  handleImageReorder: PropTypes.func,
  imageToState: PropTypes.func,
  percentCompleted: PropTypes.number
};
export default Image_Upload;
