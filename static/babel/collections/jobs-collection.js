'use strict';

//Dependencies
var Backbone = require('../../../node_modules/backbone');

//Models
var Job = require('../models/job-model');

var Jobs = Backbone.Collection.extend({
    model: Job, 
    url: '/api/jobs/'
});

module.exports = Jobs;