const Router = require('express');
const router = new Router();
const authController = require('../controllers/auth.controller');

router.get('/responsible', authController.signin);

module.exports = router;
