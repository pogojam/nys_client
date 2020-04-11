const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const NewSchema = new Schema ({
    name:String,
    image:String,
    discription:String,
    leauges:Array
})

const PlayerModel = mongoose.model('player',NewSchema)

module.exports = PlayerModel