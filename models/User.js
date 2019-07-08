const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    profilePic: { type: String, default: "../images/munari.jpg" },
    nationality: { type: String, required: true },
    location: {type: String, required: true},
    bio: String,
    langsOffered: {
      type: [
        {
          lang: { type: String, required: true},
          
        }
      ],
      
    },
    langsPractising:  {
      type: [
        {
          lang: { type: String, required: true
 },
          // level: {
          //   type: String,
          //   enum: ["native", "advanced", "intermediate", "beginner"]
          // }
        }
      ],
    },
    faveConvoTopics: { type: [String], required: true },
    avoidConvoTopics: { type: [String], required: true }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
