module.exports = {
  plugins: [
    require('postcss-fixes')({
      preset: 'safe'
    }),
    require('postcss-preset-env')({
      preserve: true, // preserves new syntax so new browsers will use new syntax by default
      stage: 1, // compiles down to stage 1 https://cssdb.org/#staging-process
      autoprefixer: {
        /* options */
      },
      features: {
        /* enable or disable different features here */
      }
    }),
    require('cssnano')({
      safe: true, //
      calc: false // calc is no longer necessary, as it is already done by postcss-fixes due to precision rounding reasons
    })
  ]
};
