/**
 * ----------------------------------------------------------------------------------------
 * Main JS functionality.
 * ----------------------------------------------------------------------------------------
 */
$(document).ready(function() {
	$('body').addClass('js');

	var $menu = $('#menu'),
		$menulink = $('.toggle-link');
  
	$menulink.click(function(e) {
		e.preventDefault();

		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});
});