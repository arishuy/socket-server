const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    pic: {
      type: String,
      trim: true,
      default:
        "https://i.pinimg.com/originals/5c/74/84/5c7484d8d8e9d93710148c56c4bf30cf.jpg",
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

//Document middleware: runs before .save() and .create()
chatSchema.pre("save", async function (next) {
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
