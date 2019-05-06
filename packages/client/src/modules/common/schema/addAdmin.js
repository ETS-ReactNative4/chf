import { graphql } from 'react-apollo';
import { authErrMsg } from '../utils/commonHelpers';
import ADD_ADMIN from '../graphql/AddAdmin.graphql';
import USERS_QUERY from '../graphql/UsersQuery.graphql';

export default () =>
  graphql(ADD_ADMIN, {
    props: ({ mutate, ownProps: { deleteRemoteToken, logoutAdmin, history } }) => ({
      addAdmin: async adminInfo => {
        try {
          const {
            data: {
              addAdmin: { user, errors }
            }
          } = await mutate({
            variables: { input: adminInfo },
            refetchQueries: [{ query: USERS_QUERY, variables: { filter: { role: 'admin' } } }]
          });
          if (errors) return { errors: errors.map(err => err.message) };
          return { user };
        } catch (e) {
          console.log(e.graphQLErrors);
          const { message } = e.graphQLErrors[0];
          if (message === authErrMsg) {
            await deleteRemoteToken();
            await logoutAdmin();
            history.push({
              pathname: '/signin',
              state: { referrer: 'Authentication Error' }
            });
          } else {
            return { errors: [message] };
          }
        }
      }
    })
  });
