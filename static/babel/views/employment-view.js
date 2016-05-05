'use strict';

//Dependencies
window.$ = window.jQuery = require('../../../node_modules/jquery');
var _ = require('../../../node_modules/underscore');
var Backbone = require('../../../node_modules/backbone');

//Collections
var Jobs = require('../collections/jobs-collection');

//Models
var Job = require('../models/job-model');

var JobView = Backbone.View.extend({
    el: '#work-history',
    model: new Jobs(),
    template: _.template(document.getElementById('experience').innerHTML),
    
    initalize: function() {
        var self = this;
        self.model.fetch({
            success: function(response, data) {
                var sorted = _.sortBy(data,'start_date');
                self.render(sorted);
            },
            error: function(data, response, options) {
                console.log(options);
            }
        });
    },
    
    render: function (models) {
        var self = this;
        _.each(models, self.AddWork, self);
    },
    
    AddWork: function(el, i, array) {
        var self = this;
        self.$el.append(self.template(el));
    },
});

module.exports = JobView;