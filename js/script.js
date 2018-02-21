$(function() {
	var $topMenu = $('.top_menu');

	window.onscroll = function() {show()};

	function show() {
		if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        	$topMenu.css('transform', 'translateY(0)');
        }
	} 
})