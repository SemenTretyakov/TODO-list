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
			const candidate = await userModel.findOne({ where: { email } });

			if (candidate) {
				throw new Error(
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
	activate(req, res) {
		res.json({ ff: 'dd' });
	}
}

module.exports = new UserService();
