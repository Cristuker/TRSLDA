import { DeliveryProblems } from '../models/';
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
    }
}

export default new DeliveryProblemsController();
