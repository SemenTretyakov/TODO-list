const jwt = require('jsonwebtoken');
const config = require('../config/db.config');
const sequelize = require('../models/db');

const tokenModel = sequelize.models.token;

class TokenService {
	generateTokens(payload) {
		const accessToken = jwt.sign(payload, config.JWT_ACCESS_SECRET, {
			expiresIn: '30s',
		});
		const refreshToken = jwt.sign(payload, config.JWT_REFRESH_SECRET, {
			expiresIn: '30d',
		});

		return { accessToken, refreshToken };
	}

	validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, config.JWT_ACCESS_SECRET);
			return userData;
		} catch (e) {
			return null;
		}
	}

	validateRefreshToken(token) {
		try {
			const userData = jwt.verify(token, config.JWT_REFRESH_SECRET);
			return userData;
		} catch (e) {
			return null;
		}
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await tokenModel.findOne({ where: { userId: userId } });
		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return tokenData.save();
		}

		const token = await tokenModel.create({
			userId: userId,
			refreshToken,
		});
		return token;
	}

	async removeToken(refreshToken) {
		const tokenData = await tokenModel.destroy({ where: { refreshToken } });
		return tokenData;
	}

	async findToken(refreshToken) {
		const tokenData = await tokenModel.findOne({ where: { refreshToken } });
		return tokenData;
	}
}

module.exports = new TokenService();
