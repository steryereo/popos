(function() {
  document.popos = function() {

    var json = 'data/popos.json',
        data = []

    $.ajax({
        url: json,
        async: false,
        dataType: 'json',
        success: function(i) {
            data = i;
        }
    });

    var walkpath = [
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

    var poposMarker = {
      default : L.icon({
        iconUrl: 'img/poposmarkerblue.png',
        shadowUrl: 'img/marker-shadow.png',
        iconAnchor: new L.Point(23, 60)
      }),
      selected : L.icon({
        iconUrl: 'img/poposmarkerred.png',
        shadowUrl: 'img/marker-shadow.png',
        iconAnchor: new L.Point(23, 60)
      })
    };

    document.popos = [];

    $('.left-arrow').on('click', function() {
      if (document.poposindex >= 1) {
        setCurrentPopos( document.poposindex - 1 );
      }
    });

    $('.right-arrow').click(function() {
      if (document.poposindex >= 0 && document.poposindex < document.popos.length - 1) {
        setCurrentPopos( document.poposindex + 1 );
      }
    });

    var offsetMap = function() {
        // this should move the center of the polyline to the center of the "non detailview" map area
        map.fitBounds(document.polyline.getBounds());
        var centerOffset = ($("#detailview").width() + $("#detailview").offset().left) * -0.5;
        map.panBy([centerOffset, 0]);
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
        popo.setIcon(poposMarker.default);
      });

      // set default icon
      popo.setIcon(poposMarker.selected);

      // display content
      var m_place = $('#m_place').html();
      $('#place').html(Mustache.render(m_place, data[idx]));

      $('#detailview').draggable({ handle: '#place .title', containment: '#map', cursor: '-webkit-grabbing !important'});

      map.fitBounds(document.polyline.getBounds());
      offsetMap();

    };

    return {
      data : data,
      points : function() {
        return _.map(data, function(d) {
          return new L.LatLng(d.latitude, d.longitude);
        });
      },
      popups : function() {

        _.forEach(data, function(d,index) {

          var marker = L.marker([d.latitude, d.longitude], { icon: poposMarker.default });
          document.popos[index] = marker;
          marker.addTo(map);
          marker.on('click', function(e) {
            setCurrentPopos(index);
          });
        });
      },
      walkpath : walkpath,
      setCurrentPopos : setCurrentPopos,
      offsetMap : offsetMap 
    };
  }
})();
