# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

jQuery ->
  new AvatarCropper()
  
class AvatarCropper
  constructor: ->
    $('#cropbox').Jcrop
      aspectRatio: 2.133333
      setSelect: [0, 0, 358, 168]