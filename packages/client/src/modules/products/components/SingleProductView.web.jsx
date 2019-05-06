/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { PageLayout, ScrollToTop, Modal, TabContainer, TabItem, Badge } from '../../common/components/global';
import SimilarProducts from './SimilarProducts';
import settings from '../../../../../../settings';
import '../styles/single-product-view.scss';
import RPBHQ from '../../common/graphql/SFY/sfyRelatedProductByHandle.graphql';
import ResponsiveShpfyPicture from '../../common/components/global/components/ResponsiveShpfyPicture';

export const prodFeatures = [
  ['shock_absorption', 'Shock Absorption'],
  ['console', 'Console'],
  ['user_ids', 'User IDs'],
  ['workouts', 'Workouts'],
  ['hrt_monitoring', 'Heart Monitoring'],
  ['stride_technology', 'Stride Technology'],
  ['power', 'Power'],
  ['design', 'Design'],
  ['drive_system', 'Drive System'],
  ['handlebars', 'Handlebars'],
  ['seat', 'Seat'],
  ['pedals', 'Pedals'],
  ['frame', 'Frame'],
  ['finish', 'Finish'],
  ['motion', 'Motion'],
  ['exercises', 'Exercises'],
  ['weight_stack', 'Weight Stack'],
  ['included_accessories', 'Included Accessories'],
  ['optional_weight_stack', 'Optional Weight Stack']
];
export const prodSpecs = [
  ['running_area', 'Running Area'],
  ['motor', 'Motor'],
  ['speed', 'Speed'],
  ['incline', 'Incline'],
  ['resistance_levels', 'Resistance Levels'],
  ['resistance_system', 'Resistance System'],
  ['stride', 'Stride'],
  ['max_user_weight', 'Max User Weight'],
  ['ramp', 'Ramp'],
  ['stored_vertical_height', 'Stored Vertical Height'],
  ['seat_floor_distance', 'Seat Floor Distance'],
  ['warranty', 'Warranty']
];

const featureTypes = prodFeatures.map(f => f[0]);
const specTypes = prodSpecs.map(s => s[0]);

