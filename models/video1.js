var submissions = require('../models/submissions.js');
var _ = require('underscore');

var shuffled = _.shuffle(submissions);
var video1 = shuffled[0];
var video2 = shuffled[1];

var videos = [video1, video2];

module.exports = videos;