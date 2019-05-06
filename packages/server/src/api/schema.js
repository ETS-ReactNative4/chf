import { makeExecutableSchema } from 'graphql-tools';
import rootSchemaDef from './rootSchema.graphql';
import modules from '../modules';
import pubsub from './pubsub';
import { mergeRemoteWithLocalSchema, generateRemoteSchema } from './remoteSchema';

const shopifySchemaInfo = {
  uri: 'https://california-home-fitness.myshopify.com/api/graphql',
  headers: {
    'X-Shopify-Storefront-Access-Token': '4922e715d616579f4c22f6689c30391e',
    'Content-Type': 'application/graphql'
  },
  prefixer: 'sfy'
};

const adminSchemaInfo = {
  uri: 'https://california-home-fitness.myshopify.com/admin/api/graphql.json',
  headers: {
    'X-Shopify-Access-Token': 'b8f91a51890ee026dd39378835b6570f',
    'Content-Type': 'application/graphql'
  },
  prefixer: 'admin'
};

const localExecutableSchema = makeExecutableSchema({
  typeDefs: [rootSchemaDef].concat(modules.schemas),
  resolvers: modules.createResolvers(pubsub)
});
// const test = async () => await createStich;
// const other = test();
const createSchema = async () => {
  // console.log('DOES THIS RE RUNN::::', other);
  // console.time('CREATE-SCHEMA')
  const adminExecSchema = await generateRemoteSchema(adminSchemaInfo);
  const sfyExecSchema = await generateRemoteSchema(shopifySchemaInfo);
  // console.log('CREATED SHOPIFY SCHEMA::', sfyExecSchema);
  // console.timeEnd('CREATE-SCHEMA');

  // console.log('CREATED ADMIN SCHEMA;::', new Date().getMinutes(), new Date().getSeconds());
  const mergedSchema = await mergeRemoteWithLocalSchema([localExecutableSchema, sfyExecSchema, adminExecSchema]);
  // console.log('CREATED MERGED SCHEMA:::', new Date().getMinutes(), new Date().getSeconds());
  return mergedSchema;
};

export default createSchema;
