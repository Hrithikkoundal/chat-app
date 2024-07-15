import express from "express"
import protectedRoutes from "../middleware/ProtectedRoutes.js";
import { users } from "../controllers/UsersController.js";

const router = express.Router();

router.get("/", protectedRoutes , users)
export default router;