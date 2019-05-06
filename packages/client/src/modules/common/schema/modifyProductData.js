import { graphql } from 'react-apollo';
import { authErrMsg } from '../utils/commonHelpers';

export default (queryString, operation) =>
  graphql(queryString, {
    props: ({ mutate, ownProps: { deleteRemoteToken, logoutAdmin, history } }) => ({
      [operation]: async updatedData => {
        try {
          const {
            data: {
              [operation]: { productData, errors }
            }
          } = await mutate({
            variables: { input: updatedData }
          });
          if (errors) return { errors: errors.map(err => err.message) };
          return { productData };
        } catch (e) {
          console.log(e.graphQLErrors);
          if (e.graphQLErrors[0].message === authErrMsg) {
            await deleteRemoteToken();
            await logoutAdmin();
            history.push({
              pathname: '/signin',
              state: { referrer: 'Authentication Error' }
            });
          }
        }
      }
    })
  });
