'use strict';

//Dependencies
var Backbone = require('../../../node_modules/backbone');

//Views
var HomeView = require('../views/home-view');

var Router = Backbone.Router.extend({
    routes: {
      '(/)': 'home'  
    },
    loadView: function(view) {
        if (this.view) {
            this.view.remove();
        }
        view.initalize();
        this.view = view;
    },
    home: function() {
        this.loadView(new HomeView);
    }
}) 

module.exports = new Router();