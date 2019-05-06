import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose, withApollo } from 'react-apollo';
import { compose as Rcompose } from 'ramda';
// import classnames from 'classnames';
// import { Formik, Field, Form } from 'formik';
// import { MdClose, MdSave } from 'react-icons/md';
import '../../../profile/styles/manage-specs.scss';

import Loader from '../../../common/components/global/components/Loader';
import SeoForm from './SeoForm';
import SuccessModal from '../Modal';
import '../../styles/forms.scss';
import VENDORS_QUERY from '../../../common/graphql/VendorsQuery.graphql';

import PRODUCT_SEO_QUERY from '../../graphql/ProductSeoQuery.graphql';
import UPLOAD_SEO_CONTENT from '../../graphql/UploadSeoContent.graphql';
import COLLECTIONS_QUERY from '../../graphql/CollectionsQuery.graphql';
import VENDOR_SEO_QUERY from '../../graphql/VendorSeoQuery.graphql';
import COLLECTION_SEO_QUERY from '../../graphql/CollectionSeoQuery.graphql';
import UPLOAD_SEO from '../../graphql/UploadSeo.graphql';

// import PRODUCT_DATA_QUERY from '../../../common/graphql/ProductDataQuery.graphql';
import ADD_PRODUCT_DATA from '../../../common/graphql/AddProductData.graphql';
import UPDATE_PRODUCT_DATA from '../../../common/graphql/UpdateProductData.graphql';
import { ADMIN_PRODUCTS_QUERY, MODIFY_PRODUCT_DATA } from '../../../common/schema';
// import { prodFeatures, prodSpecs } from '../../../products/components/SingleProductView';

const selectProdString = 'Select a product';
const selectSpecString = 'Select a specification';
const selectContent = 'Select a category';
const selectBrandString = 'Select a brand';
const selectCollectionString = 'Select a collection';
// const fullSpecs = [...prodSpecs, ...prodFeatures];
const clearedSubmissionResult = { submissionError: null, submissionSuccess: null };

class ManageSeo extends React.Component {
  state = {
    currentEdit: {},
    selectedProduct: selectProdString,
    selectedBrand: selectBrandString,
    selectedCollection: selectCollectionString,
    selectedSpec: selectSpecString,
    selectedCategory: selectContent,
    currentCategoryValues: null,
    categories: ['Products', 'Brands', 'Collections'],
    specInput: '',
    submissionError: null,
    submissionSuccess: null,
    modalState: false
  };

