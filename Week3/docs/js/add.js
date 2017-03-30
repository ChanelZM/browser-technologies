var express = require('express');
var multer = require('multer');
var flatten = require('flat');

var router = express.Router();
var check = multer();

router.get('/', function(req, res){
    res.render('content/index', {
      myList: "undefined"
    });
});

router.post('/', check.single(), function(req, res){
  var unflattendItems = req.body;
  var flattenItems = flatten(unflattendItems);
  console.log(flattenItems);
  res.render('content/index', {
    myList: flattenItems
  });
});

module.exports = router;
