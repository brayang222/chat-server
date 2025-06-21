import usersModel from "../models/users.js";

class usersController {
  constructor() {}

  async login(req, res) {
    try {
      const { username } = req.body;

      if (!username) {
        return res.status(400).json({ message: "User is required" });
      }

      const userExists = await usersModel.getByUsername(username);
      if (!userExists) await usersModel.create(username);

      const token = generateToken(username);

      return res
        .status(200)
        .json({ message: "Usuario loggueado con exito", token });
    } catch (error) {
      console.error(error);
    }
  }

  async getUsers(req, res) {
    try {
      const data = await usersModel.getAll();
      res.status(200).json(data);
    } catch (error) {
      console.error(first);
    }
  }
}

export default new usersController();