  componentDidUpdate(prevProps, prevState) {
    // const { selectedCategory } = this.state;
    if (prevState.selectedProduct !== this.state.selectedProduct) {
      this.loadProductSeo(this.state.selectedProduct);
    }
    if (this.state.selectedCategory === 'brands' && prevState.selectedBrand !== this.state.selectedBrand) {
      this.loadBrandSeo(this.state.selectedBrand);
      // console.log('brand', brand);
    }
    if (
      this.state.selectedCategory === 'collections' &&
      prevState.selectedCollection !== this.state.selectedCollection
    ) {
      this.loadCollectionSeo(this.state.selectedCollection);
    }
    // if (prevState.selectedCategory !== selectedCategory) {
    //   console.log('SELECTED CAT IS DIFF', selectedCategory);
    //   // const { productsLoading, sfy_shop, productData } = this.props;
    //   console.log('THE PROPS::', this.props);
    // }
  }
  loadProductSeo = async handle => {
    const {
      data: { productData }
    } = await this.props.refetchProductData({ handle });
    // console.log('PRODUCT', productData);
    this.setState({ currentCategoryValues: productData.seo });
  };
  loadCollectionSeo = async handle => {
    const {
      data: { collectionData }
    } = await this.props.refetchCollectionSeo({ handle });
    // console.log('COLLECTION loaded::', collectionData);
    this.setState({ currentCategoryValues: collectionData.seo });
  };
  loadBrandSeo = async handle => {
    const {
      data: { vendorData }
    } = await this.props.refetchBrandSeo({ handle });
    // console.log('Brand::', vendorData);
    this.setState({ currentCategoryValues: vendorData.seo });
  };
  handleProductSelect = e =>
    this.setState({
      selectedProduct: e.target.value,
      selectedSpec: selectSpecString,
      currentEdit: {},
      ...clearedSubmissionResult
    });
  handleCategorySelect = e => {
    this.setState({ selectedCategory: e.target.value.toLowerCase() });
  };
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
  validateTitle = (values, errors) => {
    if (!values.title) {
      errors.title = 'Required';
    } else if (values.title.length > 60) {
      errors.title = 'The title length should be under 60 characters';
    }
    return { values, errors };
  };
  validateDescription = ({ values, errors }) => {
    if (!values.description) {
      errors.description = 'Required';
    } else if (values.description.length > 320) {
      errors.description = 'Content descriptions should be 320 characters or less';
    }
    return { values, errors };
  };
  validateKeyWords = ({ values, errors }) => {
    if (!values.keywords) {
      errors.keywords = 'Required';
    }
    return { values, errors };
  };
  validateAll = values => {
    let errors = {};
    const composeValidation = Rcompose(this.validateKeyWords, this.validateDescription, this.validateTitle);
    const validation = composeValidation(values, errors);
    return validation.errors;
  };
  handleBrandSelect = e => {
    this.setState({ selectedBrand: e.target.value });
  };
  handleCollectionSelect = e => {
    this.setState({ selectedCollection: e.target.value });
  };
  renderSelect = category => {
    const { selectedProduct, selectedBrand, selectedCollection } = this.state;
    const { vendors, collections } = this.props;
    switch (category) {
      case 'products': {
        const products = this.props.sfy_shop.products.edges;
        return products ? (
          <div>
            <label htmlFor="product-select">Please select a product to change seo values</label>
            <select id="product-select" onChange={this.handleProductSelect} value={selectedProduct}>
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
            </select>
          </div>
        ) : null;
      }
      case 'brands': {
        return (
          <div>
            <label htmlFor="product-select">Please select a brand to change seo values</label>
            <select id="product-select" onChange={this.handleBrandSelect} value={selectedBrand}>
              <option value={selectBrandString} disabled>
                {selectBrandString}
              </option>
              {vendors
                ? vendors.map(({ handle, name }) => (
                    <option key={handle} value={handle}>
                      {`${name}`}
                    </option>
                  ))
                : null}
            </select>
          </div>
        );
      }
      case 'collections': {
        return (
          <div>
            <label htmlFor="product-select">Please select a collection to change seo values</label>
            <select id="product-select" onChange={this.handleCollectionSelect} value={selectedCollection}>
              <option value={selectCollectionString} disabled>
                {selectCollectionString}
              </option>
              {collections
                ? collections.map(({ node }) => (
                    <option key={node.handle} value={node.handle}>
                      {`${node.title}`}
                    </option>
                  ))
                : null}
            </select>
          </div>
        );
      }
      default:
        return null;
    }
  };
  currentSeoData = () => {
    return this.state.currentCategoryValues;
  };
  // success = () => {
  //   // console.log('FIRE SUCCESS ');
  //   return <SuccessModal showModal={this.state.modalState} onClick={this.closeModal} />;
  // };
  showModal = () => {
    // console.log('SHOW MODAL');
    this.setState({ modalState: !this.state.modalState });
  };
  closeModal = () => {
    this.setState({ modalState: !this.state.modalState });
  };
  render() {
    const {
      selectedProduct,
      selectedBrand,
      selectedCollection,
      selectedCategory,
      categories,
      currentCategoryValues
    } = this.state;
    const { productsLoading, sfy_shop } = this.props;
    // console.log('THE PROPS::', this.props);
    let products = null;
    // let seo = null;
    if (!productsLoading && sfy_shop && 'products' in sfy_shop) {
      if (sfy_shop.products.edges.length > 0) {
        products = sfy_shop.products.edges;
      }
    }
    // if (productData) {
    //   seo = productData.seo;
    // }
    if (!products) {
      return <Loader />;
    }

    return (
      <section className="manage-specs">
        <div className="form__select-group">
          <label htmlFor="product-select">Please select content category to update</label>
          <select id="product-select" onChange={this.handleCategorySelect} value={selectedCategory}>
            <option value={selectedCategory} disabled>
              {selectedCategory}
            </option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {this.renderSelect(selectedCategory)}

        <SeoForm
          seo={this.currentSeoData()}
          validateAll={this.validateAll}
          uploadSeoContent={this.props.uploadSeoContent}
          uploadSeo={this.props.uploadSeo}
          selectedProduct={selectedProduct}
          selectedBrand={selectedBrand}
          selectedCollection={selectedCollection}
          selectedCategory={selectedCategory}
          valuesAvailable={currentCategoryValues}
          showSuccess={this.showModal}
        />
        {this.state.modalState ? <SuccessModal showModal={this.state.modalState} onClick={this.closeModal} /> : null}
      </section>
    );
  }
}

