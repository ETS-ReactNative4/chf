import { graphql } from 'react-apollo';
import CURRENT_USER_QUERY from '../graphql/CurrentUserQuery.graphql';

export default () =>
  graphql(CURRENT_USER_QUERY, {
    options: () => ({ fetchPolicy: 'network-only' }),
    props: ({ data: { currentUser } }) => {
      return { currentUser };
    }
  });
