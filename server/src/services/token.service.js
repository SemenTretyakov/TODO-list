const jwt = require('jsonwebtoken');
const config = require('../config/db.config');
const sequelize = require('../models/db');

const tokenModel = sequelize.models.token;

class TokenService {
	generateTokens(payload) {
		const accessToken = jwt.sign(payload, config.JWT_ACCESS_SECRET, {
			expiresIn: '30m',
		});
		const refreshToken = jwt.sign(payload, config.JWT_REFRESH_SECRET, {
			expiresIn: '30d',
		});

		return { accessToken, refreshToken };
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await tokenModel.findOne({ where: { userId: userId } });
		if (tokenData) {
			tokenData.refreshToken = refreshToken; // Обратите внимание на правильное имя поля
			return tokenData.save();
		}

		const token = await tokenModel.create({
			userId: userId,
			refreshToken,
		});
		return token;
	}
}

module.exports = new TokenService();
