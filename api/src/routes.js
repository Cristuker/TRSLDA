import { Router } from 'express';
import multer from 'multer';
import {
    DeliverymanController,
    FileController,
    OrderController,
    SessionController,
    RecipientsController,
    DeliveriesController,
    DeliveryProblemsController,
} from './controllers';
import authMiddleware from './middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsController.store);

routes.post('/deliveryman', DeliverymanController.store);

routes.get('/deliveryman/:id/deliveries', DeliveriesController.index);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/orders', OrderController.store);

routes.put('/orders', OrderController.update);

routes.get('/orders', OrderController.index);

routes.post('/problems', DeliveryProblemsController.store);

routes.get('/problems/:id', DeliveryProblemsController.index);

export default routes;
