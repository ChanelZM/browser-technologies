var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var ejs = require('ejs');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var addRouter = require('./js/add');
app.use('/', addRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function () {
    console.log("Running at port 3000");
});
