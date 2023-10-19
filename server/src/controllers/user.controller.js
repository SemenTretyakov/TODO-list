const userService = require('../services/user.service');
const config = require('../config/db.config');
const { validationResult } = require('express-validator');
const ErrorApi = require('../error/error.api');

class UserController {
	async registration(req, res, next) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return next(
					ErrorApi.badRequest('ошибка при валидации', errors.array())
				);
			}
			const { firstname, lastname, fathername, email, password } = req.body;
			const userData = await userService.registration(
				firstname,
				lastname,
				fathername,
				email,
				password
			);
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			});
			return res.json(userData);
		} catch (e) {
			next(e);
		}
	}

	async login(req, res, next) {
		try {
			return res.json({ message: 'registr' });
		} catch (e) {
			next(e);
		}
	}

	async logout(req, res, next) {
		try {
			return res.json({ message: 'registr' });
		} catch (e) {
			next(e);
		}
	}

	async refresh(req, res, next) {
		try {
			return res.json({ message: 'registr' });
		} catch (e) {
			next(e);
		}
	}

	async activate(req, res, next) {
		try {
			const activationLink = req.params.activationLink;
			await userService.activate(activationLink);
			return res.redirect(config.CLIENT_URL);
		} catch (e) {
			next(e);
		}
	}

	async getUsers(req, res, next) {
		try {
			return res.json(['123', '345']);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new UserController();
