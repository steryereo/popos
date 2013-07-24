var fadeValue = .75;
var fadeTime = 300;

$(document).ready(function() {
    $('#adventures .column, #nav a').hover(function() {
        $(this).fadeTo(fadeTime, fadeValue);
    }, function() {
        $(this).fadeTo(fadeTime, 1);
    });
});