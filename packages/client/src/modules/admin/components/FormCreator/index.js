import React from 'react';
import { map, flatten, without } from 'ramda';

const combine = (features, extractor) => {
  return without(
    'undefined',
    flatten(
      map(res => {
        return extractor(res);
      }, features)
    )
  );
};
export default class FormCreator {
  constructor(...formFeatures) {
    this.field = combine(formFeatures, arg => arg.field);
  }

  get fields() {
    return this.field.map((component, idx) => {
      const cloned = React.cloneElement(component, {
        key: idx + this.field.length
      });
      return cloned;
    });
  }
  createFields(props) {
    console.log('THIS FIELD::', this.field);
    console.log('PROPS IN CREATE FIELDS::', props);
    return this.field.map((CustomField, idx) =>
      React.cloneElement(CustomField, {
        key: idx + this.field.length
      })
    );
  }
}
