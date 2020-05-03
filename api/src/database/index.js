import Sequelize from 'sequelize';
import configSequelize from '../config/database';
import User from '../models/User';
import Recipients from '../models/Recipients';
import File from '../models/File';
import Deliveryman from '../models/Deliveryman';

const models = [User, Recipients, File, Deliveryman];

class Database {
	constructor() {
		this.init();
	}

	init() {
		try {
			this.connection = new Sequelize(configSequelize);
			models.map(model => model.init(this.connection));
			models.map((model) => model.associate && model.associate(this.connection.models));
			console.log('Connection Sucess')
		}catch(err){
			console.log(`Not connected ${err}`)
		}
	}
}

export default new Database();
