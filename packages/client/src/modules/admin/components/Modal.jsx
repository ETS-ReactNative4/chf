import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

const SuccessModal = ({ showModal, onClick }) => {
  if (!showModal) {
    return null;
  }
  return (
    <div className="admin__modal">
      <div className="admin__modal--success">
        <p>Save Completed !</p>
        <div className="modal__btn--close" onClick={onClick}>
          <FaWindowClose color="red" />
        </div>
      </div>
    </div>
  );
};

SuccessModal.propTypes = {
  showModal: PropTypes.bool,
  onClick: PropTypes.func
};
export default SuccessModal;
