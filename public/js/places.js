document.places = function() {
    var route_stops = {
        name:"",
        stops: []
    };
    //  var places_data;
    var markerLayer = map.markerLayer;
    var sortedLayers = function() {
        if (currentRouteID !== undefined) {
            return _.sortBy(markerLayer.getLayers(), function(l) {
                return l.feature.properties.route_order;
            });
        }
        else {
            return _.sortBy(markerLayer.getLayers(), function(l) {
                return l.feature.properties.name;
            });
        }
    }

    markerLayer.on('click', function(e) {
        var l = sortedLayers();
        var i = l.indexOf(e.layer);
        e.layer.unbindPopup();
        setCurrentPlace(i);
    });

    // markerLayer.loadURL('/places.geojson');
    // places_data = markerLayer.getGeoJSON();
    var places_json = '/places.geojson',
        routes_json = '/routes.geojson',
        places_data = [],
        routes_data = [];

    // //places_data = d.feed.entry;

    $.ajax({
        url: places_json,
        async: false,
        dataType: 'json',
        success: function(i) {
            places_data = i;
            markerLayer.setGeoJSON(i);
        }
    });

        $.ajax({
        url: routes_json,
        async: false,
        dataType: 'json',
        success: function(i) {
            routes_data = i;
            //markerLayer.setGeoJSON(i);
        }
    });

    var routeNames = ["", "POPOS", "", "", "", "Let's Get Physical", "Beautiful Views", "Kids Corner"];
   
    var placeMarker = {
        default: L.icon({
            iconUrl: 'img/marker.png',
            // shadowUrl: 'img/marker-shadow.png',
            iconSize: [50, 50],
            iconAnchor: new L.Point(25, 45)
        }),
        selected: L.icon({
            iconUrl: 'img/marker_highlight.png',
            // shadowUrl: 'img/marker-shadow.png',
            iconSize: [50, 50],
            iconAnchor: new L.Point(25, 45)
        })
    };



    //  document.places = [];
    document.routeObjs = [];


    var centerOnPath = function(reset) {
        // this should move the center of the polyline to the center of the "non-detailview" map area
        reset = typeof reset !== 'undefined' ? reset : false; //default argument reset = false
        var clearAreaLeft = $("#detailview").width() + $("#detailview").position().left;
        var clearAreaCenter = Math.floor($('#map-container').width() - ($('#map-container').width() - clearAreaLeft) / 2);
        var centerOffset = clearAreaCenter - Math.floor($('#map-container').width() / 2);

        var z = map.getBoundsZoom(document.polyline.getBounds());
        //var z = 17; // Hardcoded - BAD!

        var pathCenterAbs = map.project(document.polyline.getBounds().getCenter(), z);
        var newCenterLatLng = map.unproject([pathCenterAbs.x - centerOffset, pathCenterAbs.y], z);
        map.setView(newCenterLatLng, z, reset);
    };
    var centerOnPoint = function(p, reset) {
        // this should move the center of the polyline to the center of the "non-detailview" map area
        reset = typeof reset !== 'undefined' ? reset : false; //default argument reset = false
        var clearAreaLeft = $("#detailview").width() + $("#detailview").position().left;
        var clearAreaCenter = Math.floor($('#map-container').width() - ($('#map-container').width() - clearAreaLeft) / 2);
        var centerOffset = clearAreaCenter - Math.floor($('#map-container').width() / 2);
        var z = 17; // Hardcoded - BAD!

        //if (document.polyline) {
        z = map.getZoom();
        //}
        var pathCenterAbs = map.project(p, z);
        var newCenterLatLng = map.unproject([pathCenterAbs.x - centerOffset, pathCenterAbs.y], z);
        map.setView(newCenterLatLng, z, reset);
    };
    function isScrolledIntoView(container, elem)
{
    var docViewTop = container.offset().top;
    var docViewBottom = docViewTop + container.height();

    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}
    var setCurrentPlace = function(idx) {

        document.placeIndex = idx;
        //var layers = [];
        //markerLayer.eachLayer(function(marker) { layers.push(marker); });
        var layers = sortedLayers();
        var place = layers[idx];

        $( "#photo_large" ).hide();

        $('#sidebar-list ul li').removeClass("selected");
        // reset other popos icons
        _.forEach(layers, function(l) {
            //                l.setIcon(placeMarker.default);
            l.setIcon(
                L.divIcon({
                    iconSize: [50, 50],
                    iconAnchor: new L.Point(25, 45),
                    className: "default-icon",
                    html: (currentRouteID !== undefined) ? l.feature.properties.route_order.toString() : ""
                })
            );
        });
        if (place) {
            var selectedListItem = $('#sidebar-list ul li:eq(' + idx + ')');
            selectedListItem.addClass("selected");
            if (!isScrolledIntoView($('#sidebar-list'), selectedListItem)) {
                // $('#sidebar-list').animate({scrollTop: selectedListItem.offset().top-$('#sidebar-list').offset().top}, 250);
                                $('#sidebar-list').scrollTop(selectedListItem.offset().top-$('#sidebar-list ul li:eq(0)').offset().top);

            }
            // set default icon
            //place.setIcon(placeMarker.selected);
            place.setIcon(
                L.divIcon({
                    iconSize: [50, 50],
                    iconAnchor: new L.Point(25, 45),
                    className: "selected-icon",
                    html: (currentRouteID !== undefined) ? place.feature.properties.route_order.toString() : ""
                })
            );

            // display content
            var m_place = $('#m_place').html();
            $('#place').html(Mustache.render(m_place, place.feature.properties));

            $( "#photo_large img" ).attr("src",place.feature.properties.photo_url_large);

            $( "#photo, #photo_large" ).click(function() {
                $( "#photo_large" ).fadeToggle( "fast" );
            });



            // $('#detailview').draggable({
            //     handle: '#place .title',
            //     containment: '#map',
            //     cursor: '-webkit-grabbing !important'
            // });
            //var z = 17;
            if (document.polyline) {
                map.fitBounds(document.polyline.getBounds().pad(0.1));
                // centerOnPath();
            } else {
               //                     centerOnPoint(place.getLatLng());
               map.panTo(place.getLatLng());
            }
            //map.setView(place.getLatLng(), z);

        }
    };

    var currentRouteID;

    var route = function(routeID) {
        var r = _.filter(places_data, function(d) {
            // var rid = parseInt(d.gsx$routeid.$t);
            var rid = d.route_id;
            // var lat = parseFloat(d.gsx$latitude.$t);
            // var lon = parseFloat(d.gsx$longitude.$t);
            var lat = d.latitude;
            var lon = d.longitude;

            return rid == routeID && (!isNaN(lat)) && (!isNaN(lon));
        });
        var sorted = _.sortBy(r, function(d) {
            // return parseInt(d.gsx$routeorder.$t) - 1;
            return d.route_order - 1;
        });
        return sorted;
    };

    var routePoints = function(routeID) {
        //var r;
        var currentRoute = _.find(routes_data.features, function (r){return r.id === routeID});
        if (currentRoute && currentRoute.geometry && currentRoute.geometry.coordinates) {
            var r = currentRoute.geometry.coordinates;
            var p = _.map(r, function(d) {
                // var lat = parseFloat(d.gsx$latitude.$t);
                // var lon = parseFloat(d.gsx$longitude.$t);
                var lat = d[1];
                var lon = d[0];
                // if (!isNaN(lat) && !isNaN(lon)) {
                if (lon && lat) {
                    return new L.LatLng(lat, lon);
                }
            });
            return p;
        // if (walkingRoutes[routeID]) {
        //     return walkingRoutes[routeID];
        } else {
            var r = route(routeID);
            var p = _.map(r, function(d) {
                // var lat = parseFloat(d.gsx$latitude.$t);
                // var lon = parseFloat(d.gsx$longitude.$t);
                var lat = d.latitude;
                var lon = d.longitude;
                // if (!isNaN(lat) && !isNaN(lon)) {
                if (lon && lat) {
                    return new L.LatLng(lat, lon);
                }
            });
            return _.reject(p, function(i) {
                return i === undefined;
            });
        }
    };

    var popups = function(title, pointsToPop) {
        currentRouteID = undefined;
        pointsToPop = typeof pointsToPop !== 'undefined' ? pointsToPop : places_data;
        
        markerLayer.setGeoJSON(pointsToPop);
        markerLayer.setFilter(function(f) {
            return (!isNaN (f.geometry.coordinates[0]) && !isNaN (f.geometry.coordinates[1]));
        });
        // popups(route(routeID));
                var layers = sortedLayers();
        _.forEach(layers, function(d, i) {
           // d.feature.properties.route_name = title;
            route_stops.name = title;
        
            route_stops.stops[i] = {
                name: d.feature.properties.name,
                route_order: ""
            };
        });
        var rstemplate = $('#route_stops').html();
        $('#sidebar-list').html(Mustache.to_html(rstemplate, route_stops));
        $('#sidebar-list ul li').click(function() {
            setCurrentPlace($(this).index());
        });
    };
    var routePopups = function(routeID) {
        currentRouteID = routeID;
        markerLayer.setGeoJSON(places_data);
        markerLayer.setFilter(function(f) {
            return f.properties['route_id'] === routeID;
        });
        // popups(route(routeID));
        route_stops.stops = [];
        route_stops.name = routeNames[routeID];
        _.forEach(sortedLayers(), function(d, i) {
            d.feature.properties.route_name = routeNames[routeID];
            route_stops.stops[i] = {
                name: d.feature.properties.name,
                route_order: d.feature.properties.route_order
            };
        });
        var rstemplate = $('#route_stops').html();
        $('#sidebar-list').html(Mustache.to_html(rstemplate, route_stops));
        $('#sidebar-list ul li').click(function() {
            setCurrentPlace($(this).index());
        });

    };
    return {
        data: places_data,
        currentRouteID: currentRouteID,
        points: function() {
            var result = _.map(places_data, function(d) {
                var lat = d.latitude;
                var lon = d.longitude;
                // if (!isNaN(lat) && !isNaN(lon)) {
                if (lon && lat) {
                    return new L.LatLng(lat, lon);
                }
            });
            return _.reject(result, function(i) {
                return i === undefined;
            });
        },
        popups: popups,
        routePopups: routePopups,
        setCurrentPlace: setCurrentPlace,
        routePoints: routePoints,
        centerOnPath: centerOnPath,
        centerOnPoint: centerOnPoint
    };
}