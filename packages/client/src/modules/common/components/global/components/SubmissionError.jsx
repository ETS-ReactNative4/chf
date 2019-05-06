import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modules/submission-error.scss';

const SubmissionError = ({ errors }) => {
  if ((Array.isArray(errors) && errors.length === 1) || typeof errors === 'string') {
    return (
      <div className="submission-error">
        <span className="submission-error__text--bold">Error:</span> {errors}
      </div>
    );
  } else if (Array.isArray(errors) && errors.length > 1) {
    return (
      <div className="submission-error">
        <h5 className="submission-error__header">Errors: </h5>
        <ul>
          {errors.map((error, i) => (
            <li key={`${error}-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div className="submission-error"> There was an error with your submission. Please try again.</div>;
  }
};

SubmissionError.propTypes = {
  errors: PropTypes.array
};

export default SubmissionError;
