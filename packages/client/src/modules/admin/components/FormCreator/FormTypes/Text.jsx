import React from 'react';
import { Field } from 'formik';

const Text = props => {
  return <Field type={'text'} {...props} />;
};

export default Text;
