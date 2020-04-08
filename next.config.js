require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    "SIMPLECAST_API_KEY": process.env.SIMPLECAST_API_KEY
  },
};