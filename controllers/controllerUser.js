import { getall, getById, create, update ,deleteById} from "../dal/dalUsers.js";

export async function getallUsers(req, res) {
    try {
        const users = await getall();
        res.json(users);
    }
    catch (error) {
        console.log('error', error);
    }
}

export async function createUser(req, res) {
    try {
        const id = req.body;
        const objectId = await create(id);
        res.json({message: "add", id: objectId});
    }
    catch (error) {
        console.log('error', error);
    }
}

export async function updateUser(req, res) {
    const id = req.body.id;
    const user = req.body;
    await update(id, user);
    try {
        res.json({message: "updated"});
    }
    catch(error) {
        console.log('error update server',error);        
    }
}

export async function deleteUser(req, res) {
    const id = req.body.id;
    console.log('delete id', id);
    try {
        await deleteById(id);
        res.json({message: "deleted"});
    }
    catch (error) {
        console.log('error delete server', error);
    }
}           

export async function getUserById(req, res) {
    const id = req.body.id;
    try {
        const user = await getById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log('error get by id server', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

