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
    },

    holes: {
        type: Number,
        required: true,
        trim: true
    },

    cart: {
        type:Number,
        required: true,
        trim: true
    }
    ,
    date: {
        type: Date,
        required: true,
        trim: true
    },

    greenFee: {
        type: Number,
        required: false,
        trim: true
    }


})

// make this model public with the name of Teetime
module.exports = mongoose.model('Teetime', teetimeSchema)