'use strict';

//Dependencies
window.$ = window.jQuery = require('../../../node_modules/jquery');
var _ = require('../../../node_modules/underscore');
var Backbone = require('../../../node_modules/backbone');

//Collections
var Projects = require('../collections/project-collection');

//Models
var Project = require('../models/project-model');

var ProjectView = Backbone.View.extend({
    el: '#projects-list',
    model: new Projects(),
    template: _.template(document.getElementById('project-item').innerHTML),

    initalize: function() {
        var self = this;
        self.model.fetch({
            success: function(response, data) {
                self.render(data);
            },
            error: function(data, response, options) {
                console.log(options);
            }
        });
    },
    
    render: function(models) {
        var self = this;
        var sorted = _.sortBy(models, 'id');
        _.each(sorted,self.AddProject,self)
    },
    
    AddProject: function(el, i, array) {
        var self = this;
        self.$el.append(self.template(el));
    },
    
});

module.exports = ProjectView;