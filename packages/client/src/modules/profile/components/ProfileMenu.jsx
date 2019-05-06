import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
import classnames from 'classnames';
import { MdImage, MdList, /*MdModeEdit,*/ MdLock, MdPeople, MdPerson, MdPinDrop } from 'react-icons/md';
// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';
import '../styles/profile-menu.scss';

export const isAdminVerified = props => {
  const { currentUser } = props;
  if (currentUser) {
    const hasKeys = ['id', 'role', 'email'].every(el => currentUser.hasOwnProperty(el) && currentUser[el]);
    if (hasKeys && currentUser.role === 'admin') return true;
  }
  return false;
};

class ProfileMenu extends React.Component {
  render() {
    // const {  } = this.state;
    const { currentView, changeView } = this.props;
    // TODO: Hide manage links when not admin
    return (
      <nav className="profile-menu">
        <ul className="profile-menu__list">
          <li className="profile-menu__list-item">
            <button
              className={classnames('profile-menu__button', {
                'profile-menu__button--active': currentView === 'profileOverview'
              })}
              onClick={() => changeView('profileOverview')}
            >
              <MdPerson className="profile-menu__icon" />
              <span className="profile-menu__text">Profile</span>
            </button>
          </li>
          {/* <li className="profile-menu__list-item">
            <button
              className={classnames('profile-menu__button', {
                'profile-menu__button--active': currentView === 'profilePassword'
              })}
              onClick={() => changeView('profilePassword')}
              // disabled
            >
              <MdLock className="profile-menu__icon" />
              <span className="profile-menu__text">Change Password</span>
            </button>
          </li> */}
          {/* <li className="profile-menu__list-item">
            <button
              className={classnames('profile-menu__button', {
                'profile-menu__button--active': currentView === 'profileAddress'
              })}
              onClick={() => changeView('profileAddress')}
              // disabled
            >
              <MdPinDrop className="profile-menu__icon" />
              <span className="profile-menu__text">Change Address</span>
            </button>
          </li> */}
          {/* {isAdminVerified(this.props) ? (
            <li className="profile-menu__list-item">
              <button
                className={classnames('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageAdmins'
                })}
                onClick={() => changeView('manageAdmins')}
                // disabled
              >
                <MdPeople className="profile-menu__icon" />
                <span className="profile-menu__text">Manage Administrators</span>
              </button>
            </li>
          ) : null} */}
          {isAdminVerified(this.props) ? (
            <li className="profile-menu__list-item">
              <button
                className={classnames('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageCarousel'
                })}
                onClick={() => changeView('manageCarousel')}
                // disabled
              >
                <MdImage className="profile-menu__icon" />
                <span className="profile-menu__text">Manage Image Carousel</span>
              </button>
            </li>
          ) : null}
          {isAdminVerified(this.props) ? (
            <li className="profile-menu__list-item">
              <button
                className={classnames('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageSpecs'
                })}
                onClick={() => changeView('manageSpecs')}
              >
                <MdList className="profile-menu__icon" />
                <span className="profile-menu__text">Manage Product Specifications</span>
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }
}

ProfileMenu.propTypes = {
  currentView: PropTypes.string,
  changeView: PropTypes.func
};
ProfileMenu.defaultProps = {};

export default ProfileMenu;
