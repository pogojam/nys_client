const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  gender: String,
  address: {
    apt: String,
    street: String,
    state: String,
    city: String,
    zip: Number
  },
  homePhone: String,
  workPhone: String,
  email: String,
  username: String,
  facebookID: Number,
  googleID: Number,
  players: [Number],
  role: [String]
});

NewSchema.statics.getUser = function(id, cb) {
  return this.findById(id, (err, user) => user);
};

NewSchema.statics.getUsers = async function(id, cb) {
  const users = await this.find({});
  return users;
};

NewSchema.statics.updateUser = function(id, { input }) {
  console.log(id);
  this.findOneAndUpdate(id, input).then(user => user);
};

const UserModel = mongoose.model("user", NewSchema);

module.exports = UserModel;
