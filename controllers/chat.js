import chatModel from "../models/chat.js";

class chatController {
  constructor() {}

  async create(req, res) {
    try {
      const { members, isGroup, name } = req.body;
      const chat = await chatModel.create({ members, isGroup, name });
      res.status(201).json(chat);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al crear el chat" });
    }
  }

  async getUserChats(req, res) {
    try {
      const { userId } = req.params;
      const chats = await chatModel.getByUser(userId);
      res.status(200).json(chats);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener los chats" });
    }
  }
}

export default new chatController();
