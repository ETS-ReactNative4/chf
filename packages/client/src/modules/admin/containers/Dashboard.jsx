/*eslint-disable no-unused-vars*/
import React from 'react';
import { graphql, compose, withApollo } from 'react-apollo';

import AdminView from '../components/AdminView';
import PAGES_QUERY from '../graphql/PagesQuery.graphql';
import UPLOAD_CONTENT from '../graphql/UploadContent.graphql';
import SIMPLE_PAGE_QUERY from '../graphql/SimplePageQuery.graphql';
import DEALERS_QUERY from '../graphql/Dealers.graphql';
import DEALER_BY_HANDLE_QUERY from '../graphql/DealerQuery.graphql';
import UPDATE_DEALER from '../graphql/UpdateDealer.graphql';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: new Map()
    };
  }
  imageToState = images => {
    this.setState({
      images
    });
  };
  save = (page_id, content) => {
    // console.log('THIS.PROPS::', this.props);
    this.props.uploadContent(9, [{}]);
  };
  render() {
    console.log('The props::::', this.props);
    return <AdminView {...this.props} save={this.save} />;
  }
}
Admin.defaultProps = {
  images: []
};
const AdminWithApollo = compose(
  withApollo,
  graphql(PAGES_QUERY, {
    props: ({ data }) => {
      const { pages, loading: loadingPages, error } = data;
      console.log('pages', pages);
      if (loadingPages && !error) {
        return { loadingPages, pages: null };
      } else {
        return { pages, loadingPages };
      }
    }
  }),
  graphql(UPLOAD_CONTENT, {
    props: ({ mutate }) => ({
      uploadContent: async ({ page_id, content }) => {
        // console.log('PAGE ID::', page_id);
        // console.log('content::', content);
        const {
          data: { uploadPageContent }
        } = await mutate({ variables: { pageContent: { page_id: page_id, content } } });
        console.log('RETURN DATA::: ', uploadPageContent);
        return uploadPageContent;
      }
    })
  }),
  // graphql(DEALER_BY_HANDLE_QUERY, {
  //   options: props => {
  //     return { variables: { handle: ' ' } };
  //   },
  //   props: ({ data }) => {
  //     console.log('data', data);
  //     return { ...data };
  //   }
  // }),
  graphql(SIMPLE_PAGE_QUERY, {
    options: () => {
      return { variables: { pageTitle: 'Locations' } };
    },
    props: ({ data }) => {
      console.log('Locations Page data', data);
      const { page, loading: loadingPage, error } = data;
      if (loadingPage && !error) {
        return { loadingPage, page: null };
      } else {
        return { page, loadingPage };
      }
    }
  }),
  graphql(DEALERS_QUERY, {
    options: () => ({
      variables: { first: 12, after: 0 }
    }),
    props: ({ data }) => {
      console.log('DATA:::', data);
      const { loading, error, dealers } = data;
      if (error) {
        console.log('DEALERS ERROR:::', error);
        return { dealersError: error };
      }
      if (loading) {
        return { loadingDealers: loading };
      }
      if (!loading && !error) {
        return { loadingDealers: loading, dealers };
      }
    }
  }),
  graphql(UPDATE_DEALER, {
    props: ({ mutate }) => ({
      updateDealer: async dealer => {
        try {
          const {
            data: { updateDealer }
          } = await mutate({
            variables: { dealer }
          });
          console.log('UPDATED::', updateDealer);
          return updateDealer;
        } catch (e) {
          console.log('ERROR UPDATING:', e);
        }
      }
    })
    // options: {
    //   refetchQueries: ({ data: { updateDealer } }) => {
    //     console.log('RESULT', updateDealer);
    //     return [
    //       { query: DEALER_BY_HANDLE_QUERY, variables: { handle: updateDealer.handle } },
    //       // { query: DEALERS_QUERY, variables: { first: 12, after: 0 } }
    //     ];
    //   }
    // }
  })
)(Admin);

export default AdminWithApollo;
