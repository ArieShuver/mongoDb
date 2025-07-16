import { Router } from "express"
import { getallUsers, createUser,updateUser,deleteUser,getUserById} from "../controllers/controllerUser.js";

const router = Router();

router.get("/getAll", getallUsers);
router.post("/addUser",createUser)
router.delete("/deleteUser",deleteUser);
router.put("/updateUser",updateUser);
router.get("/getUserById", getUserById);
export default router;