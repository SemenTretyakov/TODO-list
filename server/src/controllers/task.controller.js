class TaskController {
	async addTask(req, res) {
		return res.json({ message: 'add' });
	}

	async updateTask(req, res) {
		return res.json({ message: 'update' });
	}

	async priorities(req, res) {
		return res.json({ message: 'priorities' });
	}
}

module.exports = new TaskController();
