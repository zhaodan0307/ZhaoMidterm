//use express
var express = require('express');

//instantiate an express router to parse and direct url requests
var router = express.Router();


//add model ref

const Teetime = require('../models/teetime')

//Get : /project show index view
router.get('/',(req, res) =>{
    res.render('teetime/index', { title: 'teetime' });
})


//make public

module.exports = router;