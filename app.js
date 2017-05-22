var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var ejs = require('ejs');

var app = express();

//Static folder set to public
app.use(express.static(path.join(__dirname, 'public')));

//Routes to the js files
var addRouter = require('./routes/add');
app.use('/', addRouter);

//Template in views , views engine ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Setup to get body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Start
app.listen(process.env.PORT || 3000, function () {
    console.log("Running at port 3000");
});
