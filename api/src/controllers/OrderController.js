import { Order } from '../models';
import * as Yup from 'yup';


class OrderController {

    async store(req, res) {


        const schema = Yup.object({
            recipient_id: Yup.string().required(),
            deliveryman_id: Yup.string().required(),
            product: Yup.string().required().min(3),
            // canceled_at: Yup.date(), put
            start_date: Yup.date(),
            // end_date: Yup.date(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: "Request body is not valid!" });
        }

        //A data de início deve ser cadastrada assim que for feita a retirada do produto pelo entregador, e as retiradas só podem ser feitas entre as 08:00 e 18:00h.

        const { recipient_id, deliveryman_id, product, start_date } = req.body;

        const response = await Order.create({
            recipient_id,
            deliveryman_id,
            product,
            start_date
        });

        return res.json({ response })

    }
}

export default new OrderController();