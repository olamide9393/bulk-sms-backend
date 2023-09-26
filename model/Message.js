const mongooose = require("mongoose");

const { Schema } = mongooose;

const UserSchema = new Schema({
  sender: {
    type: String,
    required: true,
  },
  numbers: {
    type: Array,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongooose.model("message", UserSchema);
