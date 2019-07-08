const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {type: String, required: true},
    location: {type: String, required: true},
    date: Date,
    description: {type: String, required: true},
    _creator: { type: Schema.Types.ObjectId, ref: "User" },
    _atendees: [{ type: Schema.Types.ObjectId, ref: "User" }]

  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
