// link to mongoose
const mongoose = require('mongoose')

// define a schema for teetimes

//add model ref

const Teetime = require('../models/teetime')
var teetimeSchema = new mongoose.Schema({
    golferName: {
        type: String,
        required: true,
        trim: true
    }

})

// make this model public with the name of Teetime
module.exports = mongoose.model('Teetime', teetimeSchema)