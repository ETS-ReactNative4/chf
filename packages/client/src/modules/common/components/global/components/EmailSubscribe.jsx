import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleRight } from 'react-icons/fa';
import '../styles/modules/email-subscribe.scss';

class EmailSubscribe extends React.Component {
  render() {
    const { placeholder /*, submitEmailSubscription*/ } = this.props;
    return (
      <form
        className="email-subscribe"
        action="https://google.us7.list-manage.com/subscribe/post?u=3a91faafbbee0d20cccfba722&amp;id=b8d96bfa38"
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        {/*TODO: Update account-specific data below with CHF MailChimp information and change button type to submit*/}
        <input className="email-subscribe__input" defaultValue="" type="email" name="EMAIL" placeholder={placeholder} />
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_3a91faafbbee0d20cccfba722_b8d96bfa38" tabIndex="-1" value="" />
        </div>
        <button className="email-subscribe__submit" type="button" /*onClick={() => submitEmailSubscription()}*/>
          <FaAngleRight />
        </button>
      </form>
    );
  }
}

EmailSubscribe.propTypes = {
  submitEmailSubscription: PropTypes.func,
  placeholder: PropTypes.string
};

export default EmailSubscribe;
