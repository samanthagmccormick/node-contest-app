var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var formController = require('./controllers/form.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/sorry', indexController.sorry);

app.post('/formSubmitted', formController.formSubmit);


var server = app.listen(3555, function() {
	console.log('Express server listening on port ' + server.address().port);
});
