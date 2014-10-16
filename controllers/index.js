var submissions = require('../models/submissions.js');

var indexController = {
	index: function(req, res) {
		res.render('index', {
			submissions: submissions
		});
	},
	sorry: function(req, res) {
		res.render('sorry', {
			submissions: submissions
		});
	}
};

module.exports = indexController;