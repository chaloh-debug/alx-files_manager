import { redisClient } from '../utils/redis';
import dbClient from '../utils/db';

export default class AppController {
  static getStatus(req, res) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    return res.status(200).send(status);
  }

  static async getStats(req, res) {
    const users = await dbClient.nbUsers();
    const files = await dbClient.nbFiles();
    const status = {
      users,
      files,
    };
    return res.status(200).send(status);
  }
}