const ManageSeoWithApollo = compose(
  withApollo,
  ADMIN_PRODUCTS_QUERY(),
  graphql(VENDOR_SEO_QUERY, {
    options: () => ({ variables: { handle: '' } }),
    props: ({ data }) => {
      // console.log('VENDOR SEO Data::', data);
      const { loading, error, refetch } = data;
      if (error) {
        return { brandSeoError: error };
      }
      if (!loading) {
        return { refetchBrandSeo: refetch };
      }
    }
  }),
  graphql(COLLECTION_SEO_QUERY, {
    options: () => ({ variables: { handle: '' } }),
    props: ({ data }) => {
      // console.log('COLLECITON SEO DATA::', data);
      const { loading, error, refetch } = data;

      if (error) {
        return { collectionSeoError: error };
      }
      if (!loading) {
        return { loadingCollectionSeo: loading, refetchCollectionSeo: refetch };
      }
    }
  }),
  graphql(COLLECTIONS_QUERY, {
    options: () => ({ variables: { first: 100 } }),
    props: ({ data }) => {
      // console.log('COLLECTIONS QUERY DATA::', data);
      const { loading, admin_collections } = data;
      if (!loading) {
        const { edges } = admin_collections;
        return { loadingCollections: loading, collections: edges };
      }
    }
  }),
  graphql(PRODUCT_SEO_QUERY, {
    options: () => ({ variables: { handle: '' }, fetchPolicy: 'network-only' }),
    props: ({ data }) => {
      // console.log('PRODUCTS SEO DATA', data);
      const { loading: loadingProductData, error, productData, refetch: refetchProductData } = data;
      if (error) throw new Error(`Error in Related Prodcuts Query: ${error}`);
      return { loadingProductData, productData, refetchProductData };
    }
  }),
  graphql(UPLOAD_SEO, {
    props: ({ mutate }) => ({
      uploadSeo: async seoData => {
        const { data } = await mutate({ variables: seoData });
        return data.uploadSeo;
      }
    })
  }),
  graphql(UPLOAD_SEO_CONTENT, {
    props: ({ mutate }) => ({
      uploadSeoContent: async seoData => {
        // console.log('UPLOAD SEO DATA:', seoData);
        const {
          data: { updateProductSeo }
        } = await mutate({ variables: { seo: seoData } });
        // console.log('CONTENT:', updateProductSeo);
        return updateProductSeo;
      }
    })
  }),
  graphql(VENDORS_QUERY, {
    props: ({ data: { loading, error, vendors } }) => {
      if (error) throw new Error(`Error in Vendors Query: ${error}`);
      return { loading, vendors };
    }
  }),
  MODIFY_PRODUCT_DATA(ADD_PRODUCT_DATA, 'addProductData'),
  MODIFY_PRODUCT_DATA(UPDATE_PRODUCT_DATA, 'updateProductData')
)(ManageSeo);

ManageSeo.propTypes = {
  uploadSeo: PropTypes.func,
  refetchBrandSeo: PropTypes.func,
  refetchCollectionSeo: PropTypes.func,
  vendors: PropTypes.array,
  collections: PropTypes.array,
  productsLoading: PropTypes.bool,
  products: PropTypes.array,
  productSpecs: PropTypes.array,
  refetchProductData: PropTypes.func,
  sfy_shop: PropTypes.object,
  productData: PropTypes.object,
  loadingProductData: PropTypes.bool,
  uploadSeoContent: PropTypes.func
};

export default ManageSeoWithApollo;
