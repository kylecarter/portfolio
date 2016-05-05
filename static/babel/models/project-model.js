'use strict';

//Dependencies
var Backbone = require('../../../node_modules/backbone');

var Project = Backbone.Model.extend({
    urlRoot: '/api/projects/',
});

module.exports = Project;