var map;
var places;

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
    scrollWheelZoom: false
};

var linestyle = {
    color: 'red',
    dashArray: '15, 15',
    opacity: 1.0
};

var sizeMap = function() {
    var mapTop = Math.max($("#banner").position().top, $("#map-container").position().top);
    var mapHeight = $(window).height() - mapTop;
    mapHeight -= 30;
    $('#map-container, #sidebar, #map').height(mapHeight);
    $('#sidebar').width($('.container').width() *0.3);
    var cssval = $('#sidebar').outerWidth() + 'px';
    $('#map').css( 'left', cssval);
    $('#map').width($('.container').width() - $('#sidebar').outerWidth());

}

var showMap = function() {
    sizeMap();
    $('#map-container').slideDown(400, function() {
        if (!map) {
            createMap();
        }
        if (routeID) {
            setRoute();
        }
        else {
            noRoute();
        }
    });
    $('#banner').slideUp();
}

$(document).ready(function() {
    $('#map-container').hide();
    $('#adventures .column').click(function() {
        routeID = parseInt(this.id.substring(this.id.length - 1));
      //  $(this).css()
        showMap();
    });

    $('#adventures-link').click(function(e) {
        e.preventDefault();
        if ($('#map-container').is(':visible')) {
            return;
        }
        routeID = undefined;
        showMap();
    });

    $('#home-link').click(function(e) {
        e.preventDefault();
        $('#map-container').slideUp();
        $('#banner').slideDown();
    });
    window.onresize = function() {
        if ($('#map-container').is(':visible')) {
            sizeMap();
        }
            // places.centerOnPoint(false)
        };
});

var createMap = function() {
    if (mapStyle) {
        map = L.mapbox.map('map', mapStyle, mapOptions);
    } else {
        map = L.mapbox.map('map', mapboxID, mapOptions);
    }
    map.zoomControl.setPosition('topright');
    places = document.places();
}
var setRoute = function() {
     
         places.currentRouteID = routeID;
         var route = places.routePoints(routeID);
         if (document.polyline) {
             document.polyline.setLatLngs(route);
            document.polyline.redraw();
        } else {
            document.polyline = L.polyline(route, linestyle);
            document.polyline.addTo(map);
        }

//         
//         // markers and popups
         places.routePopups(routeID);

//         // Set first place
//         map.fitBounds(document.polyline.getBounds());


//         // places.centerOnPath(true);
//     } else {
//         map.fitBounds(points);
//         places.popups();

     places.setCurrentPlace(0);
}
var noRoute = function() {
    document.polyline = undefined;
    places.setCurrentPlace(0);
    map.fitBounds(map.markerLayer.getBounds());
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