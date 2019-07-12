const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tandemSchema = new Schema(
  {
    _proposer: { type: Schema.Types.ObjectId, ref: "User" },
    _proposedTo: { type: Schema.Types.ObjectId, ref: "User" },
    status_proposer: { // take care of this later
      type: String,
      enum: ['accept', 'decline'],
      default: "accept"
    },
    status_proposedTo: {
      type: String,
      enum: ['accept', 'decline', 'pending'],
      default: "pending"
    },
    _language_proposer: { type: Schema.Types.ObjectId, ref: "Language" },
    _language_proposedTo: { type: Schema.Types.ObjectId, ref: "Language" }
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
