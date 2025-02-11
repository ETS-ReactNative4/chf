const url = require('url');

const config = {
  builders: {
    web: {
      entry: './src/index.tsx',
      stack: ['web'],
      openBrowser: true,
      dllExcludes: ['bootstrap'],
      defines: {
        __CLIENT__: true
      },
      // Wait for backend to start prior to letting webpack load frontend page
      waitOn: ['tcp:localhost:8080'],
      enabled: true
    },
    test: {
      stack: ['server'],
      roles: ['test'],
      defines: {
        __TEST__: true
      }
    }
  },
  options: {
    stack: ['apollo', 'react', 'styled-components', 'css', 'sass', 'less', 'es6', 'ts', 'webpack', 'i18next'],
    cache: '../../.cache',
    ssr: true,
    webpackDll: true,
    reactHotLoader: false,
    defines: {
      __DEV__: process.env.NODE_ENV !== 'production',
      __API_URL__: '"/graphql"'
    },
    webpackConfig: {
    //   stats: {
    //     all: true,
    //     // modules: true,
    //     children: true,
    //      chunks: true,
    //          chunkGroups: true,
    //
    // // Add built modules information to chunk information
    // chunkModules: true,
    // chunksSort: 'size',
    //
    // // Add the origins of chunks and chunk merging info
    // // chunkOrigins: true,
    // excludeModules: /^node_modules$/,
    // maxModules: 100,
    // modules: true,
    // modulesSort: "!size",
    //
    //
    //     // timings: true,
    //     colors: true
    //   },
      devServer: {
        disableHostCheck: true
      }
    }
  }
};

config.options.devProxy = config.options.ssr;

if (process.env.NODE_ENV === 'production') {
  // Generating source maps for production will slowdown compilation for roughly 25%
  config.options.sourceMap = false;
}

const extraDefines = {
  __SSR__: config.options.ssr
};

config.options.defines = Object.assign(config.options.defines, extraDefines);

module.exports = config;
