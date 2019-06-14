$(document).ready(function() {

    $('.slider-signin').bxSlider({
        mode: 'fade',
        captions: false,
        pager: false,
        adaptiveHeight: true,
        nextText: '<span class="icon is-medium"><span class="fa-stack"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-angle-right fa-stack-1x fa-inverse"></i></span></span>',
        prevText: '<span class="icon is-medium"><span class="fa-stack"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-angle-left fa-stack-1x fa-inverse"></i></span></span>'
    });

    $('.slider-secret').bxSlider({
        mode: 'fade',
        captions: false,
        pager: false,
        adaptiveHeight: true,
        nextText: '<span class="icon is-medium"><span class="fa-stack"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-angle-right fa-stack-1x fa-inverse"></i></span></span>',
        prevText: '<span class="icon is-medium"><span class="fa-stack"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-angle-left fa-stack-1x fa-inverse"></i></span></span>'
    });

    $('.slider-vitflow').bxSlider({
        mode: 'fade',
        captions: false,
        pager: false,
        adaptiveHeight: true,
        nextText: '<span class="icon is-medium"><span class="fa-stack"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-angle-right fa-stack-1x fa-inverse"></i></span></span>',
        prevText: '<span class="icon is-medium"><span class="fa-stack"><i class="fas fa-circle fa-stack-2x"></i><i class="fas fa-angle-left fa-stack-1x fa-inverse"></i></span></span>'
    });

    $("#studio").on("click", function() {
        $("#personal").removeClass("is-info is-selected");
        $(this).addClass("is-info is-selected");
    });

    $("#personal").on("click", function() {
        $("#studio").removeClass("is-info is-selected");
        $(this).addClass("is-info is-selected");
    });

});