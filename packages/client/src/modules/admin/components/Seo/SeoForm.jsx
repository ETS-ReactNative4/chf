import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

const SeoForm = props => {
  const {
    validateAll,
    seo,
    uploadSeo,
    uploadSeoContent,
    selectedProduct,
    selectedBrand,
    selectedCollection,
    selectedCategory,
    showSuccess
  } = props;
  // console.log('SELECTED SEO', seo);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: seo ? seo.title : '',
        description: seo ? seo.description : '',
        keywords: seo ? seo.keywords : ''
      }}
      validateOnBlur={true}
      validate={validateAll}
      validateOnChange={false}
      onSubmit={async (values, actions) => {
        try {
          switch (selectedCategory) {
            case 'products':
              await uploadSeoContent({ handle: selectedProduct, ...values });

              break;
            case 'brands':
              await uploadSeo({ path: 'vendor', handle: selectedBrand, seo: { ...values } });
              break;
            case 'collections':
              await uploadSeo({ path: 'collection', handle: selectedCollection, seo: { ...values } });
              break;
            default:
              return;
          }
        } catch (e) {
          console.log('ERROR:', e);
        }

        // MyImaginaryRestApiCall(user.id, values).then(
        // updatedUser => {
        actions.setSubmitting(false);
        showSuccess();
        // updateUser(updatedUser);
        // onClose();
        // },
        // error => {
        // actions.setSubmitting(false);
        // actions.setErrors(transformMyRestApiErrorsToAnObject(error));
        // actions.setStatus({ msg: 'Set some arbitrary status or data' });
        // }
        // );
      }}
      render={({ errors, status, touched, isSubmitting }) => {
        return (
          <Form className="admin__form__seo">
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="text" name="title" placeholder="Title" />
              {errors.title && touched.title && <div className="admin__form__seo--error">{errors.title}</div>}
            </div>
            <div className="admin__form__seo--field">
              <Field
                component="textarea"
                className="admin__form__seo--input"
                name="description"
                placeholder="Description"
              />
              {errors.description &&
                errors.description &&
                touched.description && <div className="admin__form__seo--error">{errors.description}</div>}
            </div>
            <div className="admin__form__seo--field">
              <Field className="admin__form__seo--input" type="text" name="keywords" placeholder="Keywords" />
              {errors.keywords &&
                errors.keywords &&
                touched.keywords && <div className="admin__form__seo--error">{errors.keywords}</div>}
            </div>
            {status && status.msg && <div className="admin__form__seo--status">{status.msg}</div>}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    />
  );
};
SeoForm.propTypes = {
  seo: PropTypes.object,
  uploadSeo: PropTypes.func,
  uploadSeoContent: PropTypes.func,
  selectedProduct: PropTypes.string,
  selectedBrand: PropTypes.string,
  selectedCollection: PropTypes.string,
  selectedCategory: PropTypes.string,
  showSuccess: PropTypes.func,
  validateAll: PropTypes.func
};
export default SeoForm;
