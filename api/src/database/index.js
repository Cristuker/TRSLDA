import Sequelize from 'sequelize';
import configSequelize from '../config/database';
import { User, Recipients, File, Deliveryman, Order } from '../models/index';

const models = [User, Recipients, File, Deliveryman, Order];

class Database {
	constructor() {
		this.init();
	}

	init() {
		try {
			this.connection = new Sequelize(configSequelize);
			models.map(model => model.init(this.connection));
			models.map((model) => model.associate && model.associate(this.connection.models));
			console.log('Connection Success!')
		} catch (err) {
			console.log(`Not connected ${err}`)
		}
	}
}

export default new Database();
