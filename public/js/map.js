var map;

// Set map types
var mapboxID = 'cdawson.map-rfzl19el';
//var mapboxID = 'examples.map-vyofok3q'
var stamenMap = 'watercolor',
    stamenLabels = 'toner-labels';

var mapStyle = GetQueryStringParams('m');
var routeID = GetQueryStringParams('routeID');

// Set map options
var mapOptions = {
    minZoom: 10,
    // maxZoom : 17,
    // zoomControl: true,
    scrollWheelZoom: false
};

var linestyle = {
    color: 'red',
    dashArray: '15, 15',
    opacity: 1.0
};


$(document).ready(function() {

    $('#map-container').hide();
    $('#adventures .column').click(function() {
        //    $('#map-container').css("display", "block");
        routeID = parseInt(this.id.substring(this.id.length - 1));

        $('#map-container').slideDown(400, function() {
            if (!map) {createMap();}
            // map.tileLayer.on('ready', function(e) {
                initMap();
            // });

        });
        $('#banner').slideUp();
    });

    $('#homelink').click(function(e) {
        e.preventDefault();
        $('#map-container').slideUp();
        $('#banner').slideDown();
    });
});

var createMap = function() {
    if (mapStyle) {
        map = L.mapbox.map('map', mapStyle, mapOptions);
    } else {
        map = L.mapbox.map('map', mapboxID, mapOptions);
    }
    map.zoomControl.setPosition('topright');
}
var initMap = function() {

    initPlaces();
    var places = document.places();
    var points = places.points();
    // var points = _.filter(places.points(),function(i){ return i !== undefined; });

    if (routeID) {
        places.currentRouteID = routeID;
        var route = places.routePoints(routeID);
        if (document.polyline) {
            document.polyline.setLatLngs(route);
            document.polyline.redraw();
        } else {
            document.polyline = L.polyline(route, linestyle);
            document.polyline.addTo(map);
        }

        window.onresize = function() {
            var idx = document.placeIndex;
            var lat = document.routeObjs[idx].latitude;
            var lon = document.routeObjs[idx].longitude;
            places.centerOnPoint(new L.LatLng(lat, lon));
            // places.centerOnPoint(false)
        };
        // markers and popups
        places.routePopups(routeID);

        // Set first place
        map.fitBounds(document.polyline.getBounds());


        // places.centerOnPath(true);
    } else {
        map.fitBounds(points);
        places.popups();
    }
    places.setCurrentPlace(0);
}

    function GetQueryStringParams(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }