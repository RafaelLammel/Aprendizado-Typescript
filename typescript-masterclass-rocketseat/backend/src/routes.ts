import { Router } from 'express';
import UsersController from './controllers/UsersController';

const routes = Router();

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

export default routes;