import { Message } from "../schemas/message.js";

class messageModel {
  constructor() {}

  async create(data) {
    return await Message.create(data);
  }

  async getAll() {
    return await Message.find().populate("sender");
  }
}

export default new messageModel();
