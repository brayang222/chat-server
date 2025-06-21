import { Message } from "../schemas/message.js";

class messageModel {
  constructor() {}

  async create(data) {
    return await Message.create(data);
  }

  async getByChatId(chatId) {
    return await Message.find({ chatId })
      .sort({ createdAt: 1 })
      .populate("sender");
  }
}

export default new messageModel();
