import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
// import classnames from 'classnames';
import { MdClose, MdSave } from 'react-icons/md';
// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';
import '../styles/manage-specs.scss';
// import { ADMIN_PRODUCTS_QUERY, CURRENT_USER_QUERY, DELETE_TOKEN, LOGOUT_ADMIN } from '../../common/schema';

import PRODUCT_DATA_QUERY from '../../common/graphql/ProductDataQuery.graphql';
import ADD_PRODUCT_DATA from '../../common/graphql/AddProductData.graphql';
import UPDATE_PRODUCT_DATA from '../../common/graphql/UpdateProductData.graphql';
import { ADMIN_PRODUCTS_QUERY, MODIFY_PRODUCT_DATA } from '../../common/schema';
import { prodFeatures, prodSpecs } from '../../products/components/SingleProductView';

const selectProdString = 'Select a product';
const selectSpecString = 'Select a specification';
const fullSpecs = [...prodSpecs, ...prodFeatures];
const clearedSubmissionResult = { submissionError: null, submissionSuccess: null };

class ManageSpecs extends React.Component {
  state = {
    currentEdit: {},
    selectedProduct: selectProdString,
    selectedSpec: selectSpecString,
    specInput: '',
    submissionError: null,
    submissionSuccess: null
  };
  componentDidMount() {
    if (this.props.productData) {
      console.log('PRODUCT DATA::', this.props.productData);
      this.setState({ selectedProduct: this.props.productData.handle });
    }
    // console.log('The props::', this.props);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.productData !== prevProps.productData) {
      console.log('DID UPDATE THE PROPS::', this.props.productData.product_name);
      return this.setState({ selectedProduct: this.props.productData.handle });
    }
    if (prevState.selectedProduct !== this.state.selectedProduct) {
      // return this.props.refetchProductData({ handle: this.state.selectedProduct });
    }
  }

  handleProductSelect = e =>
    this.setState({
      selectedProduct: e.target.value,
      selectedSpec: selectSpecString,
      currentEdit: {},
      ...clearedSubmissionResult
    });

  handleSpecSelect = e =>
    this.setState({
      selectedSpec: e.target.value,
      ...clearedSubmissionResult
    });

  handleSpecInput = e => {
    const { currentEdit: prevEdit } = this.state;
    const {
      target: { name, value }
    } = e;
    this.setState({ currentEdit: { ...prevEdit, [name]: value } });
  };

  submitSpecs = async e => {
    e.preventDefault();

    const {
      productData,
      addProductData,
      updateProductData,
      sfy_shop: { products }
    } = this.props;
    const { currentEdit, selectedProduct } = this.state;

    const currentSpecs = productData === null ? {} : productData;
    const { __typename, id, ...specsToSubmit } = Object.assign(currentSpecs, currentEdit, {
      handle: selectedProduct
    });

    let dataUpdateResult;
    if (productData === null) {
      // If adding a new product data to rcomm db, add sku and product name from Shopify
      const [sfyData] = products.edges.filter(({ node }) => node.handle === selectedProduct);
      const {
        title,
        vendor,
        variants: { edges: variantEdges }
      } = sfyData.node;
      const { sku: _sku } = variantEdges[0].node;
      const updatedSubmission = { ...specsToSubmit, product_name: `${vendor} ${title}`, sku: _sku };
      dataUpdateResult = await addProductData(updatedSubmission);
    } else {
      dataUpdateResult = await updateProductData(specsToSubmit);
    }

    if (!dataUpdateResult) return;

    if ('errors' in dataUpdateResult) {
      return this.setState({ submissionError: dataUpdateResult.errors[0] });
    }

    if ('productData' in dataUpdateResult && dataUpdateResult.productData) {
      const { product_name, handle } = dataUpdateResult.productData;
      this.props.refetchProductData({ handle });
      return this.setState({
        submissionSuccess: `Successfully updated ${product_name}!`,
        currentEdit: {},
        selectedSpec: selectSpecString
      });
    }
  };

  renderInputValue = () => {
    const { selectedSpec, currentEdit } = this.state;
    const { productData } = this.props;
    if (selectedSpec in currentEdit) return currentEdit[selectedSpec];
    else if (productData && selectedSpec in productData) return productData[selectedSpec];
    else return '';
  };

  handleCancelEdit = () => {
    const { currentEdit, selectedSpec } = this.state;
    if (selectedSpec in currentEdit) {
      const { [selectedSpec]: removed, ...rest } = currentEdit;
      this.setState({ currentEdit: rest });
    }
    return;
  };

  isDisabled = () => {
    const { loadingProductData, productData } = this.props;
    if (!loadingProductData && !productData) return false;
    if (Object.keys(this.state.currentEdit).length > 0) return false;
    return true;
  };

  render() {
    const { renderInputValue, handleCancelEdit, isDisabled } = this;
    const { selectedProduct, selectedSpec } = this.state;
    const { loadingProductData, sfy_shop } = this.props;
    console.log('PRODUCT::', loadingProductData);
    let products = null;
    if (!loadingProductData && sfy_shop && 'products' in sfy_shop) {
      if (sfy_shop.products.edges.length > 0) {
        products = sfy_shop.products.edges;
      }
    }
    if (loadingProductData) {
      return <div>Loading</div>;
    }

    return (
      <section className="manage-specs">
        <div className="form__select-group">
          {/* <label htmlFor="product-select">Please select a product to change product specifications</label> */}
          <p>{this.props.productData.product_name}</p>
          {/* <select id="product-select" onChange={this.handleProductSelect} value={selectedProduct}>
            <option value={selectProdString} disabled>
              {selectProdString}
            </option>
            {products
              ? products.map(({ node }) => (
                  <option key={node.handle} value={node.handle}>
                    {`${node.vendor}: ${node.title}`}
                  </option>
                ))
              : null}
          </select> */}
        </div>
        {selectedProduct !== selectProdString ? (
          <form onSubmit={this.submitSpecs} className="form manage-specs-form">
            <div className="form__select-group form__select-group--third">
              <select
                id="spec-select"
                className="manage-specs-form__input"
                onChange={this.handleSpecSelect}
                value={selectedSpec}
              >
                <option value={selectSpecString} disabled>
                  Select a specification
                </option>
                {fullSpecs.map(([key, value], i) => (
                  <option key={i} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            {selectedSpec !== selectSpecString ? (
              <div className="form__item form__item--two-thirds">
                <input
                  onChange={this.handleSpecInput}
                  type="text"
                  name={this.state.selectedSpec}
                  value={renderInputValue()}
                />
              </div>
            ) : null}
            <div className="manage-specs-form__button-group">
              {this.state.currentEdit.hasOwnProperty(this.state.selectedSpec) ? (
                <button type="button" onClick={() => handleCancelEdit()}>
                  <MdClose className="manage-specs-form__icon" />
                  <span>Cancel Edit</span>
                </button>
              ) : null}
              <button disabled={isDisabled()} type="submit">
                <MdSave className="manage-specs-form__icon" />
                <span>Submit Updated Specs</span>
              </button>
            </div>
          </form>
        ) : null}
        {['submissionSuccess', 'submissionError'].map(property => {
          if (property in this.state) return <div key={property}>{this.state[property]}</div>;
          return null;
        })}
      </section>
    );
  }
}
const QUERY = gql`
  query productData($handle: String!) {
    productData(handle: $handle) {
      id
      sku
      product_name
      handle
      shock_absorption
      console
      user_ids
      workouts
      hrt_monitoring
      stride_technology
      power
      design
      drive_system
      handlebars
      seat
      pedals
      frame
      finish
      motion
      exercises
      weight_stack
      included_accessories
      optional_weight_stack
      running_area
      motor
      speed
      incline
      resistance_levels
      resistance_system
      stride
      max_user_weight
      ramp
      stored_vertical_height
      seat_floor_distance
      warranty
    }
  }
`;
const ManageSpecsWithApollo = compose(
  ADMIN_PRODUCTS_QUERY(),
  graphql(QUERY, {
    options: props => {
      console.log('PROPS. MATCH ', props.match.params);
      return { variables: { handle: props.match.params.product }, fetchPolicy: 'network-only' };
    },
    props: ({ data }) => {
      const { loading: loadingProductData, error, productData, refetch: refetchProductData } = data;
      if (error) throw new Error(`Error in Related Prodcuts Query: ${error}`);
      console.log('ANYTHING:::', productData);
      return { loadingProductData, productData, refetchProductData };
    }
  }),
  MODIFY_PRODUCT_DATA(ADD_PRODUCT_DATA, 'addProductData'),
  MODIFY_PRODUCT_DATA(UPDATE_PRODUCT_DATA, 'updateProductData')
)(ManageSpecs);

ManageSpecs.propTypes = {
  productsLoading: PropTypes.bool,
  products: PropTypes.array,
  productSpecs: PropTypes.array,
  refetchProductData: PropTypes.func,
  sfy_shop: PropTypes.object,
  productData: PropTypes.object,
  loadingProductData: PropTypes.bool
};

export default ManageSpecsWithApollo;
