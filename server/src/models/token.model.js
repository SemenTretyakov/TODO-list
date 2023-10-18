const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const Token = sequelize.define(
		'token',
		{
			refreshToken: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			userId: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
		}
	);

	return Token;
};
