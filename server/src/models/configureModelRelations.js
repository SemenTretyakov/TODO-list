const configureModelRelations = (sequelize) => {
	const { priority, task, token, user } = sequelize.models;

	priority.hasMany(task, {
		as: 'priority',
	});
	task.belongsTo(priority);
	token.belongsTo(user, { foreignKey: 'userId' });
};

module.exports = { configureModelRelations };
