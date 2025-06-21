import { Schema, model } from "mongoose";

const chatSchema = new Schema({
  isGroup: { type: Boolean, default: false },
  name: String,
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  lastMessage: {
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    content: String,
    createdAt: Date,
  },
});

export const Chat = model("Chat", chatSchema);
