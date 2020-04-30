import { Router } from 'express';
import SessionController from './controllers/SessionController';
import RecipientsController from './controllers/RecipientsController';
import DeliverymanController from './controllers/DeliverymanController';
import FileController from './controllers/FileController';
import authMiddleware from './middlewares/auth';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsController.store);

routes.post('/deliveryman', DeliverymanController.store);

routes.post('/files',upload.single('file'),FileController.store)

export default routes;
