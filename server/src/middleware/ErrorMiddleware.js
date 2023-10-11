const ErrorApi = require('../error/error.api');

module.exports = function (err, req, res, next) {
	if (err instanceof ErrorApi) {
		res.status(err.status).json({ message: err.message });
	}

	return res.status(500).json({ message: 'Непредвиденная ошибка!' });
};
