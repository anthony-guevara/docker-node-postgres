const boom = require('@hapi/boom');
const {config} = require('./../config/config');

function checkApiKey(req, res, next) {
  const  apiKey  = req.headers['api'];
  console.log(req.headers, config.apiKey);
  if (apiKey !== config.apiKey) {
    next(boom.unauthorized('Invalid API key'));
  }
  next();
}

module.exports = {checkApiKey};