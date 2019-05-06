import React, { Component } from 'react';
import { compose, graphql, withApollo } from 'react-apollo';
import axios from 'axios';
import { forEach, values, pick } from 'ramda';

import AdminView from '../components/AdminView';
// import Loader from '../../common/components/global/components/Loader';
import S3SIGNUPLOAD from '../graphql/S3Upload.graphql';
import UPDATE_BRAND from '../graphql/UpdateBrand.graphql';

import VendorEdit from '../components/Vendors/VendorEdit';
import SuccessModal from '../components/Modal';

// const uploadToS3 = () => {
//   return;
// };
class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      percentCompleted: 0,
      modalState: false
    };
  }
  componentDidMount() {
    // console.log('DID MOUNT PROPS', this.props);
    const {
      location: { state }
    } = this.props;
    // console.log('C D U:::', state);
    const { vendor } = state;
    if (vendor) {
      this.setState({ image: vendor.logo_url });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      location: { state }
    } = this.props;
    // console.log('C D U:::', state);
    const { vendor } = state;
    if (vendor) {
      if (!prevState.image) {
        this.setState({ image: vendor.logo_url });
      }
    }
    const { percentCompleted } = this.state;
    // console.log('PERCENT COMPLETED::', percentCompleted);
    if (percentCompleted > 0) {
      this.updateProgress(percentCompleted);
    }
    if (percentCompleted == 0 || percentCompleted == 100) {
      const elem = document.getElementById('upload-bar');
      elem.style.visibility = 'hidden';
      return;
    }
  }
  updateProgress = percent => {
    const elem = document.getElementById('upload-bar');
    elem.style.visibility = 'visible';
    elem.style.width = percent + '%';
    elem.innerHTML = percent * 1 + '%';
  };
  uploadToS3 = async (signedRequest, file) => {
    const options = {
      headers: {
        'Content-Type': `"${file.type}"`
      },
      onUploadProgress: function(progressEvent) {
        // console.log('');
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        // console.log('UPLOAD PROGRESS:::', percentCompleted);
        this.setState({ percentCompleted });
      }.bind(this)
    };
    await axios.put(signedRequest, file, options);
  };
  adaptFileEventToValue = delegate => async e => {
    const {
      target: { files }
    } = e;
    // console.log('FILES;::', files);
    const { signS3 } = this.props;
    // const image_data = new Map();
    const getFileNameAndType = file => pick(['name', 'type'], file);
    const response = async (signS3, { name, type }) => await signS3(name, type);

    if (files.length !== 0 && typeof files !== 'undefined') {
      // let updatedImageData;
      // TODO THIS FOREACH BIZ SUCKS WE ARE HAVING TO SET STATE WAY TO MUCH IN THIS LOOP
      // BUT PLACING SETSTATE AFTER FOREACH FIRES BEFORE UPDATED IMAGEMAP IS CREATED
      forEach(async file => {
        // NOTE JUST need to update the state and then map the urls down on the preview component
        // const { name } = getFileNameAndType(file);
        const res = await response(signS3, getFileNameAndType(file));
        const { signedRequest, url } = res.data.signS3;
        await this.uploadToS3(signedRequest, file);
        this.setState({ image: url });
        delegate('logo_url', url);
      }, values(files));
    }
  };
  showModal = () => {
    // console.log('SHOW MODAL');
    this.setState({ modalState: !this.state.modalState });
  };
  closeModal = () => {
    this.setState({ modalState: !this.state.modalState });
  };
  render() {
    // console.log('THE PROPS:::', this.props);
    // console.log('THE STATE::', this.state);
    const {
      location: { state }
    } = this.props;
    const { vendor } = state;
    // if (!vendor) {
    //   return (
    //     <AdminView {...this.props}>
    //       <Loader />
    //     </AdminView>
    //   );
    // }
    return (
      <AdminView {...this.props}>
        <VendorEdit
          vendor={vendor}
          image={this.state.image}
          adaptFileEventToValue={this.adaptFileEventToValue}
          showModal={this.showModal}
          {...this.props}
        />
        {this.state.modalState ? <SuccessModal showModal={this.state.modalState} onClick={this.closeModal} /> : null}
      </AdminView>
    );
  }
}

export default compose(
  withApollo,
  graphql(UPDATE_BRAND, {
    props: ({ mutate }) => ({
      updateBrand: async vendor => {
        // console.log('VENDOR::', vendor);
        let response = await mutate({
          variables: { input: vendor }
        });
        return response;
      }
    })
  }),
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
)(Vendor);
