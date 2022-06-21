const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setUpModels = require('../db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
//   dialectOptions: {
//     options: {
//       enableArithAbort: false,
//       cryptoCredentialsDetails: {
//         minVersion: 'TLSv1',
//       },
//     },
//   },
});

setUpModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
