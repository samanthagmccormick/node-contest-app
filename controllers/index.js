var submissions = require('../models/submissions.js');
var video1 = require('../models/video1.js');
var video2 = require('../models/video2.js');
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
		res.render('vote', {
			submissions: submissions,
			video1: video1,
			video2: video2
		});
	},
	vote1: function(req, res) {
		console.log(video1);
		console.log(video2);

		video1.votes = video1.votes+1;

		console.log("video1: ", video1.votes);
		console.log("video2: ", video2.votes);

		res.render('vote', {
			submissions: submissions,
			video1: video1,
			video2: video2
		});

		// res.send("Submitted");
		// console.log(req.params);

	},
	vote2: function(req, res) {
		console.log(video1);
		console.log(video2);

		video2.votes = video2.votes+1;

		console.log("video1: ", video1.votes);
		console.log("video2: ", video2.votes);

		res.render('vote', {
			submissions: submissions,
			video1: video1,
			video2: video2
		});


		// res.send("Submitted");
		// console.log(req.params);

	}
};

module.exports = indexController;