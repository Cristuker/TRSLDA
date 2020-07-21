import { Deliveryman } from '../models/';
import * as Yup from 'yup';

class DeliverymanController {
    async store(req, res) {
        try {
            const schema = Yup.object({
                name: Yup.string().required(),
                email: Yup.string().required(),
                avatar_id: Yup.number(),
            });

            if (!(await schema.isValid(req.body))) {
                return res
                    .status(401)
                    .json({ error: 'Request body is not valid!' });
            }

            const { name, email, avatar_id } = req.body;

            const response = await Deliveryman.create({
                name,
                avatar_id,
                email,
            });

            return res.json({ response });
        } catch (error) {
            return res.status(500).json({ error: 'Server internal error' });
        }
    }
}

export default new DeliverymanController();
