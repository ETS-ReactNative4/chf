import { graphql } from 'react-apollo';
import CUSTOMER_QUERY from '../graphql/SFY/sfyCustomerQuery.graphql';
import { getLocalSfyToken } from '../utils/commonHelpers';

const skipServer = () => !__CLIENT__;

export default (fetchPolicy = 'cache-first', skipFunc = skipServer) =>
  graphql(CUSTOMER_QUERY, {
    skip: skipFunc,
    options: () => ({
      variables: { customerAccessToken: typeof window !== 'undefined' ? getLocalSfyToken('sfy-access-token') : '' },
      fetchPolicy
    }),
    props: ({ data }) => {
      const { loading, refetch } = data;
      if (loading) return loading;
      else if (!loading && 'error' in data && data.error) return { loading, customerError: data.error };
      else if (!loading && 'sfy_customer' in data) {
        return { loading, refetch, customer: data.sfy_customer };
      }
    }
  });
