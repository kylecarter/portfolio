'use strict';

//Dependencies
window.$ = window.jQuery = require('../../../node_modules/jquery');
var _ = require('../../../node_modules/underscore');
var Backbone = require('../../../node_modules/backbone');

//Views
var ProjectView = require('./project-view');
var WorkHistory = require('./employment-view');

var HomeView = Backbone.View.extend({
    el: '#main',

    initalize: function() {
        var self = this;
        self.Projects = new ProjectView();
        self.Projects.initalize();
        self.Employment = new WorkHistory();
        self.Employment.initalize();
        self.render();
    },

    render: function() {
        var self = this;
        self.MakeMap({lat: 30.3889868, lng: -97.6710889})
    },

    MakeMap: function(geo) {
        var infobox =  _.template(document.getElementById('map-info').innerHTML);
        var map = new google.maps.Map(document.getElementById('map'), {
            center: geo,
            zoom: 7,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            draggable: false,
            scrollwheel: false
        });
        var marker = new google.maps.Marker({
            position: geo,
            map: map,
            title: 'I live in Austin, Texas.'
        });
        var infowindow = new google.maps.InfoWindow({
            content: infobox()
        });
        infowindow.open(map, marker);
    }

});

module.exports = HomeView;