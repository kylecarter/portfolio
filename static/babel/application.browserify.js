'use strict';

//Dependencies
window.$ = window.jQuery = require('../../node_modules/jquery');
var _ = require('../../node_modules/underscore');
var Backbone = require('../../node_modules/backbone');
// var React = require('../../node_modules/react');
// var d3 = require('../../node_modules/d3');

//Routes
var Router = require('./routes/router');

//View
var HomeView = require('./views/home-view')

class Portfolio {
    constructor() {
        this.initalize = function() {
            Backbone.history.start({
                pushState: true,
                hasChange: false
            });
        }
    }
}

$.ajaxSetup({
  data: {
      format: 'json'
  }
});

var p = new Portfolio();
p.initalize();