# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

jQuery ->
  new PhotoCropper()
  new placesMap()

class PhotoCropper
  constructor: ->
    $('#cropbox').Jcrop
      aspectRatio: 2.133333
      setSelect: [0, 0, 358, 168]
      onSelect: @update
      onChange: @update

  update: (coords) =>
    $('#place_crop_x').val(coords.x)
    $('#place_crop_y').val(coords.y)
    $('#place_crop_w').val(coords.w)
    $('#place_crop_h').val(coords.h)
    @updatePreview(coords)


  updatePreview: (coords) =>
    $('#preview').css
      width: Math.round(358/coords.w * $('#cropbox').width()) + 'px'
      height: Math.round(168/coords.h * $('#cropbox').height()) + 'px'  
      marginLeft: '-' + Math.round(358/coords.w * coords.x) + 'px'
      marginTop: '-' + Math.round(168/coords.h * coords.y) + 'px'
      

#MAPBOX STUFF
class placesMap

  constructor: ->
    #map tile designs
    tileLayers = [L.mapbox.tileLayer('cdawson.map-rfzl19el'), L.mapbox.tileLayer('cdawson.map-dijsvtyd')]
    currentTileLayer = 0

    places_data = []
    routes_data = []

    linestyle = 
      color: '#e85355',
      dashArray: '15, 15',
      opacity: 1.0

    map = L.mapbox.map('map')
    map.tileLayer = tileLayers[currentTileLayer].addTo(map)
    #map.zoomControl.removeFrom(map);
    #places = document.places();
    places_json = '/places.geojson'
    routes_json = '/routes.geojson'

    featureLayer = map.featureLayer

    # sortedLayers ->
    #   if (currentRouteID !== undefined)
    #     return _.sortBy(featureLayer.getLayers(), (l) ->
    #       return l.feature.properties.route_order
    #   else
    #     return _.sortBy(featureLayer.getLayers(), (l) ->
    #       return l.feature.properties.name
          

    featureLayer.on('click', (e) ->
    #  l = sortedLayers()
      l = featureLayer.getLayers()
      i = l.indexOf(e.layer)
    #  e.layer.closePopup()
    #  setCurrentPlace(i)
    )

    $.ajax
      url: places_json,
      async: false,
      dataType: 'json',
      success: (i) ->
        places_data = i
        featureLayer.setGeoJSON(i)
        map.fitBounds(map.featureLayer.getBounds())
      
    $.ajax
      url: routes_json,
      async: false,
      dataType: 'json',
      success: (i) ->
          routes_data = i

