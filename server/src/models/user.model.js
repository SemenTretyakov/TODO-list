const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const User = sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			firstname: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastname: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			fathername: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			supervisorid: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			isActivated: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
			activationLink: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			freezeTableName: true,
		}
	);

	return User;
};
