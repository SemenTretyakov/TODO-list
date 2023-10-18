const userService = require('../services/user.service');

class UserController {
	async registration(req, res, next) {
		try {
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
		} catch (error) {
			console.log(error);
		}
	}
	async login(req, res, next) {
		try {
			return res.json({ message: 'registr' });
		} catch (error) {}
	}
	async logout(req, res, next) {
		try {
			return res.json({ message: 'registr' });
		} catch (error) {}
	}
	async refresh(req, res, next) {
		try {
			return res.json({ message: 'registr' });
		} catch (error) {}
	}
	async activate(req, res, next) {
		try {
			return res.json({ message: 'registr' });
		} catch (error) {}
	}
	async getUsers(req, res, next) {
		try {
			return res.json(['123', '345']);
		} catch (error) {}
	}
}

module.exports = new UserController();
