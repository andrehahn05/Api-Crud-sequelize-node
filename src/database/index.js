import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';

const models = [User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

// class Database {
//  constructor() {
//    this.init();
//  }

//  init() {
//    this.connection = new Sequelize(databaseConfig);
//    models.map((model) => model.init(this.connection));
//  }
// }

// export default new Database();
