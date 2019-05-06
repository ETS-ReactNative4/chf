import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MdClose } from 'react-icons/md';
import '../styles/modules/modal.scss';

class Modal extends React.Component {
  state = {
    open: false
  };
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKeypress, false);
    }
  }
  componentDidUpdate() {
    const { showModal } = this.props;
    const { open } = this.state;
    if (showModal !== open) this.setState({ open: showModal });
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeypress, false);
  }
  handleKeypress = e => {
    const { toggleModal } = this.props;
    const { open } = this.state;
    if (e.keyCode === 27 && open) {
      toggleModal();
    }
  };
  render() {
    const { open } = this.state;
    const { children, toggleModal, transparent } = this.props;
    return (
      <section
        className={classnames('modal', { 'modal--open': open })}
        onClick={e => {
          if (e.target.classList.contains('modal')) {
            toggleModal();
          }
        }}
      >
        {/* TODO: Add close button */}
        <div className="modal__close" onClick={toggleModal}>
          <span hidden>Close</span>
          <MdClose className="modal__close-icon" size={'2em'} />
        </div>
        <div className={classnames('modal__content', { 'modal__content--transparent': transparent })}>{children}</div>
      </section>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func,
  transparent: PropTypes.bool
};
Modal.defaultProps = {};

export default Modal;
