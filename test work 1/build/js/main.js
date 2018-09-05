// Функция slick slider
$(document).ready(function() {	
	// slider
	$('.slider').slick({
			// настройки
			arrows: true,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>',
			dots: true,
	});

	//toggleMeny
	$('.menuToggle__humburger').click(function(){
		$(this).toggleClass('open');
	});

	//humburger open menu
	$('.menuToggle__humburger').click(function () {
		$('.d-none').toggleClass('d-block');
	});
});

