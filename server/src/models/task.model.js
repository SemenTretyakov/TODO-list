const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const Task = sequelize.define(
		'task',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			completion_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW,
			},
			updated_at: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW,
			},
			status: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			creatorid: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			responsibleid: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
		}
	);

	return Task;
};
