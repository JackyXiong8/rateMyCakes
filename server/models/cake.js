var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RatingSchema = require('./rating')

var CakeSchema = new mongoose.Schema({
    bakerName : {type: String, required: true},
    image : {type: String, required: true},
    rating: [RatingSchema]
})

mongoose.model('Cake', CakeSchema)
