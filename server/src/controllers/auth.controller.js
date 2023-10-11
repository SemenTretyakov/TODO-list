class AuthController {
	async signin(req, res) {
		return res.json({ message: 'Work' });
	}
}

module.exports = new AuthController();
