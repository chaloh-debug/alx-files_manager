import { v4 as uuidv4 } from 'uuid';
import redisClient from '../utils/redis';

export default class AuthController {
  static async getConnect(req, res) {
    const { authorization } = req.headers;
    const token = uuidv4();

    await redisClient.set(`auth_${token}`, authorization, 86400);
    res.status(200).json({ token });
  }

  static async getDisconnect(req, res) {
    const { token } = req;
    const del = await redisClient.del(`auth_${token}`);
    if (del === 1) {
      res.status(204).send();
    }
  }
}
