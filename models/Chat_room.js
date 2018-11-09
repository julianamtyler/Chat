var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  user: {
    type: Array
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "messages"
    }
  ]
});

var User = mongoose.model("users", UserSchema);

module.exports = User;