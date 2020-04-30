import Deliveryman from '../models/Deliveryman';

class DeliverymanController {

    store(req, res){

        return res.json({message:'ok'})

    }
}

export default new DeliverymanController();