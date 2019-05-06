import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

const defaultDealer = {
  handle: '',
  name: ' ',
  street: ' ',
  suite: ' ',
  city: ' ',
  zip: ' ',
  state: ' ',
  country: ' ',
  email: ' ',
  phone: ' ',
  website: ' ',
  lat: ' ',
  lng: ' '
};
const Formic = props => {
  // console.log('FORM PROPS', props);
  let dealer;
  if (props.hasOwnProperty('dealerByHandle')) {
    const { __typename, ...rest } = props.dealerByHandle;
    dealer = rest;
  } else {
    dealer = null;
  }
  // console.log('DEALER::', dealer);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={dealer ? dealer : defaultDealer}
      onSubmit={async ({ id, ...values }, actions) => {
        // console.log('VALUES::', values);
        await props.updateDealer(
          Object.assign({}, values, {
            handle: values.name
              .split(' ')
              .join('-')
              .toLowerCase()
          })
        );
        props.showModal();
        actions.setSubmitting(false);

        // console.log('DEALER::', dealer);
      }}
      render={({ errors, touched, isSubmitting, setFieldValue }) => {
        // console.log('VALUES::', values);
        return (
          <Form className="admin__location__form">
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="text" name="name" placeholder="Location Name" />
              {errors.name && touched.name && <div className="admin__form__seo--error">{errors.name}</div>}
            </div>
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="text" name="street" placeholder="Street" />
              {errors.street && touched.street && <div className="admin__form__seo--error">{errors.street}</div>}
            </div>
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="text" name="city" placeholder="City" />
              {errors.city && touched.city && <div className="admin__form__seo--error">{errors.city}</div>}
            </div>
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="text" name="state" placeholder="State" />
              {errors.state && touched.state && <div className="admin__form__seo--error">{errors.state}</div>}
            </div>
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="text" name="zip" placeholder="Zip Code" />
              {errors.zip && touched.zip && <div className="admin__form__seo--error">{errors.zip}</div>}
            </div>
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="tel" name="phone" placeholder="Phone" />
              {errors.phone && touched.phone && <div className="admin__form__seo--error">{errors.phone}</div>}
            </div>
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="email" name="email" placeholder="Email" />
              {errors.email && touched.email && <div className="admin__form__seo--error">{errors.email}</div>}
            </div>
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="text" name="hours" placeholder="Hours" />
              {errors.hours && touched.hours && <div className="admin__form__seo--error">{errors.hours}</div>}
            </div>
            <div className="admin__form__seo--description">
              <Field
                className="admin__form__seo--input"
                component="textarea"
                name="description"
                placeholder="Description"
              />
              {errors.description &&
                touched.description && <div className="admin__form__seo--error">{errors.description}</div>}
            </div>
            <div className="admin__btn">
              {/* <label htmlFor="file">File upload</label> */}
              <button type="button" className="admin__btn--upload">
                Image Upload
                <input
                  style={{ opacity: 0 }}
                  id="file"
                  name="image_url"
                  type="file"
                  onChange={props.adaptFileEventToValue(setFieldValue)}
                />
                {/* <input style={{ opacity: 0 }} onChange={this.adaptFileEventToValue(uploadToS3)} type={'file'} multiple /> */}
              </button>
            </div>
            <div id="upload-bar" className="upload-progress">
              <div className="upload-bar">0%</div>
            </div>
            <div className="admin__images">
              {props.image ? (
                <img
                  className="admin__images--image"
                  // id={entry[0]}
                  draggable="false"
                  src={props.image ? props.image : ''}
                />
              ) : null}
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    />
  );
};
Formic.propTypes = {
  adaptFileEventToValue: PropTypes.func,
  dealerByHandle: PropTypes.object,
  image: PropTypes.string,
  updateDealer: PropTypes.func,
  showModal: PropTypes.func
};
export default Formic;
