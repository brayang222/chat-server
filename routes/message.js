import { Router } from "express";
import messageController from "../controllers/message.js";

const router = Router();

router.post("/", messageController.create);
router.get("/:chatId", messageController.getByChat);

export default router;
