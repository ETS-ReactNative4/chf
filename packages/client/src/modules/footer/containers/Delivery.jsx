import React from 'react';

import DeliveryView from '../components/DeliveryView';

class Delivery extends React.Component {
  render() {
    return <DeliveryView {...this.props} />;
  }
}

export default Delivery;
