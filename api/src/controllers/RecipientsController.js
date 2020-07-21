import User from '../models/User';
import * as Yup from 'yup';
import Recipient from '../models/Recipients';

class RecipientController {
    async store(req, res) {
        const schema = Yup.object({
            name: Yup.string().required().min(3),
            street: Yup.string().required(),
            number: Yup.number().required(),
            complement: Yup.string().min(3),
            state: Yup.string().required().max(2),
            city: Yup.string().required().min(3),
            zipCode: Yup.string().required().min(4),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Schema is not valid' });
        }

        const {
            name,
            street,
            number,
            complement,
            state,
            city,
            zipCode: zip_code,
        } = req.body;

        const response = await Recipient.create({
            name,
            street,
            number,
            complement,
            state,
            city,
            zip_code,
        });

        return res.json({ response });
    }
}

export default new RecipientController();
