import React from 'react';

import WorkoutsView from '../components/WorkoutsView';

class Workouts extends React.Component {
  render() {
    return <WorkoutsView {...this.props} />;
  }
}

Workouts.defaultProps = {
  formatText: (text, wrappingClass, elementType, isReversed) => {
    const reverseClass = (flip, ...classes) => (flip ? classes[0] : classes[1]);

    const textPortion = (text, isFirst) => {
      const words = text.split(' ');
      let prefix, suffix, first, second, rest;
      [first, ...rest] = words;
      prefix = first;
      if (words.length > 3) {
        [second, ...rest] = rest;
        prefix += ` ${second}`;
      }
      suffix = rest.join(' ');
      return isFirst ? `${prefix} ` : suffix;
    };

    return React.createElement(
      elementType,
      { className: `${wrappingClass}${reverseClass(isReversed, '', ' bolded-prefix')}` },
      React.createElement(
        'span',
        { className: reverseClass(isReversed, 'bolded-prefix', 'bolded-orange-text') },
        textPortion(text, true)
      ),
      textPortion(text, false)
    );
  }
};

export default Workouts;
