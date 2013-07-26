var fadeValue = .60;
var fadeTime = 250;

$(document).ready(function() {
    $('#adventures .column').hover(function() {
        $(this).fadeTo(fadeTime, fadeValue);
    }, function() {
        $(this).fadeTo(fadeTime, 1);
    });
});