import messageModel from "../models/message.js";
import chatModel from "../models/chat.js";

class messageController {
  constructor() {}

  async create(req, res) {
    try {
      const { chatId, sender, content } = req.body;
      const message = await messageModel.create({ chatId, sender, content });

      await chatModel.updateLastMessage(chatId, {
        sender,
        content,
        createdAt: message.createdAt,
      });

      res.status(201).json(message);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al enviar mensaje" });
    }
  }

  async getByChat(req, res) {
    try {
      const { chatId } = req.params;
      const messages = await messageModel.getByChatId(chatId);
      res.status(200).json(messages);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener mensajes" });
    }
  }
}

export default new messageController();
