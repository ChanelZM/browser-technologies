var express = require('express');
var multer = require('multer');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('content/index');
});

module.exports = router;
