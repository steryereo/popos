document.places = function() {
    var route_stops = {
        name:"",
        stops: []
    };
    //  var places_data;
    var featureLayer = map.featureLayer;
    var sortedLayers = function() {
        if (currentRouteID !== undefined) {
            return _.sortBy(featureLayer.getLayers(), function(l) {
                return l.feature.properties.route_order;
            });
        }
        else {
            return _.sortBy(featureLayer.getLayers(), function(l) {
                return l.feature.properties.name;
            });
        }
    }

    featureLayer.on('click', function(e) {
        var l = sortedLayers();
        var i = l.indexOf(e.layer);
        e.layer.closePopup();
        setCurrentPlace(i);
    });

    // featureLayer.loadURL('/places.geojson');
    // places_data = featureLayer.getGeoJSON();
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
            featureLayer.setGeoJSON(i);
        }
    });

        $.ajax({
        url: routes_json,
        async: false,
        dataType: 'json',
        success: function(i) {
            routes_data = i;
            //featureLayer.setGeoJSON(i);
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
        //featureLayer.eachLayer(function(marker) { layers.push(marker); });
        var layers = sortedLayers();
        var place = layers[idx];

        $( "#lightbox" ).hide();
         
        $( "#photo-large" ).bind( "clickoutside", function(event){
            $('#lightbox').fadeOut();
        });     

        $('#list-div ul li').removeClass("selected");
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
            var selectedListItem = $('#list-div ul li:eq(' + idx + ')');
            selectedListItem.addClass("selected");
            if (!isScrolledIntoView($('#list-div'), selectedListItem)) {
                // $('#sidebar-list').animate({scrollTop: selectedListItem.offset().top-$('#sidebar-list').offset().top}, 250);
                $('#list-div').scrollTop(selectedListItem.offset().top-$('#list-div ul li:eq(0)').offset().top);

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


            $( "#popout, #preview-photo" ).click(function(e) {

                $('#lightbox-image').html('<img src="img/ui/loader.gif">' );
                //$( "#photo-large img.photo" ).attr("src","img/ui/loader.gif");
                $( "#lightbox" ).fadeIn( "fast" );
                $('#lightbox-image').html('<img src="' + place.feature.properties.photo_url_large + '" style = "max-height:'+ $(window).height()*.9 +'px;max-width:'+ $(window).width()*.9 +'px;"/>');
                
                //$( "#photo-large img.photo" ).attr("src",place.feature.properties.photo_url_large);
                $('#photo-title').text(place.feature.properties.name)
                e.stopPropagation();
            });
            $( "#close-icon" ).click(function() {
                $( "#lightbox" ).fadeOut( "fast" );
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
               // map.panTo(place.getLatLng());

            map.setView(place.getLatLng(), map.getZoom() || 17);
            }
            //map.setView(place.getLatLng(), z);

        }
    };

    var currentRouteID;

    var route = function(routeID) {
        var r = _.filter(places_data, function(d) {
            var rid = d.route_id;
            var lat = d.latitude;
            var lon = d.longitude;

            return rid == routeID && (!isNaN(lat)) && (!isNaN(lon));
        });
        var sorted = _.sortBy(r, function(d) {
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
                var lat = d[1];
                var lon = d[0];
                if (lon && lat) {
                    return new L.LatLng(lat, lon);
                }
            });
            return p;
            } else {
                var r = route(routeID);
                var p = _.map(r, function(d) {
                var lat = d.latitude;
                var lon = d.longitude;
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
        
        if (title == "Needs Photos") {
            pointsToPop = _.filter(pointsToPop.features, function (p) {
                return p.properties.photo_url_new == null || p.properties.photo_url_new == "";
            });
        }

        featureLayer.setGeoJSON(pointsToPop);
        featureLayer.setFilter(function(f) {
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
        var listHeight = $("#sidebar-list").height() - $("#sidebar-list .title").height();
        $('#list-div').height(listHeight);
        $('#place').height($("#detailview").height() - $("#sidebar-list").height());
        $('#sidebar-list ul li').click(function() {
            setCurrentPlace($(this).index());
        });
    };
    var routePopups = function(routeID) {
        currentRouteID = routeID;
        featureLayer.setGeoJSON(places_data);
        featureLayer.setFilter(function(f) {
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
        var listHeight = $("#sidebar-list").height() - $("#sidebar-list .title").height();
        $('#list-div').height(listHeight);
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