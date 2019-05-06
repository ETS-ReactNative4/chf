import { graphql } from 'react-apollo';
import { authErrMsg } from '../utils/commonHelpers';
import DELETE_USER from '../graphql/DeleteUser.graphql';
import USERS_QUERY from '../graphql/UsersQuery.graphql';

export default () =>
  graphql(DELETE_USER, {
    props: ({ mutate, ownProps: { deleteRemoteToken, logoutAdmin, history } }) => ({
      deleteUser: async id => {
        try {
          const {
            data: {
              deleteUser: { user, errors }
            }
          } = await mutate({
            variables: { id },
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
