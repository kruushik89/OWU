//Мега-меню и мобайл меню
$(".sf-menu").superfish({
    delay: 200,
    speed: "fast",
    cssArrows: false
})
    .after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
$("#mobile-menu").find("*").attr("style", "");
$("#mobile-menu").children("ul").removeClass("sf-menu")

    .parent().mmenu({
    extensions : ['theme-white', 'effect-menu-slide', 'pagedim-black' ],
    navbar: {
        title: "Меню"
    },
    navbars:{
        content: ["searchfield"]
    },
    searchfield:{
        noResults:"Извините, ничего не найдено.",
        placeholder: "Поиск"
    }
});

//Кнопка Button к мобайл меню
// $(".toggle-mnu").click(function() {
//     $(this).addClass("on");
// });
//
// var api = $("#mobile-menu").data("mmenu");
// api.bind("closed", function () {
//     $(".toggle-mnu").removeClass("off");
// });


// кнопка поиска открывающая при клике
// $('.opacity').css({opacity: 0.7});
//
// $(".search_header").click(function(){
//     $(".search_popup").show();
//     $(".close_search").show();
//     $(".opacity").show();
// });
//
// $(".close_search").click(function(){
//     $(".search_popup").hide();
//     $(".close_search").hide();
//     $(".opacity").hide();
// });
// //end кнопка поиска открывающая при клике
//
// // кнопка акции открывающая при клике
// $('.opacity').css({opacity: 0.7});
//
// $(".akcii").click(function(){
//     $(".akcii_popup").show();
//     $(".close_akcii").show();
//     $(".opacity_akcii").show();
// });
//
// $(".close_akcii").click(function(){
//     $(".akcii_popup").hide();
//     $(".close_akcii").hide();
//     $(".opacity_akcii").hide();
// });
// //end кнопка акции открывающая при клике

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
// button up


$(function () {
    $("[rel='popover']").popover({
        trigger: "hover"
    });
});





