import React from 'react';
import { graphql, compose } from 'react-apollo';
import SignupView from '../components/SignupView';
import SFY_ACCT_CREATE from '../../common/graphql/Auth/sfy_customerCreate.graphql';
//import LOCAL_ACCT_CREATE from '../../common/graphql/Auth/addUser.graphql';

class Signup extends React.Component {
  render() {
    return <SignupView {...this.props} />;
  }
}

const SignupWithApollo = compose(
  graphql(SFY_ACCT_CREATE, {
    props: ({ ownProps: { history, navigation }, mutate }) => ({
      registerRemote: async registrationInfo => {
        try {
          const {
            data: {
              sfy_customerCreate: { userErrors, customer }
            }
          } = await mutate({
            variables: { input: registrationInfo }
          });
          if (Array.isArray(userErrors) && userErrors.length > 0) {
            return { errors: userErrors.map(err => err.message) };
          }

          if (customer) {
            const location = {
              pathname: '/',
              state: { referrer: 'signup-success' }
            };

            if (history) history.push(location);
            else if (navigation) navigation.goBack();
          }
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  })
  // graphql(LOCAL_ACCT_CREATE, {
  //   props: ({ ownProps: { history, navigation }, mutate }) => ({
  //     registerLocal: async registrationInfo => {
  //       try {
  //         const {
  //           data: {
  //             addUser: { errors }
  //           }
  //         } = await mutate({
  //           variables: { input: registrationInfo }
  //         });
  //
  //         if (Array.isArray(errors) && errors.length > 0) return errors;
  //
  //         const location = {
  //           pathname: '/',
  //           state: { referrer: 'signup-success' }
  //         };
  //
  //         if (history) history.push(location);
  //         else if (navigation) navigation.goBack();
  //       } catch (e) {
  //         console.log(e.graphQLErrors);
  //       }
  //     }
  //   })
  // })
)(Signup);

export default SignupWithApollo;
