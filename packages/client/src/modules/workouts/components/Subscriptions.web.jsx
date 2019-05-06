import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SubscriptionCard from './SubscriptionCard';
// import AppStoreLinks from './AppStoreLinks';

class Subscriptions extends Component {
  static defaultProps = {
    content: {
      top: 'All California Home Fitness customers, old and new, can enjoy a year of Unlimited access on us.',
      bottom:
        'If you don’t have any Inspire Fitness equipment, that’s too bad, but the app still has tons of great workouts that you can follow on whatever equipment you do have. You’ll also have access to our progress tracker, training programs and more.'
    },
    fields: [
      {
        fieldName: 'subscription_option_1',
        fieldValue: {
          price: '39.00',
          subHeader: 'Monthly',
          text: 'Unlimited app subscription',
          subText: 'Billed monthly'
        }
      },
      {
        fieldName: 'subscription_option_2',
        fieldValue: {
          price: '29.99',
          subHeader: '6 Months',
          text: 'Unlimited app subscription',
          subText: 'Billed twice yearly'
        }
      },
      {
        fieldName: 'subscription_option_3',
        fieldValue: {
          price: '19.99',
          subHeader: '12 Months',
          text: 'Unlimited app subscription',
          subText: 'Billed yearly'
        }
      }
    ]
  };

  componentDidMount() {
    this.props.setParentRef('subscriptions', this.subscription);
  }

  subscriptionNum = name => name.split('_')[2];

  render() {
    const {
      // fields,
      content: { top, bottom }
    } = this.props;
    // const subscriptionOptions = fields.filter(o => o.fieldName.includes('subscription_option'));
    return (
      <section
        className="subscriptions"
        name="subscriptions"
        ref={c => {
          this.subscription = c;
        }}
      >
        <div className="subscriptions-intro">
          <h3 className="subscriptions-intro__header">
            {/* GET 1 YEAR <span className="bolded-orange-text">FREE TODAY</span> */}
            COMING <span className="bolded-orange-text">SOON</span>
          </h3>
          <div className="subscriptions-intro__top">{top}</div>
          {/* <AppStoreLinks section="subscriptions" /> */}
          <div className="subscriptions-intro__bottom">{bottom}</div>
        </div>
        {/* <div className="subscription-card-wrapper">
          {subscriptionOptions.map(({ fieldName, fieldValue }) => {
            const num = this.subscriptionNum(fieldName);
            return <SubscriptionCard subscriptionInfo={{ ...fieldValue, id: num }} />;
          })}
        </div> */}
      </section>
    );
  }
}

Subscriptions.propTypes = {
  readField: PropTypes.func,
  fields: PropTypes.array,
  formatText: PropTypes.func,
  setParentRef: PropTypes.func,
  content: PropTypes.object
};

export default Subscriptions;
