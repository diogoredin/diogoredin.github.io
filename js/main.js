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

    $(".header-studio").hide();
    $(".table").hide();
    $(".how").hide();
    $(".contact").hide();

    $("#studio").on("click", function() {
        $("#personal").removeClass("is-info is-selected");
        $(this).addClass("is-info is-selected");

        /* Hide */
        $(".header-personal").hide();
        $(".portfolio").hide();
        $(".about").hide();
        $(".pictures").hide();

        /* Show */
        $(".header-studio").show();
        $(".table").show();
        $(".how").show();
        $(".contact").show();

    });

    $("#personal").on("click", function() {
        $("#studio").removeClass("is-info is-selected");
        $(this).addClass("is-info is-selected");

        /* Hide */
        $(".header-studio").hide();
        $(".table").hide();
        $(".how").hide();
        $(".contact").hide();

        /* Show */
        $(".header-personal").show();
        $(".portfolio").show();
        $(".about").show();
        $(".pictures").show();

    });

});