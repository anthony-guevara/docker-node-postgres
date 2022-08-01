const { Strategy, ExtractJwt } = require('passport-jwt');
const {config} = require('../../../config/config');
const boom = require('@hapi/boom');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:   config.jwtSecret
};


const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload); 
});


module.exports = jwtStrategy;