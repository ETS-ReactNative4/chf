import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/modules/link-list.scss';

class LinkList extends React.Component {
  render() {
    const { links } = this.props;
    return (
      <ul className="link-list">
        {'links' in this.props
          ? links.map((link, i) => (
              <li key={i} className="link-list__item">
                {link.type === 'external' || link.type === 'internal' ? (
                  link.type === 'external' ? (
                    <a href={link.location} className="link-list__link">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.location} className="link-list__link">
                      {link.name}
                    </Link>
                  )
                ) : null}
              </li>
            ))
          : null}
      </ul>
    );
  }
}

LinkList.propTypes = {
  links: PropTypes.array
};

LinkList.defaultProps = {
  links: [
    { name: 'Menu one', location: '/menu-one' },
    { name: 'Menu two', location: '/menu-two' },
    { name: 'Menu three', location: '/menu-three' }
  ]
};

export default LinkList;
