var submissions = require('../models/submissions.js');

var formController = {
	formSubmit: function(req, res) {
		// This is where bodyParser gets used, to parse the data in the form
		var data = req.body;

		if (submissions.length < 9) {
			submissions.push(data);
			res.redirect('/view');
		} else {
			res.redirect('/view');
		}
	}
};

module.exports = formController;