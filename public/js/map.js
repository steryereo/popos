// Set map types
var mapboxID = 'cdawson.map-0ymh0yul';
var stamenMap = 'watercolor',
    stamenLabels = 'toner-labels';

var mapStyle = GetQueryStringParams('m');

// Set map options
var mapOptions = {
  minZoom : 17,
  maxZoom : 17,
  zoomControl : false
};

var linestyle = {
  color: 'red',
  dashArray: '15, 15',
  opacity : 1.0
};

// Determine map style
if (mapStyle == 'watercolor') {
    // Watercolor map option
    var watercolorurl = 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
    var tonerlabellayer = new L.StamenTileLayer(stamenLabels);

    var map = new L.Map('map', mapOptions);

    L.tileLayer(watercolorurl).addTo(map);
    map.addLayer(tonerlabellayer);
}
else {
    // Default map style
    var map = L.mapbox.map('map', mapboxID, mapOptions);
}

// Initiate POPOS
var popos = document.popos();
var points = popos.walkpath;

document.polyline = L.polyline(points, linestyle);
document.polyline.addTo(map);

map.fitBounds(document.polyline.getBounds());

// markers and popups
popups = popos.popups();

// Set first popo
popos.setCurrentPopos(0);

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
