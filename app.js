var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var indexController = require('./controllers/index.js');
var formController = require('./controllers/form.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/view', indexController.view);
app.get('/vote', indexController.vote);
app.get('/vote1', indexController.vote1);
app.get('/vote2', indexController.vote2);


app.post('/formSubmitted', formController.formSubmit);


var server = app.listen(3555, function() {
	console.log('Express server listening on port ' + server.address().port);
});
