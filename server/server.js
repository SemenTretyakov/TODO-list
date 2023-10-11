const express = require('express');
const sequelize = require('./src/models/db');
const config = require('./src/config/db.config');
const cors = require('cors');
const router = require('./src/routes/index');

const PORT = config.DB_MY_PORT || 3000;

const app = express();

app.use(cors());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(express.json());
app.use('/api', router);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();

		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
