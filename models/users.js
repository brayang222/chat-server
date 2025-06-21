import { User } from "../schemas/user.js";

class usersModel {
  constructor() {}

  async create(username) {
    return await User.create({ username });
  }

  async getAll() {
    return await User.find();
  }

  async getById(id) {
    return await User.findById(id);
  }

  async getByUsername(username) {
    return await User.findOne({ username });
  }
}

export default new usersModel();
