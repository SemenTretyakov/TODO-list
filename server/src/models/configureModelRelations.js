const configureModelRelations = (sequelize) => {
	const { priority, task } = sequelize.models;

	priority.hasMany(task, {
		as: 'priority',
	});
	task.belongsTo(priority);
};

module.exports = { configureModelRelations };
