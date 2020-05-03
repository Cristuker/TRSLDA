import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../config/auth';

const authMiddleware = async (req, res, next) =>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({ error: 'You need a authorization token'});
    }

    const [,jwtToken] = token.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(jwtToken, authConfig.secret);

        req.userId = decoded.id;

        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Token invalid' });
    }

}

export default authMiddleware;