$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	// $(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
    var owl = $('#items');
    owl.owlCarousel({
        loop: false,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: false,
        items: 5
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 3
        //     },
        //     1000: {
        //         items: 5
        //     }
        // }
    });
// Go to the next item
    $('#next_i').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('#prev_i').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })

    var owl_cat = $('#categories');
    owl_cat.owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: false,
        items: 1
    });
    // Go to the next item
    $('#next_c').click(function() {
        owl_cat.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('#prev_c').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl_cat.trigger('prev.owl.carousel');
    })

    var owl_br = $('#brands');
    owl_br.owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: false,
        items: 1
    });
    // Go to the next item
    $('#next_b').click(function() {
        owl_br.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('#prev_b').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl_br.trigger('prev.owl.carousel');
    })
	// var owl = $(".carousel");
	// owl.owlCarousel({
	// 	items : 4
	// });
	// owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl.trigger("owl.prev");
	// 	} else {
	// 		owl.trigger("owl.next");
	// 	}
	// 	e.preventDefault();
	// });
	// $(".next_button").click(function(){
	// 	owl.trigger("owl.next");
	// });
	// $(".prev_button").click(function(){
	// 	owl.trigger("owl.prev");
	// });

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $("form").submit(function() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "mail.php",
	// 		data: $("form").serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.fancybox.close();
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

    $('.ad_btn').magnificPopup({
        type: 'inline',
        showCloseBtn: false
        // focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        // callbacks: {
        //     beforeOpen: function() {
        //         if($(window).width() < 700) {
        //             this.st.focus = false;
        //         } else {
        //             this.st.focus = '#name';
        //         }
        //     }
        // }
    });
});

function likeItem(likes) {
	var number = likes.getElementsByTagName('a')[0];
	number.innerHTML = number.innerHTML++;
	var unliked = likes.getElementsByTagName('i')[0];
    var liked = likes.getElementsByTagName('i')[1];
    if (unliked.style.display == "none") { //unlike
        unliked.style.display = "inline";
        liked.style.display = "none";
        var num = parseInt(number.text);
        number.text = num-1;
    } else { //like
        liked.style.display = "inline";
        unliked.style.display = "none";
        var num = parseInt(number.text);
        number.text = num+1;
    }
    //x.classList.toggle("fa-thumbs-down");
}

function favItem(fav) {
    var unstarred = fav.getElementsByTagName('i')[0];
    var starred = fav.getElementsByTagName('i')[1];
    if (unstarred.style.display == "none") { //remove from favorites
        unstarred.style.display = "inline";
        starred.style.display = "none";
    } else { //add to favorites
        starred.style.display = "inline";
        unstarred.style.display = "none";
    }
}