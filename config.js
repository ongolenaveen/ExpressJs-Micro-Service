// Configure Enviroment variables
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  useProxy:process.env.USE_PROXY
};