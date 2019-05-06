import { graphql } from 'react-apollo';
import USERS_QUERY from '../graphql/UsersQuery.graphql';

export default (filter, orderBy) =>
  graphql(USERS_QUERY, {
    options: () => ({ variables: { orderBy, filter }, fetchPolicy: 'network-only' }),
    props: ({ data }) => {
      const { loading, users } = data;
      if (loading) return loading;
      else if (!loading && users) return { loading, users };
    }
  });
