import Sequelize from 'sequelize'
import configSequelize from './config';

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(configSequelize)
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    
    }
}

export default new Database();