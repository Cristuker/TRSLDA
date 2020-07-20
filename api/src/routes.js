import { Router } from 'express';
import { DeliverymanController, FileController, OrderController, SessionController, RecipientsController } from './controllers/'
import authMiddleware from './middlewares/auth';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsController.store);

routes.post('/deliveryman', DeliverymanController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/orders', OrderController.store);

routes.put('/orders', OrderController.update);

routes.get('/orders', OrderController.index);

export default routes;
