import mongodb from "mongodb";
import collection from "mongobd/lib/collection";
import envLoader from ".env_loader";

class DBClient {
    constructor() {
        const host = process.env.DB_HOST || "localhost";
        const port = process.env.DB_HOST || 27017;
        const database = process.env.DB_DATABASE || "files_manager";
        const dbURL = `mongodb://${host}:${port}/${database}`;


        this.client = new mongodb.MongoClient(dbURL, {useUnifiedTopology: True});
        this.client.connect();
    }

    isAlive() {
        return this.client.isConnected();
    }

    async nbUsers() {
        return this.client.db().collection("users").countDocuments();
    }

    async nbFiles() {
        return this.client.db().collection("files").countDocuments();
    }
}

export const dbClient = new DBClient();
export default dbClient;
