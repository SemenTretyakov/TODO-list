const Router = require('express');
const router = new Router();

const userController = require('../controllers/user.controller');

router.get('/responsible', userController);
router.get('/responsible/:id', userController);

module.exports = router;
