const mongoose = require('mongoose')
var Cake = mongoose.model('Cake')
var Rating = mongoose.model('Rating')

module.exports = {
    
    index : function(request, response){
        Cake.find({}, function(err, data){
            if (err){
                response.json({Error:err})
            } else{
                response.json({data})
            }
        })
    },



    create: function(request, response){
        console.log(request.body)
        Cake.create({bakerName : request.body.bakerName, image : request.body.url}, function(err, data){
            if(err){
                response.json({error: err})
            } else {
                response.json({data})
            }
        })
    },


    comment: function(request, response){

        Rating.create({stars: request.body.stars, comment: request.body.comment}, function(err, data){
            if(err){
                response.json({Error: err})
            } else {
                Cake.findOneAndUpdate({_id: request.body.id}, {$push: {rating: data}}, function(err, data){
                    if (err){
                        response.json({error: err})
                    } else {
                        response.json({data})
                    }
                })
            }
        })
    },

    singleCake: function(request, response){
        console.log(request.body)

        Cake.findById({_id : request.body._id}, function(err, data){
            if(err){
                response.json({Error: err})
            } else {
                console.log(data)
                response.json({data})
                
            }
        })
    }

}