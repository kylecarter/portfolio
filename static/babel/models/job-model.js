'use strict';

//Dependencies
var Backbone = require('../../../node_modules/backbone');

var Job = Backbone.Model.extend({
    urlRoot: '/api/jobs/',
});

module.exports = Job;