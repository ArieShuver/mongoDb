import { ObjectId } from "mongodb";
import { connect } from "../db.js";

export async function getall() {
    const db = await connect();
    return db.collection("users").find().toArray()
}

export async function getById(id) {
    const objectId = new ObjectId(id)
    const db = await connect();
    return db.collection("users").findOne({ _id: objectId });
}

export async function update(id, user) {
    const objectId = new ObjectId(id)
    const db = await connect();
    const result = await db.collection("users").updateOne({ _id: objectId }, { $set: user });
    return result;
}

export async function deleteById(id) {
    const objectId = new ObjectId(id)
    const db = await connect();
    const result = await db.collection("users").deleteOne({ _id: objectId });
    return result;
}

export async function create(user) {
    const db = await connect();
    const result = await db.collection("users").insertOne(user);
    return result.insertedId;
}