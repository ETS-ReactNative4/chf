import React from 'react';

import FinancingView from '../components/FinancingView';

class Financing extends React.Component {
  render() {
    return <FinancingView {...this.props} />;
  }
}

export default Financing;
