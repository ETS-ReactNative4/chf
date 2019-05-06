import { graphql } from 'react-apollo';
import LOGOUT_ADMIN from '../graphql/LogoutAdmin.graphql';
import CURRENT_USER_QUERY from '../graphql/CurrentUserQuery.graphql';
import { deleteCoreTokens } from '../utils/commonHelpers';

export default () =>
  graphql(LOGOUT_ADMIN, {
    props: ({ mutate }) => ({
      logoutAdmin: async () => {
        try {
          deleteCoreTokens();
          const { data } = await mutate({
            refetchQueries: [{ query: CURRENT_USER_QUERY }]
          });
          console.log('data', data);
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  });
