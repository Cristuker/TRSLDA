import { DeliveryProblems, Order } from '../models/';
import * as Yup from 'yup';

class DeliveryProblemsController {
    async store(req, res) {
        try {
            const schema = Yup.object({
                delivery_id: Yup.number().required(),
                description: Yup.string().required().min(3),
            });

            if (!(await schema.isValid(req.body))) {
                return res.status(401).json({ error: 'Schema is not valid' });
            }
            const { delivery_id, description } = req.body;
            const response = await DeliveryProblems.create({
                delivery_id,
                description,
            });

            return res.send({ response });
        } catch (error) {
            return res
                .status(500)
                .json({ error: 'Server internal error', error });
        }
    }

    async index(req, res) {
        try {
            const schema = Yup.object({
                id: Yup.number().required(),
            });

            if (!(await schema.isValid(req.params))) {
                return res.status(401).json({ error: 'Schema is not valid' });
            }
            const { id } = req.params;

            const response = await DeliveryProblems.findAll({
                where: { delivery_id: id },
            });

            return res.json({ response });
        } catch (error) {
            return res
                .status(500)
                .json({ error: 'Server internal error', error });
        }
    }

    async update(req, res) {
        try {
            const paramsSchema = Yup.object({
                id: Yup.number().required(),
            });
            const bodySchema = Yup.object({
                canceled_at: Yup.date().required(),
            });

            if (!(await paramsSchema.isValid(req.params))) {
                return res.status(401).json({ error: 'Schema is not valid' });
            }
            if (!(await bodySchema.isValid(req.body))) {
                return res.status(401).json({ error: 'Schema is not valid' });
            }
            const { id } = req.params;
            const thisOrderExists = await Order.findAll({ where: { id } });

            if (!thisOrderExists.length) {
                return res
                    .status(400)
                    .json({ message: `This order don't exists!` });
            }

            const response = await Order.update(req.body, {
                where: { id },
            });
            if (!response.length) {
                res.status(400).json({
                    message: 'You order will not updated!',
                });
            }
            return res.json({ message: 'Update sucess!' });
        } catch (error) {
            return res
                .status(500)
                .json({ error: 'Server internal error', error });
        }
    }
}

export default new DeliveryProblemsController();
