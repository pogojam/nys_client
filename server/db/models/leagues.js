const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewSchema = new Schema({
  name: String,
  ageStart: Number,
  ageEnd: Number,
  image: String,
  discription: String,
  rules: String
});

NewSchema.statics.makeLeague = async function(data) {
  const newLeague = await new this(data).save;
  console.log(data);
  return newLeague;
};

const LeagueModel = mongoose.model("league", NewSchema);

module.exports = LeagueModel;
