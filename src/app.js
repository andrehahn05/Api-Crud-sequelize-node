/* eslint-disable no-unused-vars */
 import dotenv from 'dotenv';
 
dotenv.config();


import express from 'express';
import routes from './routes/routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    

  }

  middlewares() {
    // this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
    // console.log(process.env)
  }
  
  routes() {
    this.server.use(routes);
  }
  
}
export default new App().server; 
