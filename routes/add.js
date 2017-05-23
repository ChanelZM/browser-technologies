var express = require('express');
var multer = require('multer');
var flatten = require('flat');

var router = express.Router();
var check = multer();

router.get('/', function(req, res){
    res.render('content/index', {
      myList: "undefined",
      message: "undefined"
    });
});

router.post('/', check.single(), function(req, res){
  var unflattendItems = req.body;
  //Flatten is used to flatten arrays
  var flattenItems = flatten(unflattendItems);

  res.render('content/index', {
    myList: flattenItems,
    message: 'Ingrediënten zijn toegevoegd!'
  });
});

module.exports = router;
