import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

import LocationInfo from '../components/LocationInfo';
import DEALER_BY_HANDLE_QUERY from '../../admin/graphql/DealerQuery.graphql';
import '../styles/locations-view.scss';

class LocationWestHollywood extends React.Component {
  render() {
    return <LocationInfo {...this.props} />;
  }
}

LocationWestHollywood.propTypes = {
  locationObj: PropTypes.object
};
// LocationWestHollywood.defaultProps = {
//   locationObj: {
//     id: '7',
//     name: 'California Home Fitness',
//     address_1: '9025 Santa Monica Blvd',
//     address_2: '',
//     city: 'West Hollywood',
//     state: 'CA',
//     zip: '90069',
//     country: 'United States',
//     email: 'westhollywood@cahomefitness.com',
//     phone: '424-284-3824',
//     lat: 34.0827223,
//     lng: -118.3900462,
//     image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_west-hollywood.png',
//     description: `Our West Hollywood store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness West Hollywood offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.`,
//     url_name: 'west-hollywood',
//     hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 10am-5pm Sun'
//   }
// };

export default compose(
  graphql(DEALER_BY_HANDLE_QUERY, {
    options: props => {
      const handle = props.match.params.location_handle;
      return { variables: { handle } };
    },
    props: ({ data }) => {
      // console.log('DEALER HANDLE QUERY:', data);
      const { loading, error, dealerByHandle } = data;
      if (error) {
        return { locationError: error };
      }
      if (loading) {
        return { loadingLocation: loading };
      }

      return { loadingLocation: loading, locationObj: dealerByHandle };
    }
  })
)(LocationWestHollywood);
