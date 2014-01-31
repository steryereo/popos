var fadeValue = .60;
var fadeTime = 250;

$(document).ready(function() {
    $('#adventures .column').hover(function() {
        $(this).fadeTo(fadeTime, fadeValue);
    }, function() {
        $(this).fadeTo(fadeTime, 1);
    });

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 250);
                return false;
            }
        }
    });
    $('#adventures-link').click(function(e) {
        e.preventDefault();
        $('#nav li ul').fadeToggle(fadeTime);
        if ($('#nav li ul').is(':visible')) {
          e.stopPropagation();
        }
    });

            $("#nav li ul").bind("clickoutside", function(event) {
                $(this).fadeOut(fadeTime);
            });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
            //    $('.scrollup').css('display', 'block');
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});
