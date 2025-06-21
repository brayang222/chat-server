import { Chat } from "../schemas/chat.js";

class chatModel {
  constructor() {}

  async create(data) {
    return await Chat.create(data);
  }

  async getAll() {
    return await Chat.find().populate("members lastMessage.sender");
  }

  async getById(id) {
    return await Chat.findById(id).populate("members lastMessage.sender");
  }

  async getByUser(userId) {
    return await Chat.find({ members: userId }).populate(
      "members lastMessage.sender"
    );
  }

  async updateLastMessage(chatId, lastMessageData) {
    return await Chat.findByIdAndUpdate(
      chatId,
      { lastMessage: lastMessageData },
      { new: true }
    );
  }
}

export default new chatModel();
