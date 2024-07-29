import { updateUser , getUser, getUsers, deleteUser, resetPasswordViaEmail, resetpassword} from "../controllers/user";
import express from 'express'
import { verifyAdmin, verifyToken, verifyUser } from "../middlewares/authMiddleware";

const router = express.Router();
router.use(verifyToken)
router.put("/:id", verifyUser , updateUser)
router.get("/:id", getUser)
router.delete("/:id", verifyUser , deleteUser)
router.get("/",verifyAdmin, getUsers)
router.post("/resetpassword", resetPasswordViaEmail)
router.post("/resetpassword/:resetToken", resetpassword)


export default router;


