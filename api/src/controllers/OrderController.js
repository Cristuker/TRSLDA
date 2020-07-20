import { Order } from '../models';
import * as Yup from 'yup';
import { checkStartDateIsValid } from '../utils/avaibleTime';
import { isBefore } from 'date-fns';
class OrderController {

    async store(req, res) {

        try {
            const schema = Yup.object({
                recipient_id: Yup.string().required(),
                deliveryman_id: Yup.string().required(),
                product: Yup.string().required().min(3),
                start_date: Yup.date(),
            })

            if (!(await schema.isValid(req.body))) {
                return res.status(401).json({ error: "Request body is not valid!" });
            }

            const { recipient_id, deliveryman_id, product, start_date } = req.body;

            const response = await Order.create({
                recipient_id,
                deliveryman_id,
                product,
                start_date,
                status: 1
            });

            return res.json({ response })
        } catch (error) {
            return res.status(500).json({ message: 'Server internal error', error });
        }

    }

    async update(req, res) {

        try {

            const schema = Yup.object({
                id: Yup.number().required(),
                recipient_id: Yup.string(),
                deliveryman_id: Yup.string(),
                product: Yup.string().min(3),
                canceled_at: Yup.date(),
                start_date: Yup.date(),
                end_date: Yup.date(),
                status: Yup.boolean(),
            });

            if (!(await schema.isValid(req.body))) {
                return res.status(401).json({ error: "Request body is not valid!" });
            }

            const { id } = req.body;
            delete req.body.id;
            const response = await Order.findOne({
                where: { id }
            })

            if (!response) {
                return res.status(400).json({ message: 'This order not exists' });
            }

            if (req.body.start_date) {
                const iCanGetOrder = checkStartDateIsValid(req.body.start_date);

                if (!iCanGetOrder) {
                    return res.status(400).json({ message: 'Start hour is invalid' })
                }
            }

            if (req.body.end_date) {
                if (isBefore(new Date(req.body.end_date), new Date(response.start_date))) {
                    return res.status(400).json({ message: 'End date is before start date' })
                }
            }

            if (req.body.canceled_at) {
                if (isBefore(new Date(req.body.canceled_at), new Date(response.start_date))) {
                    return res.status(400).json({ message: 'Canceled date is before start date' })
                }
            }

            const updateResponse = await Order.update(req.body, { where: { id } });

            if (!updateResponse.length) {
                return res.status(500).json({ message: 'Server internal error', error: 'Update length' });
            }

            return res.json({ message: 'Update sucess!' })

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Server internal error' });
        }

    }
}

export default new OrderController();