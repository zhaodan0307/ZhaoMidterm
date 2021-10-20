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


// POST: /teetime/create => process form submission & save new Teetime document

router.post('/create', (req, res) => {
    // use Mongoose model to create a new Teetime document
    Teetime.create({
        //read the input from our form called name
        golferName: req.body.golferName,
        holes: req.body.holes,
        cart: req.body.cart,
        date: req.body.date,
        greenFee: req.body.greenFee



    }, (err, newArtist) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else { // save successful; update artists list view
            //go back to main artists page
            res.redirect('/teetime')
        }
    })
})




// GET: /artists/edit/abc123 => show pre-populated Edit form
router.get('/edit/:_id', (req, res) => {
    // read _id from url param
    let _id = req.params._id

    //找到要edit的id，然后去渲染那个edit
    // query the db for the selected Artist document
    Teetime.findById(_id, (err, teetime) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            // load the edit view and pass the selected Artist doc to it for display
            res.render('teetime/edit', {
                title: 'Teetime Details',
                teetime: teetime
            })
        }
    })
})




// POST: /teetime/edit/abc123 => update existing Artist doc with values from form submission
router.post('/edit/:_id', (req, res) => {
    // get document id from url param
    let _id = req.params._id

    // Use Mongoose findByIdAndUpdate to save changes to existing doc
    Teetime.findByIdAndUpdate({ _id: _id}, {
        'golferName': req.body.golferName,
        'holes': req.body.holes,
        'cart': req.body.cart,
        'date': req.body.date,
        'greenFee': req.body.greenFee



    }, null,(err, teetime) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/teetime')
        }
    })
})





//make public

module.exports = router;