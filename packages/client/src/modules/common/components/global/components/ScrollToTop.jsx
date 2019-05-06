/* eslint-disable no-undef */
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration.
const ScrollToTop = withRouter(
  class ScrollToTopWithoutRouter extends React.Component<RouteComponentProps<any>, void> {
    componentDidMount() {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    }

    render(): JSX.Element {
      return null;
    }
  }
);

export default ScrollToTop;
