import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
// import classnames from 'classnames';
import { MdAdd, MdArrowUpward, MdArrowDownward, MdClose, MdSave } from 'react-icons/md';
// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';
import '../styles/manage-carousel.scss';

class ManageCarousel extends React.Component {
  state = {
    addImage: false,
    imageName: '',
    imageLink: '',
    imageFile: null,
    error: null
  };
  toggleAddImage = () => this.setState({ addImage: !this.state.addImage });
  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  addImage = e => {
    const { imageName, imageLink, imageFile } = this.state;
    console.log(`Add ${imageName} with a link to ${imageLink}`, imageFile);
    e.preventDefault();
    // TODO: upload image to AWS
    this.setState(
      { addImage: false, imageName: '', imageLink: '', imageFile: null, error: null },
      () => (this.fileInput.value = '')
    );
  };
  removeImage = image => {
    console.log('image', image);
  };
  orderImageIncrease = image => {
    console.log('image', image);
  };
  orderImageDecrease = image => {
    console.log('image', image);
  };
  updateCarousel = () => {
    // TODO: save image updates to db
  };
  render() {
    const { addImage, imageName, imageLink, imageFile, error } = this.state;
    const { images } = this.props;

    return (
      <section className="manage-carousel">
        {'images' in this.props && images.length > 0 ? (
          <ul>
            {images.map(image => (
              <li key={image.id}>
                <span>{image.name}</span>
                <img alt={image.name} src={image.image_url} />
                <button onClick={() => this.orderImageIncrease(image)}>
                  <span hidden>Move up</span>
                  <MdArrowUpward />
                </button>
                <button onClick={() => this.orderImageDecrease(image)}>
                  <span hidden>Move down</span>
                  <MdArrowDownward />
                </button>
                <button onClick={() => this.removeImage(image)}>
                  <span hidden>Remove</span>
                  <MdClose />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>No image(s) to show on the carousel. Try adding one!</div>
        )}
        {addImage === false ? (
          <button onClick={this.toggleAddImage}>
            <MdAdd />
            <span>Add New Image</span>
          </button>
        ) : null}
        {/* New image form */}
        {addImage === true ? (
          <form className="manage-carousel__form" onSubmit={this.addImage}>
            <label htmlFor="image-name">Image Name:</label>
            <input id="image-name" type="text" name="imageName" value={imageName} onChange={this.handleInput} />
            <label htmlFor="image-link">Image Link (cahomefitness.com/&lt;link&gt;)</label>
            <input id="image-link" type="text" name="imageLink" value={imageLink} onChange={this.handleInput} />
            <label htmlFor="image-file">Image:</label>
            <input
              ref={ref => (this.fileInput = ref)}
              id="image-file"
              type="file"
              accept=".png,.jpg"
              name="imageFile"
              value={imageFile}
              onChange={this.handleInput}
            />
            <button type="submit">
              <span>Upload New Image</span>
            </button>
          </form>
        ) : null}
        <button onClick={this.updateCarousel}>
          <MdSave />
          <span>Save Carousel</span>
        </button>
        {error !== null ? <div className="manage-carousel__error">{error.message}</div> : null}
      </section>
    );
  }
}

ManageCarousel.propTypes = {
  images: PropTypes.array
};
ManageCarousel.defaultProps = {
  images: [
    {
      id: 1,
      name: 'image 1',
      link: '',
      image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo_chf.png'
    }
  ]
};

export default ManageCarousel;
