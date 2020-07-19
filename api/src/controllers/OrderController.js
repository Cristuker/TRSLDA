import { Order } from '../models';
import * as Yup from 'yup';


class OrderController {

    async store(req, res) {

        try {
            const schema = Yup.object({
                recipient_id: Yup.string().required(),
                deliveryman_id: Yup.string().required(),
                signature_id: Yup.number(),
                product: Yup.string().required(),
                canceled_at: Yup.date(),
                start_date: Yup.date(),
                end_date: Yup.date(),
            })

            if (!(await schema.isValid(req.body))) {
                return res.status(401).json({ error: "Request body is not valid!" });
            }

            // const { name, email, avatar_id } = req.body;

            // const response = await Order.create({
            //     name,
            //     avatar_id,
            //     email
            // });

            return res.json({ response })
        } catch (error) {
            return res.status(500).json({ error: 'Server internal error' })
        }


    }
}

export default new OrderController();