const boom = require('@hapi/boom');
const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  console.log(req.headers, config.apiKey);
  if (apiKey !== config.apiKey) {
    next(boom.unauthorized('Invalid API key'));
  }
  next();
}

function checkAdminRole(req, res, next) {
  const user = req.user;

  if (user.role.toLowerCase() === 'admin') {
    next();
  } else {
    next(boom.unauthorized('You are not authorized'));
  }
}

function checkRole(...roles) {
  return (req, res, next) => {
    const user = req.user;
    console.log("Data 2", user, roles)
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized('You are not authorized'));
    }
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRole };
