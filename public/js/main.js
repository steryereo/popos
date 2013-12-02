var fadeValue = .60;
var fadeTime = 250;

$(document).ready(function() {
    $('#adventures .column').hover(function() {
        $(this).fadeTo(fadeTime, fadeValue);
    }, function() {
        $(this).fadeTo(fadeTime, 1);
    });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 250);
        return false;
      }
    }
  });
});