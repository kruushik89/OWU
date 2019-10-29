
// button up
$(window).scroll(function(){
    if ($(this).scrollTop() > 800) {
        $('.up_button i').fadeIn();
    } else {
        $('.up_button i').fadeOut();
    }
});

$('.up_button i').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
//end button up

// кнопка для раскрытия меню
$("#btn-menu").click(function() {
    $(".nav-main").slideToggle();
    return false;
});
//end кнопка для раскрытия меню

// fancybox
$(document).ready(function() {
    $("a.fancyimage").fancybox();
});
// end fancybox

$('.parallax-window').parallax({imageSrc: 'img/vii.jpeg'});

$('.parallax-window2').parallax({imageSrc: 'img/vii2.jpeg'});

$('.parallax-window3').parallax({imageSrc: 'img/vii3.jpg'});

$('.parallax-window4').parallax({imageSrc: 'img/vii4.jpg'});



