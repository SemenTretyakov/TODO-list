const { configureModelRelations } = require('./configureModelRelations');
const sequelize = require('../config/sequelize.config');

const userDefiner = require('./user.model');
const taskDefiner = require('../models/task.model');
const priorityDefiner = require('../models/priority.model');
const tokenDefiner = require('../models/token.model');

const models = [userDefiner, taskDefiner, priorityDefiner, tokenDefiner];

models.map((modelDefiner) => modelDefiner(sequelize));

configureModelRelations(sequelize);

module.exports = sequelize;
