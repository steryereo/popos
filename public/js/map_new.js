// Set map types
var mapboxID = 'cdawson.map-rfzl19el';
var stamenMap = 'watercolor',
stamenLabels = 'toner-labels';

var mapStyle = GetQueryStringParams('m');
var routeID = GetQueryStringParams('routeID');

// Set map options
var mapOptions = {
  // minZoom : 17,
  // maxZoom : 17,
  zoomControl : false
};

var linestyle = {
  color: 'red',
  dashArray: '15, 15',
  opacity : 1.0
};

if (mapStyle) {
  var map = L.mapbox.map('map', mapStyle, mapOptions);  
}
else {
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

// Initiate POPOS
// var initMap = function (d) {
var popos = document.popos();
var points = popos.points();
// var points = _.filter(popos.points(),function(i){ return i !== undefined; });

if (routeID) {
  popos.currentRouteID = routeID;
  var route = popos.routePoints(routeID);
  document.polyline = L.polyline(route, linestyle);
  document.polyline.addTo(map);

  window.onresize = function(){
    var idx = document.poposindex;
    var lat = document.routeObjs[idx].latitude;
    var lon = document.routeObjs[idx].longitude;
    popos.centerOnPoint(new L.LatLng(lat, lon));
    popos.centerOnPoint(false)
  };
  // markers and popups
  popos.routePopups(routeID);

  // Set first popo
  // map.fitBounds(document.polyline.getBounds());

  // Mark navigation as active
  $("nav a[href*=" + parseInt(routeID, 10) + "]").addClass('active');

  // popos.centerOnPath(true);
}
else {
  map.fitBounds(points);
  popos.popups();
}
popos.setCurrentPopos(0);


// }
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
