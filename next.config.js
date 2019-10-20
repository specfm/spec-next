require('dotenv').config()

module.exports = {
  target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
  env: {
    "SIMPLECAST_API_KEY": process.env.SIMPLECAST_API_KEY
  }
};