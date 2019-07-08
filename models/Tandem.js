const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tandemSchema = new Schema(
  {
    _user1: { type: Schema.Types.ObjectId, ref: "User" }, 
    _user2: { type: Schema.Types.ObjectId, ref: "User" },
    isAccepted: {type: String, default: 'pending', enum: ['pending', 'accepted']},
    messages: [ {
      text: String,
      date: Date,
      _creator: { type: Schema.Types.ObjectId, ref: "User" } 
    }]

  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Tandem = mongoose.model("Tandem", tandemSchema);
module.exports = Tandem;
