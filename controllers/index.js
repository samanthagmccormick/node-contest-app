var submissions = require('../models/submissions.js');
var videos = require('../models/video1.js');
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
			videos: videos
		});
	},
	vote1: function(req, res) {
		videos[0].votes = videos[0].votes+1;

		console.log("video1: ", videos[0].votes);
		console.log("video2: ", videos[1].votes);

		res.render('vote', {
			submissions: submissions,
			videos: videos
		});
	},
	vote2: function(req, res) {
		videos[1].votes = videos[1].votes+1;

		console.log("video1: ", videos[0].votes);
		console.log("video2: ", videos[1].votes);

		res.render('vote', {
			submissions: submissions,
			videos: videos
		});
	}
};

module.exports = indexController;