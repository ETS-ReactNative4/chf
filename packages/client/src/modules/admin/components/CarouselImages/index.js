import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import axios from 'axios';
import { forEach, values, pick } from 'ramda';

import PAGE_QUERY from '../../graphql/PageQuery.graphql';

// import ImageUploader from './ImageUploader';
import ImagePreview from './ImagePreview';
import AWSImageAdapter from './ImageAdapter';

import '../../styles/carousel.scss';

const uploadToS3 = () => {
  return;
};
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      percentCompleted: 0,
      carouselStatus: false,
      page_content: {
        page_id: null,
        content: [
          {
            section_name: 'hero',
            field_name: 'Carousel',
            field_label: 'carousel',
            field_type: 'Carousel',
            field_value: null
          }
        ]
      },
      images: new Map()
    };
  }
  componentDidMount() {
    // console.log('CAROUSEL PROPS DID MOUNT', this.props.loadingPage);
    if (!this.props.loadingPage) {
      const { pages } = this.props;
      const page = pages[0];
      const { fields } = this.props.page;
      const rootFields = fields[0];
      const { content } = this.state.page_content;
      const fieldsToUpdate = content[0];
      const transformImages = new Map([...JSON.parse(rootFields.field_value).images]);

      const updatedFields = Object.assign({}, fieldsToUpdate, {
        field_value: Object.assign({}, JSON.parse(rootFields.field_value), { images: transformImages })
      });
      this.setState({
        loaded: true,
        images: transformImages,
        page_content: Object.assign({}, this.state.page_content, {
          page_id: parseInt(page.id),
          content: [updatedFields]
        })
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { loadingPages, loadingPage, page, pages } = this.props;
    const { page_content, loaded } = this.state;
    if (prevProps.loadingPages !== loadingPages || !loadingPages) {
      console.log('PREV LOADING PAGE', prevProps.page, 'PROPS PAGE', page);
      if (prevProps.page !== page && !prevState.loaded) {
        console.log('PAGE IS DIFF', loaded, prevState.loaded);
        return this.initializeView();
      } else if (!prevState.loaded && page) {
        return this.initializeView();
      }
      return;
    }
  }
  initializeView = () => {
    const { page_content } = this.state;

    const { pages } = this.props;
    const page = pages[0];
    if (this.props.page) {
      const { fields } = this.props.page;
      const rootFields = fields[0];
      const { content } = page_content;
      const fieldsToUpdate = content[0];
      const transformImages = new Map([...JSON.parse(rootFields.field_value).images]);

      const updatedFields = Object.assign({}, fieldsToUpdate, {
        field_value: Object.assign({}, JSON.parse(rootFields.field_value), { images: transformImages })
      });
      this.setState({
        loaded: true,
        images: transformImages,
        page_content: Object.assign({}, page_content, { page_id: parseInt(page.id), content: [updatedFields] })
      });
    }
    const { percentCompleted } = this.state;
    // if (percentCompleted > 0) {
    //   this.updateProgress(percentCompleted);
    // }
    if (percentCompleted == 0 || percentCompleted == 100) {
      const elem = document.getElementById('upload-bar');
      elem.style.visibility = 'hidden';
      return;
    }
  };
  imageToState = images => {
    this.setState({
      images
    });
  };
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
    e.target.style.borderTop = 'none';
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
      imageMap.set(node.id, this.state.images.get(node.id));
    });
    // needed? NOTE YES THIS IS NEEDED TO THE IMAGE ADAPTER CAN UPDATE ITS INTERNAL
    // TRACK OF WHAT THE IMAGE ORDER
    this.handleReorder(imageMap);
  };
  handleDragLeave = e => {
    e.target.style.borderTop = 'none';
    e.target.parentNode.borderTop = 'none';
  };
  handleReorder = reOrderedImages => {
    this.setState({ images: reOrderedImages });
  };
  removeImage = key => {
    const currentImages = new Map([...this.state.images]);
    currentImages.delete(key);
    this.setState({ images: currentImages });
  };
  uploadToS3 = async (signedRequest, file) => {
    const options = {
      headers: {
        'Content-Type': `"${file.type}"`
      },
      onUploadProgress: function(progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        this.setState({ percentCompleted });
      }.bind(this)
    };
    await axios.put(signedRequest, file, options);
  };
  adaptFileEventToValue = delegate => async e => {
    const {
      target: { files }
    } = e;
    const { signS3 } = this.props;
    const image_data = new Map();
    const getFileNameAndType = file => pick(['name', 'type'], file);
    const response = async (signS3, { name, type }) => await signS3(name, type);

    if (files.length !== 0 && typeof files !== 'undefined') {
      let updatedImageData;
      // TODO THIS FOREACH BIZ SUCKS WE ARE HAVING TO SET STATE WAY TO MUCH IN THIS LOOP
      // BUT PLACING SETSTATE AFTER FOREACH FIRES BEFORE UPDATED IMAGEMAP IS CREATED
      forEach(async file => {
        // NOTE JUST need to update the state and then map the urls down on the preview component
        const { name } = getFileNameAndType(file);
        const res = await response(signS3, getFileNameAndType(file));
        const { signedRequest, url } = res.data.signS3;
        await this.uploadToS3(signedRequest, file);
        const currentImageSize = this.state.images.size;
        const fileIndex = currentImageSize === 0 ? 0 : currentImageSize;
        // indexOf(file, values(files));
        image_data.set(`image_url-${fileIndex}`, { name: name, url });
        updatedImageData = new Map([...this.state.images, ...image_data]);
        this.setState({ images: updatedImageData });
        delegate(url);
      }, values(files));
    }
  };
  handleChecked = () => {
    this.setState({ carouselStatus: !this.state.carouselStatus });
  };
  saveCarouselContent = async () => {
    const { page_content } = this.state;
    const [content] = page_content.content;

    const field_value = Object.assign({}, { images: this.state.images, carouselActive: this.state.carouselStatus });
    const updatedContent = Object.assign({}, content, { field_value: JSON.stringify(field_value) });

    const pageData = Object.assign({}, page_content, { content: [updatedContent] });
    try {
      const [data] = await this.props.uploadContent(pageData);
      console.log('DATA:::', data);
      const { images, carouselActive } = JSON.parse(data.field_value);
      console.log('IAMGES:::', images);
      this.setState({ images: new Map([...images]), carouselStatus: carouselActive, saveSuccess: true });
    } catch (e) {
      console.log('ERRROR UPLOADING', e);
    }
  };
  render() {
    // console.log('CAROUSEL State::', this.state);
    // console.log('CAROUSEL PROPS:', this.props);
    const { loadingPage } = this.props;
    if (loadingPage) {
      return (
        <div className={'admin'}>
          <div className="admin__btn">
            <button type="button" className="admin__btn--upload">
              Upload
              <input style={{ opacity: 0 }} onChange={this.adaptFileEventToValue(uploadToS3)} type={'file'} multiple />
            </button>
            <button className={'admin__btn--save'} onClick={this.saveCarouselContent}>
              Save
            </button>
          </div>
          <div className={'admin__carousel__toggle'}>
            <span>Carousel On/Off</span>
            <label className="admin__carousel__switch">
              <input type="checkbox" checked={this.state.carouselStatus} onChange={this.handleChecked} />
              <span className="admin__carousel__slider admin__carousel__slider--round" />
            </label>
          </div>
        </div>
      );
    }
    return (
      <div className={'admin'}>
        <div className="admin__btn">
          <button type="button" className="admin__btn--upload">
            Upload
            <input style={{ opacity: 0 }} onChange={this.adaptFileEventToValue(uploadToS3)} type={'file'} multiple />
          </button>
          <button className={'admin__btn--save'} onClick={this.saveCarouselContent}>
            Save
          </button>
        </div>
        <div className={'admin__carousel__toggle'}>
          <span>Carousel On/Off</span>
          <label className="admin__carousel__switch">
            <input type="checkbox" checked={this.state.carouselStatus} onChange={this.handleChecked} />
            <span className="admin__carousel__slider admin__carousel__slider--round" />
          </label>
        </div>
        {/* <ImageUploader imageToState={this.imageToState} {...this.props} /> */}
        <ImagePreview
          images={this.state.images}
          removeImage={this.removeImage}
          handleDragStart={this.handleDragStart}
          handleDragEnter={this.handleDragEnter}
          handleDrop={this.handleDrop}
          handleDragOver={this.handleDragOver}
          handleDragLeave={this.handleDragLeave}
          handleDragEnd={this.handleDragEnd}
          handleReorder={this.handleReorder}
        />
        <div id="upload-bar" className="upload-progress">
          <div className="upload-bar">0%</div>
        </div>
      </div>
    );
  }
}
Carousel.propTypes = {
  loadingPages: PropTypes.bool,
  loadingPage: PropTypes.bool,
  fields: PropTypes.array,
  pages: PropTypes.array,
  uploadContent: PropTypes.func
};
const CarouselWithApollo = compose(
  graphql(PAGE_QUERY, {
    options: () => {
      return { variables: { pageTitle: 'Home', fieldNames: [['hero', 'images'], ['hero', 'carouselActive']] } };
    },
    props: ({ data }) => {
      // console.log('WHY IS THIS NOT RUNNING::', data);
      const { page, loading: loadingPage, error } = data;
      if (loadingPage && !error) {
        return { loadingPage, page: null };
      } else {
        return { page, loadingPage };
      }
    }
  })
)(Carousel);
export default AWSImageAdapter(CarouselWithApollo);
