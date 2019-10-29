/**
 * Created by Lenovo on 04.09.2017.
 */
$(document).ready(function() {
    $("a.fancyimage").fancybox();
});


// menu
$(document).ready(function () {
    $('#cssmenu li.has-sub > a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });

    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
});
// end menu

// кнопка для раскрытия меню
$("#btn-menu").click(function() {
    $(".all-menu").slideToggle();
    return false;
});
//end кнопка для раскрытия меню

// gallery
$(document).ready(function () {
    $("a.photo").fancybox();
});



