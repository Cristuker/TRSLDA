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
            console.log(req.body);
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
}

export default new DeliveryProblemsController();
