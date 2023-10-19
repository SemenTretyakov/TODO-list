class ErrorApi extends Error {
	status;
	errors;

	constructor(status, message, errors) {
		super(message);
		this.status = status;
		this.errors = errors;
	}
	static unauthorized() {
		return new ErrorApi(401, 'Пользователь не авторизован');
	}

	static internal(message) {
		return new ErrorApi(500, message);
	}

	static badRequest(message, errors = []) {
		return new ErrorApi(400, message, errors);
	}
}

module.exports = ErrorApi;
