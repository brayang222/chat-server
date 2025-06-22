import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  content: String,
  messageType: { type: String, default: "text" },
  createdAt: { type: Date, default: Date.now },
});

export const Message = model("Message", messageSchema);
