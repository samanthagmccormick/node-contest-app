var submissions = require('../models/submissions.js');
var _ = require('underscore');


var video1 = _.sample(submissions);
var video2 = _.sample(submissions);

module.exports = video1;