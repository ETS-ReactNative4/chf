import { graphql } from 'react-apollo';
import DELETE_TOKEN from '../graphql/Auth/sfy_customerAccessTokenDelete.graphql';
import { getLocalSfyToken, deleteLocalSfyToken } from '../utils/commonHelpers';

export default () =>
  graphql(DELETE_TOKEN, {
    props: ({ mutate }) => ({
      deleteRemoteToken: async () => {
        try {
          console.log('called');
          const {
            data: {
              sfy_customerAccessTokenDelete: { userErrors }
            }
          } = await mutate({
            variables: { customerAccessToken: getLocalSfyToken('sfy-access-token') }
          });
          if (Array.isArray(userErrors) && userErrors.length > 0) {
            return { errors: userErrors.map(err => err.message) };
          } else {
            if (typeof window !== 'undefined') {
              return deleteLocalSfyToken('sfy-access-token');
            }
          }
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  });
