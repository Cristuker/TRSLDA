import User from '../models/User';
import jwt from 'jsonwebtoken';
import auth from '../config/auth';
class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Cannot find this user.' });
        }

        const token = jwt.sign({ user }, auth.secret);

        return res.json({ user: { name: user.name, email }, token });
    }
}

export default new SessionController();
