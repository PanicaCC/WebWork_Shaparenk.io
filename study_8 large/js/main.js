$(function () {

	$('.headline__bars').click(function () {
		$('.menu-collapse').toggleClass('d-none');
	});

/*Плавный скролинг к якорю*/
	 $('.confidence__button').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

/*Появление информации с контактами*/
	$('.map__i').click(function () {
		$('#map-collapse').addClass('d-block');
	});

/*Убираем информацию с контактами*/
 $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $("#map-collapse"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            block.removeClass('d-block'); // если условия выполняются - скрываем наш элемент
        }
    });


// Модальное окно форма
    /* функция вызова формы обратной связи */
		$('.btn-form').click(function () {
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

    /*Убираем окно с формой*/
		$('.popup_close').click(function (e) {
			e.preventDefault();
			$('#popup').removeClass('d-block');
      $('#fade').fadeOut(function() {
        $('#fade').remove();
        $('#popup').fadeOut();
      });
    });

    /*Убираем окно с формой при клике в не области*/
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
     

// Функция отправки формы
	$('[data-submit]').on('click', function(e){
	    e.preventDefault();
		$(this).parent('form').submit();
	})
	$.validator.addMethod(
	        "regex",
	        function(value, element, regexp) {
	            var re = new RegExp(regexp);
	            return this.optional(element) || re.test(value);
	        },
	        "Please check your input."
			);
	function valEl(el){
		 
          el.validate({
        rules:{
          tel:{
            required:true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name:{
            required:true
          },
          email:{
          	required:true,
            email:true
          }
        },
          messages:{
            tel:{
              	required:'Поле обязательно для заполнения',
              	regex:'Телефон может содержать символы + - ()'
            },
            name:{
              	required:'Поле обязательно для заполнения',
            },
            email:{
            	required:'Поле обязательно для заполнения',	
            	email:'Неверный формат E-mail'
            }
        },            
        submitHandler: function (form) {
        	$('#loader').fadeIn();
	        var $form = $(form);
	        var $formId = $(form).attr('id');
	        switch($formId){
	          case'goToNewPage':
	            $.ajax({
	                  type: 'POST',
	                  url: $form.attr('action'),
	                  data: $form.serialize(),
	                })
	                .always(function (response) {  
	                    //ссылка на страницу "спасибо" - редирект
	                    location.href='https://wayup.in/lm/landing-page-marathon/success';
	                    //отправка целей в Я.Метрику и Google Analytics
	                    ga('send', 'event', 'masterklass7', 'register');
			    yaCounter27714603.reachGoal('lm17lead');
	            });
	        break;        
	        case'popupResult':
            $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize(),
                })
                .always(function (response) {
                	/*убираем форму по клику на кнопку заказать*/
                $('#popup').removeClass('d-block');                    
                setTimeout(function (){
                 $('#loader').fadeOut();
                },800);
                setTimeout(function (){
                  $('#overlay').fadeIn();
                  $form.trigger('reset');
                  //строки для остлеживания целей в Я.Метрике и Google Analytics
                },1100);
                $('#overlay').on('click', function(e) {
  			$('#overlay').fadeOut();
		});
                    
            });
        break;          
   }
return false; 
    }                           
  })
        }                        
     
              $('.js-form').each(function() {
                valEl($(this)); 
              });
		$('[data-scroll]').on('click', function(){
			$('html, body').animate({
		        scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
		    }, 2000);
		    event.preventDefault();
		}) 

// Функция slick slider
	
	 $('.se-subcat__slick-slider').slick({
	 		// настройки
	 		arrows: true,
	 		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
	 		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
	 		dots: true,
  });

// Прелоудер не работает
    // $(window).on('load', function () {
    //     var $preloader = $('#page-preloader'),
    //         $spinner   = $preloader.find('.spinner');
    //     $spinner.fadeOut();
    //     $preloader.delay(350).fadeOut('slow');
    // });

});
