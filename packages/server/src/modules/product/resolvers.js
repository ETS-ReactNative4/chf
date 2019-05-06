import withAuth from 'graphql-auth';
import FieldError from '../../../../common/FieldError';

const checkForTable = async (context, method, func, handle) => {
  return await context[method][func](handle);
};
//eslint-disable-next-line no-unused-vars
export default pubsub => ({
  Query: {
    async products(_, { limit, after }, context) {
      try {
        return await context.Product.get.productsPagination(limit, after);
      } catch (err) {
        console.log('Error resolving products', err);
      }
    },
    async product(_, { id }, context) {
      try {
        return await context.Product.get.product(id);
      } catch (err) {
        console.log('Error resolving product', err);
      }
    },
    async productsNoCategory(_, __, context) {
      try {
        return await context.Product.get.productsNoCategory();
      } catch (err) {
        console.log('Error resolving productsNoCategory', err);
      }
    },
    async productComparisons(_, __, context) {
      try {
        const oldComparisons = await context.Product.get.productComparisons();

        const comparisons = oldComparisons.map(item => {
          const stitchedValues = item.quality_name.map((name, i) => {
            const image = item.image ? item.image : 'No Image for this product';
            if (name === 'Image') return { name, value: image };
            else return { name, value: item.quality_value[i] };
          });

          return { product_id: item.product_id, values: stitchedValues };
        });

        return comparisons;
      } catch (err) {
        console.log('Error resolving productComparisons', err);
      }
    },
    async productData(_, { handle }, context) {
      console.log('HANDLE::', handle);
      try {
        return await context.Product.get.productData({ handle });
      } catch (err) {
        console.log('Error resolving productComparisons', err);
      }
    },
    async relatedProducts(_, { product_handle }, context) {
      try {
        return await context.Product.get.relatedProducts(product_handle);
      } catch (err) {
        console.log('Error resolving productComparisons', err);
      }
    }
  },
  ProductData: {
    async seo(obj, input, { Product }) {
      // console.log('SEO OBJ::', obj.handle);
      // console.log('SEO INPUT::', input);
      const seo = await Product.get.productSeo(obj.handle);
      console.log('SEO::', seo);
      if (seo) {
        return seo;
      }
      return null;
    }
  },
  Products: {
    async product_info(obj) {
      try {
        const end = obj.length;
        return end > 0 ? obj[end - 1].id : 0;
      } catch (err) {
        console.log('Error resolving product_info inside of Products', err);
      }
    },
    async edges(obj) {
      try {
        return obj.map(product => {
          const node = Object.assign({}, product, {
            images: JSON.stringify(product.images)
          });
          return { cursor: product.id, node };
        });
      } catch (err) {
        console.log('Error resolving edges inside of Products', err);
      }
    },
    async total_count(_, __, context) {
      try {
        return await context.Product.get.productsCount();
      } catch (err) {
        console.log('Error resolving total_count inside of Products', err);
      }
    }
  },
  Product: {
    async images(obj) {
      return JSON.stringify(obj.images);
    },
    async related_products(obj, _, context) {
      try {
        return await context.Product.get.relatedProducts(obj.id);
      } catch (err) {
        console.log('Error resolving related_products inside of Product', err);
      }
    },
    async attributes(obj, _, context) {
      try {
        return await context.Product.get.productAttributes(obj.id);
      } catch (err) {
        console.log('Error resolving attributes inside of Product', err);
      }
    }
  },
  Mutation: {
    async addProduct(_, { input }, context) {
      const { seo, tax_class, sub_category, attributes, related_products, ...inputRest } = input;
      const product = {
        ...inputRest,
        location_id: null,
        tax_class_id: null,
        weight_class_id: null,
        length_class_id: null,
        availability_id: 1,
        viewed: 0
      };
      try {
        const [product_id] = await context.Product.add.product(product);

        if (typeof sub_category !== 'undefined')
          await Promise.all(sub_category.map(id => context.Category.add.subCategoryProduct({ id, product_id })));
        if (typeof attributes !== 'undefined')
          await context.Product.add.productAttributes({ attributes, id: product_id });

        return { ...product, id: product_id };
      } catch (err) {
        console.log('Error resolving addProduct', err);
      }
    },
    addProductData: withAuth(['user:*'], async (obj, { input }, { Product }) => {
      try {
        const e = new FieldError();

        const { handle } = input;
        const productExists = await Product.get.productData({ handle });

        if (productExists) {
          e.setError('Add product', 'Data for this product already exists');
          e.throwIf();
        }

        const [insertedProduct] = await Product.add.productData(input);
        return { productData: insertedProduct, errors: null };
      } catch (err) {
        console.log('Error resolving addProductData: ', err);
        return { productData: null, errors: err };
      }
    }),
    async updateProductSeo(obj, { seo }, { Product }) {
      // console.log('INPUT::', seo);
      try {
        const [data] = await Product.update.productSeo(seo);
        console.log('DATA::', data);
        return data;
      } catch (e) {
        console.log('ERROR:;', e);
        return e;
      }
    },
    //eslint-disable-next-line no-unused-vars
    async addRelatedProducts(obj, { input }, { Product }) {
      try {
        const related_products = await Product.add.relatedProducts(input);
        return { related_products, errors: null };
      } catch (e) {
        console.log('Error resolving related product', e);
        return { errors: e, related_products: null };
      }
    },
    async updateProduct(_, { input }, context) {
      const { seo, tax_class, sub_category, attributes, related_product, ...inputRest } = input;
      try {
        const [{ id }] = await context.Product.update.product(inputRest);
        return { ...inputRest, id };
      } catch (err) {
        console.log('Error resolving updateProduct', err);
      }
    },
    updateProductData: withAuth(['user:*'], async (_, { input }, { Product }) => {
      try {
        const e = new FieldError();

        const { handle } = input;
        const productExists = await Product.get.productData({ handle });

        if (!productExists) {
          e.setError('Update product', 'No data for this product exists');
          e.throwIf();
        }

        const [updatedProduct] = await Product.update.productData(input);
        return { productData: updatedProduct, errors: null };
      } catch (err) {
        console.log('Error resolving updateProductData', err);
        return { productData: null, errors: err };
      }
    }),
    async updateRelatedProducts(_, { input }, { Product }) {
      try {
        const { product_handle, related_products: rps } = input;
        await Product.delete.relatedProducts(product_handle);

        if (rps.length === 0) {
          return { related_products: [], errors: null };
        } else {
          const related_products = await Product.add.relatedProducts(rps);
          return { related_products, errors: null };
        }
      } catch (err) {
        console.log('Error resolving updateRelatedProducts', err);
        return { related_products: null, errors: err };
      }
    },
    async updateProductCategory(_, { input }, context) {
      const { product_id, category_id } = input;
      try {
        await context.Product.delete.productSubCategories(product_id);
        return await context.Product.update.product({ id: product_id, category_id });
      } catch (err) {
        console.log('Error resolving updateProductCategory', err);
      }
    },
    async updateProductLayout(_, { input }, context) {
      const { id, template } = input;
      try {
        return await context.Product.update.productLayout(id, template);
      } catch (err) {
        console.log('Error resolving updateProductLayout', err);
      }
    },
    async updateProductDesignMeta(_, { input }, context) {
      const { id, ...meta } = input;
      try {
        const res = await context.Product.update.productDesignMeta(id, meta);
        console.log('response in update product design meta is', res);
        // return res;
      } catch (err) {
        console.log('Error resolving updateProductDesignMeta', err);
      }
    },
    async deleteProduct(_, { id }, context) {
      try {
        return await context.Product.delete.product(id);
      } catch (err) {
        console.log('Error resolving deleteProduct', err);
      }
    }
  },
  Subscription: {}
});
