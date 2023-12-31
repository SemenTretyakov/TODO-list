const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail.service');
const tokenService = require('./token.service');
const UserDto = require('../dtos/user.dto');
const sequelize = require('../models/db');
const ErrorApi = require('../error/error.api');
const config = require('../config/db.config');

const userModel = sequelize.models.user;

class UserService {
	async registration(firstname, lastname, fathername, email, password) {
		try {
			const person = await userModel.findOne({ where: { email } });

			if (person) {
				throw ErrorApi.badRequest(
					`Пользователь с почтовым адресом ${email} уже существует`
				);
			}

			const hashPassword = await bcrypt.hash(password, 3);
			const activationLink = uuid.v4();

			const user = await userModel.create({
				firstname,
				lastname,
				fathername,
				email,
				password: hashPassword,
				activationLink,
			});
			await mailService.sendActivationMail(
				email,
				`${config.API_URL}/api/user/activate/${activationLink}`
			);

			const userDto = new UserDto(user);
			const tokens = tokenService.generateTokens({ ...userDto });
			await tokenService.saveToken(userDto.id, tokens.refreshToken);

			return { ...tokens, user: userDto };
		} catch (error) {
			throw error;
		}
	}

	async activate(activationLink) {
		const user = await userModel.findOne({ activationLink });
		if (!user) {
			throw new ErrorApi.badRequest('Неккоректная ссылка');
		}
		user.isActivated = true;
		await user.save();
	}

	async login(email, password) {
		const user = await userModel.findOne({ where: { email } });
		if (!user) {
			throw ErrorApi.badRequest('Пользователь с таким email не найден');
		}
		const isPassEquals = await bcrypt.compare(password, user.password);
		if (!isPassEquals) {
			throw ErrorApi.badRequest('Неверный пароль');
		}
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });

		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return { ...tokens, user: userDto };
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken);
		return token;
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ErrorApi.unauthorized();
		}
		const userData = tokenService.validateRefreshToken(refreshToken);
		const tokenFromDb = await tokenService.findToken(refreshToken);
		if (!userData || !tokenFromDb) {
			throw ErrorApi.unauthorized();
		}
		const user = await userModel.findByPk(userData.id);
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });

		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return { ...tokens, user: userDto };
	}

	async getAllUsers() {
		const users = await userModel.findAll();
		return users;
	}
}

module.exports = new UserService();
