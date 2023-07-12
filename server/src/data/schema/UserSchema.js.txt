//www.geeksforgeeks.org/node-js-authentication-using-passportjs-and-passport-local-mongoose/
// importing modules
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true, unique: true },
});

// plugin for passport-local-mongoose
UserSchema.plugin(passportLocalMongoose);

// export userschema
module.exports = mongoose.model("User", UserSchema);
