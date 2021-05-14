require('dotenv').config();
const path = require('path');
const withPlugins = require('next-compose-plugins');
// const withOptimizedImages = require('next-optimized-images');

const Dotenv = require('dotenv-webpack');

// next.js custom configuration goes here
const nextConfig = {
  webpack: (config, { isServer }) => {
    const retConfig = config;
    retConfig.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...retConfig.externals];
      retConfig.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      retConfig.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }

    retConfig.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    retConfig.resolve.alias = {
      ...config.resolve.alias,
      '@graphics': path.resolve(__dirname, 'public/graphics'),
      '@components': path.resolve(__dirname, 'components'),
      '@tokens': path.resolve(__dirname, 'tokens')
    };
    return retConfig;
  },
  future: {
    webpack5: false, // for transpile modules and doka
  },
};

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  // eslint-disable-next-line no-unused-vars
  require.extensions['.css'] = _file => {};
}

module.exports = withPlugins(
  [],
  nextConfig
);
