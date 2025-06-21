import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  chatId: { type: Schema.Types.ObjectId, ref: "Chat" },
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  content: String,
  messageType: { type: String, default: "text" },
  createdAt: { type: Date, default: Date.now },
});

export const Message = model("Message", messageSchema);
