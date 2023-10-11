class UserController {
	async deleteUser(req, res) {
		return res.json({ message: 'delte' });
	}
}

module.exports = new UserController();
