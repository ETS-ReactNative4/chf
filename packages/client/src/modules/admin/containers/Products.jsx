import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { MdSearch } from 'react-icons/md';

import AdminView from '../components/AdminView';
import Loader from '../../common/components/global/components/Loader';
import '../styles/productspecs.scss';
import ProductSpecs from '../components/ProductSpecs';
// import { ADMIN_PRODUCTS_QUERY /*MODIFY_PRODUCT_DATA*/ } from '../../common/schema';
import PRODUCTS_QUERY from '../graphql/Products.graphql';

const columns = [
  {
    title: '',
    dataIndex: 'node',
    key: 'featuredImage',
    // eslint-disable-next-line
    render: (image, record) => {
      return (
        <div>
          <img src={image ? image.originalSrc : ''} alt="" />
          {/* <Link to={{ pathname: `/admin/locations/${record.node.handle}` }}>{text}</Link> */}
        </div>
      );
    }
  },
  {
    title: (
      <a href="#">
        <h3>Product</h3>
      </a>
    ),
    dataIndex: 'node',
    key: 'title',
    // eslint-disable-next-line
    render: (text, record) => {
      return (
        <div>
          {text}
          {/* <Link to={{ pathname: `/admin/locations/${record.node.handle}` }}>{text}</Link> */}
        </div>
      );
    }
  },
  {
    title: (
      <a href="#">
        <h3>Vendor</h3>
      </a>
    ),
    dataIndex: 'node',
    key: 'vendor',
    // eslint-disable-next-line
    render: (text, record) => {
      return (
        <div>
          {text}
          {/* <Link to={{ pathname: `/admin/locations/${record.node.handle}` }}>{text}</Link> */}
        </div>
      );
    }
  },
  {
    dataIndex: 'node',
    key: 'handle',
    // eslint-disable-next-line
    render: (text, record) => {
      return (
        <div>
          <Link to={{ pathname: `/admin/products/${record.node.handle}` }}>Edit</Link>
        </div>
      );
    }
  }
];
const LoadMore = ({ loadMore }) => {
  return (
    <div className="admin__loadmore">
      <button onClick={() => loadMore()}>Load More</button>
    </div>
  );
};
LoadMore.propTypes = {
  loadMore: PropTypes.func
};
const SearchBar = ({ handleSearch, value }) => {
  return (
    <div className="admin__searchbox">
      <span>
        <MdSearch size={20} />
      </span>
      <input type="text" placeholder="Search" onChange={handleSearch} value={value} />
    </div>
  );
};
SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  value: PropTypes.string
};
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
      searchValue: '',
      filteredProducts: null
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchValue;
    const currSearch = this.state.searchValue;
    if (currSearch.length > 0 && currSearch !== prevSearch) {
      this.setState({ searchActive: true });
      this.searchQuery();
      return;
    }
    if (currSearch !== prevSearch && currSearch.length == 0) {
      return this.setState({ searchActive: false, filteredProducts: null });
    }
  }
  searchQuery = async () => {
    const { searchValue } = this.state;
    const query = gql`
      query admin_products($first: Int, $after: String, $query: String) {
        admin_products(first: $first, after: $after, query: $query) {
          edges {
            cursor
            node {
              vendor
              title
              handle
              featuredImage {
                originalSrc
              }
            }
          }
        }
      }
    `;
    const { data } = await this.props.client.query({
      query,
      fetchPolicy: 'cache-first',
      variables: { first: 20, query: `title:${searchValue}*` }
    });
    const { admin_products } = data;
    this.setState({ filteredProducts: admin_products });
  };
  handleSearch = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    const { productsLoading, admin_products } = this.props;
    const { searchActive, searchValue, filteredProducts } = this.state;
    if (productsLoading) {
      return (
        <AdminView {...this.props}>
          <Loader />
        </AdminView>
      );
    }
    return (
      <AdminView {...this.props}>
        <h2>Product Specifications</h2>
        <div className="admin__tableview">
          <div className="admin__productspecs">
            <SearchBar handleSearch={this.handleSearch} value={searchValue} />
            {searchActive && filteredProducts ? (
              <ProductSpecs dataSource={filteredProducts.edges} columns={columns} />
            ) : (
              <ProductSpecs dataSource={admin_products.edges} columns={columns} />
            )}
          </div>
          <LoadMore loadMore={this.props.loadMore} />
        </div>
      </AdminView>
    );
  }
}
const ProductsApollo = compose(
  withApollo,
  graphql(PRODUCTS_QUERY, {
    options: () => ({
      variables: { first: 50 }
    }),
    props: ({ data }) => {
      console.log('DATA;::', data);
      const { loading, error, admin_products, variables, fetchMore } = data;
      if (error) {
        throw new Error(error);
      }
      if (loading) {
        return { productsLoading: loading };
      }
      if (!loading && admin_products) {
        let currEndCursor;
        let hasNextPage;
        let hasPreviousPage;
        const { edges } = admin_products;
        if (edges.length > 0) {
          currEndCursor = edges[edges.length - 1].cursor;
        }
        hasNextPage = admin_products.pageInfo.hasNextPage;
        hasPreviousPage = admin_products.pageInfo.hasPreviousPage;
        console.log('Curr end cursor::', currEndCursor);
        const loadMore = (first = 50, after = currEndCursor) => {
          const updatedVars = { ...variables, after, first };
          console.log('UPDATED VARS::', updatedVars);
          return fetchMore({
            variables: updatedVars,
            updateQuery: (prevResult, { fetchMoreResult }) => {
              console.log('PREVRESULT:', prevResult);
              if (fetchMoreResult.admin_products.edges.length === 0) return prevResult;
              const updatedResult = JSON.parse(JSON.stringify(prevResult));
              console.log('PREV RESULT STRING', updatedResult);
              // const updatedResult = Object.assign({}, prevResult);
              updatedResult.admin_products.edges = [
                ...prevResult.admin_products.edges,
                ...fetchMoreResult.admin_products.edges
              ];
              //
              updatedResult.pageInfo = fetchMoreResult.admin_products.pageInfo;
              // updatedResult.admin_products.pageInfo = fetchMoreResult.admin_products.pageInfo;
              // console.log('udpatedres', updatedResult);
              // const update = Object.assign({}, prevResult, {
              //   admin_products: {
              //     edges: [...prevResult.admin_products.edges, ...fetchMoreResult.admin_products.edges],
              //     pageInfo: fetchMoreResult.admin_products.pageInfo
              //     // __typename: prevResult.admin_products.__typename
              //   },
              //   __typename: prevResult.admin_products.__typename
              // });
              console.log('UPDATE::', updatedResult);
              return updatedResult;
            }
          });
        };
        return {
          productsLoading: loading,
          admin_products,
          loadMore,
          products: {
            currEndCursor,
            hasNextPage,
            hasPreviousPage
          }
        };
      }
    }
  })
)(Products);

export default ProductsApollo;
