import { Router } from "express";
import chatController from "../controllers/chat.js";

const router = Router();

router.post("/", chatController.create);
router.get("/user/:userId", chatController.getUserChats);

export default router;
