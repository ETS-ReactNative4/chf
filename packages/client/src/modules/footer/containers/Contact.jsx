import React from 'react';

import ContactView from '../components/ContactView';

class Contact extends React.Component {
  render() {
    return <ContactView {...this.props} />;
  }
}

export default Contact;
