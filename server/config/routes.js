const mongoose = require('mongoose')


var basic = require('../controllers/basic.js')

module.exports = function(app){

    app.get('/cakes', basic.index)

    app.post('/cakes', basic.create)

    app.post('/comment', basic.comment)

    app.post('/singleCake', basic.singleCake)

    }