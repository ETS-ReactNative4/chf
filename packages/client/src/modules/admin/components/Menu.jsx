import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
import classnames from 'classnames';
import { MdImage, MdList, MdPerson } from 'react-icons/md';
// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';
import '../../profile/styles/profile-menu.scss';

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
    const { location } = this.props;
    const regex = /(?:admin\/)([a-zA-Z]*)/gm;
    const path = regex.exec(location.pathname)[1];

    // TODO: Hide manage links when not admin
    return (
      <nav className="profile-menu">
        <ul className="profile-menu__list">
          <li className="profile-menu__list-item">
            <button
              className={classnames('profile-menu__button', {
                'profile-menu__button--active': path === 'dashboard'
              })}
              onClick={() => this.props.history.push({ pathname: '/admin/dashboard' })}
            >
              <MdPerson className="profile-menu__icon" />
              <span className="profile-menu__text">Dashboard</span>
            </button>
          </li>
          {isAdminVerified(this.props) ? (
            <li className="profile-menu__list-item">
              <button
                className={classnames('profile-menu__button', {
                  'profile-menu__button--active': path === 'carousel'
                })}
                onClick={() => this.props.history.push({ pathname: '/admin/carousel' })}
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
                  'profile-menu__button--active': path === 'products'
                })}
                onClick={() => this.props.history.push({ pathname: '/admin/products' })}
              >
                <MdList className="profile-menu__icon" />
                <span className="profile-menu__text">Manage Product Specifications</span>
              </button>
            </li>
          ) : null}
          {isAdminVerified(this.props) ? (
            <li className="profile-menu__list-item">
              <button
                className={classnames('profile-menu__button', {
                  'profile-menu__button--active': path === 'seo'
                })}
                onClick={() => this.props.history.push({ pathname: '/admin/seo' })}
              >
                <MdList className="profile-menu__icon" />
                <span className="profile-menu__text">Manage Seo</span>
              </button>
            </li>
          ) : null}
          {isAdminVerified(this.props) ? (
            <li className="profile-menu__list-item">
              <button
                className={classnames('profile-menu__button', {
                  'profile-menu__button--active': path === 'locations'
                })}
                onClick={() => this.props.history.push({ pathname: '/admin/locations' })}
              >
                <MdList className="profile-menu__icon" />
                <span className="profile-menu__text">Manage Locations</span>
              </button>
            </li>
          ) : null}
          {isAdminVerified(this.props) ? (
            <li className="profile-menu__list-item">
              <button
                className={classnames('profile-menu__button', {
                  'profile-menu__button--active': path === 'brands'
                })}
                onClick={() => this.props.history.push({ pathname: '/admin/brands' })}
              >
                <MdList className="profile-menu__icon" />
                <span className="profile-menu__text">Manage Brands</span>
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }
}

ProfileMenu.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};
ProfileMenu.defaultProps = {};

export default ProfileMenu;
