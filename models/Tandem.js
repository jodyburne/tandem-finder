const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tandemSchema = new Schema(
  {
    _proposer: { type: Schema.Types.ObjectId, ref: "User" },
    _proposedTo: { type: Schema.Types.ObjectId, ref: "User" },
    status_proposer: {
      type: string,
      enum: [accept, decline],
      default: "accept"
    },
    status_proposer: {
      type: string,
      enum: [accept, decline, pending],
      default: "pending"
    },
    language_proposer: { type: Schema.Types.ObjectId, ref: "Language" },
    language_proposedTo: { type: Schema.Types.ObjectId, ref: "Language" }
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
