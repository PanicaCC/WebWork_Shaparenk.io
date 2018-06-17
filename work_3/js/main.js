$(function () {

/*Гамбургер меню*/
	$('.navigate__bars').click(function () {
		$('.menu-collapse').toggleClass('d-none');
	});

// Модальное окно форма
  // функция вызова формы обратной связи 
	$('.head__btn').click(function () {
		$('#popup').addClass('d-block');
      //расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
			q_width = $('#popup').outerWidth()/-2;
      q_height = $('#popup').outerHeight()/-2;
      $('#popup').css({
          'margin-left': q_width,
          'margin-top': q_height
      });
  //выводим затемение страницы и делаем полупрозрачным
	  $('body').append('<div id="fade"></div>');
	  $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
	  return false;
	});

 // Убираем окно с формой
	$('.popup_close').click(function (e) {
		e.preventDefault();
		$('#popup').removeClass('d-block');
	  $('#fade').fadeOut(function() {
	    $('#fade').remove();
	    $('#popup').fadeOut();
	  });
	});
	
// Убираем окно с формой при клике в не области
	$(document).mouseup(function (e1){ // отслеживаем событие клика по веб-документу
    var block2 = $("#popup"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
    if (!block2.is(e1.target) // проверка условия если клик был не по нашему блоку
      && block2.has(e1.target).length === 0) { // проверка условия если клик не по его дочерним элементам
      block2.removeClass('d-block'); // если условия выполняются - скрываем наш элемент
    	}
    $('#fade').fadeOut(function() {
      $('#fade').remove();
    });
  });

// Функция slick slider
	
	$('.responsive').slick({
	arrows: true,
	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false
      }
    }
  ]
	});

	// Плавный скролинг к якорю
	 $('.scrol_about').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

	 $('.scrol_range').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top -100}, 1500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

	 $('.scrol_advantages').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top -100}, 1500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

 	 $('.scrol_partner').click( function(){ // ловим клик по ссылке с классом go_to
	      var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	      if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	          $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100}, 1500); // анимируем скроолинг к элементу scroll_el
	      }
	      return false; // выключаем стандартное действие
    });

 	 $('.scrol_contact').click( function(){ // ловим клик по ссылке с классом go_to
	    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
    		}
    	return false; // выключаем стандартное действие
    });


	// Вызов ассортиментов
	$(".prod-sandwich").click(function() {
	  $('#prod-sandwich').show(),
	  $('#prod-sirnik').hide();
	  $('#prod-roll').hide();
	  $('#prod-salat').hide();
	  $('#prod-napitki').hide();
	  $('#prod-sneki').hide();
	  $('#prod-tort').hide();
	  $('#prod-other').hide();
	  return false; // выключаем стандартное действие
	});

	$(".prod-sirnik").click(function() {
	  $('#prod-sirnik').show(),
	  $('#prod-sandwich').hide();
	  $('#prod-roll').hide();
	  $('#prod-salat').hide();
	  $('#prod-napitki').hide();
	  $('#prod-sneki').hide();
	  $('#prod-tort').hide();
		$('#prod-other').hide();
	  return false; // выключаем стандартное действие
	});

	$(".prod-roll").click(function() {
	  $('#prod-roll').show(),
	  $('#prod-sandwich').hide();
	  $('#prod-sirnik').hide();
	  $('#prod-salat').hide();
	  $('#prod-napitki').hide();
	  $('#prod-sneki').hide();
	  $('#prod-tort').hide();
	  $('#prod-other').hide();
	  return false; // выключаем стандартное действие
	});

	$(".prod-salat").click(function() {
	  $('#prod-salat').show(),
	  $('#prod-sandwich').hide();
	  $('#prod-sirnik').hide();
	  $('#prod-roll').hide();
	  $('#prod-napitki').hide();
	  $('#prod-sneki').hide();
	  $('#prod-tort').hide();
	  $('#prod-other').hide();
	  return false; // выключаем стандартное действие
	});

	$(".prod-napitki").click(function() {
	  $('#prod-napitki').show(),
	  $('#prod-sandwich').hide();
	  $('#prod-sirnik').hide();
	  $('#prod-roll').hide();
	  $('#prod-salat').hide();
	  $('#prod-sneki').hide();
	  $('#prod-tort').hide();
	 	$('#prod-other').hide();
	  return false; // выключаем стандартное действие
	});

	$(".prod-sneki").click(function() {
	  $('#prod-sneki').show(),
	  $('#prod-sandwich').hide();
	  $('#prod-sirnik').hide();
	  $('#prod-roll').hide();
	  $('#prod-salat').hide();
	  $('#prod-napitki').hide();
	  $('#prod-tort').hide();
		$('#prod-other').hide();	 	 
	  return false; // выключаем стандартное действие
	});

	$(".prod-tort").click(function() {
	  $('#prod-tort').show(),
	  $('#prod-sandwich').hide();
	  $('#prod-sirnik').hide();
	  $('#prod-roll').hide();
	  $('#prod-salat').hide();
	  $('#prod-napitki').hide();
	  $('#prod-sneki').hide();
		$('#prod-other').hide();	 	 
	  return false; // выключаем стандартное действие
	});

	$(".prod-other").click(function() {
	  $('#prod-other').show(),
	  $('#prod-sandwich').hide();
	  $('#prod-sirnik').hide();
	  $('#prod-roll').hide();
	  $('#prod-salat').hide();
	  $('#prod-napitki').hide();
	  $('#prod-sneki').hide();
		$('#prod-tort').hide();	 	 
	  return false; // выключаем стандартное действие
	});

// клик на слайдер через 1.5 секунду после загрузки страницы
	setTimeout (function () { $('#click1').click() }, 1000);

	// Cache selectors
	var lastId,
	  topMenu = $("#top-menu"),
	  topMenuHeight = topMenu.outerHeight() + 120,
	  // All list items
	  menuItems = topMenu.find("a"),
	  // Anchors corresponding to menu items
	  scrollItems = menuItems.map(function() {
	    var item = $($(this).attr("href"));
	    if (item.length) {
	      return item;
	    }
	  });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e) {
	  var href = $(this).attr("href"),
	    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
	  $('html, body').stop().animate({
	    scrollTop: offsetTop
	  }, 1200);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function() {
	  // Get container scroll position
	  var fromTop = $(this).scrollTop() + topMenuHeight;

	  // Get id of current scroll item
	  var cur = scrollItems.map(function() {
	    if ($(this).offset().top < fromTop)
	      return this;
	  });
	  // Get the id of the current element
	  cur = cur[cur.length - 1];
	  var id = cur && cur.length ? cur[0].id : "";

	  if (lastId !== id) {
	    lastId = id;
	    // Set/remove active class
	    menuItems
	      .parent().removeClass("active")
	      .end().filter("[href='#" + id + "']").parent().addClass("active");
	  }
	});

// конец
});
