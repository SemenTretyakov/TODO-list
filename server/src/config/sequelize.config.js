const { Sequelize } = require('sequelize');
const config = require('./db.config');

const sequelize = new Sequelize(
	config.DB_NAME,
	config.DB_USER,
	config.DB_PASSWORD,
	{
		host: config.DB_HOST,
		dialect: config.DB_DIALECT,
		port: config.DB_PORT,
		operatorsAliases: 0,
		benchmark: true,
	}
);

module.exports = sequelize;
