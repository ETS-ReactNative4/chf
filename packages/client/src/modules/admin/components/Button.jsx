import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classNames, text, type, styles, ...handlers }) => {
  console.log('ClassNames::', classNames);
  // classNames.length > 0 ? ...classNames : null
  return (
    <button className={`admin__btn`} type={type} style={styles} {...handlers}>
      {text}
    </button>
  );
};

Button.propTypes = {
  classNames: PropTypes.array,
  text: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  type: PropTypes.string,
  styles: PropTypes.array
};

export default Button;
