var fadeValue = .75;

$(document).ready(function() {
    $('#adventures .column, #nav a').hover(function() {
        $(this).fadeTo(400, fadeValue);
    }, function() {
        $(this).fadeTo(400, 1);
    });
});