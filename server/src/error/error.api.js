class ErrorApi extends Error {
	constructor(status, message) {
		super();
		this.status = status;
		this.message = message;
	}
	static unauthorized(message) {
		new ErrorApi(403, message);
	}

	static internal(message) {
		new ErrorApi(500, message);
	}

	static badRequest(message) {
		new ErrorApi(404, message);
	}
}

module.exports = ErrorApi;
