import usersController from "../controllers/users.js";
import express from "express";

const route = express.Router();

route.post("/login", usersController.login);
route.get("/", usersController.getUsers);

export default route;
