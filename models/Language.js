const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema(
  {
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    language: {
      type: String,
      enum: ["English", "German", "French", "Italian", "Spanish", "Portuguese"],
      required: true
    },
    level: { type: Number, enum: [1, 2, 3], required: true }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Language = mongoose.model("Language", languageSchema);
module.exports = Language;
