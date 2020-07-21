import { Order } from '../models/';
import { Op } from 'sequelize';

class DeliveriesController {
    async index(req, res) {
        try {
            let filters = {};
            const { id } = req.params;
            const { delivered } = req.query;

            if (delivered) {
                filters.end_date = {
                    [Op.ne]: null,
                };
            }

            const response = await Order.findAll({
                where: {
                    deliveryman_id: id,
                    canceled_at: null,
                    ...filters,
                },
            });
            return res.send({ response });
        } catch (error) {
            return res.status(500).json({ error: 'Server internal error' });
        }
    }
}

export default new DeliveriesController();
