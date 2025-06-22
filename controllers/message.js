import messageModel from "../models/message.js";

class messageController {
  constructor() {}

  async create(req, res) {
    try {
      const { sender, content } = req.body;
      const message = await messageModel.create({ sender, content });

      res.status(201).json(message);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al enviar mensaje" });
    }
  }

  async getMessages(req, res) {
    try {
      const messages = await messageModel.getAll();
      res.status(200).json(messages);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener mensajes" });
    }
  }
}

export default new messageController();
