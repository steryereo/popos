var map;
var places;
// Set map types
var tileLayers = [L.mapbox.tileLayer('cdawson.map-rfzl19el'),
                  L.mapbox.tileLayer('cdawson.map-dijsvtyd')];
//var mapboxID = 'examples.map-vyofok3q'
var stamenMap = 'watercolor',
    stamenLabels = 'toner-labels';

var currentTileLayer = 0;
var mapStyle = GetQueryStringParams('m');
var routeID = GetQueryStringParams('routeID');

// Set map options
var mapOptions = {
    minZoom: 10,
    zoomControl:false,
    scrollWheelZoom: true
};

var linestyle = {
    color: '#e85355',
    dashArray: '15, 15',
    opacity: 1.0
};

var sizeMap = function() {
    // var mapTop = Math.max($("#banner").position().top, $("#map-container").position().top);
    var mapTop = $("#nav").offset().top + $("#nav").height();
    var mapHeight = $(window).height() - mapTop;
    mapHeight -= 30;
    $('#map-container, #sidebar, #map').height(mapHeight);
        //return;
    var sidebarWidth = (Math.floor($('.container').width() *0.35));
    $('#sidebar').width(sidebarWidth);
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
    $('#below-map').slideDown();
    $("html, body").animate({ scrollTop: 0 }, 400);
}
var goHome = function () {
        $('#map-container').slideUp();
        $('#banner').slideDown();
        $('#below-map').slideDown();
}

$(document).ready(function() {
    $('#map-container').hide();
    goHome();
    $('#adventures .column, #nav li ul li a').click(function() {
        // routeID = parseInt(this.id.substring(this.id.length - 1));
        routeID = $(this).data('adventure')
      //  $(this).css()
        showMap();
    });

    $('#home-link').click(function(e) {
        e.preventDefault();
        goHome();

    });
    $('#news-link').click(function(e) {
        e.preventDefault();
    });

    $('#about-link').click(function(e) {
        e.preventDefault();
    });
    $('#daynight').click(function(e) {
        if (map.hasLayer(tileLayers[currentTileLayer])) {
            map.removeLayer(tileLayers[currentTileLayer]);
        }
        currentTileLayer = 1 - currentTileLayer;
        map.tileLayer = tileLayers[currentTileLayer].addTo(map);
    });
    window.onresize = function() {
        if ($('#map-container').is(':visible')) {
            sizeMap();
            map.fitBounds(document.polyline.getBounds().pad(0.1));
        }
            // 
    };
});

var createMap = function() {
    if (mapStyle) {
        map = L.mapbox.map('map');
    } else {
        map = L.mapbox.map('map');
    }
    map.tileLayer = tileLayers[currentTileLayer].addTo(map);
  //  map.setOptions(mapOptions);

     map.zoomControl.removeFrom(map);
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