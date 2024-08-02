(function($){
	$(document).ready(function(){

		let btn = $('.header-burger-button, .header-menu');

		btn.click(function(){
			btn.toggleClass('active');
			$('body').toggleClass('lock');
		});

	});
})(jQuery);