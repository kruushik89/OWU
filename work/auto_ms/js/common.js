// button up
$(window).scroll(function () {
	if($(this).scrollTop() > 800){
		$('.up_button img').fadeIn();
	}else{
        $('.up_button img').fadeOut();
	}
});

$('.up_button img').click(function () {
	$('html, body').animate({scrollTop: 0}, 1000);
	return false;
});


// button menu
$("#btn-menu").click(function () {
    $(".nav").slideToggle();
    return false;
});
/*
document.ondragstart = noselect; // запрет на перетаскивание
document.onselectstart = noselect; // запрет на выделение элементов страницы
document.oncontextmenu = noselect; // запрет на выведение контекстного меню
function noselect() {return false;}*/








