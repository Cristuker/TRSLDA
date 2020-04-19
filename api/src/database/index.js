import Sequelize from 'sequelize';
import configSequelize from '../config/database';
import User from '../models/User';
import Recipients from '../models/Recipients';

const models = [User, Recipients];
class Database {
	constructor() {
		this.init();
	}

	init() {
		try {
			this.connection = new Sequelize(configSequelize);
			models.map(model => model.init(this.connection))
			console.log('Connection Sucess')
		}catch(err){
			console.log(`Not connected ${err}`)
		}
	}
}

export default new Database();
