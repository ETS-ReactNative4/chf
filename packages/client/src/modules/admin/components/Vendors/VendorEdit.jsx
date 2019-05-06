import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

const defaultVendor = {
  name: '',
  handle: '',
  logo_url: '',
  is_featured: false,
  is_top_six: false,
  top_six_position: null,
  description: ``
};
const VendorEdit = ({ vendor, image, adaptFileEventToValue, updateBrand, showModal }) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={vendor ? vendor : defaultVendor}
      onSubmit={async ({ __typename, ...values }, actions) => {
        await updateBrand(
          Object.assign({}, values, {
            handle: values.name
              .split(' ')
              .join('-')
              .toLowerCase()
          })
        );
        showModal();
        actions.setSubmitting(false);

        // console.log('DEALER::', dealer);
      }}
      render={({ values, errors, touched, isSubmitting, setFieldValue }) => {
        // console.log('VALUES::', values);
        return (
          <Form className="admin__location__form">
            <div className="admin__form__seo--field">
              <label htmlFor="name">What is the brand name?</label>
              <Field className="admin__form__seo--input" type="text" name="name" placeholder="Brand Name" />
              {errors.name && touched.name && <div className="admin__form__seo--error">{errors.name}</div>}
            </div>
            <div className="admin__form__seo--field">
              <label htmlFor="is_featured">Is this brand featured?</label>
              <Field
                className="admin__form__seo--input"
                type="checkbox"
                name="is_featured"
                checked={values.is_featured}
              />
              {errors.is_featured &&
                touched.is_featured && <div className="admin__form__seo--error">{errors.is_featured}</div>}
            </div>
            <div className="admin__form__seo--field">
              <label htmlFor="is_top_six">Is this brand in the top 6 positions displayed?</label>
              <Field
                className="admin__form__seo--input"
                type="checkbox"
                name="is_top_six"
                checked={values.is_top_six}
              />
              {errors.is_top_six &&
                touched.is_top_six && <div className="admin__form__seo--error">{errors.is_top_six}</div>}
            </div>
            {values.is_top_six ? (
              <div className="admin__form__seo--field">
                <label htmlFor="top_six_position">What position is this brand in? Values can be 1-6.</label>
                <Field className="admin__form__seo--input" type="text" name="top_six_position" placeholder="Position" />
                {errors.top_six_position &&
                  touched.top_six_position && <div className="admin__form__seo--error">{errors.top_six_position}</div>}
              </div>
            ) : null}
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
                  name="logo_url"
                  type="file"
                  onChange={adaptFileEventToValue(setFieldValue)}
                />
                {/* <input style={{ opacity: 0 }} onChange={this.adaptFileEventToValue(uploadToS3)} type={'file'} multiple /> */}
              </button>
            </div>
            <div id="upload-bar" className="upload-progress">
              <div className="upload-bar">0%</div>
            </div>
            <div className="admin__images">
              {image ? (
                <img
                  className="admin__images--image"
                  // id={entry[0]}
                  draggable="false"
                  src={image ? image : ''}
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
VendorEdit.propTypes = {
  vendor: PropTypes.object,
  image: PropTypes.string,
  adaptFileEventToValue: PropTypes.func,
  updateBrand: PropTypes.func,
  showModal: PropTypes.func
};
export default VendorEdit;
