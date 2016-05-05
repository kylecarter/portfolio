'use strict';

//Dependencies
var Backbone = require('../../../node_modules/backbone');

//Models
var Project = require('../models/project-model');

var Projects = Backbone.Collection.extend({
    model: Project, 
    url: '/api/projects/'
});

module.exports = Projects;