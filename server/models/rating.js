

var mongoose = require('mongoose')

var RatingSchema = new mongoose.Schema({
    stars : {type: Number, required: true},
    comment: {type: String, required: true}
})
mongoose.model('Rating', RatingSchema)


module.exports = RatingSchema