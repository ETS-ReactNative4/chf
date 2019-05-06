import React from 'react';
import PropTypes from 'prop-types';
import LocationInfo from '../components/LocationInfo';
import '../styles/locations-view.scss';

class LocationPasadena extends React.Component {
  render() {
    return <LocationInfo {...this.props} />;
  }
}

LocationPasadena.propTypes = {
  locationObj: PropTypes.object
};
LocationPasadena.defaultProps = {
  locationObj: {
    id: '4',
    name: 'California Home Fitness',
    address_1: '3700 E Colorado Blvd',
    address_2: '',
    city: 'Pasadena',
    state: 'CA',
    zip: '91107',
    country: 'United States',
    email: 'pasadena@cahomefitness.com',
    phone: '626-405-1787',
    lat: 34.146132,
    lng: -118.0752393,
    image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_pasadena.png',
    description:
      'Our Pasadena store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Pasadena offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
    url_name: 'pasadena',
    hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 10am-5pm Sun'
  }
};

export default LocationPasadena;