const ProductDataList = ({ dataArr, data }) => {
  return (
    <ul>
      {dataArr.map(([key, value], i) => {
        if (key in data && data[key]) {
          return (
            <li key={i}>
              <span style={{ fontWeight: 600 }}>{value}</span> {data[key]}
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

class SingleProductView extends React.Component {
  state = {
    selectedImage: '0',
    showSpecsModal: false,
    relatedProducts: []
  };
  componentDidUpdate(prevProps) {
    const { relatedProducts, client } = this.props;
    if (typeof prevProps.relatedProducts === 'undefined' && relatedProducts) {
      if (relatedProducts.length > 0) {
        Promise.all(
          relatedProducts.map(async ({ related_handle: handle }) => {
            return await client.query({ query: RPBHQ, variables: { handle } });
          })
        ).then(res => {
          const relatedProducts = res.map(({ data: { sfy_shop: { productByHandle: relatedProduct } } }) => {
            const { images, ...rest } = relatedProduct;
            const image = images.edges[0].node.originalSrc;
            return { ...rest, image };
          });
          return this.setState({ relatedProducts });
        });
      }
    }
    return;
  }
  addToCart = async variantId => {
    const checkoutId = localStorage.getItem('sfy-checkout-id');
    if (!checkoutId) {
      const addedItem = { lineItems: [{ variantId, quantity: 1 }] };
      await this.props.createInitialCheckout(addedItem);
    } else {
      const addedItem = { lineItems: [{ variantId, quantity: 1 }], checkoutId };
      await this.props.addCartItem(addedItem);
    }
    this.props.toggleCart();
  };
  getDisplayPrice = input =>
    parseInt(input)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
  toggleModal = () => this.setState({ showSpecsModal: !this.state.showSpecsModal });
  formatVendor = name => {
    return name.replace(/[\s/-]/g, '').toLowerCase();
  };
  vendorLogo = vendorName => {
    const { vendors } = this.props;
    const [match] = vendors.filter(v => this.formatVendor(v.name) === this.formatVendor(vendorName));
    if (typeof match !== 'undefined') return match.logo_url;
    else return 'https://via.placeholder.com/300x300';
  };
  vendorDescription = vendorName => {
    const { vendors } = this.props;
    const [match] = vendors.filter(v => this.formatVendor(v.name) === this.formatVendor(vendorName));
    if (typeof match !== 'undefined') return match.description;
    else return '';
  };
  renderImage = image => {
    const className = image.hasOwnProperty('className') ? image.className : '';
    const options = {
      image: image.link,
      altText: image.name,
      className,
      image_size: '300X300',
      sources: [
        {
          image: image.link,
          image_size: '700X700',
          size: '(min-width: 990px)'
        },
        {
          image: image.link,
          image_size: '370X370',
          size: '(max-width: 450px)'
        }
      ]
    };
    return <ResponsiveShpfyPicture options={options} />;
  };
  swap = e => {
    const el = e.currentTarget;
    const index = [...el.parentElement.children].indexOf(el);
    const imagesNode = document.getElementById('details-images');
    const children = imagesNode.children;
    children[0].parentNode.insertBefore(children[index], children[0]);
  };
  render() {
    const { showSpecsModal } = this.state;
    const { product, vendors, relatedProducts, productData, loading } = this.props;
    // const renderMetaData = () => (
    //   <Helmet
    //     title={`${settings.app.name} - ${product.vendor} ${product.title}`}
    //     meta={[
    //       {
    //         name: 'description',
    //         content: `${product.vendor} ${product.title} - Product page`
    //       }
    //     ]}
    //   />
    // );
    const productInfoTabs = [
      { name: 'About Product' },
      { name: 'Dimensions' },
      { name: 'Product Specs' },
      { name: 'About Vendor' }
    ];

    if (loading || !product || !vendors || !relatedProducts) {
      // console.log('LOADING::', loading);
      // console.log('PRODUCT:', product);
      // console.log('VENDORS', vendors);
      // console.log('Related Products', relatedProducts);
      // console.log('PRODUCTDATA::', productData);
      return (
        <PageLayout>
          <div>Loading...</div>
        </PageLayout>
      );
    } else {
      const renderMetaData = () => (
        <Helmet
          title={`${settings.app.name} - ${product.vendor} ${product.title}`}
          meta={[
            {
              name: 'title',
              content: productData && productData.seo ? productData.seo.title : ''
            },
            {
              name: 'description',
              content: productData && productData.seo ? productData.seo.description : ''
            },
            {
              name: 'keywords',
              content: productData && productData.seo ? productData.seo.keywords : ''
            }
          ]}
        />
      );
      // eslint-disable-next-line
      const { title, description, productType, images, vendor, availableForSale, priceRange, options } = product;
      const dimensions = options[0].values[0];
      // eslint-disable-next-line
      const {
        variants: { edges }
      } = product;
      // eslint-disable-next-line
      const {
        node: { compareAtPrice, price, /*sku, weight, selectedOptions,*/ id: variantId }
      } = edges[0];
      const vendorDescription = this.vendorDescription(vendor);
      // const specifications = [...selectedOptions, { name: 'weight', value: weight }, { nane: 'sku', value: sku }];
      const specExists = productData ? specTypes.some(key => key in productData && productData[key]) : false;
      const featureExists = productData ? featureTypes.some(key => key in productData && productData[key]) : false;
      return (
        <PageLayout>
          {renderMetaData()}
          <ScrollToTop />
          <div className="single-product-view">
            <div className="single-product-view__product-details">
              {'product' in this.props ? (
                <section className="product-details">
                  <div id="details-images" className="product-details__images">
                    {images && 'edges' in images && images.edges.length > 0 ? (
                      images.edges.map(({ node: { originalSrc, id, altText } }, i) => (
                        <div key={id} className="product-details__image" onClick={this.swap}>
                          {this.renderImage({ link: originalSrc, name: altText })}
                          {/* <img src={originalSrc} alt={altText} /> */}
                          {compareAtPrice !== null && i == 0 ? <Badge badgeType="sale" /> : null}
                        </div>
                      ))
                    ) : (
                      <span>No product image(s) to display</span>
                    )}
                  </div>
                  <div className="product-details__info">
                    <img className="product-details__vendor-image" src={this.vendorLogo(vendor)} alt={vendor} />
                    <h2 className="product-details__name">{title}</h2>
                    <p className="product-details__description">{description}</p>
                    <div className="product-details__cart">
                      {compareAtPrice !== null ? (
                        <div className="product-details__price-group">
                          <span className="product-details__price product-details__price--sale">
                            {`$${this.getDisplayPrice(price)}`}
                          </span>
                          <span className="product-details__price product-details__price--original">
                            {`$${this.getDisplayPrice(compareAtPrice)}`}
                          </span>
                        </div>
                      ) : (
                        <span className="product-details__price">{`$${this.getDisplayPrice(price)}`}</span>
                      )}
                      <div className="product-details__button-group">
                        <Link to="/locations" className="product-details__button">
                          <FaSearch size="2em" className="product-details__icon" />
                          Call For Best Price
                        </Link>
                        <button
                          onClick={() => this.addToCart(variantId)}
                          className="product-details__button"
                          disabled={availableForSale === false ? true : false}
                        >
                          <FiShoppingCart size="2em" className="product-details__icon" />
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div className="product-details__specs">
                      <div className="product-details__collapse-label" onClick={this.toggleModal}>
                        Product Information
                      </div>
                      <Modal showModal={showSpecsModal} toggleModal={this.toggleModal} transparent={true}>
                        <TabContainer tabs={productInfoTabs}>
                          <TabItem>
                            {/* About Product */}
                            {description !== '' ? description : <span>No product description to display.</span>}
                          </TabItem>
                          <TabItem>
                            {/* Dimensions */}
                            {dimensions !== '' ? dimensions : <span>No product dimensions to display.</span>}
                          </TabItem>
                          <TabItem>
                            {/* Product Specs */}
                            <h5> Features </h5>
                            {featureExists ? (
                              <ProductDataList dataArr={prodFeatures} data={productData} />
                            ) : (
                              <span>No features available at this time</span>
                            )}
                            <h5> Specs </h5>
                            {specExists ? (
                              <ProductDataList dataArr={prodSpecs} data={productData} />
                            ) : (
                              <span>No specs available at this time</span>
                            )}
                          </TabItem>
                          <TabItem>
                            {/* About Vendor */}
                            {vendorDescription !== '' ? (
                              vendorDescription
                            ) : (
                              <span>No vendor story to share at this time.</span>
                            )}
                          </TabItem>
                        </TabContainer>
                        {/* }<div className="product-details__collapse-menu">
                          {specifications.length > 0 ? (
                            <CollapseMenu label="Specifications">
                              {specifications.map(({ name, value }, i) => (
                                <div key={i} className="product-details__collapse-item">
                                  <span className="product-details__collapse-name">{name}</span>
                                  <span className="product-details__collapse-description">{value}</span>
                                </div>
                              ))}
                            </CollapseMenu>
                          ) : null}
                        </div> */}
                      </Modal>
                    </div>
                  </div>
                </section>
              ) : (
                <span>No product to display</span>
              )}
            </div>
            <div className="single-product-view__similar-products">
              {this.state.relatedProducts.length > 0 ? (
                <SimilarProducts relatedProducts={this.state.relatedProducts} />
              ) : null}
            </div>
          </div>
        </PageLayout>
      );
    }
  }
}

SingleProductView.propTypes = {
  product: PropTypes.object,
  relatedProducts: PropTypes.array,
  loading: PropTypes.bool,
  createInitialCheckout: PropTypes.func,
  addCartItem: PropTypes.func,
  toggleCart: PropTypes.func,
  vendors: PropTypes.array,
  productData: PropTypes.object,
  client: PropTypes.object
};

ProductDataList.propTypes = {
  dataArr: PropTypes.array,
  data: PropTypes.object
};

SingleProductView.defaultProps = {};

export default SingleProductView;
