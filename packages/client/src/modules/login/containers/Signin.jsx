/* eslint-disable no-undef */
import React from 'react';
import { graphql, compose } from 'react-apollo';
import SigninView from '../components/SigninView';
import LOGIN from '../../common/graphql/Auth/sfy_customerAccessTokenCreate.graphql';
import AUTHENTICATE_ADMIN from '../../common/graphql/AuthenticateAdmin.graphql';

class Signin extends React.Component {
  render() {
    return <SigninView {...this.props} />;
  }
}

const SigninWithApollo = compose(
  graphql(LOGIN, {
    props: ({ mutate }) => ({
      login: async loginCreds => {
        try {
          const {
            data: {
              sfy_customerAccessTokenCreate: { customerAccessToken: token, userErrors }
            }
          } = await mutate({
            variables: { input: loginCreds }
          });
          if (Array.isArray(userErrors) && userErrors.length > 0) {
            return { errors: userErrors.map(err => err.message) };
          } else {
            if (typeof window !== 'undefined') {
              localStorage.setItem('sfy-access-token', JSON.stringify(token));
              return { email: loginCreds.email };
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    })
  }),
  graphql(AUTHENTICATE_ADMIN, {
    props: ({ ownProps: { history, navigation }, mutate }) => ({
      authenticateAdmin: async email => {
        try {
          const {
            data: { authenticateAdmin: res }
          } = await mutate({
            variables: { email }
          });

          if (Array.isArray(res.errors) && errors.length > 0) {
            console.log(res.errors);
          }

          const location = {
            pathname: '/',
            state: { referrer: 'login-success' }
          };
          if (history) history.push(location);
          else if (navigation) navigation.goBack();
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  })
)(Signin);

export default SigninWithApollo;
