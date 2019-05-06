import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import axios from 'axios';
import { forEach, values, pick } from 'ramda';
import S3SIGNUPLOAD from '../../graphql/S3Upload.graphql';

const AWSImageAdapter = WrappedComponent => {
  class WrappedImage extends Component {
    constructor() {
      super();
      this.state = {
        percentCompleted: 0,
        urlPreview: null,
        image_data: new Map()
      };
    }
    componentDidMount() {
      const { images } = this.props;
      this.setState({ image_data: new Map([...images]) });
    }
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
          const currentImageSize = this.state.image_data.size;
          const fileIndex = currentImageSize === 0 ? 0 : currentImageSize;
          // indexOf(file, values(files));
          image_data.set(`image_url-${fileIndex}`, { name: name, url });
          updatedImageData = new Map([...this.state.image_data, ...image_data]);
          this.setState({ image_data: updatedImageData });
          delegate(url);
        }, values(files));
      }
    };
    handleReorder = reOrderedImages => {
      this.setState({ image_data: reOrderedImages });
    };
    render() {
      return (
        <WrappedComponent
          adaptFileEventToValue={this.adaptFileEventToValue}
          percentCompleted={this.state.percentCompleted}
          urlPreview={this.state.urlPreview}
          fileName={this.state.fileName}
          imageData={this.state.image_data}
          handleImageReorder={this.handleReorder}
          {...this.props}
        />
      );
    }
  }
  WrappedImage.propTypes = {
    signS3: PropTypes.func,
    images: PropTypes.object
  };
  const testingImageData = new Map();
  testingImageData.set('image_url-0', {
    name: 'product_shot_ft2',
    url: 'https://rcomm.s3.amazonaws.com/ft2_product_shot.png'
  });
  testingImageData.set('image_url-1', {
    name: 'product_shot_ft2V2',
    url: 'https://rcomm.s3.amazonaws.com/ft2_product_shot.png'
  });
  testingImageData.set('image_url-2', {
    name: 'product_shot_ft2V3',
    url: 'https://rcomm.s3.amazonaws.com/ft2_product_shot.png'
  });
  testingImageData.set('image_url-3', {
    name: 'product_shot_ft2V4',
    url: 'https://rcomm.s3.amazonaws.com/ft2_product_shot.png'
  });
  WrappedImage.defaultProps = {
    // images: testingImageData
  };
  return compose(
    graphql(S3SIGNUPLOAD, {
      props: ({ mutate }) => ({
        signS3: async (filename, filetype) => {
          let response = await mutate({
            variables: {
              filename,
              filetype
            }
          });
          return response;
        }
      })
    })
  )(WrappedImage);
};

export default AWSImageAdapter;
