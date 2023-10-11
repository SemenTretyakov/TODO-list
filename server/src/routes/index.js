const Router = require('express');
const router = new Router();

const authRouter = require('./auth.route');
const taskRouter = require('./task.route');
const userRouter = require('./user.route');

router.use('/auth', authRouter);
router.use('/task', taskRouter);
router.use('/user', userRouter);

module.exports = router;
