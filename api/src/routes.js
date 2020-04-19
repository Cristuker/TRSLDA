import { Router } from 'express';
import SessionController from './controllers/SessionController';
import RecipientsController from './controllers/RecipientsController';
import authMiddleware from './middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsController.store);


export default routes;
