import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();
const client = new MongoClient(process.env.DB_CONNECTION)
let db;

export async function connect() {
    if (!db) {
        await client.connect();
        db = client.db("Arie")
        console.log('connection');

    }
    return db
}

connect()

