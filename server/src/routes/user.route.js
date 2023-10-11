const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/responsible', userController.deleteUser);
router.get('/responsible/:id', userController.deleteUser);

module.exports = router;
