# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

jQuery ->
  new PhotoCropper()

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
      
      # width: Math.round(100/coords.w * $('#cropbox').width()) + 'px'
      # height: Math.round(100/coords.h * $('#cropbox').height()) + 'px'  
      # marginLeft: '-' + Math.round(100/coords.w * coords.x) + 'px'
      # marginTop: '-' + Math.round(100/coords.h * coords.y) + 'px'