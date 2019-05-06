import {
  transformSchema,
  RenameTypes,
  RenameRootFields,
  makeRemoteExecutableSchema,
  introspectSchema,
  mergeSchemas
} from 'graphql-tools';
import { introspectionQuery } from 'graphql';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

async function _createStich() {
  let that = {};
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
  async function generateRemoteSchema({ uri, headers, prefixer }) {
    const remoteServiceLink = createHttpLink({ uri, headers, fetch });
    try {
      // console.time('INTROSPECT');
      // console.log('STARTING INTROSPECTION::', new Date().getMinutes(), new Date().getSeconds());
      if (prefixer === 'sfy') {
        const remoteServiceSchemaDefinition = await introspectSchema(remoteServiceLink);
        const remoteExecutableSchema = makeRemoteExecutableSchema({
          schema: remoteServiceSchemaDefinition,
          link: remoteServiceLink
        });
        that.storefront = remoteExecutableSchema;
      }

      if (prefixer === 'admin') {
        const adminRemote = await introspectSchema(remoteServiceLink);
        const adminServiceSchemaDefinition = makeRemoteExecutableSchema({
          schema: adminRemote,
          link: remoteServiceLink
        });
        delete adminServiceSchemaDefinition['_typeMap']['Job']['_fields'].query;
        that.admin = adminServiceSchemaDefinition;
      }
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }
  async function init() {
    // console.time('INTROSPECT');
    try {
      await generateRemoteSchema(shopifySchemaInfo);
      await generateRemoteSchema(adminSchemaInfo);
    } catch (e) {
      console.log('ERROR CREATEING SCHEMA', e);
    }
    // return new Promise(function (resolve, reject) {
    //   console.timeEnd('INTROSPECT')
    //   return resolve(that);
    //
    // })
  }
  await init();
  return that;
}
const __createStich = _createStich();
export const createStich = () => null;
export const generateRemoteSchema = async ({ uri, headers, prefixer }) => {
  // const remoteServiceLink = createHttpLink({ uri, headers, fetch });
  // console.time('INTROSPECT');
  // console.log('STARTING INTROSPECTION::', new Date().getMinutes(), new Date().getSeconds());
  const remotes = await __createStich;
  console.log('REMOTES:::', prefixer);
  // console.log('REMOTE DEFF::', remoteServiceSchemaDefinition);
  // console.timeEnd('INTROSPECT');
  // remotes.map(remote => {
  //
  // })
  //console.log(printIntrospectionSchema(remoteServiceSchemaDefinition));
  // Temporary fix for bug in Shopify Admin Graph API
  if (prefixer === 'admin') {
      const transform = transformSchema(remotes.admin, [
        new RenameTypes(type => `${prefixer}_${type}`),
        new RenameRootFields((operation, name) => `${prefixer}_${name}`)
      ]);
      return transform;
  } else {
    const transform = transformSchema(remotes.storefront, [
      new RenameTypes(type => `${prefixer}_${type}`),
      new RenameRootFields((operation, name) => `${prefixer}_${name}`)
    ]);
    return transform;
  }

};

export const mergeRemoteWithLocalSchema = schemas => {
  return mergeSchemas({
    schemas,
    onTypeConflict: (left, right) => right
  });
};
