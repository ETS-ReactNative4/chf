const url = require('url');

const config = {
  builders: {
    server: {
      entry: './src/index.ts',
      stack: ['server'],
      defines: {
        __SERVER__: true
      },
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
    stack: ['apollo', 'react', 'styled-components', 'css', 'sass', 'less', 'js', 'ts', 'webpack', 'es6', 'i18next'],
    cache: '../../.cache',
    ssr: true,
    webpackDll: true,
    reactHotLoader: false,
    persistGraphQL: false,
    frontendRefreshOnBackendChange: true,
    nodeDebugger: false,
    defines: {
      __DEV__: process.env.NODE_ENV !== 'production',
      __SERVER_PORT__: 8080,
      __API_URL__: '"/graphql"', // Use full URL if API is external, e.g. https://example.com/graphql
      __WEBSITE_URL__: '"http://localhost:3000"'
    },



    webpackConfig: {
    //   stats: {
    //     all: true,
    //     // modules: true,
    //      chunks: true,
    //          chunkGroups: true,
    //
    // // Add built modules information to chunk information
    // chunkModules: true,
    // chunksSort: 'size',
    //
    // // Add the origins of chunks and chunk merging info
    // chunkOrigins: true,
    //
    //     // timings: true,
    //     colors: true
    //   },
        // module: {
        //   rules: [
        //     {
        //       test: /\.js$/,
        //       use: [
        //         {
        //           loader: 'heroku-babel-loader',
        //           options: {
        //             presets: [ 'react', [ 'env', { modules: false } ], 'stage-0' ],
        //             plugins: [ 'transform-runtime',
        //            'transform-decorators-legacy',
        //            'transform-class-properties' ]
        //           }
        //         }
        //       ],
        //       exclude: /node_modules/
        //     }
        //   ]
        // }
    }
  }
};

config.options.devProxy = config.options.ssr;

if (process.env.NODE_ENV === 'production') {
  config.options.defines.__WEBSITE_URL__ = '"https://cahomefitness.com"';
  // Generating source maps for production will slowdown compilation for roughly 25%
  config.options.sourceMap = false;
}

const extraDefines = {
  __SSR__: config.options.ssr,
  __FRONTEND_BUILD_DIR__: `"../client/build"`,
  __DLL_BUILD_DIR__: `"../client/build/dll"`
};

config.options.defines = Object.assign(config.options.defines, extraDefines);
// config.overridesConfig = Object.assign({ merge: { entry: 'prepend', 'entry.index': 'replace' } }, config.builders)
// console.log("CONFIG:", config)
module.exports = config;
