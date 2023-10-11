const Router = require('express');
const router = new Router();

const taskController = require('../controllers/task.controller');

router.post('/add', taskController);
router.get('/priorities', taskController);
router.put('/update/:id', taskController);
router.get('/', taskController);

module.exports = router;
