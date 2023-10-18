class AuthController {
	async signin(req, res, next) {
		try {
			return res.json({ message: 'registr' });
		} catch (error) {}
	}
}

module.exports = new AuthController();
