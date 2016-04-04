var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routers = require('./routers');
var port = process.env.PORT || 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routers);

app.listen(port);
