var layertypea = 'watercolor';
var watercolorlayer = new L.StamenTileLayer(layertypea);

var layertypeb = 'toner-labels';
var tonerlabellayer = new L.StamenTileLayer(layertypeb);

var mapOptions = {
  minZoom : 17,
  maxZoom : 17
};
var map = new L.Map('map', mapOptions);

var linestyle = {
  color: 'red',
  dashArray: '15, 15',
  opacity : 1.0
};

var popos = document.popos();
var points = popos.walkpath;

document.polyline = L.polyline(points, linestyle);
document.polyline.addTo(map);

map.fitBounds(document.polyline.getBounds());

var watercolorurl = 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
L.tileLayer(watercolorurl).addTo(map);
map.addLayer(tonerlabellayer);

// markers and popups
popups = popos.popups();

// Set first popo
popos.setCurrentPopos(0);
