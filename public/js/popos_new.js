(function() {
  document.popos = function() {

    var json = 'data/popos_new.json',
      data = [];

    //data = d.feed.entry;

    $.ajax({
      url: json,
      async: false,
      dataType: 'json',
      success: function(i) {
        data = i;
      }
    });

    var routeNames = ["","POPOS Route", "", "", "", "Let's Get Physical","Beautiful Views","Kids Corner"];
    var walkingRoutes = [];
    walkingRoutes[1] = [
      new L.LatLng(37.7951184623911, -122.40214169025421),
      new L.LatLng(37.794783580481706, -122.40209341049193),
      new L.LatLng(37.794859882822436, -122.4014925956726),
      new L.LatLng(37.794406306638834, -122.40141212940217),
      new L.LatLng(37.79432576478241, -122.40227580070496),
      new L.LatLng(37.7938679462461, -122.40219533443451),
      new L.LatLng(37.79397816207892, -122.40132093429564),
      new L.LatLng(37.79265556123338, -122.40103662014006),
      new L.LatLng(37.79280817023158, -122.3998886346817),
      new L.LatLng(37.79222316736003, -122.39974915981291),
      new L.LatLng(37.79231218983492, -122.39914834499358),
      new L.LatLng(37.79277849628437, -122.39926099777222),
      new L.LatLng(37.792816648500015, -122.3987030982971),
      new L.LatLng(37.793342299242944, -122.39880502223969),
      new L.LatLng(37.79337621206568, -122.39857971668242),
      new L.LatLng(37.792659800376455, -122.39749073982237),
      new L.LatLng(37.79351186320097, -122.39761412143706),
      new L.LatLng(37.793723817601254, -122.39749073982237),
    ];

    // Beautiful views
    walkingRoutes[6] = [
      new L.LatLng(37.779911, -122.411835),
      new L.LatLng(37.779911, -122.411835),
      new L.LatLng(37.779911, -122.411835),
      new L.LatLng(37.780003, -122.411957),
      new L.LatLng(37.780003, -122.411957),
      new L.LatLng(37.783524, -122.407494),
      new L.LatLng(37.783524, -122.407494),
      new L.LatLng(37.784008, -122.408089),
      new L.LatLng(37.784008, -122.408089),
      new L.LatLng(37.787655, -122.403496),
      new L.LatLng(37.787655, -122.403496),
      new L.LatLng(37.787849, -122.403496),
      new L.LatLng(37.787849, -122.403496),
      new L.LatLng(37.788921, -122.403740),
      new L.LatLng(37.788921, -122.403740),
      new L.LatLng(37.789024, -122.402863)
    ];

    walkingRoutes[7] = [
      new L.LatLng(37.747829, -122.438179),
      new L.LatLng(37.751175, -122.438492),
      new L.LatLng(37.755550, -122.438873),
      new L.LatLng(37.755550, -122.438873),
      new L.LatLng(37.757000, -122.438950),
      new L.LatLng(37.757347, -122.439018),
      new L.LatLng(37.757439, -122.438942),
      new L.LatLng(37.757511, -122.439026),
      new L.LatLng(37.757877, -122.439072),
      new L.LatLng(37.757877, -122.439072)
    ];
    walkingRoutes[5] = [
new L.LatLng(37.805519, -122.406998),
new L.LatLng(37.805519, -122.406998),
new L.LatLng(37.806450, -122.407181),
new L.LatLng(37.806450, -122.407181),
new L.LatLng(37.806160, -122.409477),
new L.LatLng(37.806160, -122.409477),
new L.LatLng(37.805237, -122.409286),
new L.LatLng(37.805237, -122.409286),
new L.LatLng(37.805325, -122.408562),
new L.LatLng(37.805325, -122.408562),
new L.LatLng(37.805325, -122.408562),
new L.LatLng(37.805122, -122.410149),
new L.LatLng(37.805122, -122.410149),
new L.LatLng(37.804192, -122.409966),
new L.LatLng(37.804192, -122.409966),
new L.LatLng(37.804390, -122.408363),
new L.LatLng(37.804390, -122.408363),
new L.LatLng(37.804863, -122.408470),
new L.LatLng(37.804863, -122.408470),
new L.LatLng(37.804863, -122.408470),
new L.LatLng(37.805325, -122.408562),
new L.LatLng(37.805325, -122.408562),
new L.LatLng(37.805122, -122.410149),
new L.LatLng(37.805122, -122.410149),
new L.LatLng(37.803268, -122.409782),
new L.LatLng(37.803268, -122.409782),
new L.LatLng(37.803669, -122.406631),
new L.LatLng(37.803665, -122.406456),
new L.LatLng(37.803612, -122.406357),
new L.LatLng(37.803612, -122.406357),
new L.LatLng(37.803539, -122.406319),
new L.LatLng(37.803474, -122.406349),
new L.LatLng(37.803249, -122.406624),
new L.LatLng(37.803116, -122.406715),
new L.LatLng(37.802887, -122.406700),
new L.LatLng(37.802719, -122.406616),
new L.LatLng(37.802719, -122.406616),
new L.LatLng(37.802719, -122.406616),
new L.LatLng(37.802490, -122.406380),
new L.LatLng(37.802116, -122.406181),
new L.LatLng(37.801937, -122.406013),
new L.LatLng(37.801865, -122.405869),
new L.LatLng(37.801861, -122.405663),
new L.LatLng(37.801861, -122.405663)
        ];
    var poposMarker = {
      default: L.icon({
        iconUrl: 'img/uw_marker_gray.png',
        shadowUrl: 'img/marker-shadow.png',
        iconAnchor: new L.Point(23, 60)
      }),
      selected: L.icon({
        iconUrl: 'img/uw_marker_red.png',
        shadowUrl: 'img/marker-shadow.png',
        iconAnchor: new L.Point(23, 60)
      })
    };

    document.popos = [];
    document.routeObjs = [];

    $('.left-arrow').on('click', function() {
      if (document.poposindex >= 1) {
        setCurrentPopos(document.poposindex - 1);
      }
    });

    $('.right-arrow').click(function() {
      if (document.poposindex >= 0 && document.poposindex < document.popos.length - 1) {
        setCurrentPopos(document.poposindex + 1);
      }
    });

    var centerOnPath = function(reset) {
      // this should move the center of the polyline to the center of the "non-detailview" map area
      reset = typeof reset !== 'undefined' ? reset : false; //default argument reset = false
      var clearAreaLeft = $("#detailview").width() + $("#detailview").offset().left;
      var clearAreaCenter = Math.floor(window.innerWidth - (window.innerWidth - clearAreaLeft) / 2);
      var centerOffset = clearAreaCenter - Math.floor(window.innerWidth / 2);

      var z = map.getZoom();
      //var z = 17; // Hardcoded - BAD!
      var pathCenterAbs = map.project(document.polyline.getBounds().getCenter(), z);
      var newCenterLatLng = map.unproject([pathCenterAbs.x - centerOffset, pathCenterAbs.y]);
      map.setView(newCenterLatLng, z, reset);
    };
    var centerOnPoint = function(p, reset) {
      // this should move the center of the polyline to the center of the "non-detailview" map area
      reset = typeof reset !== 'undefined' ? reset : false; //default argument reset = false
      var clearAreaLeft = $("#detailview").width() + $("#detailview").offset().left;
      var clearAreaCenter = Math.floor(window.innerWidth - (window.innerWidth - clearAreaLeft) / 2);
      var centerOffset = clearAreaCenter - Math.floor(window.innerWidth / 2);

      var z = map.getZoom();
      //var z = 17; // Hardcoded - BAD!
      var pathCenterAbs = map.project(p, z);
      var newCenterLatLng = map.unproject([pathCenterAbs.x - centerOffset, pathCenterAbs.y]);
      map.setView(newCenterLatLng, z, reset);
    };

    var setCurrentPopos = function(idx) {
      document.poposindex = idx;

      if (document.poposindex + 1 == document.popos.length) {
        $('.right-arrow img').css('visibility', 'hidden');
      } else {
        $('.right-arrow img').css('visibility', 'visible');
      }

      if (document.poposindex <= 0) {
        $('.left-arrow img').css('visibility', 'hidden');
      } else {
        $('.left-arrow img').css('visibility', 'visible');
      }

      var popo = document.popos[idx];

      // reset other popos icons
      _.forEach(document.popos, function(popo) {
        popo.setIcon(poposMarker.
        default);
      });
      if (popo) {
      // set default icon
      popo.setIcon(poposMarker.selected);

      // Translate stupid gdoc json
      // var placeObj = new Object();
      // var gdocObj = document.routeObjs[idx];
      // // placeObj.name = gdocObj.gsx$name.$t;
      // placeObj.name = gdocObj.name;
      // if (gdocObj.gsx$photo_url) {
      //   placeObj.pic_file = gdocObj.gsx$photo_url.$t;
      // }
      // else {placeObj.pic_file = "no-photo.jpg";}
      // placeObj.popos_addr = gdocObj.gsx$address.$t;
      // placeObj.art = gdocObj.gsx$art.$t;
      // placeObj.outdoor = gdocObj.gsx$indoor.$t;
      // placeObj.food = gdocObj.gsx$food.$t;
      // placeObj.hours = gdocObj.gsx$openhours.$t;
      // placeObj.views = gdocObj.gsx$views.$t;
      // placeObj.description = gdocObj.gsx$description.$t;

      // display content
      var m_place = $('#m_place').html();
      $('#place').html(Mustache.render(m_place, document.routeObjs[idx]));

      $('#detailview').draggable({
        handle: '#place .title',
        containment: '#map',
        cursor: '-webkit-grabbing !important'
      });

if (document.polyline) {
      map.fitBounds(document.polyline.getBounds());
    }
      //centerOnPath();
      // var lat = parseFloat(gdocObj.gsx$latitude.$t);
      // var lon = parseFloat(gdocObj.gsx$longitude.$t);
      var lat = document.routeObjs[idx].latitude;
      var lon = document.routeObjs[idx].longitude;
      centerOnPoint(new L.LatLng(lat, lon));
}
    };

    var currentRouteID;

    var route = function(routeID) {
      var r = _.filter(data, function(d) {
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
      if (walkingRoutes[routeID]) {
        return walkingRoutes[routeID];
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

    var popups = function(pointsToPop) {
      pointsToPop = typeof pointsToPop !== 'undefined' ? pointsToPop : data;
      document.routeObjs = [];
      _.forEach(pointsToPop, function(d, index) {

        // var lat = parseFloat(d.gsx$latitude.$t);
        // var lon = parseFloat(d.gsx$longitude.$t);
        var lat = d.latitude;
        var lon = d.longitude;
        // if (!isNaN(lat) && !isNaN(lon)) {
          if (lon && lat) {
          var marker = L.marker([lat, lon], {
            icon: poposMarker.
            default
          });
          document.popos[index] = marker;
          document.routeObjs[index] = d;
          marker.addTo(map);
          marker.on('click', function(e) {
            setCurrentPopos(index);
          });
        }
      });
    };
    var routePopups = function(routeID) {
      popups(route(routeID));
      _.forEach(document.routeObjs, function(d) {
        d.route_name = routeNames[routeID];
      });
    };
    return {
      data: data,
      currentRouteID: currentRouteID,
      points: function() {
        var result = _.map(data, function(d) {
          // var lat = parseFloat(d.gsx$latitude.$t);
          // var lon = parseFloat(d.gsx$longitude.$t);
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
      setCurrentPopos: setCurrentPopos,
      routePoints: routePoints,
      centerOnPath: centerOnPath,
      centerOnPoint: centerOnPoint
    };
  }
})();