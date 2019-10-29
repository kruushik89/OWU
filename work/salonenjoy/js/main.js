$(document).ready(function () {

    $('.popup').magnificPopup({type:'image'});

    function heightDetect() {

        $("header").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function () {
        heightDetect();
    });

    // кнопка меню
    $(".button_menu, .menu_item").click(function () {
        // высота блока экрана
        $(".sandwich").toggleClass("active");

    });

    //при нажатии на ссылку попап закрывается
    $(".menu_top ul a").click(function () {
        $(".menu_top").fadeOut(600);
        $(".sandwich").toggleClass("active");
    }).append("<span>");
    //конец при нажатии на ссылку попап закрывается

    //появление и пропадание меню
    $(".button_menu").click(function () {
        if($(".menu_top").is(":visible")){
            $(".top_text").removeClass("h_opacity"); //додает опасити
            $(".menu_top").fadeOut(600);
            $(".menu_top li a").removeClass("fadeInUp animated");
        }else{
            $(".top_text").addClass("h_opacity");//убирает опасити
            $(".menu_top").fadeIn(600);
            $(".menu_top li a").addClass("fadeInUp animated");
        };
    });

    // Плагин навигации по Landing Page
    $(".menu_top ul a").mPageScroll2id();



});

// fotogalery
(function () {

    'use strict';

    // iPad and iPod detection
    var isiPad = function(){
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function(){
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    // OffCanvass
    var offCanvass = function() {
        $('body').on('click', '.js-fh5co-menu-btn, .js-fh5co-offcanvass-close', function(){
            $('#fh5co-offcanvass').toggleClass('fh5co-awake');
        });
    };

    // Click outside of offcanvass
    var mobileMenuOutsideClick = function() {
        $(document).click(function (e) {
            var container = $("#fh5co-offcanvass, .js-fh5co-menu-btn");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
                    $('#fh5co-offcanvass').removeClass('fh5co-awake');
                }
            }
        });

        $(window).scroll(function(){
            if ( $(window).scrollTop() > 500 ) {
                if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
                    $('#fh5co-offcanvass').removeClass('fh5co-awake');
                }
            }
        });
    };

    // Magnific Popup
    var magnifPopup = function() {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            titleSrc: 'title',
            gallery:{
                enabled:true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

    $(function(){
        magnifPopup();
        offCanvass();
        mobileMenuOutsideClick();
    });

    // анимированое портфолио с категориями
    jQuery("#portfolio_grid").mixItUp();

    // переключать категории в портфолио
    jQuery(".s_portfolio li").click(function () {
        jQuery(".s_portfolio li").removeClass("active");
        jQuery(this).addClass("active");
    });

}());

