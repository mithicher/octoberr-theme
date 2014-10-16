$(document).ready(function(){

	$(window).scroll(function(){
		if($(this).scrollTop() > 200)
		{
			$('.goToTop').fadeIn(200);
		}
		else
		{
			$('.goToTop').fadeOut(200);
		}
	});


	$('.goToTop').click(function(event){

		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 600);
	});
});