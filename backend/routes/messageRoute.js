import express from "express";
import { sendMessage, getMessages } from "../controllers/messageControllers.js"
import protectedRoutes from "../middleware/ProtectedRoutes.js";

const router = express.Router();

router.get('/:id', protectedRoutes , getMessages)
router.post('/send/:id', protectedRoutes ,sendMessage)

export default router;