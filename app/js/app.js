(function($){
	$(document).ready(function(){ 
		
		$('.family-body').slick({
			speed: 700,
			slidesToShow: 4,
			slidesToScroll: 1,
			swipeToSlide: true,
			autoplay: true,
			autoplaySpeed: 2000,
			prevArrow: "<div class='slick-prev'></div>",
			nextArrow: "<div class='slick-next'></div>",
			responsive: [
			{
			  breakpoint: 1400,
			  settings: {
			    slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 1280,
			  settings: {
			    slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 1024,
			  settings: {
			    slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
			    slidesToShow: 1,
			    arrows: false
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
			    slidesToShow: 1,
			    arrows: false
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});

		

		setTimeout(function(){
			let slickListHeight = $('.slick-slide').outerHeight();
			$('.slick-arrow').css({'height':slickListHeight});
		}, 200);

		$(window).on('resize', function(){
			setTimeout(function(){
				slickListHeight = $('.slick-slide').outerHeight();
				$('.slick-arrow').css({'height':slickListHeight});
			}, 200);
		});

		// ----------------------------------------------------------
	});
})(jQuery);