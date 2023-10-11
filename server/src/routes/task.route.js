const Router = require('express');
const router = new Router();

const taskController = require('../controllers/task.controller');

router.post('/add', taskController.addTask);
router.get('/priorities', taskController.priorities);
router.put('/update/:id', taskController.updateTask);
// router.get('/', taskController);

module.exports = router;
