// Set map types
var mapboxID = 'cdawson.map-rfzl19el';
//var mapboxID = 'examples.map-vyofok3q'
var stamenMap = 'watercolor',
    stamenLabels = 'toner-labels';

var mapStyle = GetQueryStringParams('m');
var routeID = GetQueryStringParams('routeID');

// Set map options
var mapOptions = {
    // minZoom : 17,
    // maxZoom : 17,
    zoomControl: false
};

var linestyle = {
    color: 'red',
    dashArray: '15, 15',
    opacity: 1.0
};


if (mapStyle) {
    var map = L.mapbox.map('map', mapStyle, mapOptions);
} else {
    var map = L.mapbox.map('map', mapboxID, mapOptions);
}
// Determine map style
// if (mapStyle == 'new') {
//   var map = L.mapbox.map('map', mapboxID, mapOptions);
// }
// else if (mapStyle) {
//   var map = L.mapbox.map('map', mapStyle, mapOptions);  
// }
// else {
//   // Default map style
//   // Watercolor map option
//   var watercolorurl = 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
//   var tonerlabellayer = new L.StamenTileLayer(stamenLabels);

//   var map = new L.Map('map', mapOptions);

//   L.tileLayer(watercolorurl).addTo(map);
//   map.addLayer(tonerlabellayer);
// }

$(document).ready(function() {
    $('#map-container').hide();
    $('#adventures .column').click(function() {
        $('#banner').slideUp();
        $('#map-container').show('slow');
        initMap();
    });

    $('#homelink').click(function() {
        $('#map-container').slideUp();
        $('#banner').show('slow');
    });
});

var initMap = function() {
    initPlaces();
    var places = document.places();
    var points = places.points();
    // var points = _.filter(places.points(),function(i){ return i !== undefined; });

    if (routeID) {
        places.currentRouteID = routeID;
        var route = places.routePoints(routeID);
        document.polyline = L.polyline(route, linestyle);
        document.polyline.addTo(map);

        window.onresize = function() {
            var idx = document.placeIndex;
            var lat = document.routeObjs[idx].latitude;
            var lon = document.routeObjs[idx].longitude;
            places.centerOnPoint(new L.LatLng(lat, lon));
            places.centerOnPoint(false)
        };
        // markers and popups
        places.routePopups(routeID);

        // Set first place
        // map.fitBounds(document.polyline.getBounds());


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