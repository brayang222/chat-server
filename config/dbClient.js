import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/adopcion?retryWrites=true&w=majority`;
    // "mongodb+srv://brayang222:<db_password>@/?retryWrites=true&w=majority&appName=chat-realtime"
    await mongoose.connect(queryString);
    console.log("MongoDB conectado");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  }
};

export const closeDB = async () => {
  await mongoose.connection.close();
  console.log("Conexión a MongoDB cerrada");
};
