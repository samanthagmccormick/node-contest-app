var submissions = require('../models/submissions.js');
var _ = require('underscore');

var indexController = {
	index: function(req, res) {
		res.render('index', {
			submissions: submissions
		});
	},
	view: function(req, res) {
		res.render('view', {
			submissions: submissions
		});
	},
	vote: function(req, res) {
		var video1 = _.sample(submissions);
		var video2 = _.sample(submissions);
		res.render('vote', {
			submissions: submissions,
			video1: video1,
			video2: video2
		});
	},
	voteSubmitted: function(req, res) {
		console.log("Submitted");
		console.log(req.params);

	}
};

module.exports = indexController;