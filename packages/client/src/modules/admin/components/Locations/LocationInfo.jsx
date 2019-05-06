import React from 'react';
import Formic from './Form';

const LocationInfo = props => {
  return (
    <div className="admin">
      <div className="admin__location">
        <Formic {...props} />
        {props.children}
      </div>
    </div>
  );
};

export default LocationInfo;
