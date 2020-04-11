const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewSchema = new Schema({
  timeOfYear: String,
  startDate: Date,
  endDate: Date,
  leagues: Array
});

NewSchema.statics.getSeasons = function(min, max) {
  return this.find({});
};

NewSchema.statics.updateSeason = async function(input) {
  const { id = null } = input;
  if (!id) {
    const newSeason = await new this(input).save();
    return newSeason;
  }
};

const SeasonModel = mongoose.model("season", NewSchema);

module.exports = SeasonModel;
