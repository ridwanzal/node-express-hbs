var express = require('express'); // import express
var router = express.Router(); //initiation express router
 
/**
* Route /subscribe Method GET
*/
router.get('/', function(req, res, next) {
   res.render('subscribe/index', {
     title: 'Subscribe',
     layout: "layouts/custom-layout" //set layout using custom layout
    });
});
 
/**
* Route /subscribe Method POST
*/
router.post('/', function(req, res, next) {
   res.render('subscribe/success', {
     title: "Subscribe",
     email: req.param('email'),        //set variable email from paramater "email"
     layout: "layouts/custom-layout"   //set layout using custom layout
   });
});
 
module.exports = router;