const express = require('express');
const sequelize = require('./src/config/db');
const config = require('./src/config/db.config');
const cors = require('cors');

const PORT = config.DB_PORT || 3000;

const app = express();

app.use(cors());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(express.json());

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
