$(function () {

/*Гамбургер меню*/
	$('.navigate__bars').click(function () {
		$('.menu-collapse').toggleClass('d-none');
	});

// Функция slick slider
	
	 $('.slick-slider').slick({
	 		// настройки
	 		arrows: true,
	 		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
	 		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
	 		dots: false,
  });

});
