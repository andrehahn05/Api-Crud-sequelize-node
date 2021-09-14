import { Router } from 'express';
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';
import auth from '../middleware/auth';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/auth', AuthController.store);
routes.use(auth)
  .get('/show', UserController.show)
  .put('/users', UserController.update)
  .delete('/users', UserController.delete);

export default routes;
