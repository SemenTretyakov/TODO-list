const { configureModelRelations } = require('./configureModelRelations');
const sequelize = require('../config/sequelize.config');

const userDefiner = require('../models/user.model');
const taskDefiner = require('../models/task.model');
const priorityDefiner = require('../models/priority.model');

const models = [userDefiner, taskDefiner, priorityDefiner];

models.map((modelDefiner) => modelDefiner(sequelize));

configureModelRelations(sequelize);

module.exports = sequelize;
