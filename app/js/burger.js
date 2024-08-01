(function($){
	$(document).ready(function(){

		let btn = $('.burger, .header-menu');

		btn.click(function(){
			btn.toggleClass('active');
			$('body').toggleClass('lock');
		});

	});
})(jQuery);