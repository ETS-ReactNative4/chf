import React from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import axios from 'axios';
import { forEach, values, pick } from 'ramda';

import DEALERS_QUERY from '../graphql/Dealers.graphql';
import DEALER_BY_HANDLE_QUERY from '../graphql/DealerQuery.graphql';
import UPDATE_DEALER from '../graphql/UpdateDealer.graphql';
import S3SIGNUPLOAD from '../graphql/S3Upload.graphql';
import '../styles/locations.scss';
import LocationInfo from '../components/Locations/LocationInfo';
import SuccessModal from '../components/Modal';

/*eslint-disable no-unused-vars*/

import AdminView from '../components/AdminView';
import ImagePreview from '../components/CarouselImages/ImagePreview';
import AWSImageAdapter from '../components/CarouselImages/ImageAdapter';

const uploadToS3 = () => {
  return;
};

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      percentCompleted: 0,
      modalState: false
    };
  }
  componentDidMount() {
    // console.log('MOUNT PROPS ON LOCATION:', this.props);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('C D U:::', this.props.dealerByHandle);
    if (this.props.dealerByHandle) {
      if (!prevState.image) {
        this.setState({ image: this.props.dealerByHandle.image_url });
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
      let updatedImageData;
      // TODO THIS FOREACH BIZ SUCKS WE ARE HAVING TO SET STATE WAY TO MUCH IN THIS LOOP
      // BUT PLACING SETSTATE AFTER FOREACH FIRES BEFORE UPDATED IMAGEMAP IS CREATED
      forEach(async file => {
        // NOTE JUST need to update the state and then map the urls down on the preview component
        const { name } = getFileNameAndType(file);
        const res = await response(signS3, getFileNameAndType(file));
        const { signedRequest, url } = res.data.signS3;
        await this.uploadToS3(signedRequest, file);
        this.setState({ image: url });
        delegate('image_url', url);
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
    // console.log('The props::::', this.props);
    // console.log('The state::', this.state);
    const { image } = this.state;
    return (
      <AdminView {...this.props}>
        <LocationInfo
          showModal={this.showModal}
          image={this.state.image}
          adaptFileEventToValue={this.adaptFileEventToValue}
          {...this.props}
        />
        {/* </LocationInfo> */}
        {this.state.modalState ? <SuccessModal showModal={this.state.modalState} onClick={this.closeModal} /> : null}
      </AdminView>
    );
  }
}
const LocationWithApollo = compose(
  withApollo,
  graphql(DEALER_BY_HANDLE_QUERY, {
    options: props => {
      const handle = props.match.params.location_handle;
      return { variables: { handle } };
    },
    props: ({ data }) => {
      return { ...data };
    }
  }),
  graphql(DEALERS_QUERY, {
    options: () => ({
      variables: { first: 12, after: 0 }
    }),
    props: ({ data }) => {
      const { loading, error, dealers } = data;
      if (error) {
        return { dealersError: error };
      }
      if (loading) {
        return { loadingDealers: loading };
      }
      if (!loading && !error) {
        return { loadingDealers: loading, dealers };
      }
    }
  }),
  graphql(UPDATE_DEALER, {
    props: ({ mutate }) => ({
      updateDealer: async dealer => {
        try {
          const {
            data: { updateDealer }
          } = await mutate({
            variables: { dealer }
          });
          return updateDealer;
        } catch (e) {
          console.log('ERROR UPDATING:', e);
        }
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
)(Location);

export default LocationWithApollo;
