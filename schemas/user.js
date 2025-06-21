import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  createdAt: Date,
});

export const User = mongoose.model("User", userSchema);
