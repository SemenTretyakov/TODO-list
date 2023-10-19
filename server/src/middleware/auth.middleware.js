const ErrorApi = require('../error/error.api');
const tokenService = require('../services/token.service');

module.exports = function (req, res, next) {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) {
			return next(ErrorApi.unauthorized());
		}

		const accessToken = authorizationHeader.split(' ')[1];
		if (!accessToken) {
			return next(ErrorApi.unauthorized());
		}

		const userData = tokenService.validateAccessToken(accessToken);
		if (!userData) {
			return next(ErrorApi.unauthorized());
		}

		req.user = userData;
		next();
	} catch (e) {
		return next(ErrorApi.unauthorized());
	}
};
