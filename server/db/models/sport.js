const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const NewSchema = new Schema ({
    name:String,
    image:String,
    discription:String,
    leauges:Array
})

const SportModel = mongoose.model('sport',NewSchema)

module.exports = SportModel