//use express
var express = require('express');

//instantiate an express router to parse and direct url requests
var router = express.Router();


//add model ref

const Teetime = require('../models/teetime')

// GET: /teetime => show index view
router.get('/', (req, res) => {
    // use Artist model to fetch all documents from teetime collection in mongodb
    //得到model的数据,两种可能性，一种是error，一种是得到teetime
    Teetime.find((err, teetime) => {
        //如果数据有error，打出error并且传到前端
        if (err) {
            console.log(err)
            res.end(err)
        }
        //否则
        else {

            console.log(teetime)
            res.render('teetime/index', {
                //这里是pass list of teetime data

                teetime: teetime,
                title: 'Teetimes'

            })
        }
    })
})


// GET: /teetime/create => show new artist form

router.get('/create',(req,res) => {
    //render ,passing a json as option
    res.render('teetime/create',{
        title: 'Add a new Teetime'
    })
})




//make public

module.exports = router;